import { cities } from "..//utility/cities";
import { useContext } from "react";
import { ForecastContext } from "./ForecastContext";

const Input = () => {
  const { setSearchKey } = useContext(ForecastContext);

  const changeHandler = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <form className="form" onChange={changeHandler}>
      {cities}
    </form>
  );
};

export default Input;
