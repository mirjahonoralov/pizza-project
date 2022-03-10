import React, { useContext, useEffect, useState } from "react";
import location from "../assets/icons/Location.png";
import accountIcon from "../assets/icons/Account.png";
import pizza from "../assets/icons/Group 2.png";
import card from "../assets/icons/Group 94.png";
import Button from "./Button";
import { BsChevronDown } from "react-icons/bs";
import { ProductContext } from "../contexts/ProductContextProvider";

const Navbar = () => {
  const { sum } = useContext(ProductContext);
  const [hidden, setHidden] = useState("d-none");
  const [fixedNav, setFixedNav] = useState("");
  function scroll() {
    if (window.scrollY > 100) {
      setHidden("d-block");
      setFixedNav("fixed-top");
    } else {
      setHidden("d-none");
      setFixedNav("");
    }
  }

  // useEffect(() => {
  window.addEventListener("scroll", scroll);
  // }, []);

  return (
    <>
      <section className="py-2 bg-white mb-1" id="header">
        <div className="container">
          <div className="justify-content-between aligin-items-center d-flex">
            <div className="">
              <span>
                <img src={location} alt="not found" /> Москва
              </span>
              <span>Проверить адрес</span>
              <span>Среднее время доставки*:00:24:19</span>
            </div>
            <div className="">
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
        className={`navbar bg-white py-3 ${fixedNav}`}
        style={{ zIndex: 5 }}
      >
        <div className={`container  bg-white `}>
          <div>
            <img src={pizza} alt="" /> Куда пицца
          </div>
          <div className={` ${hidden} menus d-flex gap-4 align-items-center`}>
            <a href="#">Акции</a>
            <a href="#">Пицца</a>
            <a href="#">Суши</a>
            <a href="#">Напитки</a>
            <a href="#">Закуски</a>
            <a href="#">Комбо</a>
            <a href="#">Десерты</a>
            <a href="#">Соусы</a>

            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="more"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Другое
              </button>
              <ul class="dropdown-menu" aria-labelledby="more">
                <li>
                  <a class="dropdown-item" href="#">
                    Акции
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Условия гарантии
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Ресторан
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Отследить заказ
                  </a>
                </li>
              </ul>
            </div>
            {/* <a href="#">
              Другое <BsChevronDown />
            </a> */}
          </div>
          <Button value={`${sum} ₽`} icon={card} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
