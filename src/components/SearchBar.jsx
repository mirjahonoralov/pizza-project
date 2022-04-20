import React from "react";
import Button from "./Button";
import location from "../assets/icons/Location.png";

const SearchBar = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="p-3 bg-white flex-md-row flex-column d-flex justify-content-md-between justify-content-center  align-items-center">
          <div className="mb-3 mb-md-0">Проверить адрес доставки</div>
          <div className="d-flex col-md-8 gap-4 gap-sm-0 justify-content-md-between justify-content-sm-around">
            <div
              style={{ position: "relative" }}
              className="col-12 col-sm-8 col-md-8"
            >
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
            <div className="d-none d-sm-block">
              <Button value="Проверить" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
