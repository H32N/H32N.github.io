import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({closeMenu}) => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const handleToggle = () => {
    styleContext.changeTheme();
    setChecked(!isChecked);
    closeMenu(); // Close the menu when the theme is toggled
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
       onChange={handleToggle}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
