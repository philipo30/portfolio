"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ImageModal";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    href?: string;
  } | null>(null);

  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <div 
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer w-full h-full group"
            >
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
      
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        href={selectedImage?.href}
      />
    </section>
  );
};
