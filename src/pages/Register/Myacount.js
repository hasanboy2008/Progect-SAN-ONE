import React, { useState } from "react";
import "./MyAccaunt.css";
import axios from "axios";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import NumberFormat from "react-number-format";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acUser } from "../../Redux/User";

export function Myacount() {
  const user = useSelector((state) => state.reUser);
  const [data, setData] = useState(user);
  const [img, setImg] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  function hendleSubmit(e) {
    e.preventDefault();
    dispatch(acLoading(true));
    const formData = new FormData();
    formData.append("img", img);
    formData.append("data", JSON.stringify(data));

    axios("https://api.sanone.uz/update/customer", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
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
  }

  return (
    <div id="myAccount">
      <form id="myProfile" onSubmit={hendleSubmit}>
        <figure>
          <img
            src={img ? URL.createObjectURL(img) : data.img ? data.img : ""}
            alt=""
          />
        </figure>

        <label>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <span>Rasm yuklash</span>
        </label>

        <div>
          <div>
            <PersonIcon />
            <input
              type="text"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div>
            <PersonIcon />
            <input
              type="text"
              value={data.surname}
              onChange={(e) => {
                setData({ ...data, surname: e.target.value });
              }}
            />
          </div>
          <div>
            <PhoneIcon />
            <NumberFormat
              allowEmptyFormatting
              value={data.phone}
              format="+99 8## ### ####"
              onValueChange={(values) => {
                const { value } = values;
                setData({ ...data, phone: value });
              }}
            />
          </div>
          <div>
            <EmailIcon />
            <input
              type="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div>
            <PersonPinCircleIcon />
            <input
              type="text"
              value={data.region}
              onChange={(e) => {
                setData({ ...data, region: e.target.value });
              }}
            />
          </div>
          <div>
            <PersonPinCircleIcon />
            <input
              type="text"
              value={data.mfy}
              onChange={(e) => {
                setData({ ...data, mfy: e.target.value });
              }}
            />
          </div>
        </div>

        <Button type="submit">
          <span>Tahrirlash</span>
        </Button>
      </form>
    </div>
  );
}
