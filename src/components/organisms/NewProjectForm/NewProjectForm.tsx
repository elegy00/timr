import { useCallback, useState } from "react";
import { Project } from "../../../store/types";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

interface Props {
  onProjectAdded: (project: Pick<Project, "name">) => void;
}

const NewProjectForm = ({ onProjectAdded }: Props) => {
  const [name, setName] = useState("");

  const addProject = useCallback(() => {
    setName("");
    onProjectAdded({ name });
  }, [name, onProjectAdded]);
  return (
    <div className="grid grid-cols-3 gap-4">
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Project name"
      />
      <Button className="w-fit" onClick={addProject}>
        Add
      </Button>
    </div>
  );
};

export { NewProjectForm };
