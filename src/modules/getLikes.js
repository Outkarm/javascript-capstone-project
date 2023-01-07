// export class ApiLikes {
//   static URL_LIKES =
//     "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/";

//   static async getLikes() {
//     const response = await fetch(ApiLikes.URL_LIKES);
//     const data = await response.json();
//     return data;
//   }

//   addLike(name, data) {
//     const likeArr = [];
//     likeArr.push({ name: { likes: 0 } });
//     data.push(likeArr);
//   }

//   static async postLikes(id) {
//     const response = await fetch(ApiLikes.URL_LIKES, {
//       method: "POST",
//       body: JSON.stringify({
//         item_id: id,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const data = await response.json();
//     return data;
//   }
// }

const getLikes = async () => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/`
  );
  const data = await response.json();
  return data;
};
const addLike = async (id, z) => {
  const result = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_id: id,
        likes: z,
      }),
    }
  );
  const response = await result.text();
  return response;
};

export { getLikes, addLike };
