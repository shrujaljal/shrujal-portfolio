"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { images, type ImageSlot } from "@/content/imageManifest";

type WebsiteImageProps = {
  slot: ImageSlot;
  className?: string;
  imgClassName?: string;
  overlay?: boolean;
  eager?: boolean;
};

export function WebsiteImage({ slot, className = "", imgClassName = "", overlay = true, eager = false }: WebsiteImageProps) {
  const image = images[slot];
  const sources = useMemo(() => [image.src, image.fallbackSrc], [image.fallbackSrc, image.src]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = imageRef.current;
    if (!element || sourceIndex !== 0) {
      return;
    }

    if (element.complete && element.naturalWidth === 0) {
      setSourceIndex(1);
    }
  }, [sourceIndex]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={sources[sourceIndex]}
        alt={image.alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onError={() => setSourceIndex((index) => Math.min(index + 1, sources.length - 1))}
      />
      {overlay ? <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-charcoal/18 via-ivory/8 to-gold/10 mix-blend-multiply" /> : null}
    </div>
  );
}
