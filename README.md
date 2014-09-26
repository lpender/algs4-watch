Algs4 Java Environment
----------------------

Algs4 Java set up for https://class.coursera.org/algs4partI-006.

This repository uses `grunt` to automatically run

```
checkstyle-algs4
javac-algs4
```

whenever a `.java` file is saved.

and

```
findbugs-algs4
```

whenever a `.class` file is saved.

These tasks are completed automatically on save, as a time-saving device.


Note: Do NOT attempt to post solutions here, nor expect to find any.

Setup
-----

Install NPM if you don't have it already.

```
npm install
npm install -g grunt-cli
grunt
```

Include the `algs4.jar` and `stdlib.jar` in your JAVA class path.

#VIM w/ Syntastic#

```
:SyntasticJavacEditClasspath
/path/to/algs4/algs4.jar
/path/to/algs4/stdlib.jar
```

Put all coursework under a "coursework" directory, so that it is ignored by
`git`.


