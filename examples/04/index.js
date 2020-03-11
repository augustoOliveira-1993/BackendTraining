const httpServer = require("./httpServer");

const post = async () => {
  try {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1
    };

    const result = await httpServer.postPost(data);

    console.log(result);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

post();

// httpServer
//   .getTypicode()
//   .then(res => console.log("RESPONSE:: ", res))
//   .catch(err => console.error("ERROR:: ", err));

// const getPosts = async () => {
//   const params = {
//     uri: "posts/10",
//     method: "GET"
//   };

//   try {
//     const { data } = await httpServer.resource(params);
//     console.log("DATA: ", data);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };

// getPosts();

// function calc({ x, y, z }, callback) {
//   const result = x + y / z;
//   let error = result < 0 ? `${result} < 0 ` : null;
//   callback(error, result);
// }
// // ==================================
// const data = { x: 98, y: 2, z: 1 };
// calc(data, (err, res) => (err ? console.log(err) : console.log(res)));
