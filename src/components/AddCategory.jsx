import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory= ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 2 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gif"
                value = { inputValue }
                onChange={onInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes={
    onNewCategory: PropTypes.func.isRequired
}