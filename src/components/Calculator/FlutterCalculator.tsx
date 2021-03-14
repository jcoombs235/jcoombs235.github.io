import React from "react";
import styled from "styled-components";

interface IProps {
  external?: boolean;
}

export const FlutterCalculator = ({ external }: IProps) => {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!external) {
    return (
      <StyledDiv>
        <iframe
          src="https://acc-fuel-calculator-f55cb.web.app/#/"
          title="ACC Fuel Calculator"
          width="100%"
          height={size[1] - 100}
          frameBorder="0"
        />
      </StyledDiv>
    );
  }

  return (
    <iframe
      src="https://acc-fuel-calculator-f55cb.web.app/#/"
      title="ACC Fuel Calculator"
      width="100%"
      height={size[1] - 5}
      frameBorder="0"
    />
  );
};

const StyledDiv = styled.div`
  padding-top: 20px;
`;
