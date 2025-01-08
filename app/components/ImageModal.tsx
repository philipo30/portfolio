import React from "react";
import Image from "next/image";
import { FaLink, FaXmark, FaDownload } from "react-icons/fa6";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  href?: string;
}

export function ImageModal({ isOpen, onClose, src, alt, href }: ImageModalProps) {
  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = src.split('/').pop() || 'image';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <div className="absolute top-4 right-4 flex gap-4 z-10">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaLink className="w-5 h-5 text-white" />
            </a>
          )}
          <button
            onClick={handleDownload}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <FaDownload className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <FaXmark className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="max-h-[85vh] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
} 