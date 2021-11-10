import "./myProfile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ProfileSection from "../../components/profileSection/ProfileSection";

export default function MyProfile() {
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