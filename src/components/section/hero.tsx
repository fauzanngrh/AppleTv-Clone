import { Container } from "../container";
import { Button } from "../button";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]); //fade out transition

  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-0 left-0 w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen object-cover"
          src="../../posters/usgs-k7WetNdaY6A-unsplash.jpg"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-32">
        <motion.div
          className="flex h-full flex-col justify-end items-start"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }} // text fadding out
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="lg">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the Apple TV app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
