## Adding dependencies and development dependencies

Use the npm init command to create a package.json file for your application.

```
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## Installing Express

- Express is a Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

```
npm install express
```

- We will then see that express has been added to our package.json file within the dependencies section

```
{
  "name": "project-portfolio-with-microservices",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

- To use the Express library you call the require() function in your index.js file to include it in your application.


## Development dependencies

- If a dependency is onlu used during developemnt we can save it as a dev dependency (so the package.json doesn't install it in production)

- Below we have done this with a JS linting tool, eslint

```
npm install eslint --save-dev
```