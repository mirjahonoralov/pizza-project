import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../../assets/icons/Group 2.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="d-flex border-top p-3 align-items-start">
        <div className="col-3 flex-column justify-content-between">
          <div className="d-flex gap-3 mb-3">
            <img src={logo} alt="logo" style={{ width: "40px" }} />
            <h3>Куда пицца</h3>
          </div>
          <p>© Copyright 2021 — Куда Пицца</p>
        </div>
        <div className="col-3 flex-column d-flex ">
          <h4 className="mb-3">Куда пицца</h4>
          <p>О компании</p>
          <p>Пользовательское соглашение</p>
          <p>Условия гарантии</p>
        </div>
        <div className="col-3 flex-column">
          <h4 className="mb-3">Помощь</h4>
          <p>Ресторан</p>
          <p>Контакты</p>
          <p>Поддержка</p>
          <p>Отследить заказ</p>
        </div>
        <div className="flex-column ">
          <h4 className="mb-3">Контакты</h4>
          <p className="d-flex align-items-center gap-1">
            <IoCallOutline /> +7 (926) 223-10-11
          </p>
          <p className="d-flex align-items-center gap-1">
            <IoLocationOutline /> Москва, ул. Юных Ленинцев, д.99
          </p>
          <p className="d-flex gap-3">
            <span className="d-flex align-items-center gap-1">
              <BsFacebook /> Facebok
            </span>
            <span className="d-flex align-items-center gap-1">
              <BsInstagram /> Instagram
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
