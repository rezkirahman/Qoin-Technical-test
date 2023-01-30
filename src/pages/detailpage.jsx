import axios from "axios";
import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailPage() {
    const { id } = useParams()
    const [detail, setDetail] = useState()

    const fetchData = () => {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`).then((response => setDetail(response.data)))
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
            <Container className="d-flex justify-content-center mt-3 gap-4">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/` + detail?.backdrop_path} alt="poster" className="fluid" />
                </div>
                <div>
                    <h3>{detail?.title}</h3>
                    <div className="mt-3 fw-bold text-success">
                        <span>{detail?.status}</span>
                    </div>
                    <div>
                        <span>{detail?.overview}</span>
                    </div>
                    <div className="mt-3 fw-bold d-flex justify-content-between">
                        <span>🕜{detail?.runtime} min</span>
                        <span>⭐{detail?.vote_average}</span>
                    </div>
                    <div className="mt-3 fw-bold">
                        <span>{detail?.tagline}</span>
                    </div>
                </div>
            </Container>
        </>
    )
}