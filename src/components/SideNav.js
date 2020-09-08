import React from "react";
import "../styles/SideNav.css";
import HomeIcon from "@material-ui/icons/Home";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import Card1 from "../components/card1";

import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import SearchInput from "./SearchInput";
function SideNav() {
  return (
    <div>
      <div className="row ">
        <div className="col-3 sideNav">
          <div className="logo">
            <h2>Shadhin</h2>
          </div>
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <HomeIcon className="icons-material" fontSize="medium" /> Home
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <MusicVideoIcon className="icons-material" fontSize="medium" /> My
              music
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <WifiTetheringIcon className="icons-material" fontSize="medium" />{" "}
              PodCasts
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <PlayCircleOutlineIcon
                className="icons-material"
                fontSize="medium"
              />
              Video
            </a>
          </div>
          <Card1 />
          <div className="dwnld">
            <h4>Download the app</h4>
            <img
              className="getit"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
            <img
              className="getit"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </div>
        </div>
        <div className="col-9">
          <SearchInput className="serach" />
          <div className="tab-content" id="v-pills-tabContent">
            <h2 className="mob-logo">Shadhin</h2>

            <div  className="iconsNo"  style={{ float: "right", margin: "10px auto" }}>
              <NotificationsIcon />

              <Avatar   style={{ margin: "-30px 10px 0 60px " }} />
            </div>
            <div className="mob-logo-1">
              <h2 className="mob-logoh2">
                Hi There <span style={{ color: "blue" }}>John</span> !{" "}
              </h2>
              <br />
              <p style={{ color: "#888888", fontSize:"18px", marginLeft:"20px" }}>Good Morning Listen Free Music</p>
            </div>
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h1>Top Picks</h1>
              <img
                className="albm"
                src="https://upload.wikimedia.org/wikipedia/en/0/01/Lamberghini_song_cover.jpeg"
              />
              <img
                className="albm"
                src="https://upload.wikimedia.org/wikipedia/en/b/b2/Filhall_cover_art.webp"
              />
              <img
                className="albm"
                src="https://upload.wikimedia.org/wikipedia/en/8/8d/Album_this_is_your_song_cover.jpg"
              />
              <br />
              <h1>Popular Artists</h1>
              <img
                className="artists"
                src="https://nypost.com/wp-content/uploads/sites/2/2013/08/michael_jackson-300x3008.jpg?quality=80&strip=all"
              />
              <img
                className="artists"
                src="https://upload.wikimedia.org/wikipedia/en/b/b2/Filhall_cover_art.webp"
              />
              <img
                className="artists"
                src="https://upload.wikimedia.org/wikipedia/en/8/8d/Album_this_is_your_song_cover.jpg"
              />
            </div>
            {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
