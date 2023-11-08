import { useProjectStore } from "../../store/projectStore";
import { Exporter } from "../organisms/Exporter/Exporter";
import { NewProjectForm } from "../organisms/NewProjectForm/NewProjectForm";
import { ProjectGrid } from "../organisms/ProjectGrid/ProjectGrid";
import { StorageStatus } from "../organisms/StorageStatus/StorageStatus";

const ProjectPage = () => {
  const addProject = useProjectStore((state) => state.addProject);
  return (
    <>
      <header className="flex justify-between gap-2">
        <h1 className="underline underline-offset-4 font-bold text-3xl mb-8">
          TimR!
        </h1>
        <StorageStatus />
      </header>
      <ProjectGrid />
      <div className="h-12"></div>
      <NewProjectForm onProjectAdded={addProject} />
      <Exporter />
    </>
  );
};

export default ProjectPage;
