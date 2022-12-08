/* Your Code Here */
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 
let createEmployeeRecord = function(row){
  return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
  return employeeRowData.map(function(row){
      return createEmployeeRecord(row)
  })
}
let createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}
let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}
let hoursWorkedOnDate = function(soughtDate){
  let comingIn = this.timeInEvents.find(function(e){
      return e.date === soughtDate
  })


  const createEmployeeRecords = function (employeesData) {
    return employeesData.map((eachData) => {
      return createEmployeeRecord(eachData);
    })
  }

  const createTimeInEvent = function (timeStamp) {
    const [date, punchedInStamp] = timeStamp.split(' ');

    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(punchedInStamp),
      date: date
    })

    return this;
  }

  const createTimeOutEvent = function (timeStamp) {
    const [date, punchedOutStamp] = timeStamp.split(' ');

    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(punchedOutStamp),
      date: date
    })

    return this;
  }

  const hoursWorkedOnDate = function (givenDate) {
    const timeIn = this.timeInEvents.find((e) => {
      return e.date === givenDate;
    });

    const timeOut = this.timeOutEvents.find((e) => {
      return e.date === givenDate;
    });

    return (timeOut.hour - timeIn.hour) / 100;
  }

  const wagesEarnedOnDate = function (givenDate) {
    const totalHoursWorked = hoursWorkedOnDate.call(this, givenDate)

    return totalHoursWorked * this.payPerHour;
  }

  const calculatePayroll = function (employeeRecords) {
        return employeeRecords.reduce((sum, employee) => {
      return sum + allWagesFor.call(employee);
    }, 0);
  }

  const findEmployeeByFirstName =  (collection, firstNameString) => {
    return collection.find((employee) => {
      return employee.firstName === firstNameString;
    })
  }
  let goingOut = this.timeOutEvents.find(function(e){
    return e.date === soughtDate
})
return (goingOut.hour - comingIn.hour) / 100
}
let wagesEarnedOnDate = function(dateSought){
  let rawWage = hoursWorkedOnDate.call(this, dateSought)
      * this.payPerHour
  return parseFloat(rawWage.toString())
}
let allWagesFor = function(){
  let validDate = this.timeInEvents.map(function(e){
      return e.date
  })
  let payable = validDate.reduce(function(memo, d){
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0)

  return payable
}
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
} 
