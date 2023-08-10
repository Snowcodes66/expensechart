import { useState } from "react";
import Header from "./Header";
import Wrapper from "./Card/Wrapper";
import classes from "./Bar.module.css";

const heightVal = (Math.random() * 9).toFixed(0);
let newHeightVal = (heightVal * 10 ) 
const heightValTue = (Math.random() * 9).toFixed(0);
let newHeightValTue = (heightValTue * 10 ) 
const heightValWed = (Math.random() * 9).toFixed(0);
let newHeightValWed = (heightValWed* 10 ) 
const heightValThur = (Math.random() * 9).toFixed(0);
let newHeightValThur = (heightValThur * 10 ) 
const heightValFri = (Math.random() * 9).toFixed(0);
let newHeightValFri = (heightValFri * 10 ) 
const heightValSat = (Math.random() * 9).toFixed(0);
let newHeightValSat = (heightValSat * 10 ) 
const heightValSun = (Math.random() * 9).toFixed(0);
let newHeightValSun = (heightValSun * 10 ) 


const Bar = () => {
  const [isHoverng, setIsHovering] = useState(false);
  const [isHoverngTue, setIsHoveringTue] = useState(false);
  const [isHoverngWed, setIsHoveringWed] = useState(false);
  const [isHoverngThur, setIsHoveringThur] = useState(false);
  const [isHoverngFri, setIsHoveringFri] = useState(false);
  const [isHoverngSat, setIsHoveringSat] = useState(false);
  const [isHoverngSun, setIsHoveringSun] = useState(false);



  const mouseOverHandler = () => {
    setIsHovering(true);
  };
  const mouseOutHandler = () => {
    setIsHovering(false);
  };
  const mouseOverHandlerTue = () => {
    setIsHoveringTue(true);
  };
  const mouseOutHandlerTue = () => {
    setIsHoveringTue(false);
  };
  const mouseOverHandlerWed = () => {
    setIsHoveringWed(true);
  };
  const mouseOutHandlerWed = () => {
    setIsHoveringWed(false);
  };
  const mouseOverHandlerThur = () => {
    setIsHoveringThur(true);
  };
  const mouseOutHandlerThur = () => {
    setIsHoveringThur(false);
  };
  const mouseOverHandlerFri = () => {
    setIsHoveringFri(true);
  };
  const mouseOutHandlerFri = () => {
    setIsHoveringFri(false);
  };
  const mouseOverHandlerSat = () => {
    setIsHoveringSat(true);
  };
  const mouseOutHandlerSat = () => {
    setIsHoveringSat(false);
  };
  const mouseOverHandlerSun = () => {
    setIsHoveringSun(true);
  };
  const mouseOutHandlerSun = () => {
    setIsHoveringSun(false);
  };

  let days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const date = new Date();
  const weekday = date.getDay();
  const day = days[weekday];
  console.log(day, weekday);
  // const days=new Map()
  console.log(date, day);

  return (
    <Wrapper>
      <Header />
      <div className={classes["parent-div"]}>
        <div className={classes["bar-div"]}>
          <div className={classes["spend-txt"]}>
            <h3>Spending-Last 7 days</h3>
          </div>
          <div className={classes["weekdays"]}>
            <div>
              <div className={classes.column}>
                {isHoverng && <h4>${newHeightVal}</h4>}
                <div
                  onMouseOver={mouseOverHandler}
                  onMouseOut={mouseOutHandler}
                  style={{height:newHeightVal + '%'}}
                  className={
                    day === "mon"
                      ? ` ${classes.active}`
                      : classes.mon
                  }
                ></div>
              </div>
              <p>{day === "mon" ? day : "mon"}</p>
            </div>
            <div>
              <div className={classes.column}>
                {isHoverngTue && <h4>${newHeightValTue}</h4>}
                <div
                  onMouseOver={mouseOverHandlerTue}
                  onMouseOut={mouseOutHandlerTue}
                  style={{height:newHeightValTue + '%'}}
                  className={
                    day === "tue"
                      ? ` ${classes.tue} ${classes.active}`
                      : `${classes.tue}`
                  }
                ></div>
              </div>
              <p>{day === "tue" ? day : "tue"}</p>
            </div>
            <div className={classes.chart}>
              <div className={classes.column}>
             
                {isHoverngWed && <h4>${newHeightValWed}</h4>}
                <div
                  onMouseOver={mouseOverHandlerWed}
                  onMouseOut={mouseOutHandlerWed}
                  style={{height:newHeightValWed + '%'}}
                  className={
                    day === "wed"
                      ? ` ${classes.wed} ${classes.active}`
                      : `${classes.wed}`
                  }
                ></div>
              </div>
              <p>{day === "wed" ? day : "wed"}</p>
            </div>
            <div>
              <div className={classes.column}>
                {isHoverngThur && <h4>${newHeightValThur}</h4>}
                <div
                  onMouseOver={mouseOverHandlerThur}
                  onMouseOut={mouseOutHandlerThur}
                  style={{height:newHeightValThur + '%'}}
                  className={
                    day === "thur"
                      ? ` ${classes.thur} ${classes.active}`
                      : `${classes.thur}`
                  }
                ></div>
              </div>
              <p>{day === "thur" ? day : "thur"}</p>
            </div>
            <div>
              <div className={classes.column}>
                {isHoverngFri && <h4>${newHeightValFri}</h4>}
                <div
                  onMouseOver={mouseOverHandlerFri}
                  onMouseOut={mouseOutHandlerFri}
                  style={{height:newHeightValFri + '%'}}
                  className={
                    day === "fri"
                      ? ` ${classes.fri} ${classes.active}`
                      : `${classes.fri}`
                  }
                ></div>
              </div>
              <p>{day === "fri" ? day : "fri"}</p>
            </div>
            <div>
              <div className={classes.column}>
                {isHoverngSat && <h4>${newHeightValSat}</h4>}
                <div
                  onMouseOver={mouseOverHandlerSat}
                  onMouseOut={mouseOutHandlerSat}
                  style={{height:newHeightValSat + '%'}}
                  className={
                    day === "sat"
                      ? ` ${classes.sat} ${classes.active}`
                      : `${classes.sat}`
                  }
                ></div>
              </div>
              <p>{day === "sat" ? day : "sat"}</p>
            </div>
            <div>
              <div className={classes.column}>
                {isHoverngSun && <h4>${newHeightValSun}</h4>}
                <div
                  onMouseOver={mouseOverHandlerSun}
                  onMouseOut={mouseOutHandlerSun}
                  style={{height:newHeightValSun + '%'}}
                  className={
                    day === "sun"
                      ? ` ${classes.sun} ${classes.active}`
                      : `${classes.sun}`
                  }
                ></div>
              </div>
              <p>{day === "sun" ? day : "sun"}</p>
            </div>
          </div>
          <div className={classes.total}>
            <div>
              <p>Total this month</p>
              <h2>$478.33</h2>
            </div>
            <div className={classes.percent}>
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Bar;
