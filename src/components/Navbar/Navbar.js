import React, { useState, useEffect } from "react";
import logo_nav from "../../asest/navbar/Vector (2).png";
// import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { acSearchProduct } from "../../Redux/Search";
import { useDispatch, useSelector } from "react-redux/es/exports";
import logo2 from "../../asest/navbar/Vector.svg";
import Badge from "@mui/material/Badge";

export function Navbar() {
  let scroll1 = window.pageYOffset;
  window.onscroll = function () {
    let scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-200px";
    }
    scroll1 = scroll2;
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const carts = useSelector((state) => state.reCart);
  // btn active

  // const auth = useSelector((state) => state.reAuth);

  // navbar open func
  const [navbar, setNavbar] = useState(true);
  const navOpen = () => {
    setNavbar(!navbar);
  };
  const [auth, setAuth] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  const home = path === "/";
  // const dispatch = useDispatch();
  // search
  // const [search,setSearch]=useState("")
  // console.log(user);
  useEffect(() => {
    if (user.id) {
      setAuth(true);
      // console.log(user);
    }
  }, [user]);

  // style
  const styleForHome = {
    text: {
      color: "#fff",
    },
    search_nav: {
      background: "#CA9760",
    },
  };
  const styleForOther = {
    text: {
      color: "#A18B7F",
    },
    search_nav: {
      background: "#ffffff",
      border: " 1px solid #A18B7F",
      borderRadius: "8px",
    },
  };

  return (
    <div className="navbar ">
      <nav style={home ? { background: "#D5772F" } : {}}>
        <div className="logo_nav">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo2} alt="" id="navlogo_img" />
            <img src={home ? logo_nav : logo2} alt="" />
          </button>
        </div>
        <div className="catalog_pages_nav">
          <button
            onClick={() => {
              navigate("/katalog");
            }}
            style={home ? styleForHome.text : styleForOther.text}
          >
            KATALOG
          </button>
          <button
            onClick={() => {
              navigate("/about");
            }}
            style={home ? { color: "#ffffff" } : { color: "#A18B7F" }}
          >
            BIZ HAQIMIZDA
          </button>
        </div>
        <div className="basket_nav">
          <form
            className="search_nav"
            style={home ? styleForHome.search_nav : styleForOther.search_nav}
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/all");
              dispatch(acSearchProduct(e.target.value));
            }}
          >
            <div className="input_Div">
              <input
                type="text"
                id=""
                style={home ? { color: "#fff" } : { color: "#333" }}
              />
            </div>
            <button type="submit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5837 13.733C9.71256 16.0325 5.50984 15.8515 2.84832 13.19C-0.00738412 10.3343 -0.00738412 5.70428 2.84832 2.84857C5.70403 -0.00714028 10.3341 -0.00713974 13.1898 2.84857C15.8513 5.51008 16.0323 9.71279 13.7327 12.5839L19.318 18.1692C19.6353 18.4865 19.6353 19.0009 19.318 19.3182C19.0007 19.6355 18.4863 19.6355 18.169 19.3182L12.5837 13.733ZM3.99737 12.041C1.77627 9.81985 1.77627 6.21872 3.99737 3.99762C6.21848 1.77651 9.8196 1.77651 12.0407 3.99762C14.2602 6.21709 14.2618 9.81456 12.0456 12.0361C12.044 12.0377 12.0423 12.0393 12.0407 12.0409C12.0391 12.0426 12.0374 12.0442 12.0358 12.0458C9.81433 14.2621 6.21685 14.2604 3.99737 12.041Z"
                  fill={home ? "#fff" : "#A18B7F"}
                />
              </svg>
            </button>
          </form>
          <div id="basket_nav">
            <button
              onClick={() => {
                navigate("/basket");
              }}
              style={
                home ? { background: "#D0995E" } : { background: "#C9A95C" }
              }
            >
              <Badge badgeContent={carts.length} color="success">
                <svg
                  width="31"
                  height="29"
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.7216 3.875L7.00271 3.875L5.23245 0.701895C5.03375 0.34573 4.65784 0.125 4.25 0.125L2 0.125C1.37868 0.125 0.875 0.62868 0.875 1.25C0.875 1.87132 1.37868 2.375 2 2.375H3.5894L5.33644 5.50648L9.36555 14.4213L9.36968 14.4304L9.72456 15.2156L5.6793 19.5306C5.38843 19.8408 5.29738 20.2886 5.44398 20.6878C5.59057 21.087 5.94976 21.3694 6.37229 21.4177L10.0595 21.8391C14.6715 22.3662 19.3286 22.3662 23.9406 21.8391L27.6278 21.4177C28.2451 21.3472 28.6883 20.7896 28.6178 20.1723C28.5472 19.555 27.9896 19.1117 27.3723 19.1823L23.6851 19.6037C19.2428 20.1114 14.7572 20.1114 10.315 19.6037L8.85169 19.4364L11.8208 16.2694C11.8495 16.2388 11.8762 16.207 11.9008 16.1742L13.03 16.3211C14.6124 16.527 16.2119 16.5674 17.8027 16.4415C21.5129 16.1481 24.9515 14.3826 27.3522 11.5386L28.2193 10.5114C28.2484 10.4769 28.2754 10.4407 28.3002 10.4029L29.9163 7.94014C31.0618 6.19449 29.8095 3.875 27.7216 3.875ZM11.9844 13.9161C11.7363 13.8838 11.5223 13.7262 11.4179 13.4991L11.4159 13.4947L8.08511 6.125L27.7216 6.125C28.0199 6.125 28.1988 6.45636 28.0351 6.70573L26.4562 9.11185L25.6329 10.0873C23.6198 12.4721 20.7364 13.9525 17.6253 14.1985C16.1904 14.312 14.7476 14.2756 13.3203 14.0899L11.9844 13.9161Z"
                    fill="white"
                  />
                  <path
                    d="M8.75 23.75C7.50736 23.75 6.5 24.7574 6.5 26C6.5 27.2426 7.50736 28.25 8.75 28.25C9.99264 28.25 11 27.2426 11 26C11 24.7574 9.99264 23.75 8.75 23.75Z"
                    fill="white"
                  />
                  <path
                    d="M23 26C23 24.7574 24.0074 23.75 25.25 23.75C26.4926 23.75 27.5 24.7574 27.5 26C27.5 27.2426 26.4926 28.25 25.25 28.25C24.0074 28.25 23 27.2426 23 26Z"
                    fill="white"
                  />
                </svg>
              </Badge>
            </button>
            <button
              id="user_img"
              onClick={() => {
                navigate(auth ? "/myacount" : "/signin");
              }}
              style={
                home ? { background: "#D0995E" } : { background: " #A18B7F" }
              }
            >
              {user.img ? (
                <img src={user.img} alt="" />
              ) : (
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.625 7.25C5.625 3.72918 8.47919 0.875 12 0.875C15.5208 0.875 18.375 3.72918 18.375 7.25C18.375 10.7708 15.5208 13.625 12 13.625C8.47919 13.625 5.625 10.7708 5.625 7.25ZM12 3.125C9.72183 3.125 7.875 4.97183 7.875 7.25C7.875 9.52817 9.72183 11.375 12 11.375C14.2782 11.375 16.125 9.52817 16.125 7.25C16.125 4.97183 14.2782 3.125 12 3.125Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18.125C4.13604 18.125 2.625 19.636 2.625 21.5V23.2824C2.625 23.3096 2.64467 23.3327 2.67145 23.3371C8.84959 24.3458 15.1504 24.3458 21.3285 23.3371C21.3553 23.3327 21.375 23.3096 21.375 23.2824V21.5C21.375 19.636 19.864 18.125 18 18.125H17.4887C17.4492 18.125 17.4099 18.1313 17.3723 18.1435L16.074 18.5674C13.4268 19.4319 10.5732 19.4319 7.92598 18.5674L6.6277 18.1435C6.59012 18.1313 6.55084 18.125 6.5113 18.125H6ZM0.375 21.5C0.375 18.3934 2.8934 15.875 6 15.875H6.5113C6.78804 15.875 7.06304 15.9188 7.32611 16.0047L8.62438 16.4286C10.8178 17.1448 13.1822 17.1448 15.3756 16.4286L16.6739 16.0047C16.937 15.9188 17.212 15.875 17.4887 15.875H18C21.1066 15.875 23.625 18.3934 23.625 21.5V23.2824C23.625 24.4123 22.8062 25.3756 21.6911 25.5577C15.2729 26.6056 8.72715 26.6056 2.30891 25.5577C1.19383 25.3756 0.375 24.4123 0.375 23.2824L0.375 21.5Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <button id="menu" onClick={navOpen}>
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="#BD6F18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="8"
              width="27"
              height="3"
              fill={home ? "#fff" : "#BD6F18"}
            />
            <rect
              y="16"
              width="27"
              height="3"
              fill={home ? "#fff" : "#BD6F18"}
            />
            <rect width="27" height="3" fill={home ? "#fff" : "#BD6F18"} />
          </svg>
        </button>
      </nav>

      <div
        className={navbar ? "nav_menu" : "nav_menu active_navs"}
        style={home ? { background: "#BD6F18" } : {}}
      >
        <button
          onClick={() => {
            navigate("/katalog");
            navOpen();
          }}
          style={home ? styleForHome.text : styleForOther.text}
        >
          KATALOG
        </button>
        <button
          onClick={() => {
            navigate("/about");
            navOpen();
          }}
          style={home ? { color: "#ffffff" } : { color: "#A18B7F" }}
        >
          BIZ HAQIMIZDA
        </button>{" "}
        <div id="basket_nav">
          <button
            onClick={() => {
              navigate("/basket");
              navOpen();
            }}
            style={home ? { background: "#D0995E" } : { background: "#C9A95C" }}
          >
            <Badge badgeContent={carts.length} color="success">
              <svg
                width="29"
                height="29"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.7216 3.875L7.00271 3.875L5.23245 0.701895C5.03375 0.34573 4.65784 0.125 4.25 0.125L2 0.125C1.37868 0.125 0.875 0.62868 0.875 1.25C0.875 1.87132 1.37868 2.375 2 2.375H3.5894L5.33644 5.50648L9.36555 14.4213L9.36968 14.4304L9.72456 15.2156L5.6793 19.5306C5.38843 19.8408 5.29738 20.2886 5.44398 20.6878C5.59057 21.087 5.94976 21.3694 6.37229 21.4177L10.0595 21.8391C14.6715 22.3662 19.3286 22.3662 23.9406 21.8391L27.6278 21.4177C28.2451 21.3472 28.6883 20.7896 28.6178 20.1723C28.5472 19.555 27.9896 19.1117 27.3723 19.1823L23.6851 19.6037C19.2428 20.1114 14.7572 20.1114 10.315 19.6037L8.85169 19.4364L11.8208 16.2694C11.8495 16.2388 11.8762 16.207 11.9008 16.1742L13.03 16.3211C14.6124 16.527 16.2119 16.5674 17.8027 16.4415C21.5129 16.1481 24.9515 14.3826 27.3522 11.5386L28.2193 10.5114C28.2484 10.4769 28.2754 10.4407 28.3002 10.4029L29.9163 7.94014C31.0618 6.19449 29.8095 3.875 27.7216 3.875ZM11.9844 13.9161C11.7363 13.8838 11.5223 13.7262 11.4179 13.4991L11.4159 13.4947L8.08511 6.125L27.7216 6.125C28.0199 6.125 28.1988 6.45636 28.0351 6.70573L26.4562 9.11185L25.6329 10.0873C23.6198 12.4721 20.7364 13.9525 17.6253 14.1985C16.1904 14.312 14.7476 14.2756 13.3203 14.0899L11.9844 13.9161Z"
                  fill="white"
                />
                <path
                  d="M8.75 23.75C7.50736 23.75 6.5 24.7574 6.5 26C6.5 27.2426 7.50736 28.25 8.75 28.25C9.99264 28.25 11 27.2426 11 26C11 24.7574 9.99264 23.75 8.75 23.75Z"
                  fill="white"
                />
                <path
                  d="M23 26C23 24.7574 24.0074 23.75 25.25 23.75C26.4926 23.75 27.5 24.7574 27.5 26C27.5 27.2426 26.4926 28.25 25.25 28.25C24.0074 28.25 23 27.2426 23 26Z"
                  fill="white"
                />
              </svg>
            </Badge>
          </button>
          <button
            id="user_img"
            onClick={() => {
              navigate(auth ? "/myacount" : "/signin");
              navOpen();
            }}
            style={
              home ? { background: "#D0995E" } : { background: " #A18B7F" }
            }
          >
            {user.img ? (
              <img src={user.img} alt="" />
            ) : (
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.625 7.25C5.625 3.72918 8.47919 0.875 12 0.875C15.5208 0.875 18.375 3.72918 18.375 7.25C18.375 10.7708 15.5208 13.625 12 13.625C8.47919 13.625 5.625 10.7708 5.625 7.25ZM12 3.125C9.72183 3.125 7.875 4.97183 7.875 7.25C7.875 9.52817 9.72183 11.375 12 11.375C14.2782 11.375 16.125 9.52817 16.125 7.25C16.125 4.97183 14.2782 3.125 12 3.125Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18.125C4.13604 18.125 2.625 19.636 2.625 21.5V23.2824C2.625 23.3096 2.64467 23.3327 2.67145 23.3371C8.84959 24.3458 15.1504 24.3458 21.3285 23.3371C21.3553 23.3327 21.375 23.3096 21.375 23.2824V21.5C21.375 19.636 19.864 18.125 18 18.125H17.4887C17.4492 18.125 17.4099 18.1313 17.3723 18.1435L16.074 18.5674C13.4268 19.4319 10.5732 19.4319 7.92598 18.5674L6.6277 18.1435C6.59012 18.1313 6.55084 18.125 6.5113 18.125H6ZM0.375 21.5C0.375 18.3934 2.8934 15.875 6 15.875H6.5113C6.78804 15.875 7.06304 15.9188 7.32611 16.0047L8.62438 16.4286C10.8178 17.1448 13.1822 17.1448 15.3756 16.4286L16.6739 16.0047C16.937 15.9188 17.212 15.875 17.4887 15.875H18C21.1066 15.875 23.625 18.3934 23.625 21.5V23.2824C23.625 24.4123 22.8062 25.3756 21.6911 25.5577C15.2729 26.6056 8.72715 26.6056 2.30891 25.5577C1.19383 25.3756 0.375 24.4123 0.375 23.2824L0.375 21.5Z"
                  fill="white"
                />
              </svg>
            )}
            
          </button>
        </div>
        <div
          className="search_nav_menu"
          style={home ? styleForHome.search_nav : styleForOther.search_nav}
        >
          <div className="input_Div">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/all");
                dispatch(acSearchProduct(e.target.value));
              }}
            >
              <input
                type="text"
                id=""
                style={home ? { color: "#fff" } : { color: "#333" }}
              />
            </form>
          </div>
          <button
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/all");
              dispatch(acSearchProduct(e.target.value));
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5837 13.733C9.71256 16.0325 5.50984 15.8515 2.84832 13.19C-0.00738412 10.3343 -0.00738412 5.70428 2.84832 2.84857C5.70403 -0.00714028 10.3341 -0.00713974 13.1898 2.84857C15.8513 5.51008 16.0323 9.71279 13.7327 12.5839L19.318 18.1692C19.6353 18.4865 19.6353 19.0009 19.318 19.3182C19.0007 19.6355 18.4863 19.6355 18.169 19.3182L12.5837 13.733ZM3.99737 12.041C1.77627 9.81985 1.77627 6.21872 3.99737 3.99762C6.21848 1.77651 9.8196 1.77651 12.0407 3.99762C14.2602 6.21709 14.2618 9.81456 12.0456 12.0361C12.044 12.0377 12.0423 12.0393 12.0407 12.0409C12.0391 12.0426 12.0374 12.0442 12.0358 12.0458C9.81433 14.2621 6.21685 14.2604 3.99737 12.041Z"
                fill={home ? "#fff" : "#A18B7F"}
              />
            </svg>
          </button>
        </div>
        <button onClick={() => setNavbar(!navbar)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7803 15.2803C19.0732 14.9874 19.0732 14.5126 18.7803 14.2197L12.5303 7.96967C12.2374 7.67678 11.7626 7.67678 11.4697 7.96967L5.21967 14.2197C4.92678 14.5126 4.92678 14.9874 5.21967 15.2803C5.51256 15.5732 5.98744 15.5732 6.28033 15.2803L12 9.56066L17.7197 15.2803C18.0126 15.5732 18.4874 15.5732 18.7803 15.2803Z"
              fill={home ? "#fff" : "#A18B7F"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
