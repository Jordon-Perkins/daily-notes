// You need to store many notes for a user in a collection.
// Each note needs to store the following information.
// The note of the text
// The author of the note
// The date the note was entered
// The category of the note
// A note can be assigned any number of topics. For example...
// "task"
// "observation"
// "code"
// "learning"
// "feelings"
// etc...


/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []

const note1 = { id: 1,
    text: "task",
    author: "Timothey",
    date: "3/5/22",
    topics: ["selfassessment", "find time", "book 1"]
}

const note2 = { id: 2,
    text: "observation",
    author: "Monty",
    date: "2/5/22",
    topics: ["take a walk", "save time", "drink water"]
}

const note3 = { id: 3,
    text: "code",
    author: "Wilson",
    date: "6/1/22",
    topics: ["data structures", "for of loops"]
}

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/


const note4 = { id: 4,
    text: "learning",
    author: "Timothey",
    date: "9/8/22",
    topics: ["something new", "more time"]
}

const note5 = { id: 5,
   text: "feeling",
   author: "Monty",
   date: "7/8/22",
   topics: ["exhausted", "find time", "exhilarated"]
}

const note6 = { id: 5,
   text: "knowledge",
   author: "Wilson",
   date: "9/1/22",
   topics: ["mastering", "drink water", "beginners mind"]
}

notes.push(note1)
notes.push(note2)
notes.push(note3)

notes.push(note4)
notes.push(note5)
notes.push(note6)

console.log(notes)



for (const note of notes) {


    console.log(note.text)



}

console.log("*** All Note Topics ***")

for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic)
    }
}



console.log("*** Average Topics Per Note ***")

let totalTopics = 0
for (const note of notes) {
    totalTopics += note.topics.length
}
const averageTopics = totalTopics / notes.length
console.log(averageTopics);


const filteredNotes = []
const criteria = "put whatever topic you want here"

for ( topic of notes ) {
    if (topic.topics.includes("more time")){
        filteredNotes.push(topic)
    } else {
        console.log(criteria)
    }
}
console.log(filteredNotes)

console.log("***  Note Articles  ***")

const HTML =[]

for (const note of notes) {
    noteArticle = `<article>${note.text}</article>`
    HTML.push(noteArticle)
    for (const topic of note.topics) {
        topicSection = `<section>${note.topics}</section>`
        HTML.push(topicSection)
}
}
console.log(HTML.join("\n"))


// for (const note of notes) {
//     console.log(note.text)
// }



// let numberOfTotalTopics = 0
// for (const note of notes) {
//     let numberOfTopics = note.topics.length;
//     numberOfTotalTopics += numberOfTopics;
// }
// var numberOfNotes = notes.length;

// var avgNumberOfTopics = numberOfNotes / numberOfTotalTopics;
// console.log(avgNumberOfTopics);


