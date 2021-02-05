import { useFormik } from "formik";
import React from "react";

export const Calculator = () => {
  const [riskyFuel, setRiskyFuel] = React.useState(0);
  const [safeFuel, setSafeFuel] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      minutes: undefined,
      seconds: undefined,
      stint: undefined,
      litres: undefined,
    },
    onSubmit: (values) => {
      setRiskyFuel(0);
      setSafeFuel(1);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Lap Time</label>
      <input
        id="minutes"
        name="minutes"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.minutes}
      />
      <input
        id="seconds"
        name="seconds"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.seconds}
      />
      <label>Stint Length</label>
      <input
        id="stint"
        name="stint"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.stint}
      />
      <label>Litres Per Lap</label>
      <input
        id="litres"
        name="litres"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.litres}
      />
      <h2>Risky Fuel {riskyFuel}L</h2>
      <h2>Safe Fuel {safeFuel}L</h2>
      <button type="submit">Calculate</button>
    </form>
  );
};

class ACCFuelCalculator extends React.Component {
  render() {
    return (
      <>
        <h1>ACC Fuel Calculator</h1>
        <Calculator />
      </>
    );
  }
}

export default ACCFuelCalculator;
