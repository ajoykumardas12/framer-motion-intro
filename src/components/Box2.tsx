import { easeOut, motion } from "framer-motion";

function Box2() {
  return (
    <motion.div
      className="w-36 h-36 bg-fuchsia-700"
      animate={{
        scale: [1, 2, 2, 1, 1],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        rotate: [0, 0, 180, 0, -180],
      }}
      transition={{
        duration: 2,
        ease: easeOut,
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    ></motion.div>
  );
}

export default Box2;
