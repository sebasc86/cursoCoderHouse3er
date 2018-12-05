let Task = require('./src/Task')
let TaskList = require('./src/TaskList')


let firstTask = new Task

firstTask.description = 'ir al curso'
firstTask.setStatus(Task.STATUS_PENDING())
console.log(firstTask.is(Task.STATUS_DONE()))

let taskList = new TaskList

taskList.add(firstTask)