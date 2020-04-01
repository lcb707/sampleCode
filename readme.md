npm install -g typescript  
  
mkdir typescript-project
cd typescript-project

npm init
tsc --init

#### tsconfig.json
```javascript
{
  “compilerOptions”: {
    "lib": ["es5", "es6"],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  },
  "exclude" : [ ],
  "include" : [ ]
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