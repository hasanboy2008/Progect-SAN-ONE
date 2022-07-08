import React from "react";
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

// React Icon import
import 'primeicons/primeicons.css';
// CSS style link
import "../About/about.css";
// import Image 
import logo from "../../asest/about/logotext.png";
import image1 from "../../asest/about/image1.png";
import image2 from "../../asest/about/image2.png";
import image3 from "../../asest/about/image3.png";

export function About() {
    return (
        <Router>
            <div className="aboutDiv">

                <div className="section1">
                    <p>Biz haqimizda</p>
                    <span>Kompaniyamiz haqida batafsil bilib olishingiz mumkin</span>
                </div>

                <div className="section2">

                    <div className="container">

                        <div className="left1">
                            <p>Korxona tashkil etilishi</p>
                            <span>Chakana savdo tarmog'i" magnit " 5 mart 1994 yilida Krasnodarda tashkil etilgan. Kompaniyaning tarixi uy kimyoviy moddalarini sotish bilan boshlandi. Birinchi oziq-ovqat do'koni 1998 yilda Krasnodarda ochilgan. 2000 da do'konlar "magnit"brendi bilan birlashtirildi.</span>
                        </div>

                        <div className="right1">
                            <div className="line"><span></span></div>
                            <div className="img">
                                <img src={image1} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="container">

                        <div className="left2">
                            <div className="img">
                                <img src={image2} alt="" />
                            </div>
                            <div className="line"><span></span></div>
                        </div>

                        <div className="right2">
                            <p>Mahsulot ishlab chiqarish</p>
                            <span>Mahsulotlar haqida ma'lumot - bu mahsulot nomi, ishlab chiqaruvchi (ish ijrochisi) yoki sotuvchi to'g'risidagi ma'lumotlar, sifat ko'rsatkichlari, narx va boshqalarni aks ettiruvchi ma'lumotlar.</span>
                        </div>

                    </div>

                    <div className="container">
                        <div className="left1">
                            <p>Bizning jamoamiz</p>
                            <span>Jamoa (lot. collectivus — kollektiv)-har qanday umumiy faoliyat, ish, o'qish, muayyan ijtimoiy vazifani hal qilish bilan birlashtirilgan shaxslar guruhi. Keng ma'noda-umumiy g'oyalar, ehtiyojlar, qiziqishlar bilan birlashtirilgan odamlar.</span>
                        </div>

                        <div className="right1">
                            <div className="line"><span></span></div>
                            <div className="img">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section3">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="section4">
                    <NavLink to="#"><i className="pi pi-arrow-left"></i>Bosh sahifa</NavLink>
                </div>

            </div>
        </Router>
    )
}