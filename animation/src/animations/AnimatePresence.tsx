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
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

function AnimateBoxPresence() {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing(!showing);
  };

  return (
    <Wrapper>
      <button onClick={handleClick}>click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default AnimateBoxPresence;
