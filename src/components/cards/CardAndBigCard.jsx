export const Card = ({ icon, title }) => {
  return (
    <div className="mini-card col p-2 gap-2 gap-sm p-lg-4 border border-1 d-flex flex-md-column justify-content-center align-items-center bg-white">
      <img src={icon} alt="" />
      <div>{title}</div>
    </div>
  );
};

export const BigCard = ({ img, text, bgColor }) => {
  return (
    <div
      className="big-card text-white d-flex flex-column"
      style={{ backgroundColor: bgColor }}
    >
      <div className="overflow-hidden img-wapper" style={{ width: "100%" }}>
        <img src={img} alt="" style={{ width: "100%" }} />
      </div>
      <p className="px-3 py-3 fs-5 m-0">{text}</p>
    </div>
  );
};

// export const BigCard = ({ img, text, bgColor }) => {
//   return (
//     <div
//       className="big-card col-sm rounded-3 text-white d-flex flex-column justify-content-center position-relative"
//       style={{ backgroundColor: bgColor }}
//     >
//       <img src={img} alt="" style={{ marginBottom: "100px" }} />
//       <p
//         className="px-3 pb-3 fs-5 m-0"
//         style={{ position: "absolute", bottom: "0" }}
//       >
//         {text}
//       </p>
//     </div>
//   );
// };
