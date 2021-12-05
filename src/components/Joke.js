import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Joke() {

    const [joke, setJoke] = useState('')
    useEffect(() => {
        axios
            .get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(res => setJoke(res.data))
            .catch(err => console.log(err))
    }, [])
    const fetchJoke = () => {
        axios
            .get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(res => setJoke(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="card text-center">
            <div className="card-header">
                <h5>Dad Jokes</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title">{joke.joke}</h5>
                <p className="card-text"></p>
                <a className="btn btn-primary text-white" onClick={fetchJoke}>Another joke</a>
            </div>
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}
