<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest Starter Repository](https://github.com/nestjs/nest)

### Language

Compatiable with both TypeScript and Pure JavaScript

### Setup

```js
$ npm i -g @nestjs/cli
$ nest new project-name
```

The project-name directory will ne created, node modules and few other boilerplate files will be installed and a src/ directory will ne created and populated with serveral core files.

```js
src
|--- app.controller.spec.ts
|--- app.controller.ts
|--- app.module.ts
|--- app.service.ts
|--- main.ts
```

`app.controller.ts`

- A basic controller with single route

`app.module.ts`

- A root module of the application

`app.service.ts`

- A basic service with single method

`main.ts`

- Entry point of the application

`NestFactory class exposes static methods that allow creating an application instance. NestFactory.create()`

By default if any error occurs while creating the application app will exit with code 1. If we want to make it throw an error instead disbable the option `{ abortOnError: false }`

### Platform

There are two HTTP platforms supported out-of-the-box

1. express
2. fastify

Platform exposes it own application interface

1. `NestExpressApplication`
2. `NestFastifyApplication`

Platform specific application creation

```js
const app = (await NestFactory.create) < NestExpressApplication > AppModule;
```

### Running the application

```js
$ npm run start
```

### Linting and Formatting

Generated nest project comes with both a code linter and formatter preinstalled.

Nest project comes with ready to use scripts

```js
$ npm run lint
$ npm run format
```

## Controller

Responsible for handling incoming requests and returing responses to the client.

Each controller have more that one route

`Routing mehchanism controls which controller recieves which requests`

### Creating CRUD controller

```js
$ nest g resource [name]
```

### @Controller() decorator

- Required to define basic controller.
- Allows to group set of related routes

### Creating Controller

```js
$ nest g controller [name]
```

### Dedicated Decorators

```js
1. @Request(), @Req()
2. @Response(), @Res()
3. @Next()
4. @Session()
5. @Param()
6. @Query()
7. @Body()
8. @Headers()
9. @Ip()
10. @HostParam()
11. @HttpCode()
```

### Decoraters for Standard HTTP methods

```js
1. @Get()
2. @Post()
3. @Put()
4. @Delete()
5. @Patch()
6. @Options()
7. @Head()
```

### Route WildCard

Pattern based routes are supported as well.
A wildcard in the middle is supported by only express

```js
@Get('start*end')
findAll() {
  return 'This route uses a wildcard';
}
```

### Status Code

By default status code is always 200, except POST request it has 201.

We can add status code by decorator `@HttpCode()`

HttpCode present in the `@nestjs/common` package

### Headers

For custom response header we can use @Header() decorator

```js
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

## Provider

## Modules

## Middleware

## Exception filter

## Pipes

## Guards

## Interceptors

## Custom Decorators

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Manisha Jadhav]()

## License

Nest is [MIT licensed](LICENSE).
