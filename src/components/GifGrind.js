import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { GifGrindItem } from './GifGrindItem';
// import { getGisfs } from '../helpers/getGifs';
import { useFetchGif, useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrind = ({category}) => {


    //const [images, setImages] = useState([])

    const {data: images,loading} = useFetchGifs(category);

    

    //Asi se usa con el componente en esta cunfcion
    /*useEffect( ()=> {
        getGisfs();
    }, [] )*/

    // useEffect( ()=> {
    //     getGisfs(category)
    //         .then(setImages)
    // }, [category] )

    //Esto lo exportamos a herlpers, para no tener todo el codigo junto
    /*const getGisfs = async() => {


        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FO0cwr2qGQrcNECthqKF7YCB9O7en5pI`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);


    } */

    // getGisfs();

  return (
      <>
    <h3>{category}</h3>
    <div className="card-grid ">
        
        {loading && <p>Cargando...</p>}

            {   
                //Forma sin destructurar
                // images.map(img => (
                //     // <li key={category}>{category}</li>
                //     <li key={img.id}>{img.title}</li>
                // ))

                images.map((img) => (
                    
                    <GifGrindItem 
                        key={img.id}
                        //img={img} 
                        {...img}
                        
                        />
                ))
            }
       
    </div>
    </>
  )
}
