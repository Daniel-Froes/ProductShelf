# Product Shelf

Template que provê as configurações minimas para que o React trabalhe no VITE com HMR (Hot Module Replacement ).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Plugins disponíveis:
Plugins available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Execução do projeto local / Running the project local environment

```sh
yarn dev
```

## Build do projeto para deploy / Building the project for deploy (/dist)

```sh
yarn build
```

## Deploy Vercel (https://vercel.com/)

```sh
npx vercel ./dist --prod
```
