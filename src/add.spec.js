import { expect } from "@esm-bundle/chai";
import { add } from "./add.js";

describe(add.name, () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("adds three numbers", () => {
    expect(add(1, 2, 3)).to.equal(6);
  });
});
