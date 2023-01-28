const favoriteUtils = {
  check: ({ listFavorites, mediaId }) =>
    listFavorites &&
    listFavorites.find((e) => e.mediaId === mediaId.toString()) !== undefined,
};
export default favoriteUtils;
