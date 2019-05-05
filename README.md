# hapi-scaffold

Code generation for the [hapijs](https://hapijs.com/) framework. **(work in progress)**

### Initialize de application. Create the index.js with a basic config.
> $ ./cli.js init

### Erase all folders and files generated. Use it carefully.
> $ ./cli.js destroy

### Create the database configuration file.
> $ ./cli.js generate db:mongo

### Generate a default CRUD for the given resource name.
> $ ./cli.js scaffold post **title:string** **content:string** **rating:number**

### Generate a route file (and register it on the server).
> $ ./cli.js scaffold route post

### Generate a controller file.
> $ ./cli.js scaffold controller post

### Generate a service file. Here is where all the logic will be placed.
> $ ./cli.js scaffold service post

### Generate the model file.
> $ ./cli.js scaffold model post **title:string** **content:string** **rating:number**

### Remove the database configuration file.
> $ ./cli.js remove db

### Remove CRUD files.
> $ ./cli.js remove post

### Remove a route file (and unregister it on the server).
> $ ./cli.js remove route post

### Remove a controller file.
> $ ./cli.js remove controller post

### Remove a service file.
> $ ./cli.js remove service post

### Remove the model file.
> $ ./cli.js remove model post