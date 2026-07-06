"use client";

import {
  createElement,
  ElementType,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: {
    min: number;
    max: number;
  };
  onSentenceComplete?: (
    sentence: string,
    index: number,
  ) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [hasFinished, setHasFinished] = useState(false);

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  const currentText = textArray[currentTextIndex] ?? "";

  const processedText = useMemo(() => {
    return reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;
  }, [currentText, reverseMode]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;

    const minimum = Math.min(
      variableSpeed.min,
      variableSpeed.max,
    );

    const maximum = Math.max(
      variableSpeed.min,
      variableSpeed.max,
    );

    return Math.random() * (maximum - minimum) + minimum;
  }, [typingSpeed, variableSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) {
      return "inherit";
    }

    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    setDisplayedText("");
    setCurrentCharIndex(0);
    setCurrentTextIndex(0);
    setHasFinished(false);
  }, [text]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const element = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [startOnVisible]);

  // Cursor blink is handled entirely by CSS via the inline `animation` style
  // on the cursor <span>, so no GSAP context is created here.
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    const cursor = cursorRef.current;
    cursor.style.animation = `cursorBlink ${cursorBlinkDuration}s steps(2, jump-none) infinite alternate`;
    return () => {
      cursor.style.animation = "";
    };
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible || hasFinished || !processedText) return;

    let timeout: ReturnType<typeof setTimeout>;

    const isStartingSentence =
      currentCharIndex === 0 && displayedText === "";

    const typeNextCharacter = () => {
      if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText(
              processedText.slice(0, currentCharIndex + 1),
            );

            setCurrentCharIndex(
              (previousIndex) => previousIndex + 1,
            );
          },
          variableSpeed ? getRandomSpeed() : typingSpeed,
        );

        return;
      }

      onSentenceComplete?.(currentText, currentTextIndex);

      const isLastSentence =
        currentTextIndex === textArray.length - 1;

      if (!loop && isLastSentence) {
        setHasFinished(true);
        return;
      }

      timeout = setTimeout(() => {
        const nextIndex = isLastSentence
          ? 0
          : currentTextIndex + 1;

        setDisplayedText("");
        setCurrentCharIndex(0);
        setCurrentTextIndex(nextIndex);
      }, pauseDuration);
    };

    timeout = setTimeout(
      typeNextCharacter,
      isStartingSentence ? initialDelay : 0,
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [
    currentCharIndex,
    currentText,
    currentTextIndex,
    displayedText,
    getRandomSpeed,
    hasFinished,
    initialDelay,
    isVisible,
    loop,
    onSentenceComplete,
    pauseDuration,
    processedText,
    textArray.length,
    typingSpeed,
    variableSpeed,
  ]);

  const isTyping =
    currentCharIndex < processedText.length && !hasFinished;

  const shouldHideCursor =
    hideCursorWhileTyping && isTyping;

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span
      className="inline"
      style={{
        color: getCurrentTextColor(),
      }}
    >
      {displayedText}
    </span>,

    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    ),
  );
};

export default TextType;