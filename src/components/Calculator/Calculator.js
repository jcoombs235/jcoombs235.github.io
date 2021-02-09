import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import AppLinks from "./AppLinks";

const FuelCalculator = () => {
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
      const lapTime = values.minutes + values.seconds / 60;
      const laps = values.stint / lapTime;
      const risky = Math.ceil(laps * values.litres);
      const safe = Math.ceil(risky + values.litres);

      if (risky > 0) {
        setRiskyFuel(Math.ceil(risky));
        setSafeFuel(Math.ceil(safe));
      }
    },
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label>Lap Time</label>
        <input
          id="minutes"
          name="minutes"
          placeholder="Minutes"
          type="number"
          onChange={(e) => {
            formik.handleChange(e);
            formik.submitForm();
          }}
          value={formik.values.minutes}
        />
        <input
          id="seconds"
          name="seconds"
          placeholder="Seconds"
          type="number"
          onChange={(e) => {
            formik.handleChange(e);
            formik.submitForm();
          }}
          value={formik.values.seconds}
        />
        <label>Stint Length</label>
        <input
          id="stint"
          name="stint"
          placeholder="Minutes"
          type="number"
          onChange={(e) => {
            formik.handleChange(e);
            formik.submitForm();
          }}
          value={formik.values.stint}
        />
        <label>Litres Per Lap</label>
        <input
          id="litres"
          name="litres"
          placeholder="Litres"
          type="number"
          onChange={(e) => {
            formik.handleChange(e);
            formik.submitForm();
          }}
          value={formik.values.litres}
        />
        <h2>Risky Fuel {riskyFuel}L</h2>
        <h2>Safe Fuel {safeFuel}L</h2>
        <button type="submit">Calculate</button>
      </form>
      <AppLinks />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  text-align: center;

  label {
    text-align: center;
    justify-content: center;
  }
`;

class Calculator extends React.Component {
  render() {
    return <FuelCalculator />;
  }
}

export default Calculator;
