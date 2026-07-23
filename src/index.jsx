import React from "react";
import ReactDOM from "react-dom/client"
import Imgcards from "./components/imgcard";
import Cars from "./components/data";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <div className="gallery-title">
        <h1>Dynamic Image Gallery</h1>
    </div>
    <div className="gallery-container">
        {
            Cars.map((i)=>{
                return(
                    <Imgcards Cname={i.name} Ccompany={i.company} Cyear={i.year} Cimage={i.url}></Imgcards>
                )
            })
        }
    </div>
    </>
)

