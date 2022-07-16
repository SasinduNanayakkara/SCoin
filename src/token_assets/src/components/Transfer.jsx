import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import {token} from "../../../declarations/token"

function Transfer() {

  const [recipentId, setRecipientId] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisable, setIsDesable] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  
  async function handleClick() {
    setIsHidden(true);
    setIsDesable(true);
    const recipent = Principal.fromText(recipentId);
    const amountToTransfer = Number(amount);
    const result = await token.transfer(recipent, amountToTransfer);
    setFeedback(result);
    setIsHidden(false);
    setIsDesable(false);

  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipentId}
                onChange={(e) => setRecipientId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" disabled={isDisable} onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
