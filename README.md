### Hexlet tests
[![Actions Status](https://github.com/chickenzombie/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/chickenzombie/frontend-project-46/actions)

### CI check and project tests (by using Jest framework)
[![CI check](https://github.com/chickenzombie/frontend-project-46/actions/workflows/test.yml/badge.svg)](https://github.com/chickenzombie/frontend-project-46/actions/workflows/test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/13bb25d0d01315ffad2c/maintainability)](https://codeclimate.com/github/chickenzombie/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13bb25d0d01315ffad2c/test_coverage)](https://codeclimate.com/github/chickenzombie/frontend-project-46/test_coverage)

# Project decription
A difference calculator is a program that determines the difference between two data structures. This is a popular task for which there are many online services, such as http://www.jsondiff.com/. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Features of the calculator:

- Supports various input formats: yaml, json
- Report generation as plain text, stylish and json

## Example of usage
```
# plain format
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
## How to install
Make sure you have installed Node.js version 16 or higher.
1. Clone repo:
```
git clone git@github.com:chickenzombie/frontend-project-46.git
```
2. Change directory:
```
cd frontend-project-46
```
3. Install packages:
```
install
```

## Example of work
### 1. Difference between 2 json files (stylish formatter set by default).
You also can use short version (more information in Makefile):
```
make diff-json
```
or for example calculate difference between 2 yaml files
```
make diff-yaml or make diff-yaml/diff-yml
```
[![asciicast](https://asciinema.org/a/524141.svg)](https://asciinema.org/a/524141)
