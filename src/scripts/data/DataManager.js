/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Neutral"
    },
    {
        id: 2,
        date: "07/29/2025",
        concept: "HTML & CSS",
        entry: "We talked about objects.",
        mood: "Very Bad"
    },
    {
        id: 3,
        date: "08/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about APIs.",
        mood: "Very Good"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}