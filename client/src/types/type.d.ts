interface IProject {
  _id: string;
  name: string;
  technologies: Array<string>;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

interface IProjectProps {
  project: IProject;
}

type APIDataType = {
  message: string;
  status: string;
  projects: IProject[];
  project?: IProject;
};
