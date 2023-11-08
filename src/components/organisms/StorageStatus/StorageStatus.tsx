import storageIcon from "../../../assets/storage-search.svg";
import { PopoverTrigger } from "../../atoms/Popover/PopoverTrigger";

const StorageStatus = () => {
  return (
    <PopoverTrigger
      trigger={<img src={storageIcon} className="storage" alt="storage" />}
    >
      <>Le Content</>
    </PopoverTrigger>
  );
};

export { StorageStatus };
