export interface Project {
  id: string;
  name: string;
  times: Date[];
}

export interface ProjectService {
  addProject: (project: Pick<Project, "name">) => void;
  addTime: (project: Pick<Project, "id">, time: Date) => void;
  projects: Project[];
  removeProject: (project: Pick<Project, "id">) => void;
}
