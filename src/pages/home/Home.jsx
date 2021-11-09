import ProductCard from "../../components/productCard/ProductCard";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <div className="home">
          <ProductCard />
        </div>
      </div>
    </>
  );
}
