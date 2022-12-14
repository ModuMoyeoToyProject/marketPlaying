import { useState } from "react";

const ShopFormat = (props) => {
  const { shopName, shopImg, purchase_list, fn_updateBag } = props;
  const [purchasePage, setPurchasePage] = useState(0);
  const [goods, setGoods] = useState([{}]);

  const setPrev = () => {
    if (purchasePage !== 0) {
      setPurchasePage(purchasePage - 1);
    }
  };

  const setNext = () => {
    if (purchasePage !== 1) {
      setPurchasePage(purchasePage + 1);
    }
  };

  const setGoodsNum = (number) => {
    let purchases = [];
    for (let i = 0; i < purchase_list.length; i++) {
      purchases.push(...purchase_list[i]);
    }
    for (let i = 0; i < inventory_list.length; i++) {
      purchases.push(...inventory_list[i]);
    }

    setGoods(
      purchases.filter(function (el) {
        return el.number === number;
      })[0]
    );
  };

  const [inventory_list, setInventoryList] = useState([
    [
      {
        number: 1,
        name: "철 가위",
        img: require("../../img/iron_scissor.png"),
        money: "300원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "20%",
        amount: 0,
      },
      {
        number: 2,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 3,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 0,
      },
      {
        number: 7,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 8,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 1,
      },
    ],
    [
      {
        number: 4,
        name: "철 망치",
        img: require("../../img/iron_hammer.png"),
        money: "300원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "20%",
        amount: 2,
      },
      {
        number: 5,
        name: "파란 망치",
        img: require("../../img/blue_hammer.jpeg"),
        money: "3000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "30%",
        amount: 0,
      },
      {
        number: 6,
        name: "금색 망치",
        img: require("../../img/gold_hammer.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "50%",
        amount: 0,
      },
      {
        number: 9,
        name: "파란 망치",
        img: require("../../img/blue_hammer.jpeg"),
        money: "3000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "30%",
        amount: 0,
      },
      {
        number: 10,
        name: "금색 망치",
        img: require("../../img/gold_hammer.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "50%",
        amount: 0,
      },
    ],
  ]);

  const givePresent = (goods) => {
    setThink(shopName + " 아저씨는 이 선물을 달갑지 않게 생각합니다.");

    setInventoryList(
      inventory_list.map((el) =>
        el.map((small) =>
          small.number === goods.number
            ? {
                ...small,
                amount: small.amount - 1,
              }
            : small
        )
      )
    );
  };

  const [think, setThink] = useState(
    shopName + " 아저씨가 당신을 반갑게 맞이합니다."
  );

  return (
    <div>
      <div className="shop_format">
        <div>
          <h1 className="shop_name">{shopName}</h1>
          <img className="seller" src={shopImg} />
          <p className="sellerThink">{think}</p>
        </div>
        <div className="shop_seller">
          <div className="thing_viewer">
            <div className="goods">
              <div className="goods_info">
                <h3 className="goods_name">{goods.name}</h3>
                <p>가격: {goods.money}</p>
                <p>장소: {goods.place}</p>
                <p>용도: {goods.usage}</p>
                <p>힘: {goods.power}</p>
              </div>
              <div className="goods_img">
                <img src={goods.img} />
              </div>
            </div>
            <div className="btns_div">
              <button
                className="function_btn"
                onClick={fn_updateBag(goods, goods.price, 1)}
              >
                구입하기
              </button>
              <br />
              <button
                className="function_btn"
                onClick={fn_updateBag(goods, goods.price, -1)}
              >
                판매하기
              </button>
              <br />
              <button
                className="function_btn"
                onClick={() => givePresent(goods)}
              >
                선물하기
              </button>
              <br />
              <button className="function_btn">나가기</button>
            </div>
          </div>
          <div className="purchaser">
            <h2 className="purchase_title">사는 것</h2>
            <div className="purchase_list">
              <button className="arrow" onClick={setPrev}>
                ◀
              </button>
              <table className="purchase_table">
                <tr>
                  {purchase_list[purchasePage].map((el, ind) => (
                    <td key={"img_" + ind}>
                      <img
                        src={el.img}
                        onClick={() => setGoodsNum(el.number)}
                      />
                    </td>
                  ))}
                  <td></td>
                </tr>
                <tr className="money_tr">
                  {purchase_list[purchasePage].map((el, ind) => (
                    <td key={"img_" + ind}>
                      <span className="money">{el.money}</span>
                    </td>
                  ))}
                  <td></td>
                </tr>
              </table>
              <button className="arrow" onClick={setNext}>
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my_inventory inventory_room">
        <table className="stuffs">
          <tbody>
            {inventory_list.map((el, ind) => (
              <tr>
                {el.map((small, ind2) => (
                  <td
                    className={small.amount === 0 ? "stuff noAmount" : "stuff"}
                    onClick={
                      small.amount !== 0 ? (
                        () => setGoodsNum(small.number)
                      ) : (
                        <></>
                      )
                    }
                  >
                    <img src={small.img} />
                    {small.amount !== 0 && <p>{small.amount}</p>}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopFormat;
