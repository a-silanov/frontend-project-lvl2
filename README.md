### Hexlet tests and linter status:
[![Actions Status](https://github.com/a-silanov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/a-silanov/frontend-project-lvl2/actions)

[![Test Coverage](https://api.codeclimate.com/v1/badges/083427bb9ca94b6bbc46/test_coverage)](https://codeclimate.com/github/a-silanov/frontend-project-lvl2/test_coverage)

[![Node CI](https://github.com/a-silanov/frontend-project-lvl2/workflows/Node_CI/badge.svg?event=push)](https://github.com/a-silanov/frontend-project-lvl2/actions/workflows/github-actions-demo.yml)


## Difference calculator

Difference calculator is a command line interface (CLI) program that allows you to make a difference between two data structures or configuration files and display them in the format required by the user.

Support the following data formats: yaml, json

A report would be generate in the following formats: stylish (default), plain, json

### Install programm
1. ```git@github.com:Latanarie/frontend-project-lvl2.git```
2. ```make install```

### Test programm
```make test```

### Start programm
```gendiff <filepath1> <filepath2> -f <format>```

### Information
```gendiff -h```

### An example of how the utility works
#### Comparison of flat files (JSON)


[![asciicast](https://asciinema.org/a/XVoq32sFRfLvBttY8eKZEBlbG.svg)](https://asciinema.org/a/XVoq32sFRfLvBttY8eKZEBlbG)

#### Comparison of flat files (yaml)


[![asciicast](https://asciinema.org/a/9TsrQCqiP8ZvYHGq8OCdu3Chp.svg)](https://asciinema.org/a/9TsrQCqiP8ZvYHGq8OCdu3Chp)

[![asciicast](https://asciinema.org/a/ciM7kaM1RTpXhHHxUWqNlKQog.svg)](https://asciinema.org/a/ciM7kaM1RTpXhHHxUWqNlKQog)

#### Comparison of nested structures in the format stylish


[![asciicast](https://asciinema.org/a/alEloIoxF47IvVSOwrCRvAa1c.svg)](https://asciinema.org/a/alEloIoxF47IvVSOwrCRvAa1c)

#### Comparison of nested structures in the format plain


[![asciicast](https://asciinema.org/a/wKfxc8CxsUlikkv7Je5LILigZ.svg)](https://asciinema.org/a/wKfxc8CxsUlikkv7Je5LILigZ)

#### Comparison of nested structures in the format json


[![asciicast](https://asciinema.org/a/pBh5MDvb0pUntRULwZdvBzYg1.svg)](https://asciinema.org/a/pBh5MDvb0pUntRULwZdvBzYg1)