import { fetchApi } from "./helpers/fetchApi.js";
import { Artist } from "./classes/artists.js";

const submitButton = document.getElementById("click-submit");
submitButton.addEventListener("click", (e) => handleSubmitButton(e));

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", (e) => handleAddButton(e));

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

const handleAddButton = async (e) => {
  e.preventDefault();
  const artistName = document.getElementById("input-2").value;
  document.getElementById("input-2").value = "";
  const url = `artists`;
  const fetchData = JSON.stringify({"Name":artistName})
  // console.log(fetchData)
  const data = await fetchApi(url, "POST", fetchData)
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
  // console.log(data);
  const data2 = await fetchApi(url)
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
  // console.log(data2);
  const message = `${data} with Id number ${data2.length}`
  alert(message)
  
};
