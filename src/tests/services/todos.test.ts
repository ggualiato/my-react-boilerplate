import { getTodo, getTodos } from "../../services/todos";

test("should get all(length of 200) todos", async () => {
    const result = await getTodos();

    expect(result.length).toBe(200);
});

test("should get Todo 1", async () => {
    const result = await getTodo(1);
    const expectedTodo = { userId: 1, id: 1, title: "delectus aut autem", completed: false };

    expect(result).toEqual(expectedTodo);
});
