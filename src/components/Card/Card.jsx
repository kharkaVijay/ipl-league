import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  const { background, image, name, role, matches, runs, wickets,logo,path } = props;
  const [properties] = useState(props);
 

  return (
    <>
         <div className="conatiner">
             <div>
             </div>
             <div className="list">
              <ul className="team-ul"   >
                <li>
                  
                  <a href="" className="player-list" style={{
        background: background,
      }}>
                    <div className="player-img">
                      <img src={properties.image} alt="" style={{height:"150px"}} />
                    </div>
                    <h2 className="player-list-name" >{properties.name}</h2>
                    <div className="player-details">
                        <img src="	https://www.iplt20.com/assets/images/ipl-squad-arrow.svg" alt=""/>
                    </div>
                    <div className="team-logo">
                        <img src={properties.logo} alt="" style={{height:"70px"}}/>
                    </div>
                  </a>
                  
                </li>
              </ul>
             </div>
         </div>
    </>
   
  );
};

export default Card;
