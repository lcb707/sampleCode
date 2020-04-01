npm install -g typescript  
  
mkdir typescript-project
cd typescript-project

npm init
tsc --init

#### tsconfig.json
```javascript
{
   "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": true,
      "noImplicitAny": false,
      "outDir": "./output"
  },
  "include": ["./src"]  
}
```

npm install --save-dev nodemon tsnode


#### package.json
```javascript
"scripts": {
  "start": "nodemon -- exec ts-node src/index.ts"
 }
 ```

 npm install @types/express
 npm start
