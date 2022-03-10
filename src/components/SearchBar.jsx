import React from "react";
import Button from "./Button";
import location from "../assets/icons/Location.png";

const SearchBar = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="p-3 bg-white d-flex justify-content-between align-items-center">
          <div className="">Проверить адрес доставки</div>
          <div style={{ width: "60%", position: "relative" }}>
            <img
              src={location}
              alt=""
              style={{ position: "absolute", top: "20%", left: "15px" }}
            />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Адрес"
            />
          </div>
          <div className="">
            <Button value="Проверить" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
