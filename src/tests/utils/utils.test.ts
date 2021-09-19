import { sum } from "../../utils/sum";

test("should sum 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
});
