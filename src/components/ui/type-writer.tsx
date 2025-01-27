import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  startTyping?: boolean;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  delay = 100,
  className = "",
  startTyping = false,
  onComplete,
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, startTyping, onComplete]);

  return <span className={className}>{currentText}</span>;
}
