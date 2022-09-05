import { combineClassName } from "./combineClassName";

describe("combineClassName", () => {
    it("should combine class names", () => {
        expect(combineClassName("a", 1, "c")).toBe("a 1 c")
    })
    it("should ignore falsy values", () => {
        expect(combineClassName("a", undefined, "b", null, "c")).toBe("a b c")
    })
})