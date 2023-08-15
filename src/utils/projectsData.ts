export type Project = {
    name: string,
    description: string,
    technologies: {name: string, icon:string}[],
    createdAt: Date,
    images:string[],
    type: 'Mobile app' | 'Web app'
}

const myTechnologies = [
    {name:'React', icon: ""},
    {name:'React Native', icon: ""},
    {name:'Expo', icon: ''},
    {name:'Firebase', icon: ""},
    {name:'Scss', icon: ""},
    {name:'Redux', icon: ""},
    {name:'Vue', icon: ""},
    {name:'Framer motion', icon: ""},
    {name:'.Net core', icon: ""},
]

export const myProjects:Project[] = [
    {
        name: 'Cars design',
        description: "Cars design it is a web application built to connect the automotive community. Users can share their car designs, add the necessary parameters, photos, components and more. The application also allows you to create spots, write with others.",
        createdAt: new Date(),
        type: 'Web app',
        technologies: [myTechnologies[0], myTechnologies[4], myTechnologies[5], myTechnologies[6], myTechnologies[8]],
        images:[]
    }
]