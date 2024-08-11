import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export const info = {
    firstName: "Cody",
    lastName: "Fackrell",
    email: "cody.j.fackrell@gmail.com",
    initials: "CF",
    position: "Front-End Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🐝',
            text: 'based in utah'
        },
        {
            emoji: '🏎',
            text: 'avid motorsports fan'
        },
        {
            emoji: "💻",
            text: "React Developer"
        },
        {
            emoji: "📧",
            text: "cody.j.fackrell@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/codyfackrell",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/codyfackrell/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],

    bio: "Hello! I'm Cody. I have over seven years in the mental health industry working with a variety of populations. Over the last couple of years, I have been able to acquire technical skills that have allowed me to have a unique skill set. I have built several projects utilizing the technologies listed below. Feel free to reach out!",
   skills: [
        {
            name: 'javascript',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        // {
        //     name: 'typescript',
        //     link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        // },
        {
            name: 'react',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'tailwind',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'sass',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        },
        {
            name: 'redux',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
        },
        {
            name: 'materialui',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        },
        {
            name: 'node.js',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
        },
        {
            name: 'postgreSQL',
            link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
   ],

    // hobbies: [
    //     {
    //         label: 'reading',
    //         emoji: '📖'
    //     },
    //     {
    //         label: 'theater',
    //         emoji: '🎭'
    //     },
    //     {
    //         label: 'movies',
    //         emoji: '🎥'
    //     },
    //     {
    //         label: 'cooking',
    //         emoji: '🌶'
    //     }
    // ],

    portfolio: [
        {
            title: "Tour de Globe",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            stack: "React | Tailwind CSS | Node.js",
            description: "A country flashcard web application to help you learn the capitals and flags of countries around the world in a fun and interactive way.",
            image: mock1
        },
        {
            title: "Circuits",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            stack: "React | Tailwind CSS | Node.js",
            description: "A web application to help racing novices or enthusiasts learn interesting facts and test their knowledge about some of the most popular race tracks in the world.",
            image: mock2
        },
        // {
        //     title: "Press Zero",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     stack: "React | Tailwind CSS | Node.js",
        //     description: "",
        //     image: mock3
        // },
    ]
}