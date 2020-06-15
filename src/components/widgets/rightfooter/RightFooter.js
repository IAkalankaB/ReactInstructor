import React from "react";

export default function RightFooter() {
  return (
    <div className="right-footer">
      <div style={{ marginLeft: 12,marginTop:5 }}>
        <div style={{ float: "inline-end" }}>
          <a style={{ color: "rgb(10, 120, 163)" }} href="help">
            Help
          </a>
          <a style={{ marginLeft: 10, color: "rgb(10, 120, 163)" }} href="t&c">
            Terms & Conditions
          </a>
          <a style={{ marginLeft: 10, color: "rgb(10, 120, 163)" }} href="pp">
            Privacy & Policy
          </a>
          <a
            style={{
              marginLeft: 10,
              marginRight: 10,
              color: "rgb(10, 120, 163)"
            }}
            href="acc"
          >
            Accessibilty
          </a>
        </div>
      </div>
    </div>
  );
}