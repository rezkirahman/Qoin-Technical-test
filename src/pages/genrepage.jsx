import axios from "axios";
import { React, useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

export default function GenrePage() {
    const [genre, setGenre] = useState([])

    const fetchData = () => {
        return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49').then((response => setGenre(response.data)))
    }
    useEffect(() => {
        try {
            fetchData()
        }
        catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <>
            <div className="mt-3" align='center'>
                {genre.genres?.map((data, i) => (
                    <Badge key={i} className='m-1'>
                        <h3>{data.name}</h3>
                    </Badge>
                ))}
            </div>
        </>
    )
}