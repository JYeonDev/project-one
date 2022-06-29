import styled from "styled-components";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: yellow;
  border-radius: 100px;
`;

function Box() {
  return <Circle />;
}

export default Box;
