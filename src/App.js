import React from "react";
import Collections from "./components/collections/pages/Collections";
import "./App.css";
import Navbar from "../src/components/widgets/navbar/Navbar";
import LeftFooter from "../src/components/widgets/leftfooter/LeftFooter";
import RightFooter from "../src/components/widgets/rightfooter/RightFooter";


export default function App() {
  return (
    <div>
      <Navbar />
      <LeftFooter/>
      <RightFooter/>
      <Collections className="container"/>
    </div>
  );
}
