import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import ResultView from "./components/ResultView";

const choices = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const i = Math.floor(Math.random() * choices.length);
  return choices[i];
}

function getResult(player, house) {
  if (player === house) return "draw";

  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (beats[player] === house) return "win";
  return "lose";
}

const App = () => {
  const [step, setStep] = useState("pick");
  const [playerPick, setPlayerPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(12);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isRevealingHouse, setIsRevealingHouse] = useState(false);

  const handlePick = (choice) => {
    setPlayerPick(choice);
    setStep("result");
    setHousePick(null);
    setResult(null);
    setIsRevealingHouse(true);

    setTimeout(() => {
      const house = getRandomChoice();
      const outcome = getResult(choice, house);

      setHousePick(house);
      setResult(outcome);
      setIsRevealingHouse(false);

      setScore((prev) =>
        outcome === "win" ? prev + 1 : outcome === "lose" ? prev - 1 : prev
      );
    }, 1000);
  };

  return (
    <div className="pb-10 w-screen min-h-screen bg-[radial-gradient(circle_at_top,hsl(214,47%,23%),hsl(237,48%,15%))]">
      <div className="flex gap-45 px-5 py-7 lg:px-7.5 lg:py-10 md:px-7.5 md:py-10 sm:px-7.5 sm:py-10 flex-col items-center justify-center">
        <Header score={score} />

        {step === "pick" && <Main onPick={handlePick} />}

        {step === "result" && (
          <ResultView
            playerPick={playerPick}
            housePick={housePick}
            result={result}
            isRevealingHouse={isRevealingHouse}
            onPlayAgain={() => {
              setStep("pick");
              setPlayerPick(null);
              setHousePick(null);
              setResult(null);
            }}
          />
        )}
      </div>

      <Footer onOpenRules={() => setIsRulesOpen(true)} />

      {isRulesOpen && <Rules onClose={() => setIsRulesOpen(false)} />}
    </div>
  );
};

export default App;
