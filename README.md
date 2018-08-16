AngularJS1 Directive Controller Demo
====================================

Define a directive with controller, in [AngularJS1](https://angularjs.org/).

```
npm install
open index.html
```

![demo](./images/demo.jpg)

`controller` is like normal angular controller, but you can get `$element` and `$attrs` to interact with the DOM.

Traps in the code
-----------------

### `app.directive('helloTo'`

The directive name must be camelCases, e.g. `helloTo`

If you use other formats, e.g. `hello-to`, it will be ignored, silently.

### `$element` is instance of JQLite

See: https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite

### The api is quite complex

Just see <https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object>.

Resources
---------

- directive api: https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object
- $element api: https://docs.angularjs.org/api/ng/function/angular.element#angularjs-s-jqlite