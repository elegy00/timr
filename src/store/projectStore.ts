import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Project, ProjectService } from "./types";

import { persist, createJSONStorage } from "zustand/middleware";

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

export const jsonReviver = (key: string, value: unknown): unknown => {
  if (key === "times" && Array.isArray(value)) {
    return value.map((v) => {
      return new Date(v);
    });
  }
  return value;
};

export const useProjectStore = create<ProjectService>()(
  persist(
    (set, get) => ({
      projects: [],
      addProject: (project) =>
        set(() => ({
          projects: [
            ...get().projects,
            { ...project, id: uuidv4(), times: [] },
          ],
        })),
      removeProject: (project) =>
        set(() => ({
          projects: get().projects.filter((p) => p.id !== project.id),
        })),
      addTime: (project, time) =>
        set(() => ({
          projects: newArrayWithItem(
            project,
            get().projects
          )((old) => {
            old.times.push(time);
            old.times.sort();
            return old;
          }),
        })),
    }),
    {
      name: "asdf",
      storage: createJSONStorage(() => sessionStorage, {
        reviver: jsonReviver,
      }),
    }
  )
);
