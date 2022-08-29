import React, { useState } from "react";
import "./siginup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acUser } from "../../Redux/User";

export function Singnin() {
  const [login, setLogin] = useState({ login: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ochish, setOchish] = useState(false);
  const korsat = () => {
    setOchish(!ochish);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    dispatch(acLoading(true));
    axios("https://api.sanone.uz/login/customer", {
      method: "POST",
      data: login,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      timeout: 5000,
    })
      .then((res) => {
        if (res.data.status) {
          navigate("/");
          enqueueSnackbar(res.data.message, {
            variant: "success",
          });
          dispatch(acUser(res.data.user));
        } else {
          enqueueSnackbar(res.data.message, {
            variant: "error",
          });
        }
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  };

  return (
    <div className="singnin">
      <form id="login-for-user" onSubmit={hendleSubmit}>
        <AccountCircleIcon />
        <div>
          <PersonIcon />
          <input
            type="text"
            placeholder="Login"
            value={login.login}
            onChange={(e) => {
              setLogin({ ...login, login: e.target.value });
            }}
          />
        </div>
        <div>
          <LockIcon />
          <input
            type={ochish ? "text" : "password"}
            placeholder="******"
            value={login.password}
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
          <button type="button" onClick={korsat} id="tyupe">
            {ochish ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
                id="yopiq"
              >
                <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z "
                  fill="#c9a95c"
                />
                <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                  fill="#c9a95c"
                />
                <path
                  d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                  fill="#c9a95c"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#c9a95c"
                className="bi bi-eye"
                viewBox="0 0 16 16"
                id="ochiq"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  fill="#c9a95c"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  fill="#c9a95c"
                />
              </svg>
            )}
          </button>
        </div>

        <Button type="submit">Kirish</Button>
        <p
          style={{
            width: "100%",
            textAlign: "end",
            textDecoration: "underline",
            color: "#00bcd4",
            cursor: "pointer",
            fontFamily: 'sans-serif'
          }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Ro'yxatdan o'tish
        </p>
      </form>
    </div>
  );
}
