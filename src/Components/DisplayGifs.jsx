
export const DisplayGifs = ({category}) => {

  const url = `https://api.giphy.com/v1/gifs/trending?api_key=rL5tWuAJGzNj91tAB0AguE5mmc1Cx6Wv&q=${category}&limit=10`;

  return (
    <div className="container-gifs">
        <h2>display gifs</h2>
        {category}
    </div>
  )
}
