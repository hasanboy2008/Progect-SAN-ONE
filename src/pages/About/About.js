import React, { useEffect } from "react";

// CSS style link
import "./about.css";
// import Image
import logo from "../../asest/about/logotext.png";
import image1 from "../../asest/about/image1.png.jpg";
import image2 from "../../asest/about/image2.png.jpg";
import image3 from "../../asest/about/image3.png.jpg";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <Router>
    <div className="aboutDiv">
      <div className="about_section1">
        <p>Biz haqimizda</p>
        <span>Kompaniyamiz haqida batafsil bilib olishingiz mumkin</span>
      </div>

      <div className="section2">
        <div className="container">
          <div className="left1">
            <p>Korxona tashkil etilishi</p>
            <span>
              SAN ONE brendi ostida faoliyat yurutuvchi oyoq kiyim savdosi bilan
              shug’ullanib kelayotgan SAN ONE MCHJ 2017-yil Toshkent shaxar
              Farobiy ko’chasi 38-uyda juda ham kichik 40kv metr joyda o’z
              faoliyatimizni boshlaganmiz. 2022-yil holatiga ko’ra “SAN+ONE”
              MCHJ ning 4 ta filiali mavjud bo’lib 70 nafardan ziyod fuqaro ish
              bilan ta’minlangan! Hozirda umumiy 2500 kv metr joyda faoliyat
              yuritmoqdamiz!
            </span>
          </div>

          <div className="right1">
            <div className="line">
              <span></span>
            </div>
            <div className="img">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="left2">
            <div className="img">
              <img src={image2} alt="" />
            </div>
            <div className="line">
              <span></span>
            </div>
          </div>

          <div className="right2">
            <p>Mahsulot ishlab chiqarish</p>
            <span>
              Biz odamlarning kundalik hayotiga ko'proq go'zallik va qulaylik,
              ko'proq moda va yuqori sifatli oyoq kiyimlar olib kelamiz. Biz o'z
              oilasini, yaqinlarini, uylarini sevadigan har bir kishiga yuqori
              sifatli oy kiyim mahsulotlarini ishlab chiqarishni
              ta'minlamoqchimiz.
            </span>
          </div>
        </div>

        <div className="container">
          <div className="left1">
            <p>Bizning jamoamiz</p>
            <span>
              Mahsulotlarimiz har doim qulaylik, sifat va modaning ilg'or
              tushunchalariga mos kelishi uchun biz doimo rivojlanamiz.
            </span>
          </div>

          <div className="right1">
            <div className="line">
              <span></span>
            </div>
            <div className="img">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <img src={logo} alt="" />
      </div>

      <div className="section4">
        {/* <NavLink to="#"><i className="pi pi-arrow-left"></i>Bosh sahifa</NavLink> */}
      </div>
    </div>
    // </Router>
  );
}
