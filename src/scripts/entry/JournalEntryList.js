import { getJournalEntries } from "../data/DataManager.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// Function that invokes getJournalEntries and JournalEntryComponent to pull data from API and render each object as HTML
export const entryListComponent = () => {
    // Get all entries from API
    getJournalEntries()
        // Use .then to wait until promise is resolved, then return array as allEntries
        .then(allEntries => {
            // Set an empty HTML representation to be populated later.
            const entryLog = document.querySelector(".journalList");
            let entryHTMLRepresentation = "";
            // A forEach loop.
            allEntries.forEach(entry => {
                entryHTMLRepresentation += JournalEntryComponent(entry);
            })
            // return entryHTMLRepresentation; 
            entryLog.innerHTML += entryHTMLRepresentation;
        })
}

// Function that returns a filtered list of entries instead
export const filteredEntryListComponent = (filteredArray) => {
    // Set an empty HTML representation to be populated later.
    const entryLog = document.querySelector(".journalList");
    let entryHTMLRepresentation = "";
    // A forEach loop.
    filteredArray.forEach(entry => {
        entryHTMLRepresentation += JournalEntryComponent(entry);
    })
    // return entryHTMLRepresentation; 
    entryLog.innerHTML = entryHTMLRepresentation;
}