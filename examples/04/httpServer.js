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

const postPost = data => {
  const url = URL_BASE + "/posts";
  const params = {
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };

  return new Promise((resolve, reject) => {
    request.post(url, params, (err, { statusCode, statusMessage }, body) => {
      if (err) return reject(err);
      resolve({ body: JSON.parse(body), statusCode, statusMessage });
    });
  });
};

const putPost = (data, id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject("NOT FOUND ID");

    const uri = `${URL_BASE}/posts/${id}`;
    const body = JSON.stringify(data);
    const headers = { "Content-type": "application/json; charset=UTF-8" };

    request.put(uri, { body, headers }, (err, res, body) => {
      const { statusCode } = res;

      if (err) return reject({ statusCode, message: JSON.parse(err) });

      resolve({ statusCode, body: JSON.parse(body) });
    });
  });
};

const deletePost = id => {
  return new Promise((resolve, reject) => {
    if (!id) return reject("NOT FOUND ID");

    const uri = `${URL_BASE}/posts/${id}`;

    request.delete(uri, (err, res, body) => {
      const { statusCode } = res;
      if (err) return reject({ statusCode, error: JSON.parse(err) });

      resolve({ statusCode, body: JSON.parse(body) });
    });
  });
};

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

module.exports = { getTypicode, resource, postPost, putPost, deletePost };

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
