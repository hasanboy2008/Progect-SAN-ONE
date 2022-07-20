import axios from "axios";
import { useEffect } from "react";
import { acProducts } from "../Redux/Produc";
import { useDispatch, useSelector } from "react-redux";
import { acCart } from "../Redux/Carta";

export function Config() {
  const dispache = useDispatch();
  const user = useSelector((state) => state.reUser);
  const reloadCard = useSelector((state) => state.reReloadCard);

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

  useEffect(() => {
    if (user.token) {
      axios(`https://api.sanone.uz/myCard/${user.id}`, {
        method: "POST",

        headers: {
          token: user.token,
        },
      })
        .then((res) => {
          dispache(acCart(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispache, user, reloadCard]);

  useEffect(() => {
    if (user.token) {
      axios("https://api.sanone.uz/authorization/customer", {
        method: "POST",
        headers: {
          Accept: "*/*",
          method: "POST",
          token: user.token,
          login: user.login,
        },
      })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return null;
}
