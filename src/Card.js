/*import { useState } from "react";*/
import "./index.css";
import styled from "styled-components";

export function Card() {
  return (
    <>
      <h2 class="card__headline">Quiz Card</h2>
      <div className="card__wrapper">
        <p className="card__question">Warum ist die Banane krumm?</p>
        <AnswerToggle buttonAnswer="Show answer" answer="Darum" />
        <ul className="card__list">
          <li className="card__listItem">Obst</li>
          <li className="card__listItem">gelb</li>
          <li className="card__listItem">Form</li>
        </ul>
      </div>
    </>
  );
}

function AnswerToggle({ buttonAnswer, answer }) {
  return (
    <>
      <button className="card__button">{buttonAnswer}</button>
      <p className="card__answer">{answer}</p>
    </>
  );
}

export default App;
