import { assert } from "chai";
import { setIgnoreGLErrors, ignoreGLErrors } from "../src/index";

describe("Package", function () {
  it("works", () => {
    assert.equal(ignoreGLErrors(), true);
    setIgnoreGLErrors(false);
    assert.equal(ignoreGLErrors(), false);
  });
});
