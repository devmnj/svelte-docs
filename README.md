<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">Svelte Docs</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/svelt-docs-docs.svg)](http://hackathon.url.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>
 

<p align="center">Svelte Docs  

>  This is Svelte app template for generating documentation site using Markdown files. 
    <br> 
</p>

## 📝 Table of Contents
- [🚂 How this app works ?  <a name = "how"></a>](#-how-this-app-works---)
  - [🖊️ Filename and  url <a name="url"/>](#️-filename-and--url-a-nameurl)
  - [⛽ .env <a name="env"/>](#-env-a-nameenv)
- [💡Develop <a name = "develop"></a>](#develop-)
- [⛏️ Built With <a name = "tech_stack"></a>](#️-built-with-)
- [🔷 Additional Guide](#-additional-guide)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)
- [🏖️ How to deploy the app <a name="deploy"></a>](#️-how-to-deploy-the-app-)
- [🎉 Acknowledgments <a name = "acknowledgments"></a>](#-acknowledgments-)

# 🚂 How this app works ?  <a name = "how"></a>
There is `docs` folder under the `src/routes/`, this is where need to place the .svx files (markdown), which is treated as page in the app. 

Each of the markdown document should have the following fields 
```
---
section: Intro
under: root 
---
```

## 🖊️ Filename and  url <a name="url"/>
The `file name` should not include `white space`,  files name used for url.Since url doesn't allow spaces, we have to use something like, `installation-guide` where whitespace required.
## ⛽ .env <a name="env"/>
Please update .env with your settings. 
#  💡Develop <a name = "develop"></a>

For developing and make changes to this project, you need to install [Nodejs](https://nodejs.org/en/), [Svelt](https://svelte.dev/) JavaScript Framework.

Fork the repository or download the project to a local machine. Then `run yarn install` for dependency setup ( from the root directory).

Now let's start the development server and modify:

```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```
# ⛏️ Built With <a name = "tech_stack"></a>

- [Svelte](https://svelte.dev/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MDSVEX](https://mdsvex.com/) - Markdown Preprocessor for Svelte
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework

# 🔷 Additional Guide

 [Learn Svelte Programming - from scratch ](http://javascriptsu.wordpress.com/tag/svelte)
 
# ✍️ Authors <a name = "authors"></a>

- [@devmnj](https://github.com/devmnj) - Idea & Initial work

# 🏖️ How to deploy the app <a name="deploy"></a>
# 🎉 Acknowledgments <a name = "acknowledgments"></a>

- The work is impossible without MDSVEX and Svelte.

