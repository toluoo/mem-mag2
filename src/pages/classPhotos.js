import React from "react";
import Nav from "../components/Nav";

import "../style/classPhotos.css"
import laiba from "../components/IMG_5325.jpg"

const ClassPhotos = () => {
    return (
      <body>
        <Nav />
        <h1>☆ Class Of 2023/24 ☆</h1>
        <div class="all">
          <div class="grid-container">
              <img class = "grid-item" src={laiba} alt="Michelle" style={{color: "#CE84AD"}} />
              <img class = "grid-item" src={laiba} alt="Tolu" style={{color: "#eeb0c8"}}/>
              <img class = "grid-item" src={laiba} alt="Laiba" style={{color: "#274C77"}}/>
              <img class = "grid-item" src={laiba} alt="Ashley" style={{color: "#455c34"}}/>
          </div>
          <div class="grid-container2">
              <div class="grid-item2" style={{borderColor: "#CE84AD"}}>Michelle Fang</div>
              <div class="grid-item2" style={{borderColor: "#eeb0c8"}}>Tolu Odesilo</div>
              <div class="grid-item2" style={{borderColor: "#274C77"}}>Laiba Saqlain</div>
              <div class="grid-item2" style={{borderColor: "#455c34"}}>Ashley Wilkins</div>
          </div>
        </div>
        
      </body>
      
    );
};

export default ClassPhotos;