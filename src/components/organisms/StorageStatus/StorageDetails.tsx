import { usePersistence } from "./usePersistence";

function formatBytes(bytes?: number): string {
  if (bytes === undefined) {
    return "?";
  }
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = Math.round(bytes / Math.pow(1024, i));
  return `${size} ${sizes[i]}`;
}

const StorageDetails = () => {
  const { persistent, storage } = usePersistence();
  return (
    <div className="grid grid-cols-2 gap-2">
      <label className="font-bold">Persistenz</label>
      <label>{persistent}</label>
      <label className="font-bold">Speicherplatz verfügbar</label>
      <label>{formatBytes(storage?.quota)}</label>
      <label className="font-bold">Speicherplatz gebraucht</label>
      <label>{formatBytes(storage?.usage)}</label>
    </div>
  );
};

export { StorageDetails };
