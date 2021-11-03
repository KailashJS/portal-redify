import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <h1 style={{ paddingTop: "10px", color: "red" }}>Home Page</h1>
            <h2>Components under constructions.</h2>
            <div>.</div>
            <div>.</div>
            <h3 style={{ color: "violet" }}>This Right Side section is scrollable...</h3>
            <FeaturedInfo />
        </div>
    )
}
