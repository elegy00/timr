import { expect, test } from "vitest";
import { jsonReviver } from "./projectStore";
import { Project } from "./types";

test("reviver creates date fields", () => {
  const testInput: Project = {
    id: "1",
    name: "test",
    times: [new Date(), new Date()],
  };
  const testString = JSON.stringify(testInput);
  const testResult = JSON.parse(testString, jsonReviver) as Project;

  for (let index = 0; index < testResult.times.length; index++) {
    expect(testResult.times[index]).toStrictEqual(testInput.times[index]);
  }
});
