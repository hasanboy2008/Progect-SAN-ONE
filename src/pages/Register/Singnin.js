import React, { useState } from "react";
import "./siginup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function Singnin() {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const update = useSelector((state) => state.reUpdateCard);
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");


  
  useEffect(() => {
    axios("https://api.sanone.uz/login/customer", {
      method: "POST",
      data: auth,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/");
          localStorage.setItem("auth", JSON.stringify(auth));
          localStorage.setItem("card", JSON.stringify(res.data.user.card));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, auth, update]);

  function hendelSubmit(e) {
    e.preventDefault();

    axios("https://api.sanone.uz/login/customer", {
      method: "POST",
      data: login,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/");
          localStorage.setItem("auth", JSON.stringify(login));
          localStorage.setItem("card", JSON.stringify(res.data.user.card));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="singnin">
      <form action="" onSubmit={hendelSubmit}>
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
            fill="#A18B7F"
          />
          <path
            d="M38.0342 31.9166C41.938 28.8443 42.6108 23.1949 39.5386 19.2911C36.4663 15.3873 30.8169 14.7144 26.9131 17.7867C23.0093 20.8589 22.3428 26.502 25.4087 30.4058C25.8467 30.9644 26.3545 31.4722 26.9131 31.9102C21.7842 33.9668 18.2041 38.6768 17.5947 44.1675C17.5058 44.9927 18.1025 45.7418 18.9277 45.8306C19.7529 45.9195 20.5019 45.3228 20.5908 44.4976C21.3271 37.9214 27.2622 33.1861 33.8384 33.9224C39.3989 34.5445 43.7851 38.9371 44.4136 44.4976C44.4961 45.2593 45.1435 45.837 45.9116 45.8306H46.0766C46.8955 45.7354 47.4858 44.9991 47.397 44.1802C46.7876 38.6768 43.1885 33.9605 38.0342 31.9166ZM32.4736 30.8501C29.1665 30.8501 26.4814 28.1651 26.4814 24.858C26.4814 21.5508 29.1665 18.8658 32.4736 18.8658C35.7807 18.8658 38.4658 21.5508 38.4658 24.858C38.4658 28.1651 35.7871 30.8501 32.4736 30.8501Z"
            fill="white"
          />
        </svg>

        <div className="singin_login">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4444 14.4055C16.0391 13.4455 15.451 12.5735 14.7127 11.8381C13.9768 11.1005 13.1049 10.5125 12.1454 10.1064C12.1368 10.1021 12.1282 10.1 12.1196 10.0957C13.4581 9.12891 14.3282 7.5541 14.3282 5.77734C14.3282 2.83398 11.9434 0.449219 9.00005 0.449219C6.05669 0.449219 3.67193 2.83398 3.67193 5.77734C3.67193 7.5541 4.54205 9.12891 5.88052 10.0979C5.87193 10.1021 5.86333 10.1043 5.85474 10.1086C4.89224 10.5146 4.02857 11.0969 3.28736 11.8402C2.54982 12.5762 1.96178 13.4481 1.55572 14.4076C1.1568 15.347 0.941656 16.3542 0.921929 17.3746C0.921355 17.3975 0.925377 17.4204 0.933758 17.4417C0.942138 17.4631 0.954707 17.4825 0.970725 17.4989C0.986742 17.5153 1.00588 17.5284 1.02702 17.5373C1.04816 17.5462 1.07087 17.5508 1.0938 17.5508H2.38287C2.4774 17.5508 2.55259 17.4756 2.55474 17.3832C2.59771 15.7246 3.26373 14.1713 4.44107 12.9939C5.65923 11.7758 7.27701 11.1055 9.00005 11.1055C10.7231 11.1055 12.3409 11.7758 13.559 12.9939C14.7364 14.1713 15.4024 15.7246 15.4454 17.3832C15.4475 17.4777 15.5227 17.5508 15.6172 17.5508H16.9063C16.9292 17.5508 16.9519 17.5462 16.9731 17.5373C16.9942 17.5284 17.0134 17.5153 17.0294 17.4989C17.0454 17.4825 17.058 17.4631 17.0663 17.4417C17.0747 17.4204 17.0788 17.3975 17.0782 17.3746C17.0567 16.3477 16.844 15.3486 16.4444 14.4055ZM9.00005 9.47266C8.01392 9.47266 7.0858 9.08809 6.38755 8.38984C5.68931 7.6916 5.30474 6.76348 5.30474 5.77734C5.30474 4.79121 5.68931 3.86309 6.38755 3.16484C7.0858 2.4666 8.01392 2.08203 9.00005 2.08203C9.98619 2.08203 10.9143 2.4666 11.6126 3.16484C12.3108 3.86309 12.6954 4.79121 12.6954 5.77734C12.6954 6.76348 12.3108 7.6916 11.6126 8.38984C10.9143 9.08809 9.98619 9.47266 9.00005 9.47266Z"
              fill="#7C7C7C"
            />
          </svg>

          <input
            type="text"
            name=""
            id=""
            placeholder="Login"
            onChange={(e) => {
              setLogin({ ...login, login: e.target.value });
            }}
          />
        </div>
        <div className=" singin_login singninpassword">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 6.66665H14.6667C14.8877 6.66665 15.0996 6.75444 15.2559 6.91072C15.4122 7.067 15.5 7.27897 15.5 7.49998V17.5C15.5 17.721 15.4122 17.933 15.2559 18.0892C15.0996 18.2455 14.8877 18.3333 14.6667 18.3333H1.33333C1.11232 18.3333 0.900358 18.2455 0.744078 18.0892C0.587797 17.933 0.5 17.721 0.5 17.5V7.49998C0.5 7.27897 0.587797 7.067 0.744078 6.91072C0.900358 6.75444 1.11232 6.66665 1.33333 6.66665H3V5.83331C3 4.50723 3.52678 3.23546 4.46447 2.29778C5.40215 1.3601 6.67392 0.833313 8 0.833313C9.32608 0.833313 10.5979 1.3601 11.5355 2.29778C12.4732 3.23546 13 4.50723 13 5.83331V6.66665ZM2.16667 8.33331V16.6666H13.8333V8.33331H2.16667ZM7.16667 11.6666H8.83333V13.3333H7.16667V11.6666ZM3.83333 11.6666H5.5V13.3333H3.83333V11.6666ZM10.5 11.6666H12.1667V13.3333H10.5V11.6666ZM11.3333 6.66665V5.83331C11.3333 4.94926 10.9821 4.10141 10.357 3.47629C9.7319 2.85117 8.88406 2.49998 8 2.49998C7.11594 2.49998 6.2681 2.85117 5.64298 3.47629C5.01786 4.10141 4.66667 4.94926 4.66667 5.83331V6.66665H11.3333Z"
              fill="#AFB4BB"
              fillOpacity="0.7"
            />
          </svg>

          <input
            type="text"
            name=""
            id=""
            placeholder="Parol"
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
        </div>
        <button>Kirish</button>
      </form>
    </div>
  );
}
