import { getJournalEntries } from "../data/DataManager.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalList")

export const EntryListComponent = () => {
    getJournalEntries()
    .then((allEntries) => {
        let entryHTMLRepresentation = "";
        for (const entry of allEntries) {
        entryHTMLRepresentation += JournalEntryComponent(entry)
        }
        entryLog.innerHTML += entryHTMLRepresentation;
    })
}