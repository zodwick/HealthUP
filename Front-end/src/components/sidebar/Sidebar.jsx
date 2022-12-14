import "./sidebar.css";
import {
  Widgets,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  LocalHospital ,
  FoodBank,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { LocationOn, Call } from "@material-ui/icons";

export default function Sidebar() {
  const name = window.localStorage.getItem("name");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarLogo">
          <img src="https://i.imgur.com/rMj5qV4.png"></img>

       
        </div>
        {/* <div className="sidebarprofile">
          <img
            src="https://avatars.githubusercontent.com/u/34004150?v=4"
            alt=""
            className="topAvatar2"
          />
          <p className="sidebarprofile-name">{name}</p>
          <div className="sidebarprofileinfo">
            <div className="profileinfocard">
              <button>View Profile</button>
            </div>
          </div>
        </div> */}
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <Widgets className="sidebarIcon active" />
                Home
              </li>
            </Link>
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>
            </Link>
            {/* <Link to="" className="link"> */}
            <li className="sidebarListItem">
              <LocalHospital className="sidebarIcon" />
              Doctors
            </li>
            {/* </Link> */}

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Ambulance
            </li>
            <br>
            </br>
            <br>
            </br><br>
            </br>
            <br>
            </br><br>
            </br><br>
            </br>
            <br>
            </br><br>
            </br><br>
            </br>
            <br>
            </br>
             <li className="sidebarListItem">
             <a href="https://t.me/Hlthupbot"><img src="https://miro.medium.com/max/300/1*YVTFl1UEkt3_rkez-DIU9w.png"></img></a> 
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
