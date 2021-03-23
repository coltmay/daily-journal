// Renders journal objects as HTML
export const JournalEntryComponent = (entry) => {
    return(
    `
        <section id="entry--${entry.id}" class="listedEntry">
            <h2>${entry.concept}</h2>
                <p>${entry.entry}</p>
                <p>${entry.date}</p>
                <p>Mood: ${entry.mood}</p>
                <button id="delete__${entry.id}">Delete</button>
        </section>
    `
)}