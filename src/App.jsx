import React, { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // direction: "horizontal",
      smoothMobile: true,
      getDirection: true
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main className="app" ref={scrollRef}>
      <section data-scroll-section>
        <h1 data-scroll data-scroll-speed="1">SECTION 1</h1>
        <p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed,
          exercitationem rerum tempore odio assumenda blanditiis incidunt
          molestiae perferendis sit?
        </p>
      </section>
      <section data-scroll-section>
      <h1 data-scroll data-scroll-speed="1">SECTION 1</h1>
        <p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed,
          exercitationem rerum tempore odio assumenda blanditiis incidunt
          molestiae perferendis sit?
        </p>
      </section>
      <section data-scroll-section>
      <h1 data-scroll data-scroll-speed="1">SECTION 1</h1>
        <p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed,
          exercitationem rerum tempore odio assumenda blanditiis incidunt
          molestiae perferendis sit?
        </p>
      </section>
    </main>
  );
}
