# React Tutorial

## Requirements

### Node

Run to check if it is already or not

```
node -v
```

### HTML

Used for structuring the components

### CSS

Used for styling the components

### JavaScript

Used as the main programming language

## Create a new Project

```
npx create-react-app app-name
```

### Note

The app name cannot be capital

### Tip

Files like setupTests.js, reportWebVitals.js, app.test.js and logo.svg are useless for us, hence delete them and their usage in the code

## Run the app locally

```
npm start
```

## Introduction

### Public folder

contains the files accessible by the browser.

### Root DIV

Everything gets rendered into a single div

### Index.js

The file that initializes our project.

### App.js

the main component of our React project.

### .gitignore

Contains names of files not to be pushed to the repository

### package.json

Contains dependencies, scripts, etc.

Note: You can run any script stated in this file through

```
npm run {name of script}
```

### node_modules

Contains the dependencies installed through npm stated in package.json

Can be installed through

 ```
npm i
```

or

```
npm install
```

### Changing the HEAD of HTML file

#### Change the Favicon

In the public folder, replace favicon.ico with a custom icon file of the same name,

#### Change the title

In public/index.html, change the text inside the title tags

### Hooks

Identified using use keyword

- useState

    ```js
    const [var,setVar] = useState('initial value')
    ```

- useEffect

    ```js
    useEffect(() => {
        console.log("Component Rendered")
    },[])
    ```

### JSON Database


```
npx json-server --watch {location of json file} 
```

Specifying port number (Recommended if there is already a server running on the default port 3000)

```
npx json-server --watch {location of json file} --port {port number}
```
- JSON Server watches this file and wraps it in API Endpoints
- Stores data
- No Comments allowed
- Everything present in the file is considered as data
- The top level element is the resource on which we perform the operations such as addition, deletion, etc.

**JSON Endpoints**

- GET

  - Fetch all blogs : `/blogs`
  - Fetch a single blog : `/blogs/{id}`

- POST

  - Add a new blog : `/blogs`

- DELETE

  - Delete a blog : `/blogs/{id}`

Explanations of the syntaxes used are given through comments in the code itself.
