import propTypes from "prop-types";
import s from "./style.module.css";

const DisplayDifficulty = (props) => {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set to: ${props.difficulty}`
        : "Choose your difficulty setting"}
    </div>
  );
};

export default DisplayDifficulty;

DisplayDifficulty.propTypes = {
  difficulty: propTypes.string,
};
