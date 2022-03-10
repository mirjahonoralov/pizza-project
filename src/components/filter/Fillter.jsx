import React, { useContext, useState } from "react";
import filter from "../../assets/icons/Filter.png";
// import { first, fourth, second, third } from "./FilterData";
import { GrClose } from "react-icons/gr";
import "./FilterStyle.css";
import Button from "../Button";
import { ProductContext } from "../../contexts/ProductContextProvider";

const FilterMenus = ({ data }) => {
  const { title, menus } = data;
  const [clickBtn, setClickBtn] = useState("");
  return (
    <div className="my-2">
      <p className="opacity-75 mb-1">{title}</p>
      <div className="d-flex flex-wrap gap-2">
        {menus.map((item) => {
          return (
            <button
              className={`filter-btn border ${clickBtn}`}
              key={item.id}
              onClick={() => setClickBtn("filter-btn-clicked")}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Fillter = ({ product }) => {
  const { filterDatas } = useContext(ProductContext);
  const [first, second, third, fourth] = filterDatas;
  return (
    <>
      <div className={`my-4 d-flex justify-content-between align-items-center`}>
        <h1>{product}</h1>
        <button
          type="button"
          className="btn"
          style={{ background: "#fff" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={filter} alt="" /> Фильтры
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="p-3 bg-white modal-content">
              <div className="d-flex justify-content-between">
                <h2 className="my-0">Фильтры</h2>
                <GrClose
                  style={{ cursor: "pointer" }}
                  className="btn-close"
                  aria-label="Close"
                  data-bs-dismiss="modal"
                />
              </div>
              <FilterMenus data={first} />
              <FilterMenus data={second} />
              <FilterMenus data={third} />
              <FilterMenus data={fourth} />
              <div className="d-flex justify-content-between px-3">
                <Button
                  value="Сбросить"
                  style={{ padding: "20px" }}
                  outline="true"
                />
                <Button value="Применить" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fillter;
