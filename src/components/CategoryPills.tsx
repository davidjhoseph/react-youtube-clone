import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
type CategoryPillsProp = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;
export default ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProp) => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current === null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container === null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);
  return (
    <div className="relative overflow-x-hidden" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((c: string) => {
          return (
            <Button
              className="px-3 py-1 rounded-lg whitespace-nowrap"
              onClick={() => onSelect(c)}
              variant={selectedCategory === c ? "dark" : "default"}
              key={c}
            >
              {c}
            </Button>
          );
        })}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r w-24 h-full from-white from-50% to-transparent">
          <Button
            variant="ghost"
            size="icon"
            className="w-auto h-full aspect-square p-1.5"
            onClick={() =>
              setTranslate((t) => {
                const newTranslate = t !== 0 ? t - TRANSLATE_AMOUNT : 0;
                return newTranslate;
              })
            }
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute flex justify-end top-1/2 right-0 -translate-y-1/2 bg-gradient-to-l w-24 h-full from-white from-50% to-transparent">
          <Button
            variant="ghost"
            size="icon"
            className="w-auto h-full aspect-square p-1.5"
            onClick={() =>
              setTranslate((t) => {
                if (containerRef.current === null) return t;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                const newTranslate = t + TRANSLATE_AMOUNT;
                if (newTranslate + width > edge) return edge - width;
                return newTranslate;
              })
            }
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};
