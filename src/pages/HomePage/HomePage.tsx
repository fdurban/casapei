import  { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import fotorestaurante from "../../assets/restaurantepei.jpg";
import {specialties, testimonials } from '../../utilities/utlities.ts'
const HomePage = () => {
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
      <section>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="container mx-auto grid grid-cols-12 mt-20 items-center relative"
        >
          <div ref={ref} className="col-start-2 col-end-8">
              <motion.div
                variants={{
                  hidden: { left: 0 },
                  visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                exit="hidden"
                transition={{ duration: 2, ease: "easeIn" }}
                className="className=bg-azulpei rounded-md p-6 mb-6 lg:mb-12"
              >
              <h1 ref={ref} className="text-2xl lg:text-4xl">
                Visítanos en Calle de Esproceda 34
              </h1>
              <h5 className="text-lg lg:text-xl">
                y descubre los mejores dumplings de Madrid
              </h5>
              </motion.div>
            <a
              href="https://www.google.es/maps/place/CASA+PEI%2B/@40.4403732,-3.6973033,17z/data=!3m2!4b1!5s0xd4228f12299f955:0xef48a3badbbc42a2!4m6!3m5!1s0xd4229d13c755429:0x2787718893379e57!8m2!3d40.4403691!4d-3.6947284!16s%2Fg%2F11s7zj3jy4?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-azulpei rounded-md p-2 m-4 text-zinc-200 hover:bg-cyan-600">
                Ir a Maps
              </button>
            </a>
          </div>
          <img
            src={fotorestaurante}
            alt=""
            className="col-start-8 col-end-11 rounded-md"
            loading="lazy"
          />
        </motion.div>
      </section>
      <section className="mt-12 lg:mt-20 text-center bg-background-main py-12 lg:py-20">
        <p className="bg-azulpei inline-block px-4 py-2 rounded-lg text-white">
          Our Specialties
        </p>
        <h1 className="text-3xl lg:text-4xl my-4 lg:my-6">Delight in Every Bite</h1>
        <p className="text-gray-700">
          Our menu is a culinary journey through the different regions of China,
          each dumpling a testament to the rich and diverse flavors of its
          origin.
        </p>
        <div className="container mx-auto grid grid-cols-12 gap-4 mt-8 lg:mt-16">
          {specialties.map((specialty, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3 text-center">
              <h1 className="mb-2 text-xl lg:text-2xl font-bold">{specialty.title}</h1>
              <img
                src={specialty.image}
                alt={specialty.title}
                className="rounded-lg h-40 lg:h-48 mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="text-center pt-16 lg:pt-36">
          <p className="text-sky-500 text-lg font-semibold">Testimonials</p>
          <h1 className="text-3xl lg:text-4xl mt-4">What our customers say</h1>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-4 mt-8 lg:mt-16">
          {testimonials.map((testimonial, index: number) => (
            <div key={index} className="col-span-12 lg:col-span-4 text-center">
              <h1 className="mb-4 text-xl lg:text-2xl">{testimonial.quote}</h1>
              <p className="text-gray-700">-{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
  
  export default HomePage;
