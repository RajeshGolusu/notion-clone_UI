import stringToColor from "@/lib/stringToColor";
import { motion } from "framer-motion";

function FollowPointer({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const color = stringToColor(info.email || "");
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: x,
        left: y,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    ></motion.div>
  );
}

export default FollowPointer;
