## Running scripts in package.json

- In addition to defining and fetching dependencies, you can also define scripts in your package.json and call NPM to execute them with the run script command


```
"scripts": {
  ...
  "lint": "eslint static/js"
  ...
}
```

- Above we have set the string 'lint' to run an eslint test on our application, note the 'static/js' specifies the path of our JS files

- This allows us to run the below command

```
npm run lint
```