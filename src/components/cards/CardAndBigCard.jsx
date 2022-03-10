export const Card = ({ icon, title }) => {
  return (
    <div className="col p-4 rounded-3 border border-1 d-flex flex-column justify-content-center align-items-center bg-white">
      <img src={icon} alt="" />
      <div>{title}</div>
    </div>
  );
};

export const BigCard = ({ img, text, bgColor }) => {
  return (
    <div
      className="col rounded-3 text-white d-flex flex-column justify-content-center"
      style={{
        backgroundColor: bgColor,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img src={img} alt="" style={{ marginBottom: "100px" }} />
      <p
        className="px-3 pb-3 fs-5 m-0"
        style={{ position: "absolute", bottom: "0" }}
      >
        {text}
      </p>
    </div>
  );
};
