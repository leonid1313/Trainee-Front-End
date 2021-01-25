'use strict';

function greeting(name) {
  return this.salute + this.appeal + name+'!' + this.wishes
}

const doctor = {
  salute: 'Hello,',
  appeal: ' dr. ',
  wishes: ' Have a nice day',
  
};

const colleague = {
  salute: 'Hi,',
  appeal: ' dear ',
  wishes: ' Regards, John',
}

const resultDoctor = greeting.bind(doctor)
const resultColleague = greeting.bind(colleague)

const greetingDoctor = resultDoctor('Watson')
const greetingColleague = resultColleague('Kristy')

console.log(greetingDoctor)
console.log(greetingColleague)






