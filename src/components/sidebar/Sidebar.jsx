import "./sidebar.css"
import { Assignment, AssignmentInd, AssignmentTurnedIn, Favorite, Home, Info, Person, Phone } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Search Products</h3>
                    <ul className="sidebarList">
                        <li className="searchBar">
                            <input type="text" id="myInput" placeholder="UPC Code" />
                        </li>
                        <span className="or_section" >
                            <p style={{ marginLeft : "3%"}}>OR</p>
                        </span>
                        <li className="searchBar">
                            <input type="text" id="myInput" placeholder="Product name"/>
                        </li>

                        <li>
                            <button type="submit" className="searchButton" style={{ cursor: "pointer"}}>Search</button>
                        </li>
                        <li>
                            <button type="submit" className="searchButton" style={{ backgroundColor: "pink", color: "red", cursor: "pointer"}}>Reset</button>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menus</h3>
                    <ul className="sidebarList">
                        <Link to="/myFavourites" className="link">
                            <li className="sidebarListItem">
                                <Favorite className="sidebarIcon" />
                                My Favourite
                            </li>
                        </Link>
                        <Link to="/myProfile" className="link">
                            <li className="sidebarListItem">
                                <Person className="sidebarIcon"/>
                                My Profile
                            </li>
                        </Link>                        
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Widgets</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/aboutUs" className="link">
                            <li className="sidebarListItem">
                                <Info className="sidebarIcon" />
                                About Us
                            </li>
                        </Link>
                        <Link to="/contactUs" className="link">
                            <li className="sidebarListItem">
                                <Phone className="sidebarIcon" />
                                Contact Us
                            </li>
                        </Link>
                        <Link to="/privacyPolicy" className="link">
                            <li className="sidebarListItem">
                                <AssignmentInd className="sidebarIcon" />
                                Privacy Policy
                            </li>
                        </Link>
                        <Link className="link" to="/termsOfUse">
                            <li className="sidebarListItem">
                                <Assignment className="sidebarIcon"/>
                                Terms of Use
                            </li>
                        </Link>
                        <Link className="link" to="/take_survey">
                            <li className="sidebarListItem">
                                <AssignmentTurnedIn className="sidebarIcon"/>
                                Take Survey
                            </li>                        
                        </Link>                        
                    </ul>
                </div>

            </div>           
        </div>
    )
}
