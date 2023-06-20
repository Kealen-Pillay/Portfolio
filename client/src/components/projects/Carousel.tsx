import { useState } from "react";
import { IProject } from "../../types/type";
import LayersIcon from "@mui/icons-material/Layers";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface IProps {
  slides: IProject[];
}

const Carousel = ({ slides }: IProps) => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setIndex((currentIndex) =>
      currentIndex === slides.length ? 0 : currentIndex + 1
    );
    console.log(index);
  };

  const prevSlide = (): void => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
    console.log(index);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 flex-col text-white w-screen h-100 bg-rose-500 pl-12 pr-6 py-5"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides && (
          <div>
            <h1 className="text-2xl font-bold mb-5">{slides[index].name}</h1>
            <div className="flex flex-row">
              <LayersIcon className="mr-2" />
              <h3 className="mb-3 text-xs">{slides[index].technologies}</h3>
            </div>
            <p>{slides[index].description}</p>
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
            <ChevronRightIcon sx={{ color: "#1e1e1e" }} fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
