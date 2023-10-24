import { Fragment } from "react";
import { useShallow } from "zustand/react/shallow";
import { useProjectStore } from "../../../store/projectStore";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

const ProjectGrid = () => {
  const { projects, removeProject, addTime } = useProjectStore(
    useShallow((state) => ({
      projects: state.projects,
      removeProject: state.removeProject,
      addTime: state.addTime,
    }))
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>ProjectName</div>
      <div>Times</div>
      <div></div>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <Input defaultValue={project.name} readOnly />
          <div>
            <div className="flex flex-col">
              {project.times.map((t) => (
                <span key={t.getTime()}>
                  {t.toLocaleDateString()} - {t.toLocaleTimeString()}
                </span>
              ))}
            </div>
            <Button
              className="w-fit ml-auto"
              onClick={() => addTime({ id: project.id }, new Date())}
            >
              +
            </Button>
          </div>
          <Button
            className="w-fit"
            onClick={() => removeProject({ id: project.id })}
          >
            Delete
          </Button>
        </Fragment>
      ))}
    </div>
  );
};

export { ProjectGrid };
