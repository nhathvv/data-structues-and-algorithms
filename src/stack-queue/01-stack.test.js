import { createStack } from "./01-stack";
describe("createStack()", () => {
  it("all in one :P", () => {
    // should be empty
    const stack = createStack();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
    // should have one item in stack
    stack.push(1);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(1);
    // should have two items in stack
    stack.push(2);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(2);
    // remove one item from stack
    const two = stack.pop();
    expect(two).toBe(2);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(1);
    // remove the last item from stack
    const one = stack.pop();
    expect(one).toBe(1);
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
  });
});
