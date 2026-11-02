import Image from "next/image";
import { PhoneFrame } from "@/components/onpoint/Phone";

interface Props {
  name: string;
  alt: string;
  /** Trim the empty lower part of a short screen so a row of screens lines up. */
  crop?: boolean;
  className?: string;
}

/** A screenshot from the Flags app, in a phone frame. Files live in /public/flags/screens. */
export function FlagsShot({ name, alt, crop = false, className }: Props) {
  return (
    <PhoneFrame className={className}>
      <Image
        src={`/flags/screens/${name}.webp`}
        alt={alt}
        width={780}
        height={1688}
        sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 46vw"
        className={`block w-full h-auto rounded-[1.75rem] ${crop ? "aspect-[390/640] object-cover object-top" : ""}`}
      />
    </PhoneFrame>
  );
}
