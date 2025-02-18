"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/asset/sponser/Boppy_Logo_1.jpg";
import img2 from "@/asset/sponser/CAR_LOGO_1.png";
import img3 from "@/asset/sponser/Doona-Logo_1.png";
import img4 from "@/asset/sponser/Dr-Browns-Company-Logo_1.jpg";
import img5 from "@/asset/sponser/Prince_Lionheart_1.jpg";
import img6 from "@/asset/sponser/Thule_Logotype_1.jpg";
import img7 from "@/asset/sponser/frida.png";
import img8 from "@/asset/sponser/maxi-cosi-vector-logo_1.png";
import img9 from "@/asset/sponser/uppababy.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Sponser = () => {
  return (
    <div className="container mt-8 mx-auto overflow-hidden py-10">
      <h1 className="text-center font-semibold text-lg mb-6">
        Discover top baby brands, trusted by parents everywhere.
      </h1>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30, // Speed control
            ease: "linear",
          }}
        >
          {/* Two sets of images for smooth infinite scroll */}
          {[...images, ...images].map((img, index) => (
            <Image key={index} src={img} alt="Sponser Logo" className="h-16 w-auto" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponser;
