import storageIcon from "../../../assets/storage-search.svg";
import { PopoverTrigger } from "../../atoms/Popover/PopoverTrigger";
import { StorageDetails } from "./StorageDetails";

const StorageStatus = () => {
  return (
    <PopoverTrigger
      trigger={<img src={storageIcon} className="storage" alt="storage" />}
    >
      <StorageDetails />
    </PopoverTrigger>
  );
};

export { StorageStatus };
