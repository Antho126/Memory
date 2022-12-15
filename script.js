let section = document.getElementById("memory");

let memory = new Memory(2,4);
section.append(memory.toHTML());

let y = 10000;
console.log(--y);
// document.body.append(i.toHTML());