import { motion } from "framer-motion";

function Box4() {
  return (
    <motion.div
      className="w-36 h-36 bg-fuchsia-700"
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileDrag={{ borderRadius: "50%" }}
      transition={{ duration: 0.1 }}
    ></motion.div>
  );
}

export default Box4;
