import { useEffect, useState } from "react";

type PersistenceState = "unbekannt" | "sicher" | "unsicher";

const usePersistence = () => {
  const [persistent, setPersistent] = useState<PersistenceState>("unbekannt");
  const [storage, setStorage] = useState<StorageEstimate | null>(null);

  useEffect(() => {
    const asyncHandler = async () => {
      if (navigator.storage && navigator.storage.persist) {
        const persistent = await navigator.storage.persist();
        if (persistent) {
          setPersistent("sicher");
        } else {
          setPersistent("unsicher");
        }
      }
    };
    asyncHandler();
  }, []);

  useEffect(() => {
    const asyncHandler = async () => {
      if (navigator.storage && navigator.storage.estimate) {
        const estimation = await navigator.storage.estimate();
        setStorage(estimation);
      }
    };
    asyncHandler();
  }, []);

  return { persistent, storage };
};
export { usePersistence };

