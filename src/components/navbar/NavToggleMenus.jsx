import React from "react";
import accountIcon from "../../assets/icons/Account.png";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import "./Navbar.css";

const NavToggleMenus = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className={`bg-white container-fuild nav-toggle-menus`}>
        <div className="border-top px-3 py-2 border-bottom  bg-white d-flex justify-content-between">
          <span>
            <img src={accountIcon} alt="" /> Войти в аккаунт
          </span>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <ul className={` p-0 py-2 bg-white m-0`}>
          <li className="">
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

        <div className="flex-column border-top border-bottom px-3 py-1">
          <h4 className="mb-3">Контакты</h4>
          <p className="d-flex align-items-center gap-1">
            <IoCallOutline /> +7 (926) 223-10-11
          </p>
          <p className="d-flex align-items-center gap-1">
            <IoLocationOutline /> Москва, ул. Юных Ленинцев, д.99
          </p>
          <p className="d-flex gap-3 mb-2">
            <span className="d-flex align-items-center gap-1">
              <BsFacebook /> Facebok
            </span>
            <span className="d-flex align-items-center gap-1">
              <BsInstagram /> Instagram
            </span>
          </p>
        </div>

        <div className="px-3 py-2 opacity-75 text-center">
          Время работы: с 11:00 до 23:00
        </div>
      </div>
    </div>
  );
};

export default NavToggleMenus;
