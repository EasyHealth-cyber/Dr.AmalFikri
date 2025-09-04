import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MultilingualTextProps {
  texts: {
    text: string;
    lang: string;
    dir?: 'ltr' | 'rtl';
  }[];
  className?: string;
  interval?: number;
}

export function MultilingualText({ texts, className, interval = 3000 }: MultilingualTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex];

  return (
    <div 
      className={cn(
        "transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className
      )}
      dir={currentText.dir}
      lang={currentText.lang}
    >
      {currentText.text}
    </div>
  );
}