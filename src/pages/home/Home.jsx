import ProductCard from "../../components/productCard/ProductCard";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <h1 style={{ paddingTop: "10px", color: "red" }}>Home Page</h1>
      <ProductCard />
    </div>
  );
}
