# Harry's Website Template
This is my website template, using the web techonolgies I've found to make rapid development as pain free as possible.

## Technologies used
- [Typescript](https://www.typescriptlang.org/), which has made the most significant improvement so far to development speed.
- [Next.js](https://nextjs.org/), which handles routing, code splitting, and much more, while providing a much better project structure.
- [Tailwindcss](https://tailwindcss.com/), A lightweight and flexible css styling library.
- [gts](https://github.com/google/gts), An eslint preset for formatting typescript projects.

## Getting Started

First, install the dependencies with your preferred package manager. I'm using `yarn`, but it doesn't make much difference.
```bash
yarn
# or
npm install
```
Then run the development server.
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure
- `src`:
  - `components`: Reusable react components between pages.
  - `contexts`: State storage/providers to be used with the `useContext` hook.
  - `layouts`: Common page wrappers e.g. providing headers and footers or state providers.
  - `lib`: Non-component libraries containing app functionality or logic.
  - `pages`: Next.js pages corresponding 1-1 with the website pages.
  - `public`: Public files e.g. static images, favicons or fonts.
  - `styles`: Global and scoped css files. 
  - `types`: Reusable typescript types.
- Other outer level files: All the config files

## Cloud providers
If a cloud backend is necessary, I've come to prefer GCP, using firebase wherever possible. 

## Deployment
This stack makes it very easy with next.js to make a static export that can then be hosted in a cloud provider bucket. If instead you
need a live server, I tend to make a docker container for it to live in and put it on cloud run or an equivalent service.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
