# TypeScript-Practice

19/01/2024

webpack-dev-server起動時のエラーと解決法
When I run "npm run start" to check the output on the web server, I get the following error message.
[Invalid options object. Dev Server has been initialized using an options object that does not match the API schema]

The content "contentBase" writing method is no longer available due to version changes, and has been changed to "static" instead.

Refer to this page   
https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object

https://github.com/webpack/webpack/issues/15951