'use client';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/nextjs_test/images/image001.jpg',
    '/nextjs_test/images/image002.jpg',
    '/nextjs_test/images/image003.jpg',
    '/nextjs_test/images/image004.jpg',
  ];

  return (
    <main className="min-h-screen max-w-[1400px] mx-auto flex flex-col">
      <div className="flex justify-between items-center py-4 px-6">
        <Image
          src="/nextjs_test/logos/logo_left.png"
          alt="Left Logo"
          width={100}
          height={40}
          className="object-contain"
        />
        <a 
          href="https://www.naver.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            src="/nextjs_test/logos/logo_right.png"
            alt="Right Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative h-[40vh] md:h-[60vh] bg-gray-100 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Landing page image ${index + 1}`}
              fill
              className="object-contain rounded-lg"
              priority={index < 2}
            />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center py-12 px-4 mt-auto">
        <a
          href="https://www.naver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-lg"
        >
          바로 알아보기
        </a>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged image"
              fill
              className="object-contain"
              priority
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
