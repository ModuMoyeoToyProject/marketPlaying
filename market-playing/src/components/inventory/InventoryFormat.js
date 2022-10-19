import { useState } from "react";

const InventoryFormat = () => {
  const inventory_list = [
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
  ];
  const inventory_list2 = [
    [
      {
        number: 11,
        name: "철 가위",
        img: require("../../img/iron_scissor.png"),
        money: "300원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "20%",
        amount: 0,
      },
      {
        number: 12,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 13,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 0,
      },
      {
        number: 14,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 15,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 1,
      },
      {
        number: 16,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 17,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 1,
      },
      {
        number: 18,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 19,
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
        number: 20,
        name: "철 망치",
        img: require("../../img/iron_hammer.png"),
        money: "300원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "20%",
        amount: 2,
      },
      {
        number: 21,
        name: "파란 망치",
        img: require("../../img/blue_hammer.jpeg"),
        money: "3000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "30%",
        amount: 0,
      },
      {
        number: 22,
        name: "금색 망치",
        img: require("../../img/gold_hammer.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "50%",
        amount: 0,
      },
      {
        number: 23,
        name: "파란 망치",
        img: require("../../img/blue_hammer.jpeg"),
        money: "3000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "30%",
        amount: 0,
      },
      {
        number: 24,
        name: "금색 망치",
        img: require("../../img/gold_hammer.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "50%",
        amount: 0,
      },
      {
        number: 25,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 26,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 1,
      },
      {
        number: 27,
        name: "파란 가위",
        img: require("../../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        amount: 0,
      },
      {
        number: 28,
        name: "금색 가위",
        img: require("../../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        amount: 1,
      },
    ],
  ];

  const [stuff, setStuff] = useState({});

  const setStuffNum = (number) => {
    let inventorys = [];
    for (let i = 0; i < inventory_list.length; i++) {
      inventorys.push(...inventory_list[i]);
    }
    for (let i = 0; i < inventory_list2.length; i++) {
      inventorys.push(...inventory_list2[i]);
    }

    setStuff(
      inventorys.filter(function (el) {
        return el.number === number;
      })[0]
    );
  };

  return (
    <div>
      <div className="inventory_room">
        <table className="stuffs">
          <tbody>
            {inventory_list.map((el, ind) => (
              <tr>
                {el.map((small, ind2) => (
                  <td
                    className={small.amount === 0 ? "stuff noAmount" : "stuff"}
                    onClick={
                      small.amount !== 0 ? (
                        () => setStuffNum(small.number)
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
        <div className="goods">
          <div className="goods_info">
            {console.log(stuff)}
            <h3 className="goods_name">{stuff.name}</h3>
            <p>가격: {stuff.money}</p>
            <p>장소: {stuff.place}</p>
            <p>용도: {stuff.usage}</p>
            <p>힘: {stuff.power}</p>
            <p>갯수: {stuff.amount}</p>
          </div>
          <div className="goods_img">
            <img src={stuff.img} />
          </div>
        </div>
      </div>
      <div className="inventory_room">
        <table className="stuffs2">
          <tbody>
            {inventory_list2.map((el, ind) => (
              <tr>
                {el.map((small, ind2) => (
                  <td
                    className={small.amount === 0 ? "stuff noAmount" : "stuff"}
                    onClick={
                      small.amount !== 0 ? (
                        () => setStuffNum(small.number)
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

export default InventoryFormat;
