import { useEntryCollection } from "./data/DataManager.js";
import { entryListComponent, filteredEntryListComponent } from "./entry/JournalEntryList.js"

const applicationElement = document.querySelector("body");

const clickSaveButton = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "saveButton") {
            console.log("Save")
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

/*
[X] Add an element that will take the mood selector.
[X] Create an empty array that will eventually hold the filtered entries.
[X] Export a function that returns said array.
[X] Set an event to do something based off a mood selecting element.
[X] Tie the mood selecting element into the filtering function.
*/