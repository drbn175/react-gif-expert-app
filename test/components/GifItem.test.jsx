import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Test GifItem', () =>{

    const title = 'Test';
    const url = 'https://www.google.com';
    test('should match snapshot',()=>{
        const {container} = render( <GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });


    test('should show img with url', ()=>{
        render( <GifItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');
        expect( src).toBe(src);
        expect( alt).toBe(alt);
    });

    test('should show title ', ()=>{
        render( <GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })
});