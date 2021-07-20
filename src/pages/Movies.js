import React, {useContext} from 'react'
import Search from '../components/Search'
import { MovieContext } from '../context/MovieContext'
import { Link } from "react-router-dom";
import Cards from '../components/Cards'
import '../styles/movie.css'
import { Navbar ,Button} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router'
const Movies = () => {
  const history = useHistory();
    const {mov,setSearch}= useContext(MovieContext)
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
        //console.log(e.target.value)
        
    }
    const Logout=()=>{
      history.push('/')
    }
    return (
      <>
      <div className="Navbar">
      <Navbar>
    <Container>
    <Navbar.Brand href="#home">Movie App Admin Page</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Button variant="link" onClick={Logout}><h5>Logout</h5></Button>
      </Navbar.Text>
     </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>

        <div>
            <Search handleSearch={handleSearch} />
            
            {mov?.length > 0 ? (
        <div className="movies">
          {mov?.map((movie) => {
            return (
              <Link /*'movies/tt1201607'*/
                to={`details/${movie.imdbID}`} 
                className="text-link"
                key={movie.imdbID}
              >
                <Cards
                  k={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-movie">
                        <h2><strong>Search Movie</strong></h2>
                    </div>
      )}
        </div>
        </>
    )

}

export default Movies
