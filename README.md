# Full Stack Layer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Full Stack Layer is a collection of Vue components, composables and utils **built on top of Nuxt UI Pro**, oriented on **structure and layout** and designed to be used as **building blocks for your next billion full stack app**.

- [Documentation](./.docs)

## Templates

You can get started with our [minimal starter](https://github.com/Web3-FullStack/starter), one of our [official templates](https://github.com/orgs/Web3-FullStack/repositories?q=template) or follow the [Installation](#TODO) guide to install Full Stack Layer in your existing project.

- [Landing](https://github.com/Web3-FullStack/template-landing)
- [Docs](https://github.com/Web3-FullStack/template-docs)
- [SaaS](https://github.com/Web3-FullStack/template-saas)
- [Dashboard](https://github.com/Web3-FullStack/template-dashboard)

## Installation

```bash
# npm
npm install @web3-fullstack/layer
# yarn
yarn add @web3-fullstack/layer
# pnpm
pnpm add @web3-fullstack/layer
# bun
bun add @web3-fullstack/layer
```

Next, add it to your `nuxt.config.ts` in the `extends` property:

```ts
export default defineNuxtConfig({
  extends: ['@web3-fullstack/layer']
})
```

Start your development server, you should now be able to use all the components, composables and utils from Nuxt UI, Nuxt UI Pro, and Web3-FullStack Layer 🚀 

## License Key

Web3-FullStack Layer is free in development, but you need a license to use it in production. You can choose between **Solo** and **Team**, both will give you access to the same features and give you a license key required to build your apps. The main difference is the number of developers that can be invited to the private GitHub repository.

Once you've purchased [Nuxt UI Pro](https://ui.nuxt.com/pro?aff=KokMD), you will receive an email with a license key to activate. Visit <https://ui.nuxt.com/pro/activate> to activate your license with your GitHub username and license key, you will be invited to the private GitHub repository.

Then, use your license key in your `.env` file:

```sh
# .env
NUXT_UI_PRO_LICENSE=<your-license-key>
NUXT_WEB3_FULL_STACK_LAYER_LICENSE=<your-license-key>
```

If you have multiple projects on your machine, you can also add it to your `~/.nuxtrc`:

```sh
uiPro.license=<your-token>
```

## Showcase

Here are some projects using Full Stack Layer:

- [RWA-Wallet](https://RWA-Wallet.com)
- [AO Arena DAO](https://github.com/HelloRWA/Web3-FullStack-Starter)

## Devtools

When using the [Nuxt Devtools](https://devtools.nuxt.com), you can see the list of components injected by Nuxt UI Pro in the "Components' tab:

![nuxt-ui-pro-devtools](https://github.com/nuxt/ui-pro/assets/904724/4ec2862e-91a0-4ae1-9458-264983d39b6e)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt/ui-pro/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nuxt/ui-pro

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxt/ui-pro.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@nuxt/ui-pro

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

## License

*In progress. You cannot repackage Full Stack Layer or copy/paste the components into premium templates, UI libraries or open source projects.*
