export const fetchApi = async (url) => {
    return fetch(`http://localhost:8080/api/${url}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.error(err));
}