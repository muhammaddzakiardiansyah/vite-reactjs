import { useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  const [count, setCount] = useState(0);
  const [card, setCard] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleCard = (id) => {
    if (card.find((item) => item.id === id)) {
      setCard(
        card.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCard([
        ...card,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  const handleClick = () => {
    setCount(count + 1);
  };


  localStorage.setItem('kegiatan', JSON.stringify(kegiatan));

  const localStorageKegiatan = localStorage.getItem('kegiatan')
  const stringToArray = JSON.parse(localStorageKegiatan);
  const products = [
    {
      id: 1,
      title: "Sepatu Kuda 1",
      image: "/images/shoes.jpg",
      alt: "shoes",
      price: 1500000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Sepatu Kuda 45",
      image: "/images/shoes.jpg",
      alt: "shoes",
      price: 4500000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Sepatu Kuda n39",
      image: "/images/shoes.jpg",
      alt: "shoes",
      price: 20500000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const handleLogout = () => {
    if (confirm("yakin ingin keluar?")) {
      window.location.href = "/login";
    }
  };
  return (
    <>
      <div className="h-14 bg-blue-600 flex justify-end items-center px-10 gap-3 text-white font-bold text-xl">
        {localStorage.getItem("name")}{" "}
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-between gap-3 mt-10">
        <div className="w-1/2 flex gap-5">
          {products.map((item) => {
            return (
              <CardProduct key={item.id}>
                <CardProduct.image image={item.image} alt={item.alt} />
                <CardProduct.body
                  title={item.title}
                  handleCard={handleCard}
                  id={item.id}
                >
                  {item.description}
                </CardProduct.body>
              </CardProduct>
            );
          })}
        </div>
        <div className="w-2/4">
          <table className="mx-auto mt-5">
            <thead>
              <tr>
                <th className="px-5">no</th>
                <th className="px-5">name</th>
                <th className="px-5">price</th>
                <th className="px-5">qty</th>
                <th className="px-5">total</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, Index) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                const total = product.price * item.qty;
                return (
                  <tr key={Index}>
                    <td className="px-5">{Index + 1}</td>
                    <td className="px-5">{product.title}</td>
                    <td className="px-5">
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="px-5">{item.qty}</td>
                    <td className="px-5">
                      {total.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <span className="font-bold text-xl">{count}</span>
        <button
          className="bg- bg-lime-400 px-6 mx-5 py-2 rounded-xl"
          onClick={handleClick}
        >
          click
        </button>
      </div>
      <div className="mt-10 flex justify-center">
        <div>
          <form onSubmit={handleKegiatan}>
            <input
              type="text"
              name="kegiatan"
              className="px-5 py-2 bg-slate-300 mx-5 rounded-lg"
              placeholder="Input"
            />
            <button type="submit" className="bg-violet-700 px-5 py-2 rounded-lg font-semibold text-white">
              Simpan
            </button>
          </form>
          <ul className="mt-5 text-lg font-semibold">
            {stringToArray.map((item, index) => (
              <li key={index}><span>{index + 1}.</span> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
