import { useEffect, useRef } from "react";
import "../index.css";
import Reveal from "./Reveal";

import chrome from "../assets/logo-chrome.png";
import firefox from "../assets/logo-firefox.png";
import opera from "../assets/logo-opera.png";
import DownloadsBlock from "./DownloadsBlock";
import { motion, useAnimation, useInView } from "framer-motion";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 1,
      },
   },
};

// const item = {
//    hidden: { opacity: 0 },
//    visible: { opacity: 1 },
// };

export const Downloads = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const animation = useAnimation();

   useEffect(() => {
      if (isInView) {
         animation.start("visible");
         console.log("вижу его!");
      }
   }, [isInView, animation]);
   return (
      <div className="down">
         <div className="container text-center">
            <Reveal>
               <h2 className="down__title text-center">
                  Download the extension
               </h2>
            </Reveal>
            <p className="down__text text-center">
               We’ve got more browsers in the pipeline. Please do let us know if
               <br /> you’ve got a favourite you’d like us to prioritize.
            </p>
            <motion.div
               ref={ref}
               variants={container}
               initial="hidden"
               animate={animation}
               className="down__boxs "
            >
               <DownloadsBlock
                  img={chrome}
                  title="Add to Chrome"
                  text="Minimum version 55"
               />
               {/* <motion.div variants={item}>hello</motion.div> */}
               <DownloadsBlock
                  img={firefox}
                  title=" Add to Firefox"
                  text="Minimum version 55"
               />
               <DownloadsBlock
                  img={opera}
                  title=" Add to Opera"
                  text="Minimum version 46"
               />
            </motion.div>
         </div>
      </div>
   );
};
export default Downloads;
