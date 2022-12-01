// destructuring aliases

const language = {
    name: "JavaScript",
    founded:1995,
    founder:"Brenden Eich"
};

const {name:naam,founder:banaise} = language;
console.log(naam,banaise);