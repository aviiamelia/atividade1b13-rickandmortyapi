import "./styles.css";

function CharCard({ Character, nextPage, previewPage }) {
  return (
    <div className="container">
      <div className="previewPage" onClick={previewPage}></div>
      <div className="nextPage" onClick={nextPage}></div>
      {Character.map((character) =>
        character.status === "Alive" ? (
          <div className="container__characterAlive">
            <p className="container__p originNameAlive">
              {character.origin.name}
            </p>
            <img src={character.image} alt="" width="200px" height="200px" />
            <div className="container dataAlive" key={character.id}>
              <p className="container__p name">{character.name}</p>
              <p className="container__p status">{character.status}</p>
              <p className="container__p species">{character.species}</p>
            </div>
          </div>
        ) : (
          <div className="container__characterDead">
            <p className="container__p originNameDead">
              {character.origin.name}
            </p>
            <img src={character.image} alt="" width="200px" height="200px" />
            <div className="container dataDead" key={character.id}>
              <p className="container__p name">{character.name}</p>
              <p className="container__p status">{character.status}</p>
              <p className="container__p species">{character.species}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CharCard;
