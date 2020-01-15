class Person {
  constructor(firstName, surname, dob) {
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    this.surname = surname
    this.dob = dob
    this.emails = []
    this.phoneNumbers = []
  }

  fullname() {
    return this.firstName + ' ' + this.surname
  }

  addEmail(email) {
    this.emails.push(email)
  }

  addPhone(number) {
    this.phoneNumbers.push(number)
  }

  returnFormattedDetails() {
    let dash = "" 
    for (let i = 0; i < this.fullname().length; i++) {
      dash = dash + "-"
    }
    const emailList = "- " + this.emails.join(`\n    - `)
    const phoneList = "- " + this.phoneNumbers.join(`\n    - `)
    return `
    ${this.fullname()}
    ${dash}
    DOB: ${this.dob}
    
    Email Addresses:
    ${emailList}
    
    Phone Numbers:
    ${phoneList}
    `
  }
}

module.exports = Person
