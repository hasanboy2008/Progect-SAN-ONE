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
        {openFilter ? "Filtr" : "yopish "}
      </button>

      <div id="allresalut">
        <div
          className={openFilter ? "all_filter" : " all_filter active_filter"}
        >
          <div className="fiter_nav">
            <p>Filter</p>
            <button onClick={openFilterSection}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6195 6.8438V1.24636C19.6195 0.959769 19.5056 0.684917 19.303 0.482268C19.1003 0.279619 18.8255 0.165771 18.5389 0.165771C18.2523 0.165771 17.9774 0.279619 17.7748 0.482268C17.5721 0.684917 17.4583 0.959769 17.4583 1.24636V6.8438C16.8325 7.07094 16.2918 7.48526 15.9096 8.03046C15.5275 8.57565 15.3225 9.22528 15.3225 9.89105C15.3225 10.5568 15.5275 11.2064 15.9096 11.7516C16.2918 12.2968 16.8325 12.7112 17.4583 12.9383V20.6969C17.4583 20.9835 17.5721 21.2584 17.7748 21.461C17.9774 21.6637 18.2523 21.7775 18.5389 21.7775C18.8255 21.7775 19.1003 21.6637 19.303 21.461C19.5056 21.2584 19.6195 20.9835 19.6195 20.6969V12.9383C20.2453 12.7112 20.786 12.2968 21.1681 11.7516C21.5502 11.2064 21.7552 10.5568 21.7552 9.89105C21.7552 9.22528 21.5502 8.57565 21.1681 8.03046C20.786 7.48526 20.2453 7.07094 19.6195 6.8438ZM18.5389 10.9716C18.3252 10.9716 18.1162 10.9083 17.9385 10.7895C17.7608 10.6708 17.6223 10.502 17.5405 10.3046C17.4588 10.1071 17.4374 9.88985 17.4791 9.68024C17.5208 9.47062 17.6237 9.27808 17.7748 9.12696C17.9259 8.97584 18.1185 8.87292 18.3281 8.83123C18.5377 8.78953 18.755 8.81093 18.9524 8.89272C19.1499 8.9745 19.3186 9.11301 19.4374 9.29071C19.5561 9.46841 19.6195 9.67733 19.6195 9.89105C19.6195 10.1776 19.5056 10.4525 19.303 10.6551C19.1003 10.8578 18.8255 10.9716 18.5389 10.9716ZM12.0554 13.3273V1.24636C12.0554 0.959769 11.9415 0.684917 11.7389 0.482268C11.5362 0.279619 11.2614 0.165771 10.9748 0.165771C10.6882 0.165771 10.4133 0.279619 10.2107 0.482268C10.008 0.684917 9.89419 0.959769 9.89419 1.24636V13.3273C9.26837 13.5545 8.72766 13.9688 8.34554 14.514C7.96343 15.0592 7.75844 15.7088 7.75844 16.3746C7.75844 17.0403 7.96343 17.69 8.34554 18.2352C8.72766 18.7804 9.26837 19.1947 9.89419 19.4218V20.6969C9.89419 20.9835 10.008 21.2584 10.2107 21.461C10.4133 21.6637 10.6882 21.7775 10.9748 21.7775C11.2614 21.7775 11.5362 21.6637 11.7389 21.461C11.9415 21.2584 12.0554 20.9835 12.0554 20.6969V19.4218C12.6812 19.1947 13.2219 18.7804 13.604 18.2352C13.9861 17.69 14.1911 17.0403 14.1911 16.3746C14.1911 15.7088 13.9861 15.0592 13.604 14.514C13.2219 13.9688 12.6812 13.5545 12.0554 13.3273ZM10.9748 17.4552C10.7611 17.4552 10.5521 17.3918 10.3744 17.273C10.1967 17.1543 10.0582 16.9855 9.97645 16.7881C9.89466 16.5906 9.87326 16.3734 9.91496 16.1638C9.95665 15.9541 10.0596 15.7616 10.2107 15.6105C10.3618 15.4594 10.5544 15.3564 10.764 15.3147C10.9736 15.2731 11.1908 15.2944 11.3883 15.3762C11.5858 15.458 11.7545 15.5965 11.8733 15.7742C11.992 15.9519 12.0554 16.1608 12.0554 16.3746C12.0554 16.6612 11.9415 16.936 11.7389 17.1387C11.5362 17.3413 11.2614 17.4552 10.9748 17.4552ZM4.49126 4.68262V1.24636C4.49126 0.959769 4.37741 0.684917 4.17476 0.482268C3.97212 0.279619 3.69726 0.165771 3.41068 0.165771C3.12409 0.165771 2.84923 0.279619 2.64659 0.482268C2.44394 0.684917 2.33009 0.959769 2.33009 1.24636V4.68262C1.70427 4.90977 1.16355 5.32409 0.781438 5.86929C0.399323 6.41448 0.194336 7.06411 0.194336 7.72988C0.194336 8.39565 0.399323 9.04527 0.781438 9.59047C1.16355 10.1357 1.70427 10.55 2.33009 10.7771V20.6969C2.33009 20.9835 2.44394 21.2584 2.64659 21.461C2.84923 21.6637 3.12409 21.7775 3.41068 21.7775C3.69726 21.7775 3.97212 21.6637 4.17476 21.461C4.37741 21.2584 4.49126 20.9835 4.49126 20.6969V10.7771C5.11708 10.55 5.6578 10.1357 6.03991 9.59047C6.42203 9.04527 6.62701 8.39565 6.62701 7.72988C6.62701 7.06411 6.42203 6.41448 6.03991 5.86929C5.6578 5.32409 5.11708 4.90977 4.49126 4.68262ZM3.41068 8.81046C3.19696 8.81046 2.98804 8.74709 2.81033 8.62835C2.63263 8.50961 2.49413 8.34085 2.41234 8.1434C2.33056 7.94595 2.30916 7.72868 2.35085 7.51906C2.39255 7.30945 2.49546 7.11691 2.64659 6.96579C2.79771 6.81466 2.99025 6.71175 3.19986 6.67005C3.40948 6.62836 3.62675 6.64976 3.8242 6.73154C4.02165 6.81333 4.19041 6.95183 4.30915 7.12953C4.42789 7.30724 4.49126 7.51616 4.49126 7.72988C4.49126 8.01647 4.37741 8.29132 4.17476 8.49397C3.97212 8.69662 3.69726 8.81046 3.41068 8.81046Z"
                  fill="#A18B7F"
                />
              </svg>
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
                setType("Barsofka");
              }}
            >
              Barsofka
            </button>
            <button
              onClick={() => {
                setType("  Krossovka");
              }}
            >
              Krossovka
            </button>
            <button
              onClick={() => {
                setType("   Pol Classica");
              }}
            >
              Pol Classica
            </button>
            <button
              onClick={() => {
                setType(" Classica");
              }}
            >
              Classica
            </button>
            <button
              onClick={() => {
                setType("Loro Piano");
              }}
              
            >
              Loro Piano
            </button>
            <button
              onClick={() => {
                setType("  Loro Piano Lux");
              }}
            >
              Loro Piano Lux
            </button>
            <button
              onClick={() => {
                setType("  Loro Piano Pol Classica");
              }}
            >
              Loro Piano Pol Classica
            </button>
            <button
              onClick={() => {
                setType("keta");
              }}
            >
              keta
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
