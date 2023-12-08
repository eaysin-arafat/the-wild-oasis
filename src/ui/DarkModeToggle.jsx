import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { ButtonIcon } from "./ButtonIcon";
// import { useDarkMode } from "../context/DarkModeContext";

export const DarkModeToggle = () => {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <ButtonIcon>{<HiOutlineSun />}</ButtonIcon>;
};
