"use client";

import { useEffect, useRef } from "react";

export default function TextMorph() {
  const text1Ref = useRef<HTMLSpanElement | null>(null);
  const text2Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const elts = {
      text1: text1Ref.current!,
      text2: text2Ref.current!,
    };

    const texts = ["A student", "Artist", "Developer", "Guitarist", ""];

    const morphTime = 2;
    const cooldownTime = 2;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let rafId: number;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function setMorph(fraction: number) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;

      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    }

    function doCooldown() {
      morph = 0;
      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";
      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      rafId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) textIndex++;
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <div
        id="container"
        className="relative w-full h-3xl flex items-center justify-center
             [filter:url(#threshold)_blur(0.6px)]"
      >
        <span
          ref={text1Ref}
          id="text1"
          className="absolute w-full inline-block text-center text-3xl select-none"
        />
        <span
          ref={text2Ref}
          id="text2"
          className="absolute w-full inline-block text-center text-3xl select-none"
        />
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
