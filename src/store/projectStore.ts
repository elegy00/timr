import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Project, ProjectService } from "./types";

const newArrayWithItem =
  (project: Pick<Project, "id">, current: Project[]) =>
  (updateProj: (project: Project) => Project): Project[] => {
    const result = [...current];
    const toChangeIndex = result.findIndex((p) => p.id === project.id);
    const toChange = result[toChangeIndex];
    const updated = updateProj({ ...toChange });
    result.splice(toChangeIndex, 1, updated);
    return result;
  };

export const useProjectStore = create<ProjectService>((set) => ({
  projects: [],
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, { ...project, id: uuidv4(), times: [] }],
    })),
  removeProject: (project) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== project.id),
    })),
  addTime: (project, time) =>
    set((state) => ({
      projects: newArrayWithItem(
        project,
        state.projects
      )((old) => {
        old.times.push(time);
        old.times.sort();
        return old;
      }),
    })),
}));
