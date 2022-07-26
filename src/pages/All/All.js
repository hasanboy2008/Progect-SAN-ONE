import React, { useEffect, useState } from "react";
import "./all.css";
import { useSelector } from "react-redux";
import Cardlar from "../../components/cards/Cards";

export function All() {
  const products = useSelector((state) => state.reProducts);
  const search = useSelector((state) => state.reSearchProduct);

  const resultSearch = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.code.toLowerCase().includes(search.toLowerCase())
    );
  });

  // const search = useSelector((state) => state.reSearch);
  const [type, setType] = useState("");

  const [price, setPrice] = useState({ start: "", end: "9999999" });

  // Filter Price
  const resultFilterPrice = resultSearch.filter((product) => {
    return +product.price >= +price.start && +product.price <= +price.end;
  });

  // filter product type
  const resultFilterType = resultFilterPrice.filter((product) => {
    return product.type.toLowerCase().includes(type.toLowerCase());
  });

  // filter size
  // const [size, setSize] = useState("");
  // const resultFilterSize = resultFilterType.filter((product) => {
  //   return product.size.toLowerCase().includes(size.toLowerCase());
  // });

  // filter product season
  const [season, setSeason] = useState("");
  const resultFilterSeason = resultFilterType.filter((product) => {
    return product.season.toLowerCase().includes(season.toLowerCase());
  });

  // filter most viu
  const [mostView, setMostView] = useState(false);
  if (mostView) {
    products.sort((a, b) => {
      return a.view - b.view;
    });
  }

  const result = resultFilterSeason;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // open filter section
  const [openFilter, setOpenFilter] = useState(true);
  const openFilterSection = () => {
    setOpenFilter(!openFilter);
  };
  // window.addEventListener("click", function () {
  //   setOpenFilter(true);
  // });

  // end open filter section

  return (
    <div className="all">
      <div className="alltext">
        {/* <p>Krossovkalar</p> */}
        <span>Barcha mahsulot turlarini ko’rib chiqing</span>
      </div>
      <button id="filter_bnt" onClick={openFilterSection}>
        {openFilter ? "Filtr" : "close "}
      </button>

      <div id="allresalut">
        <div
          className={openFilter ? "all_filter" : " all_filter active_filter"}
        >
          <div className="fiter_nav">
            <p></p>
            <button onClick={openFilterSection}>
           x
            </button>
          </div>
          <div className="filter_price">
            <p> Narxi:</p>
            <form action="">
              <div className="filter_mini">
                <p>Dan</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setPrice({ ...price, start: e.target.value });
                  }}
                />
              </div>

              <div className="filter_mini">
                <p>Gacha</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setPrice({ ...price, end: e.target.value });
                  }}
                />
              </div>
            </form>
          </div>
          <div className="filter_Types">
            <button
              onClick={() => {
                setType("");
              }}
            >
              Barchasi
            </button>
            <button
              onClick={() => {
                setType("Makasima");
              }}
            >
              Makasima
            </button>
            <button
              onClick={() => {
                setType("Krossovka");
              }}
            >
              Krossovka
            </button>
            <button
              onClick={() => {
                setType(" Klassik krossovka");
              }}
            >
              Klassik krossovka
            </button>
            <button
              onClick={() => {
                setType(" Ishlov berilgan teri");
              }}
            >
              Ishlov berilgan teri
            </button>
            <button
              onClick={() => {
                setType(" Qochoq poyabzal");
              }}
            >
              Qochoq poyabzal
            </button>
            <button
              onClick={() => {
                setType("Shpallar");
              }}
            >
              Shpallar
            </button>
            <button
              onClick={() => {
                setType(" Ikki rangli");
              }}
            >
              Ikki rangli
            </button>
            <button
              onClick={() => {
                setType(" Klassik");
              }}
            >
              Klassik
            </button>
            <button
              onClick={() => {
                setType("Koja nabuk");
              }}
            >
              Koja nabuk
            </button>
            <button
              onClick={() => {
                setType("Zamsha");
              }}
            >
              Zamsha
            </button>
          </div>

          <div className="filter_ratio">
            <p>Razmeri:</p>
            <div className="ratio">
              <button
                onClick={() => {
                  // setSize("37");
                }}
              >
                37
              </button>
              <button
                onClick={() => {
                  // setSize("38");
                }}
              >
                38
              </button>
              <button
                onClick={() => {
                  // setSize("39");
                }}
              >
                39
              </button>
              <button
                onClick={() => {
                  // setSize("40");
                }}
              >
                40
              </button>
              <button
                onClick={() => {
                  // setSize("41");
                }}
              >
                41
              </button>
              <button
                onClick={() => {
                  // setSize("42");
                }}
              >
                42
              </button>
              <button
                onClick={() => {
                  // setSize("43");
                }}
              >
                43
              </button>
              <button
                onClick={() => {
                  // setSize("44");
                }}
              >
                44
              </button>
              <button
                onClick={() => {
                  // setSize("45");
                }}
              >
                45
              </button>
            </div>
          </div>
          {/* <div className="filter_tosend">
            <p>Qayerga yuborish</p>
            <select name="" id="">
              <option value=""></option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div> */}
          <div className="filter_season">
            <p>Mavsum:</p>
            <div className="season">
              <button
                onClick={() => {
                  setSeason("Kuzgi");
                }}
              >
                Kuzgi
              </button>
              <button
                onClick={() => {
                  setSeason("Qishgi");
                }}
              >
                Qishgi
              </button>
              <button
                onClick={() => {
                  setSeason("  Bahorgi");
                }}
              >
                Bahorgi
              </button>
              <button
                onClick={() => {
                  setSeason("Yozgi");
                }}
              >
                Yozgi
              </button>
            </div>
          </div>

          <div className="filter_best">
            <button>Eng ko‘p sotilyotganlari</button>
            <button
              onClick={() => {
                setMostView(true);
              }}
            >
              Eng ko‘p ko‘rilyotganlari
            </button>
            <button>Eng ohirgilari</button>
          </div>
        </div>
        <div className="allrezalut_right">
          <div id="alllllll">
            <Cardlar props={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
