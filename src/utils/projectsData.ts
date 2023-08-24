export type Project = {
    name: string,
    description: string,
    technologies: {id: number, name: string, icon:string}[],
    createdAt: Date,
    image: 'carsdesignStart' | 'portfolio' | 'kaban' | 'monkey' | 'workSchedule' | 'downloadSongs' | 'shoppingNotes',
    type: 'Mobile app' | 'Web app',
    links: {
        linkToGithub: string,
        linkToLiveapp?: string
    }
}

export const myTechnologies = [
    {id:0, name:'React', icon: ""},
    {id:1,name:'React Native', icon: ""},
    {id:2,name:'Expo', icon: ''},
    {id:3,name:'Firebase', icon: ""},
    {id:4,name:'Scss', icon: ""},
    {id:5,name:'Redux', icon: ""},
    {id:6,name:'Vue', icon: ""},
    {id:7,name:'Framer motion', icon: ""},
    {id:8,name:'.Net core', icon: ""},
    {id: 9, name:'react-native-game-engine', icon: ''},
    {id:10, name:'Type script', icon: ""},
    {id:11, name:'Css', icon: ""},
    {id:12, name:'Java Script', icon: ""},
    {id:13, name:'Tailwind', icon: ""},
]

export const myProjects:Project[] = [
    {
        name: 'Cars design',
        description: "Cars design it is a web application built to connect the automotive community. Users can share their car designs, add the necessary parameters, photos, components and more. The application also allows you to create spots, write with others.",
        createdAt: new Date(),
        type: 'Web app',
        technologies: [
            myTechnologies[0], 
            myTechnologies[3], 
            myTechnologies[4], 
            myTechnologies[5], 
            myTechnologies[7],
            myTechnologies[10],
            myTechnologies[12]
        ],
        image:'carsdesignStart',
        links: {
            linkToGithub: 'https://github.com/infinite223/Cars-designs-web',
            linkToLiveapp: 'https://carsdesigns.netlify.app/'
        }
    },
    {
        name: 'Kaban',
        description: "Kaban is an application designed to provide the capabilities of the kaban table. The entire board in the application for a given project is updated dynamically so that users do not have to refresh the application",
        createdAt: new Date(),
        type: 'Mobile app',
        technologies: [ 
            myTechnologies[0], 
            myTechnologies[1], 
            myTechnologies[2],
            myTechnologies[3],  
            myTechnologies[5],
            myTechnologies[10],
            myTechnologies[12]
        ],
        image:'kaban',
        links: {
            linkToGithub: 'https://github.com/infinite223/kaban',
        }
    },
    {
        name: 'J-Monkey',
        description: "J-monkey is a simple mobile game. Inspired by the popular Flappy Bird game",
        createdAt: new Date(),
        type: 'Mobile app',
        technologies: [
            myTechnologies[0], 
            myTechnologies[1], 
            myTechnologies[2], 
            myTechnologies[5], 
            myTechnologies[9],
            myTechnologies[12]
        ],
        image:'monkey',
        links: {
            linkToGithub: 'https://github.com/infinite223/J-monkey',
            linkToLiveapp: 'https://play.google.com/store/apps/details?id=com.infinite223.Flappymonkey'
        }
    },
    {
        name: 'Work schedule',
        description: "Work schedule - It is a web application that offers creating a work schedule, inviting employees and enabling them to sign up for work on a given day and time.",
        createdAt: new Date(),
        type: 'Web app',
        technologies: [
            myTechnologies[0], 
            myTechnologies[3], 
            myTechnologies[4], 
            myTechnologies[5], 
            myTechnologies[7],
            myTechnologies[10],
            myTechnologies[12]
        ],
        image:'workSchedule',
        links: {
            linkToGithub: 'https://github.com/infinite223/J-monkey',
            linkToLiveapp: 'https://play.google.com/store/apps/details?id=com.infinite223.Flappymonkey'
        }
    },
    {
        name: 'Download songs',
        description: "Simple app to search for songs on youtube and download them.",
        createdAt: new Date(),
        type: 'Web app',
        technologies: [
            myTechnologies[0], 
            myTechnologies[11],
            myTechnologies[12]  
        ],
        image:'downloadSongs',
        links: {
            linkToGithub: 'https://github.com/infinite223/download-songs',
            linkToLiveapp: 'https://download-songs.netlify.app/'
        }
    },
    {
        name: 'Shopping notes',
        description: "Shopping-notes is a simple mobile application that allows users to create their shopping lists. Products in them will be automatically grouped by shops and product category, which will make shopping easier for the user.",
        createdAt: new Date(),
        type: 'Mobile app',
        technologies: [
            myTechnologies[0], 
            myTechnologies[1], 
            myTechnologies[2], 
            myTechnologies[10], 
            myTechnologies[12],
            myTechnologies[13]
        ],
        image:'shoppingNotes',
        links: {
            linkToGithub: 'https://github.com/infinite223/Shopping-notes',
            linkToLiveapp: 'https://play.google.com/store/apps/details?id=com.shopping.notes'
        }
    },
    {
        name: 'Portfolio',
        description: "Page about me, containing all my projects, my interests and contacts.",
        createdAt: new Date(),
        type: 'Mobile app',
        technologies: [
            myTechnologies[11],
            myTechnologies[12],  
            myTechnologies[6],  
        ],
        image:'portfolio',
        links: {
            linkToGithub: 'https://github.com/infinite223/Portfolio',
            linkToLiveapp: ''
        }
    }
]