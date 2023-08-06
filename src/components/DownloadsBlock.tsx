// import React from "react";
import "../index.css";
import { motion } from "framer-motion";
interface Props {
   img: string;
   title: string;
   text: string;
}

const item = {
   hidden: { opacity: 0, x: 20 },
   visible: { opacity: 1, x: 0 },
};

export const DownloadsBlock = ({ img, title, text }: Props) => {
   return (
      <motion.div variants={item} className="down__box box-1 text-center">
         <img className="down__box-img" src={img} />
         <h3 className="down__box-title">{title}</h3>
         <p className="down__box-text">{text}</p>
         <div className="down__box-button">Add & Install Extension</div>
      </motion.div>
   );
};
export default DownloadsBlock;
