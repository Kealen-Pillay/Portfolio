import React, { useEffect, useState } from "react";
import { getProjects } from "../../api/API";
import { IProject } from "../../types/type";
import Carousel from "./Carousel";
import LayersIcon from "@mui/icons-material/Layers";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Projects = () => {
  const [projectList, setProjects] = useState<IProject[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const nextSlide = (): void => {
    setIndex((currentIndex) =>
      currentIndex === projectList.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = (): void => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? projectList.length - 1 : currentIndex - 1
    );
  };

  const fetchProjects = (): void => {
    getProjects()
      .then(({ data: { projects } }: IProject[] | any) => setProjects(projects))
      .catch((err: Error) => console.log(err));
  };

  return (
    <>
      <section className="flex flex-col h-screen w-screen Roboto bg-[#1e1e1e]">
        <h1 className="text-white font-bold text-5xl mx-5 my-10">Projects</h1>
        <div className="flex flex-row w-screen">
          <div className="overflow-hidden relative">
            <div className="flex  flex-col text-white w-screen h-100 bg-rose-500 pl-12 pr-6 py-5">
              {projectList && (
                <div
                  className="transition-transform ease-out duration-500"
                  key={projectList[index]?._id}
                >
                  <h1 className="text-2xl font-bold mb-5">
                    {projectList[index]?.name}
                  </h1>
                  <div className="flex flex-row">
                    <LayersIcon className="mr-2" />
                    <h3 className="mb-3 text-xs">
                      {projectList[index]?.technologies.map(
                        (technology: string) => technology + ", "
                      )}
                    </h3>
                  </div>
                  <p>{projectList[index]?.description}</p>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-between p-1">
                <button
                  onClick={prevSlide}
                  className="rounded-full hover:shadow hover:opacity-90 hover:bg-white"
                >
                  <ChevronLeftIcon sx={{ color: "#1e1e1e" }} fontSize="large" />
                </button>
                <button
                  onClick={nextSlide}
                  className="rounded-full hover:shadow hover:opacity-90 hover:bg-white"
                >
                  <ChevronRightIcon
                    sx={{ color: "#1e1e1e" }}
                    fontSize="large"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
