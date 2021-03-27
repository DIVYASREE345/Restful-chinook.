export const fetchApi = async (url, method='GET', bodyData=null) => {
  return fetch(`http://localhost:8080/api/${url}`,{
      method: method,
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: bodyData
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    return data
  })
  .catch(err => console.error(err));
}