import { motion } from "framer-motion";

export default function Header({ name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h1 className="text-4xl font-bold">{name}의 첫 번째 생일</h1>
    </motion.div>
  );
}
