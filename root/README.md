# {%= name %}

{%= description %}

## Documentation

For templates, add "_" to simulate "/" and doble "__" to simulate partials

"post_index" -> post/route
"post__partial" -> post/_partial

Run `grunt` to compile, and in another terminal start the server. The templates
are compiled on change.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
