import { getJournalEntries } from "../data/DataManager.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalList")

export const EntryListComponent = () => {
    // Get all entries from API
    getJournalEntries()
        // Use .then to wait until promise is resolved, then return array as allEntries
        .then(allEntries => {
            // Set an empty HTML representation to be populated later.
            let entryHTMLRepresentation = "";
            // A forEach loop.
            allEntries.forEach(entry => {
                entryHTMLRepresentation += JournalEntryComponent(entry);
            })
            entryLog.innerHTML += entryHTMLRepresentation;
        })
}