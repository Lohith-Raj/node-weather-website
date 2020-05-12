const fs = require('fs')
const chalk = require('chalk')
// Adding notes
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) =>  note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKepp = notes.filter((note) => note.title !== title)


    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}


// List notes
const listNotes = () => {
    const note = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)  
    })
}

// Read notes
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) 

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}