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
}

module.exports = Person
