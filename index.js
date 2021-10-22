const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "a974d545",
      i: "tt0208092",
    },
  });
  console.log(response.data.Title);
  console.log(response.data.BoxOffice);
  console.log(response.data.Released);
  console.log(response.data.imdbRating);
};

fetchData();
