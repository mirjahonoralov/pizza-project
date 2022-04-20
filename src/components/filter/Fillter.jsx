import React, { useContext } from "react";
import filter from "../../assets/icons/Filter.png";
import "./FilterStyle.css";
import Button from "../Button";
import { ProductContext } from "../../contexts/ProductContextProvider";

const Fillter = ({ product, id }) => {
  const { filterMenus } = useContext(ProductContext);
  return (
    <>
      <div className={`my-4 d-flex justify-content-between align-items-center`}>
        <h1 id={id}>{product}</h1>
        <div
          className="btn bg-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
        >
          <img src={filter} alt="" /> Фильтры
        </div>
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasLeft"
          tabIndex="-1"
          aria-labelledby="offcanvasLeftLabel"
        >
          <div
            className="p-3 bg-white offcanvas-body"
            style={{ borderRadius: "0px" }}
          >
            <div className="d-flex justify-content-between">
              <h3 className="my-0">Фильтры</h3>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {filterMenus.map((menu, id) => {
              return <FilterMenus menu={menu} key={id} />;
            })}
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
    </>
  );
};

export default Fillter;

const FilterMenus = ({ menu }) => {
  const { updatedFilterData, filterFunction } = useContext(ProductContext);
  const curr = updatedFilterData.filter((item) => item.type === menu);

  return (
    <div className="my-2">
      <p className="opacity-75 mb-1">{curr[0].type}</p>
      <div className="d-flex flex-wrap gap-2">
        {curr
          .filter((item) => item.type === menu)
          .map((item) => {
            return (
              <button
                className={`filter-btn border`}
                key={item.id}
                style={{ backgroundColor: `${item.selected && "#ff7010"}` }}
                onClick={() => filterFunction(item.id)}
              >
                {item.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
