function phoneBook(input) {
    let output = new Map();
    input.forEach(line => {
        let [name, phone] = line.split(' ');
        output.set(name, phone);
    });
    [...output].forEach(([name, phone]) => console.log(`${name} -> ${phone}`));
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])