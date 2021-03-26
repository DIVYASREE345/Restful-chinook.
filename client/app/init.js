import { fetchApi } from "./helpers/fetchApi.js";
import { Artist } from "./classes/artists.js";

const submitButton = document.getElementById("click-submit");
submitButton.addEventListener("click", (e) => handleSubmitButton(e));

const handleSubmitButton = async (e) => {
  e.preventDefault();
  const id = document.getElementById("input-1").value;
  document.getElementById("input-1").value = "";
  const url = `artists/${id}`;
  const data = await fetchApi(url)
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
  // console.log(data);
  const newArtist = new Artist(data.ArtistId, data.Name);
  // console.log(newArtist);
  // console.log(newArtist.render());
  const artistList = document.getElementById("artist");
  artistList.innerHTML = "";
  artistList.appendChild(newArtist.render());
};
