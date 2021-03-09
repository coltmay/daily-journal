export const getJournalEntries = () => {
    return fetch("http://localhost:8090/entries")
        .then(response => response.json())
}