import { getGifs} from '../../src/helpers/GetGifs';

describe('Test GetGifs', ()=>{

    test('Should return gifs array', async () =>{
        const category = 'hola'
        const gifs = await getGifs(category);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
});