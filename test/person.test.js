const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')
const x = {
  name: 'Joe',
  lname: 'Bloggs',
  dob: '1 Jan 1990',
  emailA: 'joe@example.com',
  emailB: 'joe.bloggs@example.co.uk',
  numA: '07648297501',
  numB: '07648754865'
}

describe('Person', () => {
  it('should initialize properly', () => {
    let person = new Person(x.name, x.lname, x.dob)

    expect(person.firstName).to.equal(x.name)
    expect(person.surname).to.equal(x.lname)
    expect(person.dob).to.equal(x.dob)
    expect(person.emails).to.deep.equal([])
    expect(person.phoneNumbers).to.deep.equal([])
  })

  it('should capitalize first name', () => {
    let person = new Person('joe', x.lname, x.dob)
    expect(person.firstName).to.equal(x.name)
  })

  it('should return a full name', () => {
    let person = new Person(x.name, x.lname, x.dob)
    expect(person.fullname()).to.equal('Joe Bloggs')
  })

  it('should add emails to array', () => {
    let person = new Person(x.name, x.lname, x.dob)
    person.addEmail(x.emailA)
    person.addEmail(x.emailB)

    expect(person.emails).to.deep.equal([x.emailA, x.emailB])
  })

  it('should add phone numbers to array', () => {
    let person = new Person(x.name, x.lname, x.dob)
    person.addPhone(x.numA)
    person.addPhone(x.numB)

    expect(person.phoneNumbers).to.deep.equal([x.numA, x.numB])
  })

  it('should format details correctly', () => {
    let person = new Person(x.name, x.lname, x.dob)
    person.addPhone(x.numA)
    person.addPhone(x.numB)
    person.addEmail(x.emailA)
    person.addEmail(x.emailB)
    const expected = (`
    Joe Bloggs
    ----------
    DOB: 1 Jan 1990
    
    Email Addresses:
    - joe@example.com
    - joe.bloggs@example.co.uk
    
    Phone Numbers:
    - 07648297501
    - 07648754865
    `
    )
    expect(person.returnFormattedDetails()).equal(expected)
  })

})