import React, { useState } from "react";
import {token} from "../../../declarations/token";

function Faucet() {

  const [isDisable, setIsDesable] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme");

  async function handleClick(event) {
    setIsDesable(true);
    const result = await token.payOut();
    setButtonText(result);
    // setIsDesable(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 100 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={isDisable} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
