"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import {
  Instrument_Serif,
  Poppins,
  Roboto_Mono,
} from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface ProcessStep {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Brief",
    shortDescription:
      "A quick call. We listen, we map the hook before the camera ever rolls.",
    description:
      "We understand your brand, audience, goal and content requirements before planning the creative direction.",
  },
  {
    number: "02",
    title: "Plan",
    shortDescription:
      "Treatment, shotlist and locations locked before shoot day.",
    description:
      "Mood boards, frame-by-frame storyboards, talent and location scouting. Zero guesswork on set.",
  },
  {
    number: "03",
    title: "Shoot",
    shortDescription:
      "Director-led shoot. Cinematic frames. Hook-first coverage.",
    description:
      "Every frame is captured with a clear visual direction, strong composition and platform-first storytelling.",
  },
  {
    number: "04",
    title: "Edit",
    shortDescription:
      "Cuts, color, sound, captions — engineered for watch-time.",
    description:
      "We shape the footage through pacing, sound design, color grading, motion graphics and engaging captions.",
  },
  {
    number: "05",
    title: "Deliver",
    shortDescription:
      "Reel-ready exports. Master + cutdowns. 48 hr turnaround.",
    description:
      "Final content is delivered in platform-ready formats, including master files, reels and campaign cutdowns.",
  },
];

const STEP_DURATION = 6000;

const fadeBlurVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const stepTimeoutRef = useRef<number | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const currentStep = useMemo(
    () => processSteps[activeStep],
    [activeStep],
  );

  const clearTimers = useCallback(() => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (stepTimeoutRef.current !== null) {
      window.clearTimeout(stepTimeoutRef.current);
      stepTimeoutRef.current = null;
    }
  }, []);

  const selectStep = useCallback(
    (index: number) => {
      clearTimers();

      setActiveStep(index);
      setProgress(0);
      setCycleKey((current) => current + 1);
    },
    [clearTimers],
  );

  useEffect(() => {
    if (!isInView || isPaused) {
      clearTimers();
      return;
    }

    clearTimers();

    /*
     * Continue from the current progress value instead of restarting
     * whenever the user moves the mouse away from the card.
     */
    const initialProgress = Math.min(
      Math.max(progress, 0),
      100,
    );

    const remainingProgress = 100 - initialProgress;
    const remainingDuration =
      STEP_DURATION * (remainingProgress / 100);

    if (remainingDuration <= 0) {
      setProgress(0);
      setActiveStep(
        (current) => (current + 1) % processSteps.length,
      );

      return;
    }

    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      const elapsedPercentage =
        (elapsedTime / remainingDuration) * remainingProgress;

      const nextProgress = Math.min(
        initialProgress + elapsedPercentage,
        100,
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameRef.current =
          window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current =
      window.requestAnimationFrame(updateProgress);

    stepTimeoutRef.current = window.setTimeout(() => {
      setProgress(0);

      setActiveStep(
        (current) => (current + 1) % processSteps.length,
      );
    }, remainingDuration);

    return clearTimers;
  }, [
    activeStep,
    cycleKey,
    isInView,
    isPaused,
    clearTimers,
  ]);

  useEffect(() => {
    return clearTimers;
  }, [clearTimers]);

  return (
    <section
      ref={sectionRef}
      className={`${poppins.className} relative overflow-hidden bg-black px-5 py-16 text-white sm:px-7 sm:py-20 md:px-10 lg:py-28`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ef1d28]/[0.045] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* Section label */}
        <motion.div
          variants={fadeBlurVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#ef1d28]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              // Process
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeBlurVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.08 }}
          className={`${instrumentSerif.className} mt-5 max-w-[22ch] text-[44px] leading-[0.96] text-white sm:text-[56px] md:text-[68px] lg:text-[76px]`}
        >
          From brief to broadcast — five steps, no chaos.
        </motion.h2>

        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Desktop left process list */}
          <motion.div
            initial={{
              opacity: 0,
              x: -28,
              filter: "blur(6px)",
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    x: -28,
                    filter: "blur(6px)",
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="sticky top-28 hidden lg:block"
          >
            <ol className="space-y-5">
              {processSteps.map((step, index) => {
                const active = activeStep === index;

                return (
                  <li key={step.number}>
                    <button
                      type="button"
                      onClick={() => selectStep(index)}
                      className="group flex w-full items-baseline gap-4 text-left"
                    >
                      <span
                        className={`${robotoMono.className} w-8 shrink-0 text-[11px] tracking-[0.25em] transition-colors duration-300 ${
                          active
                            ? "text-[#ef1d28]"
                            : "text-[#ef1d28]/60 group-hover:text-[#ef1d28]"
                        }`}
                      >
                        {step.number}
                      </span>

                      <div>
                        <h3
                          className={`${instrumentSerif.className} text-2xl leading-none transition-colors duration-300 ${
                            active
                              ? "text-white"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`mt-1 max-w-[30ch] text-xs leading-relaxed transition-colors duration-300 ${
                            active
                              ? "text-white/70"
                              : "text-white/40 group-hover:text-white/60"
                          }`}
                        >
                          {step.shortDescription}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </motion.div>

          {/* Process card */}
          <motion.div
            variants={fadeBlurVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full"
          >
            <div className="w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Top step navigation */}
              <div className="flex w-full items-center justify-around px-4 pt-7 sm:px-6 md:px-10 md:pt-10">
                {processSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isCompleted = index < activeStep;
                  const isLast =
                    index === processSteps.length - 1;

                  return (
                    <div
                      key={step.number}
                      className={`flex items-center ${
                        isLast ? "" : "md:flex-1"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => selectStep(index)}
                        aria-label={`Open step ${step.number}: ${step.title}`}
                        aria-current={
                          isActive ? "step" : undefined
                        }
                        className={`${robotoMono.className} relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ring-1 ring-white/10 transition-colors sm:h-10 sm:w-10 sm:text-xs`}
                        style={{
                          backgroundColor:
                            isActive || isCompleted
                              ? "#ef1d28"
                              : "rgba(255,255,255,0.06)",
                          color:
                            isActive || isCompleted
                              ? "#ffffff"
                              : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {isCompleted ? (
                          <motion.svg
                            initial={{
                              scale: 0,
                              rotate: -30,
                            }}
                            animate={{
                              scale: 1,
                              rotate: 0,
                            }}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <motion.path
                              d="M5 13l4 4L19 7"
                              initial={{
                                pathLength: 0,
                              }}
                              animate={{
                                pathLength: 1,
                              }}
                              transition={{
                                duration: 0.4,
                              }}
                            />
                          </motion.svg>
                        ) : isActive ? (
                          <motion.span
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 1.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="h-2.5 w-2.5 rounded-full bg-white"
                          />
                        ) : (
                          <span>{step.number}</span>
                        )}
                      </button>

                      {!isLast && (
                        <div className="relative mx-1.5 h-[2px] flex-1 overflow-hidden rounded bg-white/10 sm:mx-2">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-[#ef1d28]"
                            initial={false}
                            animate={{
                              width:
                                index < activeStep
                                  ? "100%"
                                  : index === activeStep
                                    ? `${progress}%`
                                    : "0%",
                            }}
                            transition={{
                              duration: 0.08,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile step buttons */}
              <div className="mt-5 overflow-x-auto px-4 lg:hidden">
                <div className="flex flex-col gap-2 pb-1">
                  {processSteps.map((step, index) => {
                    const active = activeStep === index;

                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => selectStep(index)}
                        className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] transition ${
                          active
                            ? "border-[#ef1d28] bg-[#ef1d28] text-white"
                            : "border-white/10 text-white/45"
                        }`}
                      >
                        {step.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Animated content */}
              <div className="relative min-h-[330px] overflow-hidden px-6 md:min-h-[337px] md:px-10">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.div
                    key={currentStep.number}
                    initial={{
                      opacity: 0,
                      y: 24,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -18,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-0 w-full px-6 py-8 md:px-10"
                  >
                    <div className="py-2">
                      <div className="min-h-[220px]">
                        <span
                          className={`${robotoMono.className} text-[11px] tracking-[0.25em] text-[#ef1d28]`}
                        >
                          Step {currentStep.number}
                        </span>

                        <h3
                          className={`${instrumentSerif.className} mt-3 text-4xl leading-none text-white md:text-5xl`}
                        >
                          {currentStep.title}
                        </h3>

                        <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-white/80 md:text-lg">
                          {currentStep.shortDescription}
                        </p>

                        <motion.div
                          key={`line-${currentStep.number}`}
                          initial={{
                            scaleX: 0,
                          }}
                          animate={{
                            scaleX: 1,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15,
                          }}
                          className="mt-6 h-px w-16 origin-left bg-[#ef1d28]/60"
                        />

                        <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-white/55">
                          {currentStep.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom progress */}
              <div className="px-6 pb-6 md:px-10">
                <div className="h-[2px] w-full overflow-hidden rounded bg-white/10">
                  <div
                    className="h-full bg-[#ef1d28]"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}