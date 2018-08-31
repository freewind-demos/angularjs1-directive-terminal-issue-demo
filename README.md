AngularJS1 Directive "Terminal" Issue Demo
==========================================

If a directive have `terminal:true`, the expressions won't be rendered.

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- directive `terminal` api: <https://docs.angularjs.org/api/ng/service/$compile#-terminal->

Update
------

Thanks for [Petr Averyanov's answer](https://stackoverflow.com/a/52114151/342235), points that from the document: <https://docs.angularjs.org/api/ng/service/$compile#-terminal->

> Note that expressions and other directives used in the directive's template will also be excluded from execution.
