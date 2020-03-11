const httpServer = require("./httpServer");

// httpServer
//   .getTypicode()
//   .then(res => console.log("RESPONSE:: ", res))
//   .catch(err => console.error("ERROR:: ", err));

const getPosts = async () => {
  const params = {
    uri: "posts/10",
    method: "GET"
  };

  try {
    const { data } = await httpServer.resource(params);
    console.log("DATA: ", data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

getPosts();
