import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function PhotoPage(){
    const [photo, setPhoto]=useState([])
    const [loading, setLoading]= useState(false)
    const navigate = useNavigate()
    const back = () =>{
        navigate(-1)
    }

    useEffect(()=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPhoto(data))
            .finally(()=> setLoading(false))
    }, [])


    console.log(photo)

    return(
        <>
            {
                loading
                ?
                    <p>Loading...</p>
                    :
                    <>
                        <h2>Photo</h2>
                        <button onClick={back}></button>
                        {photo.map((k, i)=>
                            <div key={i}>
                                <p>{k.title}</p>
                                <Link to={`/photo/${k.id}`}>Read more</Link>
                                <p>__________</p>
                            </div>
                        )

                        }
                    </>
            }
        </>
    )
}
