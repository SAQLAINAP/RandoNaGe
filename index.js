import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.render("index.ejs");
});

app.get('/slogan', (req, res) => {
    res.render("slogan.ejs", { slogan: null });
});

let list1 = [
    'geek', 'cs', 'hardware', 'bug', 'code', 'data', 'alpha', 'cyber', 'dev', 'smart', 
    'tech', 'byte', 'pixel', 'quantum', 'nano', 'giga', 'mega', 'crypto', 'astro', 'neon', 
    'Binary', 'network', 'cloud', 'software', 'algorithm', 'database', 'web', 'security', 
    'wireless', 'robotics', 'AI', 'IoT', 'blockchain', 'virtual', 'augmented', 'analytics', 
    'automation', '5G', 'bigdata', 'algorithm', 'user', 'design', 'matrix', 'quantum', 
    'dataflow', 'middleware', 'infrastructure', 'protocol', 'interface'
];
let list2 = [
    'bounty', 'hunters', 'learners', 'titans', 'knights', 'nerds', 'champs', 'kings', 
    'dominators', 'warriors', 'masters', 'innovators', 'pioneers', 'guardians', 
    'vanguards', 'hackers', 'builders', 'explorers', 'creators', 'genius', 'engineers', 
    'developers', 'specialists', 'experts', 'gurus', 'wizards', 'ninjas', 'enthusiasts', 
    'aficionados', 'geeks', 'trailblazers', 'strategists', 'champions', 'mavericks', 
    'sages', 'pathfinders', 'artisans', 'engineers', 'commanders', 'leaders', 'achievers', 
    'oracles', 'designers', 'technologists', 'masters'
];

let slogans = [
    'Innovation at its best', 
    'Creating the future', 
    'Tech for good', 
    'Smart solutions, better world', 
    'Data-driven excellence', 
    'Coding the world', 
    'Smart ideas, smart solutions', 
    'Engineering the future', 
    'Tech with a purpose', 
    'Leading with technology',
    'Innovate. Create. Dominate.',
    'Code your dreams to reality',
    'Hack the future',
    'Think, Code, Achieve',
    'Revolutionizing tech, one line at a time',
    'Bridging ideas with innovation',
    'Innovation through collaboration',
    'Coding for change',
    'Beyond boundaries with tech',
    'From concept to creation',
    'Empowering ideas through technology',
    'Invent. Build. Inspire.',
    'Pioneering the digital future',
    'Code for impact',
    'Design, Develop, Deliver',
    'Hack to the top',
    'Transforming ideas into solutions',
    'Innovation meets creativity',
    'Future-ready solutions',
    'Tech beyond imagination',
    'Breaking barriers with innovation',
    'Teamwork makes the dream work',
    'Innovate, Collaborate, Succeed',
    'Designing the future',
    'Smart tech, smart team',
    'Building tomorrow today',
    'Engineering success',
    'Tech-driven transformation',
    'Creative coding for a better world',
    'Innovating for excellence',
    'Transforming tech with teamwork',
    'Smart minds, smart solutions',
    'Dream, Code, Innovate',
    'Collaborate and conquer',
    'Hack the impossible',
    'Code the extraordinary',
    'Designing innovation',
    'Future-focused tech',
    'Empowering innovation through tech',
    'Crafting solutions with creativity',
    'Tech-powered success',
    'Creating smart solutions together'
];


app.post('/submit', (req, res) => {
    // Handle the form submission here
    // You can access the submitted data using req.body
    // res.send(`Your cool team name is: ${teamname}`);
    const randfir=list1[Math.floor(Math.random() * list1.length)];
    const randsec=list2[Math.floor(Math.random() * list2.length)];
    const teamname = randfir.charAt(0).toUpperCase() + randfir.slice(1) + " " + randsec.charAt(0).toUpperCase() + randsec.slice(1);
    res.render("index.ejs", {team: teamname});
});


app.post('/generate-slogan', (req, res) => {
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    res.render("slogan.ejs", { slogan: slogan });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });