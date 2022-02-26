# parsegraph-checkglerror

This module checks for GL errors. It can be disabled on a global basis if it
is included as a peer dependency.

This check is slow, so it should be disabled in production environments, like so:

    <script src="parsegraph-checkglerror.js"></script>
    <script>
        parsegraph_checkglerror.setIgnoreGLErrors(true);
    </script>
