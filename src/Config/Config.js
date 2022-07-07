import axios from "axios";
import { useEffect } from "react";
import { acProducts } from "../Redux/Produc";
import { useDispatch } from "react-redux";


export function Config() {
  const dispache=useDispatch();
  useEffect(() => {
    axios("https://sanone.uz/view/products")
      .then((res) => {
        console.log(res.data);
        dispache(acProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return null;
}
