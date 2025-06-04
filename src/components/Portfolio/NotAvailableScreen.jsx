import { config } from "../../config";

export const NotAvailableScreen = ({
  show,
  message = "Content not available yet :/",
}) => {
  return (
    <div
      className={`not-available-screen ${
        show ? "" : "not-available-screen--hidden"
      }`}
    >
      <div className="not-available-screen__container">
        <h1 className="not-available-screen__title">
          {config.notavailabletitle || "Oops!"}
        </h1>
        <h2 className="not-available-screen__message">{message}</h2>
      </div>
    </div>
  );
};
