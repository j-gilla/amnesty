
import React from 'react'
let style = {
  "position": "relative",
  "display": "inline-block",
  "width": "17px",
  "height": "17px",
  "borderRadius": "2px",
  "backgroundColor": "#FFFFFF",
  "border": "solid 2px #000000",
  "lineHeight": "normal"
}
let styleIcon = {
  "display": "inline-block",
  "color": "#000000",
  "position": "absolute",
  "top": "-1px",
  "left": "2px",
  "fontSize": "12px"
}
let CheckBox = (props) => {
  if (props.checked) {
    style.backgroundColor = "#ffff00";
  } else {
    styleIcon = {
      "display": "none",
    }
  }
  return (<div style={style}><i style={styleIcon} className="icon ion-checkmark"></i></div>)
}
export default CheckBox;