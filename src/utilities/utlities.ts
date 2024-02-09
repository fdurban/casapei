import dumplingspei from "../assets/dumplingspei2.jpg";
import noodlespei from "../assets/noodlespei.jpg";
import postrepei from "../assets/postrepei.jpg";
import coffeepei from "../assets/coffeepei.jpg";

interface Specialty {
    title: string
    image: string
}

interface Testimonial {
    quote: string
    author: string
}

const specialties: Specialty[] = [
    { title: "Speciality 1", image: dumplingspei },
    { title: "Speciality 2", image: noodlespei },
    { title: "Speciality 3", image: coffeepei },
    { title: "Speciality 4", image: postrepei },
  ];

  const testimonials: Testimonial[] = [
    { quote: "The dumplings at Dumpling Delight are the best I've ever had. The flavors are just incredible!", author: "Jane Doe" },
    { quote: "I can't get enough of their dumplings. I've become a regular customer!", author: "Jane Doe" },
    { quote: "Their dumplings are a culinary masterpiece. Highly recommended!", author: "Jane Doe" },
    ];





    export {specialties, testimonials}
  