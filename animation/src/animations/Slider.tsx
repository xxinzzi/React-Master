import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (back: boolean) => ({ x: back ? -500 : 500, opacity: 0, scale: 0 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    rotateX: 180,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((visible) => (visible === 10 ? 10 : visible + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((visible) => (visible === 1 ? 1 : visible - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back} //
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}
export default Slider;
