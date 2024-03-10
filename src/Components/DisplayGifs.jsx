import { UseApi } from "../hooks/UseApi";
import { ImageItem } from "./ImageItem";

export const DisplayGifs = ({ category }) => {
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=rL5tWuAJGzNj91tAB0AguE5mmc1Cx6Wv&q=${category}&limit=10`;
  const { loading, data } = UseApi(url);

  return (
    <div className="container-gifs">
      {loading
        ? data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              url={img.images.downsized_medium.url}
            />
          ))
        : ""}
    </div>
  );
};
