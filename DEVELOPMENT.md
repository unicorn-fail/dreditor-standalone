# Development

This is a standalone implementation of `dreditor` and `dreditor-ui` for the
sole purposes of helping develop it outside the scope of a d.o site (which has
a massive database).

It is recommended that you have at least a basic understanding of [Node.js]
development best practices before continuing. If not, please read their official
documentation before continuing.

## Prerequisites 

- [Node.JS]
- [Grunt.js] (install the global CLI tool)
- [dreditor] (located one level up `../dreditor`)
- [dreditor-ui] (located one level up `../dreditor-ui`)

## Setup

1. Clone all three repositories ([dreditor], [dreditor-ui] and this one) into
   the same folder.
2. Install the [Node.js] modules for [dreditor] and [dreditor-ui] respectively.
3. Create a local website instance (recommend using `dreditor-standalone.dev`
   for continuity sake) that points to the clone of this repository. This is
   where `index.html` lives.
4. Start the `grunt watch` tasks for both [dreditor] and [dreditor-ui] in
   separate terminal windows.
5. Now if files are changed in either of the main repositories, they will be
   automatically rebuilt and then you can refresh the browser to see the 
   affected changes.

[dreditor]: https://github.com/unicorn-fail/dreditor
[dreditor-ui]: https://github.com/unicorn-fail/dreditor-ui
[Node.js]: https://nodejs.org
[Grunt.js]: https://gruntjs.com/getting-started#installing-the-cli
