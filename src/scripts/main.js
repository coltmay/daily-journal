import { useEntryCollection, createEntry, deleteEntry } from "./data/DataManager.js";
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
[X] Add event listener to main.js to listen for the save button
    * clickSaveButton must...
    * [X] Check if target.id to be equal to save button
    * [X] Set a list of constants equal to...
        * [X] journalDate
        * [X] journalConcepts
        * [X] journalMood
        * [X] journalEntry
    * [X] Create a const object with all values above as keys
    * [X] Invoke createEntry with object
------------------------------------------------------------------------- */
const applicationElement = document.querySelector("body");

const clickSaveButton = () => {
    applicationElement.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.id === "saveButton") {
            // A list of input variables is created and and assigned.
            const date = document.getElementById("journalDate").value;
            const concept = document.getElementById("journalConcepts").value;
            const mood = document.getElementById("journalMood").value;
            const entry = document.getElementById("journalEntry").value;

            // An object that takes in the above variables
            const entryObject = {
                date: date,
                concept: concept,
                mood: mood,
                entry: entry
            }
            // Posts object to the JSON file
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

const clickDeleteButton = () => {
    applicationElement.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.id.startsWith("delete")) {
            const entryId = event.target.id.split("__")[1];
            deleteEntry(entryId)
                .then(response => {
                    entryListComponent();
                })
        }
    })
}




// Listens for a change in the mood selector, invokes 'showFilteredEntries'
const changeMoodSelector = () => {
    applicationElement.addEventListener("change", event => {
        if (event.target.id === "moodFilter") {
            const mood = event.target.value;
            showFilteredEntries(mood);
        }
    })
}

// Checks the value of mood, filters an array, then displays filtered array to DOM
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
    clickDeleteButton();
}

startJournal();