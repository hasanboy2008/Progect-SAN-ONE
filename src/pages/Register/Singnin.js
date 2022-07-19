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
            type="password"
            placeholder="******"
            value={login.password}
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
        </div>
        <Button type="submit">Kirish</Button>
      </form>
    </div>
  );
}
