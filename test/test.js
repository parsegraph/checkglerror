var assert = require("assert");
import todo from "../dist/checkglerror";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
