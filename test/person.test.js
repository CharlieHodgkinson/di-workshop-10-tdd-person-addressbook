const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', () => {
  it('should initialize properly', () => {
    let person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.firstName).to.equal('Joe')
    expect(person.surname).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1990')
    expect(person.emails).to.deep.equal([])
  })

  it('should capitalize first name', () => {
    let person = new Person('amy', 'Smith', '1 Jan 1990')
    expect(person.firstName).to.equal('Amy')
  })

  it('should return a full name', () => {
    let person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    expect(person.fullname()).to.equal('Joe Bloggs')
  })

  it('should add emails to array', () => {
    let person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    person.addEmail('joe@example.com')
    person.addEmail('joe.bloggs@example.co.uk')

    expect(person.emails).to.deep.equal(['joe@example.com', 'joe.bloggs@example.co.uk'])
  })

})