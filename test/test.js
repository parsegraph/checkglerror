var assert = require("assert");
import {setIgnoreGLErrors, ignoreGLErrors} from '../dist/checkglerror';

describe("Package", function () {
  it("works", ()=>{
    assert.equal(ignoreGLErrors(), true);
    setIgnoreGLErrors(false);
    assert.equal(ignoreGLErrors(), false);
  });
});
