import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export function Photo(){
    const [photo, setPhoto] = useState({})
    const [loading, setLoading] = useState(false)
    const {id}= useParams()
    const nav = useNavigate()

    const back = () =>{
        nav(-1)
    }
    useEffect(()=>{
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(resp=> resp.json())
        .then(photo => setPhoto(photo))
        .finally(()=> setLoading(false))
    },[])
    return(
        <>
            {
                loading
                ?
                <p>Loading...</p>
                :
                <>
                    <h2>Photo</h2>
                    <button onClick={back}>back</button>
                    <div className="image">
                        <img src={photo.url} alt="img"/>
                    </div>
                    <div className="image">
                        <img src={photo.thumbnailUrl} alt="img"/>
                    </div>
                </>
            }
        </>
    )
}
