export const fetchDogs = async query => {
  const response = await fetch(`https://dog.ceo/api/breed/${query}/images`);
  const error =
    response.status !== 200
      ? "These are not the dogs you're looking for"
      : null;

  const { message } = await response.json();
  const urls = !error ? message : [];
  return { urls, error };
};
