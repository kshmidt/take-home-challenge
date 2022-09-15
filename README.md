# Take-Home Challenge

## Notes 

At first, I thought to add Redux for skill demonstration purposes, but because of the small state of the app and short amount of time (add a big amount of code boilerplate required for Redux) I've decided to drop it and use React state, but will be glad to discuss this approach.

The current implementation of the player component ("NowPlaying") is ready to consume any stream URL, but seems like the API endpoint provided for the task, requires additional credentials.

Further possible improvements can be:
 - Adding of state management library (e.g. Redux);
 - Adding of side effects management library (e.g. redux-saga);
 - Unit testing of the app (ReactTestUtils, jest);
 - Precommit checks (lint-staged, husky). Different code style checks are already implemented (see npm scripts for more info) as well as different build configurations for production and development purposes.

## Prerequisities

- Node.js 16.17.0
- npm 8.15.0

## Deployment

Install dependencies:

```shell
npm ci
```

Build package:

```shell
npm run build
```

Build of the package will be in the `dist` directory

## Development

To start application in development mode (with webpack-dev-server):

```shell
npm run start
```

Application will start on `http://localhost:3000`
