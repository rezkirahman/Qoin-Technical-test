import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { first, last, next, prev, numberpage } from "../features/pageSlice";
import { Card, Button, Pagination } from 'react-bootstrap'

export default function MoviePage() {
    const [movie, setMovie] = useState([])
    const navigate = useNavigate()
    const page = useSelector((state) => state.counter.page)
    const dispatch = useDispatch()

    const fetchData = () => {
        return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`).then((response => setMovie(response.data)))
    }

    useEffect(() => {
        fetchData()
    }, [page])

    let items = [];
    for (let number = 1; number <= movie?.total_pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} onClick={() => dispatch(numberpage(number))}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                {movie.results?.map((data, i) => (
                    <Card key={i} className="border-0" onClick={() => navigate(`/detail/${data.id}`)} style={{ width: '240px' }}>
                        <Card.Img variant='' src={`https://image.tmdb.org/t/p/w500/` + data.poster_path} alt={`https://image.tmdb.org/t/p/w500/` + data.poster_path} />
                        <div className="d-flex justify-content-between">
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text className="text-nowrap">⭐{data.vote_average}</Card.Text>
                        </div>
                    </Card>
                ))}
            </div>
            <Pagination size='md' className="justify-content-center mt-3">
                <Pagination.First onClick={() => dispatch(first())} />
                <Pagination.Prev onClick={() => dispatch(prev())} />
                {items}
                <Pagination.Next onClick={() => dispatch(next(movie?.total_pages))} />
                <Pagination.Last onClick={() => dispatch(last(movie?.total_pages))} />
            </Pagination>
        </>
    )
}