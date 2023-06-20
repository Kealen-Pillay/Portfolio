import React, {useEffect, useState} from "react";
import {getProjects} from "../../api/API";
import {IProject} from "../../types/type";



const Projects = () => {
    const [projectList, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
            fetchProjects();
        }
        , []);

    const fetchProjects = (): void => {
        getProjects()
            .then(({data: {projects}}: IProject[] | any) => setProjects(projects))
            .catch((err: Error) => console.log(err));
    };

    return (
        <>
            <section className="flex h-screen w-screen Roboto bg-[#1e1e1e]">
                <h1 className="text-white font-bold text-5xl mx-5 my-10">Projects</h1>
                <div className="w-screen">

                </div>
            </section>
        </>
    );
};

export default Projects;
