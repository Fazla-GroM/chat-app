# Chat App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project supports [Volta](https://volta.sh/) and [nvm](https://github.com/nvm-sh/nvm) for node version management.
Make sure to setup one of those tools before you start contributing on this project.

Create a `.env` file in project root with this variables: ** DISCLAIMER \*\***
This Should Be Secret :) \***\* DISCLAIMER \*\***
`NEXT_PUBLIC_API_MOCKING="enabled"`
`NEXT_PUBLIC_API_BASE_URL="https://www.fakebackend.com/api"`

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

Every folder is structured by specificity and separation of concern. For example `utils` folder contains few generic methods but it also contains specific helpers for comment and data service which are then moved in a separate folder/file.

-   `mocks`: It contains mocking data and mock client
-   `components`: It contains all components used in project
-   `hooks`: It contains all react hooks used in project
-   `providers`: It contains all providers used accross the app
-   `services`: It contains various services for app
-   `pages`: It contains app pages
-   `theme`: It contains project theme and tools for building component styles
-   `types`: It contains all type definitions which are shared across the app
-   `utils`: It contains all helper methods

## Technologies used

### UI

-   [Stitches](https://stitches.dev/) a `css-in-js` library

### Data

-   [React query](https://react-query.tanstack.com/) a data synchronization tool
-   [Ohmyfetch](https://github.com/unjs/ohmyfetch) a small wrapper around native fetch for better dev experience
-   [DayJs](https://day.js.org/en/) a small footprint lib for handling dates
-   [MSW](https://mswjs.io/) a service worker based lib for mock requests
-   [XSS](https://github.com/leizongmin/js-xss): a library for sanitizing html

## Contribution guide

The main branch of this project is `main`

All pull requests should be created from `main` branch.

All pull requests should be `squash and merged` after approval as squash merging keeps your default branch histories clean and easy to follow without demanding any workflow changes on your team. Contributors to the topic branch work how they want in the topic branch, and the default branches keep a linear history through the use of squash merges.

The source branch should be deleted after merge.

This project uses [Commitlint](https://commitlint.js.org/#/) and [Husky](https://typicode.github.io/husky/#/) to create git hooks.

This project follows [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) guidlines.
