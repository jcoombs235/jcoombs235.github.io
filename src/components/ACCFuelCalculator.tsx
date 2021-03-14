import React from "react";

interface IProps {
  external?: boolean;
}

export const ACCFuelCalculator = ({ external }: IProps) => {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <iframe
      src="https://acc-fuel-calculator-f55cb.web.app/#/"
      title="ACC Fuel Calculator"
      width="100%"
      height={size[1] - (external ? 5 : 100)}
      frameBorder="0"
    />
  );
};
