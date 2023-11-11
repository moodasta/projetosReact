import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKey } from "../config/key";
import { useState, useEffect } from "react";

export default function Home() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'


    const [movies, setMovies] = useState([])


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })
    }, [])



    return (

        <Container>
            <h2>Catálogo</h2>
            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://www.google.com">
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}







//     return (
//         <Container>
//             <h2>Catálogo</h2>
//             <ul>
//                 <li>
//                     <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/11/Aftersun.jpg/220px-Aftersun.jpg" alt="Aftersun"/>
//                     <span>Aftersun</span>
//                 </li>

//                 <li>
//                 <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/11/Aftersun.jpg/220px-Aftersun.jpg" alt="Aftersun"/>
//                     <span>Aftersun</span>
//                 </li>

//                 <li>
//                 <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/11/Aftersun.jpg/220px-Aftersun.jpg" alt="Aftersun"/>
//                     <span>Aftersun</span>
//                 </li>
//             </ul>
//         </Container>
//     )
// }

// export default Home;