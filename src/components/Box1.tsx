import { motion } from "framer-motion";

function Box1() {
  return (
    <motion.div
      className="w-36 h-36 rounded-full bg-fuchsia-700"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}

export default Box1;
