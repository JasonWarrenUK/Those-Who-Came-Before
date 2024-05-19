# Tasklist

## Set Up

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
