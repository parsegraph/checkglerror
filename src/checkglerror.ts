// Whether GL errors are checked or not; disabling this improves performance.
console.log("Loading checkglerror");

let IGNORE_GL_ERRORS:boolean = true;
export function setIgnoreGLErrors(value:boolean):void {
  IGNORE_GL_ERRORS = value;
}

export function ignoreGLErrors():boolean {
  return IGNORE_GL_ERRORS;
}

export function glErrorString(gl:WebGLRenderingContext, err:number) {
  if (arguments.length < 2) {
    throw new Error('A GL context must be provided with the error');
  }
  switch (0 + err) {
    case gl.NO_ERROR:
      return 'NO_ERROR';
    case gl.INVALID_ENUM:
      return 'INVALID_ENUM';
    case gl.INVALID_VALUE:
      return 'INVALID_VALUE';
    case gl.INVALID_OPERATION:
      return 'INVALID_OPERATION';
    case gl.INVALID_FRAMEBUFFER_OPERATION:
      return 'INVALID_FRAMEBUFFER_OPERATION';
    case gl.OUT_OF_MEMORY:
      return 'OUT_OF_MEMORY';
    case gl.CONTEXT_LOST_WEBGL:
      return 'CONTEXT_LOST_WEBGL';
    default:
      return err;
  }
}

export default function checkGLError(gl:WebGLRenderingContext, ...args:any):void {
  if (IGNORE_GL_ERRORS) {
    return;
  }
  let msg;
  if (args.length > 1) {
    msg = args[0];
    for (let i = 1; i < args.length; ++i) {
      msg += args[i];
    }
  }
  let err;
  if ((err = gl.getError()) != gl.NO_ERROR && err != gl.CONTEXT_LOST_WEBGL) {
    if (msg) {
      throw new Error(
          'WebGL error during ' + msg + ': ' + glErrorString(gl, err),
      );
    } else {
      throw new Error('WebGL error: ' + glErrorString(gl, err));
    }
  }
}
