import { motion, useMotionValue, useTransform } from "framer-motion";

function Box5() {
  const x = useMotionValue(10);
  const y = useTransform(x, (value) => Math.sin(value / 10) * 25);

  return (
    <motion.div
      drag="x"
      style={{ x, y }}
      className="w-36 h-36 bg-fuchsia-700"
    />
  );
}

export default Box5;
