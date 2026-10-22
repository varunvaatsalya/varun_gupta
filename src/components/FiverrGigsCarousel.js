"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const ROTATE_MS = 4000;

export default function FiverrGigsCarousel({ gigs = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActive(emblaApi.selectedScrollSnap());
    setProgressKey((key) => key + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const handleProgressEnd = useCallback(() => {
    if (paused || !emblaApi || gigs.length < 2) return;
    emblaApi.scrollNext();
  }, [emblaApi, gigs.length, paused]);

  if (!gigs.length) return null;

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="w-full overflow-hidden border-y py-2 space-y-2 border-gray-400 dark:border-gray-700" ref={emblaRef}>
        <div className="flex">
          {gigs.map((item) => (
            <div key={item.id} className="min-w-0 flex-[0_0_100%]">
              <div className="w-full overflow-hidden select-none">
                <Image
                  height={800}
                  width={800}
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        {gigs.length > 1 && (
          <div
            className="flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Fiverr gigs"
          >
            {gigs.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${item.title}`}
                  onClick={() => scrollTo(index)}
                  className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-gray-400/50 dark:bg-gray-600/60"
                      : "w-2 bg-gray-400 dark:bg-gray-600 hover:bg-pink-400"
                  }`}
                >
                  {isActive && (
                    <span
                      key={progressKey}
                      className={`carousel-progress-fill absolute inset-y-0 left-0 w-full bg-pink-500 ${
                        paused ? "is-paused" : ""
                      }`}
                      style={{ "--carousel-ms": `${ROTATE_MS}ms` }}
                      onAnimationEnd={handleProgressEnd}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
