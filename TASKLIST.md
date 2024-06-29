# Tasklist

## Setup

- [ ] Create folder structure

  ```css
  ThoseWhoCameBefore/
  │
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── assets/
  │   │   └── images/
  │   ├── components/
  │   │   └── [ComponentName].jsx
  │   ├── context/
  │   │   └── [ContextName].js
  │   ├── hooks/
  │   │   └── use[HookName].js
  │   ├── styles/
  │   │   └── [StyleFile].css
  │   ├── utils/
  │   │   └── [UtilityFunction].js
  │   ├── App.jsx
  │   ├── index.js
  │   └── data/
  │       ├── artefacts.json
  │       └── cultures.json
  ├── .gitignore
  ├── README.md
  ├── package.json
  └── webpack.config.js
  ```

- [ ] Front End
  - [x] Create `index.html`
  - [ ] Make sure `index.html` works in React framework
    - [ ] Move `index.html` to `public/`
    - [ ] Add `<div id="root"></div>` to `index.html`
  - [ ] Do a `React`(?)
    - [ ] Add to `src/app.js`

      ```js
      import React from 'react';

      function App() {
        return (
          <div>
            <h1>Those Who Came Before</h1>
            <p>Welcome to the game!</p>
          </div>
        );
      }

      export default App;
      ```

    - [ ] Add to `src/index.jsx`

      ```jsx
      import React from 'react';

      function App() {
        return (
          <div>
            <h1>Those Who Came Before</h1>
            <p>Welcome to the game!</p>
          </div>
        );
      }

      export default App;
      ```

    - [ ] Add to `src/styles/global.css`

      ```css
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
        }
      ```

    - [ ] Add to `README.md`

      ```markdown
        # Those Who Came Before

        Those Who Came Before is a narrative game where players, as historians, interpret artefacts and make inferences about ancient cultures. Each decision impacts future interpretations, creating a unique and engaging gameplay experience.

        ## Setup

        1. Clone the repository
        2. Install dependencies: `npm install`
        3. Start the development server: `npm start`

        ## Folder Structure

        - `public/` - Contains the static HTML file
        - `src/` - Contains the React components, styles, and data
        - `assets/` - Contains images and other static assets
        - `components/` - Contains React components
        - `context/` - Contains context providers
        - `hooks/` - Contains custom hooks
        - `styles/` - Contains CSS files
        - `utils/` - Contains utility functions
        - `data/` - Contains initial JSON data for artefacts and cultures

      ```

    - [ ] Add to ``

      ```js
      ```

    - [ ] Add to ``

      ```js
      ```

    - [ ] Create tasks
- [ ]  State Management
  - [ ] `Context API` (or `Redux` if necessary): Create tasks
- [ ]  Styling
  - [ ] `CSS` Modules or styled-components: Create tasks
- [ ]  Build Tool
  - [ ] `Webpack` or `Create React App`: Create tasks
- [ ]  Data Handling
  - [ ] `JSON` for initial data (artefacts and cultures): Create tasks
- [ ]  Procedural Generation
  - [ ] `JavaScript` & `Tracery` for generating artefacts and cultures: Create tasks

## Dev Log

- [ ] **Setup**
  - [ ] Create a new repo
  - [ ] Clone the repo
  - [ ] Create a directory for blog posts

    ```bash
    mkdir blog
    ```

  - [ ] Create 1st Blog Post

      ```bash
      touch blog/post1.md
      code blog/post1.md
      ```

  - [ ] Add blog folder to VS Code workspace & save

- [ ] **Publish**
  - [ ] Set `GitHub -> Pages -> Source` to `main`
  - [ ] Set `GitHub -> Pages -> Folder` to `/blog`
  - [ ] Create index page

      ```bash
      touch index.md
      code index.md
      ```

      ```md
      # My Development Blog

      - [First Post](blog/post1.md)
      ```

- [ ] **Set Up Custom Domain**
  - [ ] Acquire custom domain?
  - [ ] Add `CNAME` file with domain name to repo

- [ ] **Style the Blog**
  - [ ] Create a Jekyll theme
  - [ ] Create `_config.yml` for Jekyll configuration:

    ```yaml
    theme: minima
    ```

  - [ ] Add Jekyll front matter to posts

      ```markdown
      ---
      layout: post
      title: "First Post"
      ---
      ```

  - [ ] Customize theme CSS
