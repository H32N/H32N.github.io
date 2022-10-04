import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const emojis = {
    light: emoji("☀️"),
    dark: emoji("🌜")
  };
  const themeStyle = {
    "--light-mode": emojis.light,
    "--dark-mode": emojis.dark
  };

  console.log(isChecked);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">
          {isChecked ? themeStyle["--dark-mode"] : themeStyle["--light-mode"]}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
