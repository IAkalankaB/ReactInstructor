import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dropdown from "../dropdown/Dropdown";
import TemporaryDrawer from "../temporarydrawer/TemporaryDrawer";

export default function Navbar() {
  return (
    <div>
      <Appbar position="fixed" color="default">
        <Toolbar>
          <img
            src="https://logos-download.com/wp-content/uploads/2016/06/Pearson_logo.png"
            height="30"
            width="100"
            alt=""
          />
          <div style={{ marginTop: -10, position:'fixed',right:160}}>
            <Dropdown />
          </div>
          <div style={{  marginTop: 5,position:'fixed',right:180}}>
          <TemporaryDrawer/>
          </div>
        </Toolbar>
      </Appbar>
    </div>
  );
}
