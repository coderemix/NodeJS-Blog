
# Build a Blog with Node.JS Express

https://youtu.be/-foo92lFIto



```
mkdir NodeJS-Blog
cd NodeJS-Blog
npm init -y

npm i bcrypt connect-mongo cookie-parser dotenv ejs express express-ejs-layouts express-session jsonwebtoken method-override mongoose

npm i nodemon --save-dev

```

修改package.json，增加脚本

```
"scripts":[
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "app.js",
    "dev": "nodemon app.js"
]
```

