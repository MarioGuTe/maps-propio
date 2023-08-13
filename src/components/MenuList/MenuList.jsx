import MenuListItem from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constants";
import propTypes from "prop-types";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          key={difficulty}
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
};

export default MenuList;

MenuList.propTypes = {
  onItemClick: propTypes.func,
  difficulty: propTypes.string,
};
