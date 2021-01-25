const mane = prompt('Type your name')
const surname = prompt('Type your surname')
const mail = prompt('Type your mail')
const age = prompt('Type your nsme')
const profession = prompt('Your profession title')
const levelOfEducation = prompt('Your education level')
const workExperience = prompt('Your work experience')



let user = {     
    name: mane,  
    age: age,
    surname: surname,
    mail: mail,
    profession: profession,
    levelOfEducation: levelOfEducation,
    workExperience: workExperience,

    toString() {
        return `your name is ${name} and your surname is ${surname}. Your mail is ${mail}. You are ${age} years old. Your  profession title is a ${profession} and your education level is ${levelOfEducation}. Your work experience is ${workExperience} `;
      }
  };
 
confirm(user);
console.log(user)

