import React from "react";

const ResultView = ({
  playerPick,
  housePick,
  result,
  isRevealingHouse,
  onPlayAgain,
}) => {
  const resultText =
    result === "win" ? "You Win" : result === "lose" ? "You Lose" : "Draw";

  const playerWins = result === "win";
  const houseWins = result === "lose";

  return (
    <div
      className="
        mt-16
        grid gap-y-10 gap-x-10
        grid-cols-2
        md:grid-cols-3
        items-center justify-items-center
      "
    >

      <PickColumn
        label="You picked"
        active={playerWins}
        className={
          (playerWins ? "z-0 " : "z-10 ") + "md:col-start-1 md:row-start-1"
        }
      >
        <Token choice={playerPick} />
      </PickColumn>

      {/* MOBILE: col2 row1 | DESKTOP: col3 row1 */}
      <PickColumn
        label="The house picked"
        active={houseWins}
        className={
          (houseWins ? "z-0 " : "z-10 ") + "md:col-start-3 md:row-start-1"
        }
      >
        {isRevealingHouse ? (
          <div className="mt-2.5 h-32 w-32 rounded-full bg-[#172240c9] md:h-40 md:w-40" />
        ) : (
          <Token choice={housePick} />
        )}
      </PickColumn>

      <ResultCenter
        result={result}
        resultText={resultText}
        onPlayAgain={onPlayAgain}
        className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1"
      />
    </div>
  );
};

/* ========= center text ========= */

const ResultCenter = ({ result, resultText, onPlayAgain, className = "" }) => {
  if (!result) return null;

  return (
    <div
      className={
        "relative z-20 flex flex-col items-center gap-4 text-white " +
        className
      }
    >
      <p className="text-4xl md:text-5xl font-bold uppercase">
        {resultText}
      </p>
      <button
        onClick={onPlayAgain}
        className="mt-1 cursor-pointer rounded-lg bg-white px-10 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[hsl(229,25%,31%)] hover:text-[hsl(349,71%,52%)]"
      >
        Play Again
      </button>
    </div>
  );
};

/* ========= left / right column ========= */

const PickColumn = ({ label, active, children, className = "" }) => {
  return (
    <div
      className={
        "relative flex flex-col items-center gap-4 " + className
      }
    >
      {/* text upar */}
      <span className="z-20 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-white">
        {label}
      </span>

      {/* chip + winner rings */}
      <WinnerRing active={active}>{children}</WinnerRing>
    </div>
  );
};

/* ========= token ========= */

const Token = ({ choice }) => {
  if (!choice) return null;
  const config = TOKEN_CONFIG[choice];
  if (!config) return null;

  return (
    <div
      className={
        "mt-2 flex h-30 w-30 cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 lg:h-42 lg:w-42 md:h-42 md:w-42 sm:h-42 sm:w-42 " +
        config.outerClasses
      }
    >
      <div className="flex items-center justify-center w-22 h-22 rounded-full bg-slate-100 shadow-[inset_0_6px_0_rgba(0,0,0,0.15)] lg:h-30 lg:w-30 md:h-30 md:w-30 sm:h-30 sm:w-30">
        <img
          src={config.iconSrc}
          alt={choice}
          className="h-12 w-12 md:h-16 md:w-16"
        />
      </div>
    </div>
  );
};

const TOKEN_CONFIG = {
  paper: {
    outerClasses:
      "h-32 w-32 md:h-40 md:w-40 bg-gradient-to-b from-[hsl(230,89%,65%)] to-[hsl(229,64%,46%)] shadow-[0_8px_0_hsla(229,64%,46%,0.7)]",
    iconSrc: "/assets/icon-paper.svg",
  },
  scissors: {
    outerClasses:
      "h-32 w-32 md:h-40 md:w-40 bg-gradient-to-b from-[hsl(39,89%,49%)] to-[hsl(28,76%,44%)] shadow-[0_8px_0_hsla(28,76%,44%,0.7)]",
    iconSrc: "/assets/icon-scissors.svg",
  },
  rock: {
    outerClasses:
      "h-32 w-32 md:h-40 md:w-40 bg-gradient-to-b from-[hsl(349,71%,52%)] to-[hsl(347,75%,35%)] shadow-[0_8px_0_hsla(347,75%,35%)]",
    iconSrc: "/assets/icon-rock.svg",
  },
};

/* ========= winner rings ========= */

const WinnerRing = ({ active, children }) => {
  if (!active) {
    return <div className="relative z-0">{children}</div>;
  }

  return (
    <div className="relative">
      <div className="-z-10 absolute inset-[-35px] sm:inset-[-50px] md:inset-[-60px] lg:inset-[-60px] rounded-full bg-[hsla(214,47%,23%,0.35)]" />
      <div className="-z-10 absolute inset-[-80px] sm:inset-[-100px] md:inset-[-120px] lg:inset-[-120px] rounded-full bg-[hsla(214,47%,23%,0.25)]" />
      <div className="-z-10 absolute inset-[-120px] sm:inset-[-140px] md:inset-[-180px] lg:inset-[-180px] rounded-full bg-[hsla(214,47%,23%,0.15)]" />
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default ResultView;
