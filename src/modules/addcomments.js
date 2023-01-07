/* || Add Comments */
const postComments = async (id, n, c) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/comments`,

    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_id: id,
        username: n,
        comment: c,
      }),
    }
  );
};

const getCD = async (cont, id) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/comments?item_id=${id}`,
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  data.forEach((e) => {
    const commInfo = document.createElement("p");
    commInfo.innerText = `${e.username} ${e.comment} ${e.creation_date}`;
    cont.append(cominfo);
  });
  console.log(data);
};

export { postComments, getCD };
