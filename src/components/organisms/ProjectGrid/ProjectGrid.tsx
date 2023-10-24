import { Fragment } from "react";
import { useProjectStore } from "../../../store/projectStore";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

const ProjectGrid = () => {
  const { projects, addProject, removeProject } = useProjectStore();

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project) => (
        <Fragment key={project.id}>
          <Input value={project.name} />
          <span>Times</span>
          <Button
            className="w-fit"
            onClick={() => removeProject({ id: project.id })}
          >
            Delete
          </Button>
        </Fragment>
      ))}

      <Input />
      <Button className="w-fit" onClick={() => addProject({ name: "ASDF" })}>
        Add
      </Button>
    </div>
  );
};

export { ProjectGrid };
