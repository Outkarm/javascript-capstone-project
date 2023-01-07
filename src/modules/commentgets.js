export const commentGets = async (f) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0hv6N1ThBvh5uDeVdjVD/comments/?item_id=${f}`
  );
  const datas = await res.json();
  return datas;
};
