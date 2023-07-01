import { render } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test AddCategory', () => {
    test('Should change input value', () =>{
        render(<AddCategory onNewCategory={()=>{}} />);
    })
})