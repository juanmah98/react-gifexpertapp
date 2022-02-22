import { useEffect, useState } from "react";
import { getGisfs } from "../helpers/getGifs";


export const useFetchGifs = ( category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGisfs(category)
            .then(img=> {

                setTimeout(()=> {

                    setState({
                        data: img,
                        loading: false
                    })

                    
                },2000);

            })


    }, [category])

    return state;
}