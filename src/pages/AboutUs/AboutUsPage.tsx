import  { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import cocinerapei from "../../assets/cocinerapei.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div ref={ref} className="container mx-auto text-center py-12">
          <p className="text-sky-500 font-semibold">About Us</p>
          <h1 className="text-4xl lg:text-5xl pt-6 lg:pt-10 font-bold">
            Discover Our Story
          </h1>
          <p className="px-4 lg:px-64 pt-4 lg:pt-8 text-base lg:text-xl">
            Dumpling Delight is a family-owned restaurant dedicated to bringing
            the authentic flavors of traditional Chinese dumplings to your
            table. Our journey began in the bustling streets of Shanghai, where
            our family perfected the art of dumpling making over generations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center my-16">
          <img
            src={cocinerapei}
            alt="Dumpling Delight Chef"
            className="w-full lg:w-80 rounded-lg mb-6 lg:mb-0 lg:mr-8"
          />
          <div className="text-center lg:text-left">
            <h5 className="text-xl lg:text-2xl font-bold mb-2">
              Our Heritage
            </h5>
            <p className="text-gray-700">
              We bring the traditional flavors and techniques of Chinese
              dumpling making to your plate.
            </p>
            <h5 className="text-xl lg:text-2xl font-bold mt-4 mb-2">
              Quality Ingredients
            </h5>
            <p className="text-gray-700">
              We source the freshest ingredients to ensure each dumpling is a
              burst of flavor.
            </p>
            <h5 className="text-xl lg:text-2xl font-bold mt-4 mb-2">
              Community Focus
            </h5>
            <p className="text-gray-700">
              We believe in giving back to the community that has supported us
              throughout the years.
            </p>

            <button className="bg-sky-200 rounded px-2 mt-2"><a>Learn more</a></button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
