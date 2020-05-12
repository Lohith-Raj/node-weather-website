// const square = (x) => {
//     return x * x
// }


//const square = (x) => x * x
const event = {
    name: 'Birthday Partyy',
    guestList: ['Andrew','Jen','mIKE'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()