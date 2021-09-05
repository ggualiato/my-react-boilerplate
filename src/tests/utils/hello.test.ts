import { sayHello } from "../../utils/hello";

test("should say Hello World correctly", () => {
    const result = sayHello(" World");

    expect(result).toBe("Hello World");
});
