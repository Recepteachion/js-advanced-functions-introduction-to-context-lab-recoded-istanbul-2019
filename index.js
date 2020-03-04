// Your code here

function createEmployeeRecord(array) {
  let arr = {

    firstName :array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  return arr
}

function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(el => createEmployeeRecord(el))
}

function createTimeInEvent( obj ,dt="2014-02-28 14:00"){
  
  let date = new Date(dt)
  obj.timeInEvents.push({
    type:"TimeIn",
    hour :date.toLocaleDateString().split("/").reverse().join("-") ,
    date :date.getDate()
  })
  
  return obj
}

function createTimeOutEvent( obj ,dt){
  let date = new Date(dt)
  obj.timeInEvents.push({
    type:"TimeIn",
    hour :datetoLocaleDateString().split("/").reverse().join("-") ,
    date :date.getDate()
  })
  
  return obj
}
  


function hoursWorkedOnDate(obj ,dt="2014-02-28"){
     let date = new Date("2014-02-28")
     return parseInt(obj.timeOutEvents[date]- obj.timeInEvents[date])
}


function wagesEarnedOnDate(obj =createEmployeeRecords(array),date = new Date("2014-02-28")){
   
  return hoursWorkedOnDate()*obj[payPerHour]
}


function allWagesFor(obj =createEmployeeRecords(array)){
  return wagesEarnedOnDate()

 
  
}

function createEmployeeRecords(array){
  return array.map(el => createEmployeeRecord(el))
}



function hoursWorkedOnDate(array,dt){
  let obj =createEmployeeRecord(array) 
  let date = new Date(dt)
}

function wagesEarnedOnDate(array,dt){
  let obj =createEmployeeRecord(array) 
  let date = new Date(dt)
}
function allWagesFor(array){
  

}

function findEmployeeByFirstName(srcArray,firstName){
  if (srcArray.includes(firstName)){return true}
  else {return undefined}
  
}


function calculatePayroll(arr=createEmployeeRecords(array)){
  return wagesEarnedOnDate()}

function calculatePayroll(array){
  return array

}