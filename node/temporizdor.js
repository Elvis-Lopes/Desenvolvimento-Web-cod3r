const SCHEDULE = require('../exercicios-js/node_modules/node-schedule')
const tarefa1 = SCHEDULE.scheduleJob('*/5 * 21 * * 2', function(){
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 2000)

const regra = new SCHEDULE.RecurrenceRule()
regra.dayOfWeek = [new SCHEDULE.Range(1, 5)]
regra.hour = 12
regra.second = 30