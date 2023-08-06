import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Root {
   children: JSX.Element;
}

export const Reveal = ({ children }: Root) => {
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
      <div ref={ref}>
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.5, delay: 0.25 }}
         >
            {children}
         </motion.div>
      </div>
   );
};

export default Reveal;
