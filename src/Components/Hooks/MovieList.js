<<<<<<< HEAD
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
=======
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default () => {
  const [movies, setMovies] = useState([
    "Shrek",
    "Shrek 2",
    "Shrek the Third",
    "Shrek the Halls",
  ]);

  const [input, setInput] = useState("");

  return (
    <div>
      {movies.map((movie, index) => {
        return <h2 key={movie + index}>{movie}</h2>;
      })}
      <input 
      value={input}
      type='text'
      onChange={(e)=> setInput(e.target.value)}
      />
      <button onClick={()=> {
          setMovies([...movies, input])
          setInput('')
      }}>
          Add Movie
      </button>
    </div>
  );
};
>>>>>>> 6ee7507e7fd0df58d03546f89d3717013296fa4d
