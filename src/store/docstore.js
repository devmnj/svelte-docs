import { writable } from "svelte/store";
export const docs = writable([]);

const fetchDocs = async () => {
    try {
       // const url=`https://my-json-server.typicode.com/devmnj/mockdb/docs`;
        const url = `http://localhost:3000/api/docs.json`;
        const res = await fetch(url);
        const data = await res.json();
         console.log('...'+ JSON.stringify(data));
        docs.set(data.docs);
    }
    catch {
        console.log('Got error in fetching');
    }
};
fetchDocs();
