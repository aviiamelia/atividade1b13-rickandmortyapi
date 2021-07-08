import "./App.css";
import { useEffect, useState } from "react";
import Character from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previewPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < 34) {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Character
          Characters={characters}
          previewPage={previewPage}
          nextPage={nextPage}
        ></Character>
      </header>
    </div>
  );
}

export default App;
