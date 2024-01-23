import { TAppState } from "../../../types/types";

const GameTable: React.FC<
  Pick<TAppState, "botPosition" | "dimension" | "cookiePosition">
> = ({ dimension, botPosition, cookiePosition }) => {
  return (
    <table className="border-2 border-gray-700 w-full h-full">
      <tbody>
        {Array(dimension.rows)
          .fill(0)
          .map((_, i) => {
            return (
              <tr className="border border-red-600" key={i}>
                {Array(dimension.cols)
                  .fill(0)
                  .map((_, j) => {
                    return (
                      <td
                        className="border border-blue-600 w-[10%] h-[10%] text-center"
                        key={j}
                      >
                        {i === botPosition.y && j === botPosition.x ? (
                          <Bot />
                        ) : null}
                        {i === cookiePosition.y && j === cookiePosition.x ? (
                          <Cookie />
                        ) : null}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

const Bot = () => {
  return <div className="inline-block text-2xl">🤖</div>;
};
const Cookie = () => {
  return <div className="inline-block text-2xl">🍪</div>;
};

export default GameTable;
