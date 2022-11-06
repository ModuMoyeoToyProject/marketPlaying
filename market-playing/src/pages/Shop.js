import Hardware from "../components/shop/Hardware";
import ShopFormat from "../components/shop/ShopFormat";
import "../styles/Shop.scss";
import "../styles/Inventory.scss";

const Shop = () => {
  const purchase_list = [
    [
      {
        number: 1,
        name: "철 가위",
        img: require("../img/iron_scissor.png"),
        money: "300원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "20%",
        price: 300,
      },
      {
        number: 2,
        name: "파란 가위",
        img: require("../img/blue_scissor.png"),
        money: "3000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "30%",
        price: 3000,
      },
      {
        number: 3,
        name: "금색 가위",
        img: require("../img/gold_scissor.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "양털 깎기",
        power: "50%",
        price: 30000,
      },
    ],
    [
      {
        number: 4,
        name: "철 망치",
        img: require("../img/iron_hammer.png"),
        money: "300원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "20%",
        price: 300,
      },
      {
        number: 5,
        name: "파란 망치",
        img: require("../img/blue_hammer.jpeg"),
        money: "3000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "30%",
        price: 3000,
      },
      {
        number: 6,
        name: "금색 망치",
        img: require("../img/gold_hammer.jpeg"),
        money: "30000원",
        place: "집 앞",
        usage: "집 짓기, 가구 만들기",
        power: "50%",
        price: 30000,
      },
    ],
  ];

  return (
    <div className="Shop">
      <ShopFormat
        shopName={"철물점"}
        shopImg={require("../img/hardware_owner.jpeg")}
        purchase_list={purchase_list}
      />
    </div>
  );
};

export default Shop;
