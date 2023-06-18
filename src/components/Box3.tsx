import { motion } from "framer-motion";

function Box3() {
  return (
    <motion.div
      className="w-36 h-36 bg-fuchsia-700"
      whileHover={{ scale: 1.2 }}
      whileInView={{ x: 200 }}
      whileTap={{ y: 50 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
}

export default Box3;
