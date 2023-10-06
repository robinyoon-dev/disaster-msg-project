"use client";
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollYNum, setScrollYNum] = useState(0);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setScrollYNum(0);
    setShowButton(false);
  };

  useEffect(() => {
    const handleFollow = () => {
      setScrollYNum(window.scrollY);
      if (scrollYNum > 500) {
        // 500 이상이면 버튼이 보이게
        setShowButton(true);
      } else {
        // 500 이하면 버튼이 사라지게
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleFollow);
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, [scrollYNum]);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span className="sr-only">Go to top</span>
      </button>
    )
  );
};

export default ScrollToTopBtn;
