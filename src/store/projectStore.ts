import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { ProjectService } from "./types";

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

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
}));
