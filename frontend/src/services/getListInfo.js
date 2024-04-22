
export default async function GetListInfo({information,page}) {
    const apiUrl = `http://localhost:3000/${information}?page=${page}`;

    try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
