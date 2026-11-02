import Image from "next/image";
import type { ReactNode } from "react";

/** A simple phone bezel around a screen. The screen content is passed in as children. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2.25rem] bg-navy p-2 shadow-xl shadow-navy/25 ring-2 ring-slate/50 ${className}`}>
      {children}
    </div>
  );
}

interface ShotProps {
  name: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

/** A screenshot from the app, in a phone frame. Files live in /public/onpoint/screens. */
export function PhoneShot({ name, alt, priority, className }: ShotProps) {
  return (
    <PhoneFrame className={className}>
      <Image
        src={`/onpoint/screens/${name}.webp`}
        alt={alt}
        width={780}
        height={1688}
        sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 46vw"
        priority={priority}
        className="block w-full h-auto rounded-[1.75rem]"
      />
    </PhoneFrame>
  );
}
