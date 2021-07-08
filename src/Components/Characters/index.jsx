import CharCard from "../CharCard";

function Character({ Characters, previewPage, nextPage }) {
  return (
    <>
      <CharCard
        Character={Characters}
        previewPage={previewPage}
        nextPage={nextPage}
      ></CharCard>
    </>
  );
}

export default Character;
