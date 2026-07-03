"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  images?: string[];

  /**
   * Base animation canvas size.
   * The complete canvas automatically scales on smaller screens.
   */
  containerWidth?: number;
  containerHeight?: number;

  cardWidth?: number;
  cardHeight?: number;
  cardBorderWidth?: number;
  cardRadius?: number;

  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 760,
  containerHeight = 420,
  cardWidth = 250,
  cardHeight = 250,
  cardBorderWidth = 5,
  cardRadius = 26,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.55)",

  transformStyles = [
    "translate(-245px, 34px) rotate(-8deg)",
    "translate(-128px, -12px) rotate(3deg)",
    "translate(-18px, 2px) rotate(-1deg)",
    "translate(92px, -10px) rotate(-3deg)",
    "translate(218px, 35px) rotate(8deg)",
  ],

  enableHover = false,
}: BounceCardsProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [scale, setScale] = useState(1);

  /**
   * Scale the fixed-size animation canvas according to the
   * available width of its responsive parent.
   */
  useLayoutEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const updateScale = () => {
      const availableWidth = outer.clientWidth;

      if (!availableWidth) return;

      const nextScale = Math.min(availableWidth / containerWidth, 1);
      setScale(nextScale);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(outer);

    return () => observer.disconnect();
  }, [containerWidth]);

  /**
   * Initial card entrance.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => Boolean(card),
    );

    if (!canvas || cards.length === 0) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          clearProps: "opacity",
        },
      );
    }, canvas);

    return () => context.revert();
  }, [images, animationDelay, animationStagger, easeType]);

  const removeRotation = (transform: string): string => {
    if (/rotate\([^)]*\)/.test(transform)) {
      return transform.replace(/rotate\([^)]*\)/, "rotate(0deg)");
    }

    return transform === "none"
      ? "rotate(0deg)"
      : `${transform} rotate(0deg)`;
  };

  const pushTransform = (
    baseTransform: string,
    offsetX: number,
  ): string => {
    /**
     * Supports:
     * translate(-100px)
     * translate(-100px, 20px)
     */
    const translateRegex =
      /translate\(\s*(-?\d+(?:\.\d+)?)px(?:\s*,\s*(-?\d+(?:\.\d+)?)px)?\s*\)/;

    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = Number(match[1]);
      const currentY = match[2] ? Number(match[2]) : 0;
      const nextX = currentX + offsetX;

      return baseTransform.replace(
        translateRegex,
        `translate(${nextX}px, ${currentY}px)`,
      );
    }

    return baseTransform === "none"
      ? `translate(${offsetX}px, 0px)`
      : `${baseTransform} translate(${offsetX}px, 0px)`;
  };

  const pushSiblings = (hoveredIndex: number) => {
    if (!enableHover) return;

    /**
     * Disable the wide sibling push on small visual sizes.
     * It prevents cards from moving too far outside the viewport.
     */
    const responsivePush = scale < 0.7 ? 80 : scale < 0.9 ? 115 : 160;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.killTweensOf(card);

      const baseTransform = transformStyles[index] ?? "none";

      if (index === hoveredIndex) {
        gsap.to(card, {
          transform: removeRotation(baseTransform),
          scale: 1.06,
          zIndex: images.length + 10,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });

        return;
      }

      const offsetX =
        index < hoveredIndex ? -responsivePush : responsivePush;

      const distance = Math.abs(hoveredIndex - index);

      gsap.to(card, {
        transform: pushTransform(baseTransform, offsetX),
        scale: 0.96,
        duration: 0.4,
        ease: "back.out(1.4)",
        delay: distance * 0.04,
        overwrite: "auto",
      });
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.killTweensOf(card);

      gsap.to(card, {
        transform: transformStyles[index] ?? "none",
        scale: 1,
        zIndex: index + 1,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  const scaledHeight = containerHeight * scale;

  return (
    <div
      ref={outerRef}
      className={`relative w-full overflow-visible ${className}`}
      style={{
        height: scaledHeight,
        minHeight: scaledHeight,
      }}
    >
      <div
        ref={canvasRef}
        className="absolute left-1/2 top-1/2 flex origin-center items-center justify-center overflow-visible"
        style={{
          width: containerWidth,
          height: containerHeight,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="absolute overflow-hidden bg-black [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform]"
            style={{
              width: cardWidth,
              height: cardHeight,
              borderWidth: cardBorderWidth,
              borderStyle: "solid",
              borderColor: "white",
              borderRadius: cardRadius,
              boxShadow:
                "0 15px 35px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.08)",
              transform: transformStyles[index] ?? "none",
              zIndex: index + 1,
            }}
            onMouseEnter={() => pushSiblings(index)}
            onMouseLeave={resetSiblings}
          >
            <img
              src={src}
              alt={`Portfolio card ${index + 1}`}
              draggable={false}
              className="h-full w-full select-none object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}