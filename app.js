import fetch from "cross-fetch";


const callApi = async () => {
    let result = await fetch('http://localhost:8000', { method: "Post" });
    result = await result.json();
    console.log(result);
}

callApi();