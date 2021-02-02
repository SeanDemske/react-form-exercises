import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (boxData) => {
        setBoxes([...boxes, {
            ...boxData,
            id: uuid()
        }]);
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id))
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            <h1>BoxList</h1>
            {boxes.map(box => (
                <Box 
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    color={box.color}
                    removeBox={removeBox}
                />
            ))}
        </div>
    )
}

export default BoxList;