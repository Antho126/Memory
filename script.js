let section = document.getElementById("memory");

let memory = new Memory(3,8);
section.append(memory.toHTML());

console.log(memory.at(1,4));
// document.body.append(i.toHTML());