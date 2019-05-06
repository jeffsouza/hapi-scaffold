# hapi-scaffold

Code generation for the [hapijs](https://hapijs.com/) framework. **(work in progress)**

### Install it.
> $ npm install hapi-scaffold -g

### Initialize de application. Create the index.js with a basic config.
> $ hapi-scaffold init

### Erase all folders and files generated. Use it carefully.
> $ hapi-scaffold destroy

### Create the database configuration file.
> $ hapi-scaffold generate db:mongo

### Generate a default CRUD for the given resource name.
> $ hapi-scaffold scaffold post **title:string** **content:string** **rating:number**

### Generate a route file (and register it on the server).
> $ hapi-scaffold scaffold route post

### Generate a controller file.
> $ hapi-scaffold scaffold controller post

### Generate a service file. Here is where all the logic will be placed.
> $ hapi-scaffold scaffold service post

### Generate the model file.
> $ hapi-scaffold scaffold model post **title:string** **content:string** **rating:number**

### Remove the database configuration file.
> $ hapi-scaffold remove db

### Remove CRUD files.
> $ hapi-scaffold remove post

### Remove a route file (and unregister it on the server).
> $ hapi-scaffold remove route post

### Remove a controller file.
> $ hapi-scaffold remove controller post

### Remove a service file.
> $ hapi-scaffold remove service post

### Remove the model file.
> $ hapi-scaffold remove model post