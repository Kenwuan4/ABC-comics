
export default async function GetDetailInfo({information,detail,id}) {
  
    const apiUrl = `http://localhost:3000/${information}/${detail}/${id}`;

    try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
