# Performance testing based on SSR
> The repository consists the code for the project titled **Performance testing based on SSR deployed on a blogging website**.



## Tech Stack

![](https://img.shields.io/badge/React-v17.0.1-informational?style=flat&logo=data:image/svg%2bxml;base64,%3CBASE64_DATA%3E)
![](https://img.shields.io/badge/Next.js-v%5E10.0.0-informational?style=flat&logo=data:image/svg%2bxml;base64,%3CBASE64_DATA%3E)
![](https://img.shields.io/badge/Node-v14.14.6-informational?style=flat&logo=data:image/svg%2bxml;base64,%3CBASE64_DATA%3E)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=<LOGO_NAME>&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=<LOGO_NAME>&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Shell-Zsh-informational?style=flat&logo=<LOGO_NAME>&logoColor=white&color=5a4fcf)
![](https://img.shields.io/badge/database-MySQL-green)


## Project Setup

```
$ git clone https://github.com/Ritik-Sharma38/Demo-Blog-WDL.git
$ npm install
$ npm i typescript @types/node @types/react --save-dev
$ npm run dev
```

Setup for `prisma`

```
$ npx prisma
$ npx prisma init 
$ npx prisma introspect  <- Gives the data model
$ npm install @prisma/client
$ npx prisma generate
$ npx @prisma/codemods update-2.12 ./
$ npx prisma migrate save --experimental && npx prisma migrate up --experimental
```
## Results

To see the deployed, click on the `prototype` button below

[![Prototype][2.2]][2]

[2.2]: https://img.shields.io/badge/protoype-website-green

[2]: http://wdl-blog.vercel.app

**OR**

If you have setup the project following the commands, open the [localhost](http://localhost:3000) with your browser to see the result


### File Structure

**Public directory** (static assets) The files in `public` directory are served as they are without being processed by `Next.js` and are directly accessible by anyone as raw source

**Pages directory** (source code) Files in the `styles` directory can be moved to pages 
