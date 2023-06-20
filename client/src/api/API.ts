import axios, { AxiosResponse } from "axios";
import {APIDataType} from "../types/type";

const baseUrl: string = "http://localhost:5000";

export const getProjects = async (): Promise<AxiosResponse<APIDataType>> => {
  try {
    const projects: AxiosResponse<APIDataType> = await axios.get(
      baseUrl + "/projects"
    );
    return projects;
  } catch (err) {
    throw err;
  }
};
