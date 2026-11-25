import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList title="Sản phẩm nổi bật" items={products} />
      </main>
      <Footer />
    </>
  );
}

export default App;
function App() {
  const shopName = "ShopBanHang";
  return (
    <div>
      <h1>Xin chào {shopName}!</h1>
      <p>Hôm nay là {new Date().toLocaleDateString("vi-VN")}</p>
    </div>
  );
}

export default App;