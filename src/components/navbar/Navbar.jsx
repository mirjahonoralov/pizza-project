import React, { useContext, useEffect, useState } from "react";
import location from "../../assets/icons/Location.png";
import accountIcon from "../../assets/icons/Account.png";
import pizza from "../../assets/icons/Group 2.png";
import card from "../../assets/icons/Group 94.png";
// import { BsChevronDown } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContextProvider";
import SelectedProducts from "../selectedProducts/SelectedProducts";
import SaleBtn from "../SaleBtn";
import { BsChevronDown, BsBarChartSteps } from "react-icons/bs";
import NavToggleMenus from "./NavToggleMenus";

const Navbar = () => {
  const { sum } = useContext(ProductContext);
  const [hidden, setHidden] = useState("d-none");
  const [fixedNav, setFixedNav] = useState("");
  const [links, setLinks] = useState(false);
  function scroll() {
    if (window.scrollY > 100) {
      setHidden("d-block");
      setFixedNav("fixed-top");
    } else {
      setHidden("d-none");
      setFixedNav("");
    }
  }
  window.addEventListener("scroll", scroll);

  useEffect(() => {
    if (window.innerWidth > 992) setLinks(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) setLinks(true);
      else setLinks(false);
    });
  }, []);

  return (
    <>
      {/* ------ header ------ */}
      <section className="py-2 bg-white" id="header">
        <div className="container">
          <div className="justify-content-between aligin-items-center d-flex">
            <div className="d-flex gap-4">
              <span>
                <img src={location} alt="not found" /> Москва <BsChevronDown />
              </span>
              <span className="d-none d-lg-block">Проверить адрес</span>
              <span>Среднее время доставки*: 00:24:19</span>
            </div>
            <div className="justify-content-between aligin-items-center d-none d-lg-flex">
              <span>Время работы: c 11:00 до 23:00</span>
              <span className="ms-5">
                <img src={accountIcon} alt="" /> Войти в аккаунт
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----navbar---- */}
      <section
        className={`navbar bg-white py-3 ${fixedNav}  border-top`}
        style={{ zIndex: 5, transform: "0.5s linear all" }}
      >
        <div className="container bg-white">
          <div>
            <img src={pizza} alt="" /> Куда пицца
          </div>

          {/* ------- nav toggle ------ */}
          <div
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <BsBarChartSteps className="d-block d-sm-none text-dark" />
          </div>

          {/* ------- nav toggle ------ */}

          {links && (
            <div className={`${hidden} menus d-flex gap-4 align-items-center`}>
              <a href="#discount">Акции</a>
              <a href="#pizza">Пицца</a>
              <a href="#sushi">Суши</a>
              <a href="#drik">Напитки</a>
              <a href="#snack">Закуски</a>
              <a href="#kombo">Комбо</a>
              <a href="#dessert">Десерты</a>
              <a href="#souce">Соусы</a>

              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="more"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Другое
                </button>
                <ul className="dropdown-menu" aria-labelledby="more">
                  <li>
                    <a className="dropdown-item" href="#discount">
                      Акции
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#pizza">
                      Пользовательское соглашение
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#guarantee">
                      Условия гарантии
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#restaruant">
                      Ресторан
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#contact">
                      Контакты
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#support">
                      Поддержка
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#order">
                      Отследить заказ
                    </a>
                  </li>
                </ul>
              </div>
              {/* <a href="#">
              Другое <BsChevronDown />
            </a> */}
            </div>
          )}

          <SaleBtn value={sum} icon={card} />
          <SelectedProducts />
        </div>
      </section>

      <NavToggleMenus />
    </>
  );
};

export default Navbar;
