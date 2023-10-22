interface TypeInstanceAPI{
    incrementURL: string,
    body?: any;
    method: "GET" | "POST" | "DELETE" | "PUT"
}

async function instanceAPI({body,incrementURL, method}: TypeInstanceAPI){
    return await (await fetch(`https://loteriascaixa-api.herokuapp.com${incrementURL}`,{
        method: method
    })).json()
} 


export default instanceAPI