import axios from "axios";
import { Todo } from "../interfaces/Todo";

export const getTodos = (): Promise<Todo[]> => {
    return axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos/")
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const getTodo = (id: number): Promise<Todo> => {
    return axios
        .get<Todo>("https://jsonplaceholder.typicode.com/todos/" + id)
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
};
