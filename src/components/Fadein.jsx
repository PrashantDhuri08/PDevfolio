import { useEffect, useState, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Use a ref instead of getElementById

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible to improve performance
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef} // Attach ref to the div
      className={`transition-all duration-800 ease-in-out delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;