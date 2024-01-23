import { useState } from "react";
import { THandleGameInputs } from "../../types/types";

const MINIMUM_NO_OF_ROWS = 5; //Reason: no magic number
const MINIMUM_NO_OF_COLS = 5;
const MINIMUM_NO_OF_STEPS = 1;

type GameFormInputs = {
  handleGameInput: (props: THandleGameInputs) => void;
  setGameIsOn: (value: boolean) => void;
};

const GameForm: React.FC<GameFormInputs> = ({
  handleGameInput,
  setGameIsOn,
}) => {
  const [error, setError] = useState<string>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setGameIsOn(true);
      }}>
      <div>
        <label htmlFor="no-of-steps">Number of steps to complete game:</label>
        <input
          onChange={(e) =>
            handleGameInput({
              action: "set-step-count",
              payload: +e.target.value,
            })
          }
          className="border border-gray-600 ml-3 p-1 rounded-lg"
          type="number"
          min={MINIMUM_NO_OF_STEPS}
          id="no-of-rows"
          placeholder="Enter number of steps"
          required
        />
      </div>
      <div className="mt-2">
        <label htmlFor="no-of-rows">Number of rows:</label>
        <input
          onChange={(e) =>
            handleGameInput({ action: "set-rows", payload: +e.target.value })
          }
          className="border border-gray-600 ml-3 p-1 rounded-lg"
          type="number"
          min={MINIMUM_NO_OF_ROWS}
          id="no-of-rows"
          placeholder="Enter number of rows"
          required
        />
      </div>

      <div className="mt-2">
        <label htmlFor="no-of-columns">Number of columns:</label>
        <input
          onChange={(e) =>
            handleGameInput({ action: "set-cols", payload: +e.target.value })
          }
          className="border border-gray-600 ml-3 p-1 rounded-lg"
          type="number"
          min={MINIMUM_NO_OF_COLS}
          id="no-of-columns"
          placeholder="Enter number of columns"
          required
        />
      </div>

      <div className="mt-2">
        <label htmlFor="robot-position">Robot position (x,y):</label>
        <input
          onChange={(e) => {
            // TODO: Refactor to have a cleaner solution
            // TODO: Put check to ensure the input is not out of bounds
            const isInputValid =
              e.target.value
                .trim()
                .split(",")
                .filter((a) => a.trim().length !== 0).length === 2;
            if (!isInputValid) {
              setError("Bot position has to be in x,y format");
            } else {
              setError(undefined);
            }
            const [x, y] = e.target.value
              .trim()
              .split(",")
              .map((a) => +a);
            handleGameInput({ action: "setBotPosition", payload: { x, y } });
          }}
          className="border border-gray-600 ml-3 p-1 rounded-lg"
          type="text"
          id="robot-position"
          placeholder="Enter robot position"
          required
        />
      </div>

      <div className="mt-2">
        <label htmlFor="cookie-position">Cookie position (x,y):</label>
        <input
          onChange={(e) => {
            // TODO: Refactor to have a cleaner solution
            const isInputValid =
              e.target.value
                .trim()
                .split(",")
                .filter((a) => a.trim().length !== 0).length === 2;
            if (!isInputValid) {
              setError("Cookie position has to be in x,y format");
            } else {
              setError(undefined);
            }
            const [x, y] = e.target.value
              .trim()
              .split(",")
              .map((a) => +a);
            handleGameInput({ action: "setCookiePosition", payload: { x, y } });
          }}
          className="border border-gray-600 ml-3 p-1 rounded-lg"
          type="text"
          id="cookie-position"
          placeholder="Enter cookie position"
          required
        />
      </div>
      <div className="text-red-500 py-4">
        <span>{error}</span>
      </div>
      <button
        disabled={error !== undefined}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-35">
        Generate
      </button>
    </form>
  );
};

export default GameForm;
