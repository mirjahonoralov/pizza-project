import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 flex-column justify-content-between">
          <h2 className="mb-3">Сладкий перец</h2>
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
        <div className="col-3 flex-column">
          <h4 className="mb-3">Контакты</h4>
          <p>+7 (926) 223-10-11</p>
          <p>Москва, ул. Юных Ленинцев, д.99</p>
          <p className="d-flex gap-3">
            <span>Facebok</span>
            <span>Instagram</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
