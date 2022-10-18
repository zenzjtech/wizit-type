# Type declaration for Wizit serverless and Wizit extension

### Adding/modifying message types

- update `src` according to your needs
- bump up version in `package.json`
- `yarn run build` (fix errors if any appear)
- `yarn publish`
- now in other projects (**Wizit-extension, Wizit-serverless**) do `yarn add wizit-type@latest` to get a new version