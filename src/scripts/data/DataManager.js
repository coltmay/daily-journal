// Fetches data from API, waits until all data has been fetched, then returns in .json format.

/*
* json-server -p 8090 -w JournalData.json
*/

let entryCollection = [];

export const getJournalEntries = () => {
    return fetch("http://localhost:8090/entries")
        .then(response => response.json())
        .then(parsedResponse => {
            entryCollection = parsedResponse;
            return parsedResponse;
        })
}

export const useEntryCollection = () => {
    return [...entryCollection];
}

export const createEntry = (entryObj) => {
    return fetch("http://localhost:8090/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(response => response.json());
} 

export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8090/entries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getJournalEntries)
}