"use client";
import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useInView } from "react-intersection-observer";
import styles from './stylesAll.module.scss'

const projectsData = [
  {
    id: 1,
    title: "Celebrities",
    description: "API Project Created by My Self",
    image: "/images/projects/api-celebrities.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fernan-sax78/api_celebrities.git",
    previewUrl: "https://api-celebrities-gneqx83rc-fernandos-projects-4547a891.vercel.app/",
    name : '',
  },
  {
    id: 2,
    title: "Creative-Atelier Ali per Angeli",
    description: "A Real Project for Kids Atelier",
    image: "/images/projects/ali_per_angeli.png",
    tag: ["All", "Web"],
    gitUrl : "",
    previewUrl: "https://ali-per-angeli.com/",
    name : '/pages/wordpress_project',
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An E-Commerce with Strapi e Nextjs",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fernan-sax78/ecommerce_client",
    previewUrl: "https://titodev-ecommerce-gaming-site.netlify.app/",
    name : '',
  },
  {
    id: 4,
    title: "Chat Application",
    description: "React-Native Project",
    image: "/images/photos_chatapp/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fernan-sax78/client.git",
    previewUrl: "",
    name : "/pages/chat_app_info"
  },
  {
    id: 5,
    title: "Weather Application",
    description: "React-Native Projet",
    image: "/images/photos_weatherapp/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fernan-sax78/weather.git",
    previewUrl: "",
    name : '/pages/weather_app_info',
  },
  {
    id: 6,
    title: "Todo List App",
    description: "React-Native App with Node.js and MySQL ",
    image: "/images/photos_todoapp/principal.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fernan-sax78/todo-app-front_end.git",
    previewUrl: "",
    name : '/pages/todo_app_info',
  },
];


function ProjectsSection() {

const [tag, setTag] = useState('All');

const { ref : myRef , inView : myElementisVisible } = useInView();

const handleTagChange = (newTag) => {
  setTag(newTag);
}

const filteredProjects = projectsData.filter((project) => 
  project.tag.includes(tag)
)

  return (
     <section className = "flex flex-col  justify-center" id = "projects"  ref = {myRef}>

     <div className = "max-[900px]:mt-0 mb-5">
     <h2 className = {`text-center text-4xl font-bold text-white mt-6 mb-4 ${myElementisVisible ? styles.animationThree : ''}`} >My Projects</h2>
     <div className = "text-white flex flex-row justify-center items-center gap-2 py-6">
       <ProjectTag onClick = {handleTagChange} name = 'All' isSelected = {tag === "All"}/>
       <ProjectTag onClick = {handleTagChange} name = 'Web' isSelected = {tag === "Web"}/>
       <ProjectTag onClick = {handleTagChange} name = 'Mobile' isSelected = {tag === "Mobile"}/>
     </div>
     <div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
    {filteredProjects.map(project => 
     <ProjectCard 
     key ={project.id} 
     title = {project.title} 
     description={project.description} 
     imgUrl={project.image}
     gitUrl = {project.gitUrl}
     previewUrl= {project.previewUrl}
     name = {project.name}
     />
      )}
     </div>
     </div>

     </section>
  )
}

export default ProjectsSection;
