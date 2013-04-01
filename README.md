# grunt-init-ember

> Create a Ember.js app with [grunt-init][], included a Express.js server and
autocompile handlebar task.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:alejandro/grunt-init-ember.git ~/.grunt-init/ember
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init ember
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._


After you have installed the dependencies with `npm install -d` you can start the server with `node server` and in another tab you can start the grunt `watch` task 
to autocompile the templates on change.

## A word about templates

Naming is important when you define your templates, as you may know. the name of the template is the name that you are using in your Ember App for Routes and stuff.

If you want to define a partial do it with doble underscore (__).
