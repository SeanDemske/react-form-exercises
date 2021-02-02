import React, { useState } from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: "",
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="width-input">Width:</label>
            <input name="width" id="width-input" type="text" value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height-input">Height:</label>
            <input name="height" id="height-input" type="text" value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="color-input">Color:</label>
            <input name="color" id="color-input" type="text" value={formData.color}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    );
}

export default NewBoxForm;