const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}
fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";
function fetchData(urlApi) {
  return fetch(urlApi);
}
fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
