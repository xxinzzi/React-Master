import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 230, 238), rgb(238, 0, 234));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Scroll() {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <Wrapper>
      <Box style={{ x, scale: scrollYProgress }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default Scroll;
