import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: absolute;
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
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Transform() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 800], [2, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 230, 238), rgb(0,83,238))",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238,178,0))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, scale: scale, rotateZ: rotateZ }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}
export default Transform;
