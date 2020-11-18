import React, { useState } from "react";

export default () => {
    const [movies, setMovies] = useState([
        "Shrek",
        "Shrek 2",
        "Shrek the Third",
        "Shrek the Halls",
        "Shrek Ever After"
    ])

    const [input, setInput] = useState("")

    return (
        <div>
            {movies.map(movie => <h2 key={movie}>{movie}</h2>)}
            <input value={input} type="text" onChange={e => setInput(e.target.value)} />
            <button onClick={() => { setMovies([...movies, input]); setInput("")}} />
        </div>
    )
}