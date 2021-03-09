/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalList")

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries();

    let entryHTMLRepresentation = "";

    for (const entry of entries) {
        entryHTMLRepresentation += JournalEntryComponent(entry)
    }

    entryLog.innerHTML += entryHTMLRepresentation;
}