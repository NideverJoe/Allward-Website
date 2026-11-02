"use client";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
  label: string;
}

/** A silent looping clip. People who ask their device for less motion see the still poster instead. */
export default function LoopVideo({ src, poster, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      className="block w-full h-auto rounded-[1.75rem] bg-navy"
      src={src}
      poster={poster}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
