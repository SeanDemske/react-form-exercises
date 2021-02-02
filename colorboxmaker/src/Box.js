import React from "react";

const Box = ({id, width, height, color, removeBox}) => {
    const handleClick = () => {
        removeBox(id);
    }
    return (
        <div className="Box" style={{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor: color
          }}>
          <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Box;