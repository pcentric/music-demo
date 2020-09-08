import React, { Component } from "react";
import "../styles/mainPlayer.css";
import { Avatar } from '@material-ui/core';
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
export default class mainPlayer extends Component {
  render() {
    return (
      <div>
        <nav class="nav mainPlayer ">
          <a class="for-btn" href="#">
            <SkipPreviousIcon fontSize="medium" />
          </a>
          <a class="play-btn" href="#">
            <PlayArrowIcon fontSize="medium" />
          </a>
          <a class="for-btn" href="#">
            <SkipNextIcon fontSize="medium" />
          </a>
          <div style={{ margin: "30px 0 0 57rem" }}>
            <a style={{ margin: "15px" }}href="#">
              <ShuffleIcon fontSize="medium" />
            </a>
            <a style={{ margin: "15px" }}href="#">
              <RepeatIcon fontSize="medium" />
            </a>
            <a style={{ margin: "15px" }}href="#">
              <VolumeUpIcon fontSize="medium" />
            </a>
          </div>
          <Avatar style={{ margin: "15px" }} alt="Remy Sharp"src="/static/images/avatar/1.jpg" />

            <p style={{ margin: "20px 0 0 0px",fontSize:"18px", color:"grey" }}>Queue</p>
        </nav>
      </div>
    );
  }
}
