import React from "react";
import { TStep } from "../../../types/types";

type TSetBotPosition = {
  addStep: (step: TStep) => void;
};

const GameControls: React.FC<TSetBotPosition> = ({ addStep }) => {
  return (
    <Buttons
      data={[
        {
          label: "Move Left",
          onClick: () => addStep("Move Left"),
        },
        {
          label: "Move Right",
          onClick: () => addStep("Move Right"),
        },
        {
          label: "Move Up",
          onClick: () => addStep("Move Up"),
        },
        {
          label: "Move Down",
          onClick: () => addStep("Move Down"),
        },
      ]}
    />
  );
};

const Buttons: React.FC<{ data: { label: string; onClick: () => void }[] }> = ({
  data,
}) => {
  return (
    <div className="flex gap-4">
      {data.map(({ label, onClick }) => (
        <button onClick={onClick}>{label}</button>
      ))}
    </div>
  );
};

export default GameControls;
