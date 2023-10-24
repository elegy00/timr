import { ProjectGrid } from "./components/organisms/ProjectGrid/ProjectGrid";

function App() {
  // const onTest = useCallback(async () => {
  //   navigator.storage &&
  //     navigator.storage.persist &&
  //     navigator.storage.persist();
  //   const root = await navigator.storage.getDirectory();
  //   const fl = await root.getFileHandle("test.txt", { create: true });
  //   const flWr = await fl.createWritable({ keepExistingData: true });
  //   console.log("lFil", flWr);
  //   await flWr.write("Test");
  //   flWr.close();

  //   const fl2 = await root.getFileHandle("test.txt");
  //   const flWr2 = await fl2.getFile();
  //   const res2 = await flWr2.text();
  //   console.log("2", res2);
  // }, []);

  return (
    <div className="bg-gray-200 p-4 md:p-8 min-h-screen">
      <h1 className="underline underline-offset-4 font-bold text-3xl mb-8">
        Timr!
      </h1>
      <ProjectGrid />
    </div>
  );
}

export default App;
