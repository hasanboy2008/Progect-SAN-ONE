import axios from "axios";
import { useEffect } from "react";
import { acProducts } from "../Redux/Produc";
import { useDispatch } from "react-redux";
import { acCart } from "../Redux/Carta";

export function Config() {
  const dispache = useDispatch();
  

  useEffect(() => {
    axios("https://api.sanone.uz/view/products")
      .then((res) => {
        // console.log(res.data);
        dispache(acProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispache]);

  const token = JSON.parse(localStorage.getItem("user") || "{}").token || false;
  const id = JSON.parse(localStorage.getItem("user") || "{}").id || false;

  useEffect(() => {
    axios(`https://api.sanone.uz/myCard/${id}`, {
      method: "POST",

      headers: {
        token: token,
      },
    })
      .then((res) => {
     dispache(acCart(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, id,dispache]);

  return null;
}
