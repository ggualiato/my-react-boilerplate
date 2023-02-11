import { Todo } from "@/interfaces/Todo";
import axios from "axios";

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const resp = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos/");

        return resp.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getTodo = async (id: number): Promise<Todo> => {
    try {
        const resp = await axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/" + id);
        return resp.data;
    } catch (error) {
        throw new Error(error);
    }
};
