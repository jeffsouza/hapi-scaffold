# hapi-scaffold (work in progress)

Code generation for the [hapijs](https://hapijs.com/) framework.

### Initializes de application. Create the index.js with a basic config.
> $ ./cli.js init

### Creates the database configuration file.
> $ ./cli.js generate db:mongo

### Generates a default CRUD for the given resource name.
> $ ./cli.js scaffold post **title:string** **content:string** **rating:number**

### Generates a plugin file (and register it on the server).
> $ ./cli.js scaffold plugin post

### Generates a service file. Here is where all the logic will be placed.
> $ ./cli.js scaffold service post

### Generates the model file.
> $ ./cli.js scaffold model post **title:string** **content:string** **rating:number**