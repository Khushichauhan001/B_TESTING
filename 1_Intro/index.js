const fs = require('fs');
const file = 'todos.json';

function loadTodos() {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function saveTodos(todos) {
    fs.writeFileSync(file, JSON.stringify(todos, null, 2));
}

const command = process.argv[2];
const args = process.argv.slice(3);

let todos = loadTodos();

if (command === "add") {
    const task = args.join(" ");
    todos.push({ id: Date.now(), task, done: false });
    saveTodos(todos);
    console.log("Todo added:", task);
} 
else if (command === "delete") {
    const id = parseInt(args[0]);
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    console.log("Todo deleted:", id);
} 
else if (command === "done") {
    const id = parseInt(args[0]);
    todos = todos.map(todo => todo.id === id ? { ...todo, done: true } : todo);
    saveTodos(todos);
    console.log("Marked as done:", id);
} 
else {
    console.log("Commands: add <task>, delete <id>, done <id>");
}
