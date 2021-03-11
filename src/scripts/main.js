import { useEntryCollection, createEntry } from "./data/DataManager.js";
import { entryListComponent, filteredEntryListComponent } from "./entry/JournalEntryList.js"

/* // TODO -----------------------------------------------------------------------------
[X] Export a createEntry function in DataManager.js
    * createEntry must...
    * [X] Take in a entryObject
    * [X] Fetch the posts
    * [X] Have appropriate arguments
        * [X] Method
        * [X] Headers
        * [X] Body
    * [X] Return the response in JSON format 
[ ] Add event listener to main.js to listen for the save button
    * clickSaveButton must...
    * [X] Check if target.id to be equal to save button
    * [X] Set a list of constants equal to...
        * [X] journalDate
        * [X] journalConcepts
        * [X] journalMood
        * [X] journalEntry
    * [X] Create a const object with all values above as keys
    * [ ] Invoke createEntry with object
------------------------------------------------------------------------- */
const applicationElement = document.querySelector("body");

const clickSaveButton = () => {
    applicationElement.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.id === "saveButton") {
            const date = document.querySelector("input[name='journalDate']").value;
            const concept = document.querySelector("input[name='journalConcepts']").value;
            const mood = document.querySelector("select[name='journalMood']").value;
            const entry = document.querySelector("textarea[name='journalEntry']").value;
            
            const entryObject = {
                date: date,
                concept: concept,
                mood: mood,
                entry: entry
            }
            createEntry(entryObject);
        }
    })
}

const clickEditButton = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "editButton") {
            console.log("Edit")
        }
    })
}

const changeMoodSelector = () => {
    applicationElement.addEventListener("change", event => {
        if (event.target.id === "moodFilter") {
            const mood = event.target.value;
            showFilteredEntries(mood);
        }
    })
}

const showFilteredEntries = (mood) => {
    // Filter by mood
    //* Sets an array equal to the array that has been returned, but filtered.
    const filteredEntries = useEntryCollection().filter(singleEntry => {
        if (singleEntry.mood === mood) {
            return singleEntry;
        }
    })

    filteredEntryListComponent(filteredEntries);
}

const startJournal = () => {
    entryListComponent();
    clickSaveButton();
    clickEditButton();
    changeMoodSelector();
}

startJournal();