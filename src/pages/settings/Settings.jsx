import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ProfileSection from "../../components/profileSection/ProfileSection";

export default function Settings() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="home">
                    <ProfileSection />
                </div>
            </div>
        </>
    )
}