import { useEffect, useState } from "react";
import { getProjects } from "../../api/API";
import { IProject } from "../../types/type";
import LayersIcon from "@mui/icons-material/Layers";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Limitless1 from "../../images/Limitless_1.png";
import Limitless2 from "../../images/Limitless_2.png";
import TaskIt1 from "../../images/Task-it_1.png";
import TaskIt2 from "../../images/Task-it_2.png";
import SportsHub1 from "../../images/SportsHub_1.png";

const Projects = () => {
  const [projectList, setProjects] = useState<IProject[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [images, setImages] = useState<Array<any>>([
    [SportsHub1],
    [Limitless1, Limitless2],
    [TaskIt1, TaskIt2],
  ]);

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
        <h1 className="text-white font-bold text-5xl mx-5 my-5">Projects</h1>
        <div className="flex items-start justify-center flex-row w-screen h-full">
          <div className="overflow-hidden relative">
            <div className="flex  flex-col text-white w-screen  h-full pl-12 pr-6 py-5">
              {projectList && (
                <div
                  className="transition-transform ease-out duration-500"
                  key={projectList[index]?._id}
                >
                  <h1 className="text-3xl font-bold mb-5">
                    {projectList[index]?.name}
                  </h1>
                  <img
                    className="w-22 h-22 mb-5 border rounded"
                    src={images[index][0]}
                    alt="preview"
                  />
                  <div className="flex flex-row">
                    <LayersIcon className="mr-2" />
                    <h3 className="mb-5 text-xs">
                      {projectList[index]?.technologies.map(
                        (technology: string, currentIndex) =>
                          currentIndex !==
                          projectList[index]?.technologies.length - 1
                            ? technology + ", "
                            : technology
                      )}
                    </h3>
                  </div>
                  <p>{projectList[index]?.description}</p>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={prevSlide} className="rounded-full">
                  <ChevronLeftIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
                </button>
                <button onClick={nextSlide} className="rounded-full">
                  <ChevronRightIcon
                    sx={{ color: "#FFFFFF" }}
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
