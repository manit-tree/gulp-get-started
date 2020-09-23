# gulp-get-started
This is a sample project that help you quickly learn how to use gulp in your development workflow.

The tasks in this sample project includes

1. copy-html : this task will copy html files from "src" to "dist" folder.
2. build-js : this task will concat all js files into a single file + minify + rename to "main.min.js", then copy to "dist/js" folder.
3. build-css : this task will concat all scss files into a single file + compile to css + rename to "main.min.css", then copy to "dist/css" folder 

To run these tasks, you need to first install gulp cli using 

$ npm install -g gulp

### How to use

$ guld // run the default task
$ gulp copy-html // run copy-html task
$ gulp build-js // run build-js task
$ gulp build-css // run build.css task
