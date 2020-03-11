const request = require("request");

const URL_BASE = "https://jsonplaceholder.typicode.com";

function getTypicode() {
  return new Promise((resolve, reject) => {
    request.get(
      `${URL_BASE}/posts`,
      (error, { statusCode, statusMessage }, data) => {
        let response = { statusCode, statusMessage };
        if (error || [404, 500].includes(statusCode)) return reject(response);
        resolve({ ...response, data: JSON.parse(data) });
      }
    );
  });
}

const resource = (params, data = null) => {
  return new Promise((resolve, reject) => {
    if (params) {
      request(
        { ...params, uri: `${URL_BASE}/${params.uri}` },
        (error, { statusCode, statusMessage }, data) => {
          let response = { statusCode, statusMessage };
          if (error || [404, 500].includes(statusCode)) return reject(response);
          resolve({ ...response, data: JSON.parse(data) });
        }
      );
    } else {
      reject("NOT FOUND PARAMS");
    }
  });
};

module.exports = { getTypicode, resource };

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// GET	/posts?userId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

// https://jsonplaceholder.typicode.com/user/10
// body: {
//   nome: 'João'
//   id: 10,
//   email: 'test@test.com'
// }

// GET -> Recebo algum dado
// POST -> Envio algum dado
// DELETE -> Envio um parametro -> vai deletar algum dado
// PUT -> Envio um parametro e envio algum dado -> vai atualizar algum dado
