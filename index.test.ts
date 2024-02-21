import { expect, test, describe, beforeAll, afterEach, afterAll } from "bun:test"
import { server } from "./mocks/node";
import { getPet } from ".";

test("should test correctly", () => {
  expect("morty").toBe("morty");
});

describe("basic mocked suite", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  })

  afterAll(() => {
    server.close();
  })

  test("should return world", async () => {
    const response = await fetch("https://example.com/hello");
    const data = await response.text();
    expect(data).toEqual("world!");
  });

  test("should return a pet", async () => {
    const data = await getPet()

    expect(data).toMatchObject({ name: "doggie" });
  })
});
