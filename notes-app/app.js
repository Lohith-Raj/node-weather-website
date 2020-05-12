const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

console.log(process.argv)
console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandingOption: true,
            type: 'string'
        }
    },
    handlers(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove new note',
    builder: {
        title: {
            describe: 'Note title',
            demandingOption: true,
            type: 'string'
        }
    },
    handlers(argv) {
       getNotes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler() {
        console.log('Listing the notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

