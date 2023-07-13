import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <div className="container-0">
      <div className="container">
        <div className={`dropdown`}>
          <div className="text">Should you use a dropdown?</div>
          <button onClick={handleDropdownClick} className="dropdown-btn">
            {dropdownValue === "" ? "<Select>" : dropdownValue}
          </button>
          <div
            className={`dropdown-items ${
              dropdownState ? "isVisible" : "isHidden"
            }`}
          >
            <div className="dropdown-item">
              <div
                className="dropdown__link"
                onClick={() => handleSetDropdownValue("Yes")}
              >
                Yes
              </div>
            </div>
            <div className="dropdown-item">
              <div
                className="dropdown__link"
                onClick={() => handleSetDropdownValue("Probably not")}
              >
                Probably not
              </div>
            </div>
            <div className="dropdown-item">
              <div
                className="dropdown__link"
                onClick={() => handleSetDropdownValue("value 03")}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
