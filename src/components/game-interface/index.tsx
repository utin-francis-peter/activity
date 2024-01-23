import { TAppState, TPosition, TStep } from "../../types/types";
import GameTable from "./game-table";
import GameControls from "./game-controls";

// TODO: generate dynamic table

const GameInterface: React.FC<{
  gameInputs: TAppState;
  addStep: (step: TStep) => void;
  handleBotPosition: (position: TPosition) => void;
}> = ({ gameInputs, addStep, handleBotPosition }) => {
  // dimension should be dynamic to controls number of rows and columns
  const { botPosition, cookiePosition, dimension, noOfSteps, steps } =
    gameInputs;
  const handleMovement = (
    step: TStep,
    x = botPosition.x,
    y = botPosition.y
  ) => {
    switch (step) {
      case "Move Left":
        x -= 1;

        break;
      case "Move Right":
        x += 1;

        break;
      case "Move Up":
        y -= 1;

        break;
      case "Move Down":
        y += 1;

        break;

      default:
        break;
    }

    return { x, y };
  };
  const runProgram = async () => {
    const delay = 1000; // Set the delay time in milliseconds
    let x = botPosition.x;
    let y = botPosition.y;
    steps.forEach((item, index) => {
      setTimeout(() => {
        console.log(item, "step", steps, "x", x, "y", y);
        const position = handleMovement(item, x, y);
        x = position.x;
        y = position.y;
        handleBotPosition(position);
      }, index * delay);
    });
  };

  return (
    <main className="w-[80%] h-[90%]">
      <div className="flex gap-16 h-[80%]">
        <div className="w-1/2 h-full border border-red-600">
          {/* game table */}
          <GameTable
            dimension={dimension}
            botPosition={botPosition}
            cookiePosition={cookiePosition}
          />
        </div>

        <div className="w-1/2 h-full border border-blue-600 px-4 ">
          <h5 className="mb-4">Steps</h5>
          <ol className="h-[90%]">
            {Array(noOfSteps)
              .fill(0)
              .map((_, i) => {
                return (
                  <li key={i}>
                    {i + 1}. {steps[i]}
                  </li>
                );
              })}
          </ol>

          <div className="h-[10%] flex items-center justify-center">
            <button
              className="border border-black"
              onClick={() => runProgram()}>
              Run Program
            </button>
          </div>
        </div>
      </div>

      {/* cookie navs */}
      <div className="h-[20%] flex items-center justify-center flex-col">
        <h3 className="mb-4">
          Using the following instructions, help the robot get to the cookie
        </h3>
        {/* render controls here */}
        <GameControls addStep={addStep} />
      </div>
    </main>
  );
};

export default GameInterface;
