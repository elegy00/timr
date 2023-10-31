import { useCallback } from "react";
import { useProjectStore } from "../../../store/projectStore";
import { Button } from "../../atoms/Button/Button";
import { utils, writeFileXLSX } from "xlsx";

const Exporter = () => {
  const projects = useProjectStore((store) => store.projects);

  const addProject = useCallback(() => {
    const ws = utils.json_to_sheet(projects);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "projects.xlsx");
  }, [projects]);

  return (
    <Button className="w-fit" onClick={addProject}>
      EXCEL
    </Button>
  );
};

export { Exporter };
