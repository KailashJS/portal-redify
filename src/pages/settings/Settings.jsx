import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Settings() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="home">
                    <h1 style={{ paddingTop: "10px", color: "red"}}>Settings Page</h1>
                </div>
            </div>
        </>
    )
}