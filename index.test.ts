import { afterAll, afterEach, beforeAll, describe, expect, test } from "bun:test";
import { getCharacter, getPet } from ".";
import { server } from "./mocks/node";
import { aCharacter } from "./graphql/generated/sdk";

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

  test("should return a character", async () => {
    const data = await getCharacter()
    const character = aCharacter({ episode: [], location: { residents: [] } })

    expect(data).toEqual({ character });
  })
});
