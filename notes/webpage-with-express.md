

```
// importing the express module using require
const express = require('express')
// creating a server named app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// the app server listens for HTTP requests on port 8000 
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})
```