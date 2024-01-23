import { useState } from "react";
import GameForm from "./components/game-form";
import GameInterface from "./components/game-interface";
import { TAppState, THandleGameInputs } from "./types/types";
import { INIITIAL_APP_STATE } from "./constants";

function App() {
  const [gameInputs, setGameInputs] = useState<TAppState>(INIITIAL_APP_STATE);
  const [gameIsOn, setGameIsOn] = useState(false);

  const handleGameInputs = ({ action, payload }: THandleGameInputs) => {
    switch (action) {
      case "set-step-count":
        setGameInputs((prev) => ({
          ...prev,
          noOfSteps: payload,
        }));
        break;
      case "clear-steps":
        setGameInputs((prev) => ({
          ...prev,
          steps: [],
        }));
        break;
      case "add-step":
        setGameInputs((prev) => ({
          ...prev,
          steps: [...prev.steps, payload],
        }));
        break;
      case "set-rows":
        setGameInputs((prev) => ({
          ...prev,
          dimension: {
            ...prev.dimension,
            rows: payload,
          },
        }));
        break;
      case "set-cols":
        setGameInputs((prev) => ({
          ...prev,
          dimension: {
            ...prev.dimension,
            cols: payload,
          },
        }));
        break;

      case "setBotPosition":
        setGameInputs((prev) => ({
          ...prev,
          botPosition: {
            ...prev.botPosition,
            x: payload.x,
            y: payload.y,
          },
        }));
        break;
      case "setCookiePosition":
        setGameInputs((prev) => ({
          ...prev,
          cookiePosition: {
            ...prev.cookiePosition,
            x: payload.x,
            y: payload.y,
          },
        }));
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen p-4 border border-green-600">
      {gameIsOn ? (
        <GameInterface
          gameInputs={gameInputs}
          addStep={(step) =>
            handleGameInputs({ action: "add-step", payload: step })
          }
          handleBotPosition={(position) =>
            handleGameInputs({ action: "setBotPosition", payload: position })
          }
        />
      ) : (
        <GameForm
          handleGameInput={handleGameInputs}
          setGameIsOn={setGameIsOn}
        />
      )}
    </div>
  );
}

export default App;
