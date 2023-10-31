import { useProjectStore } from "../../store/projectStore";
import { NewProjectForm } from "../organisms/NewProjectForm/NewProjectForm";
import { ProjectGrid } from "../organisms/ProjectGrid/ProjectGrid";

const ProjectPage = () => {
  const addProject = useProjectStore((state) => state.addProject);
  return (
    <>
      <h1 className="underline underline-offset-4 font-bold text-3xl mb-8">
        TimR!
      </h1>
      <ProjectGrid />
      <div className="h-12"></div>
      <NewProjectForm onProjectAdded={addProject} />
    </>
  );
};

export default ProjectPage;
