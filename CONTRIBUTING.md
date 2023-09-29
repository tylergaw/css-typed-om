# Contributing to CSS Typed Object Model Polyfill

Issues, discussions, and pull requests are always welcome.

- [Reporting Issues / Starting Discussions](#reporting-issues--starting-discussions)
- [Working locally](#working-locally)
  - [Repo setup](#repo-setup)
  - [Testing and building](#testing-and-building)
  - [Code formatting](#code-formatting)
- [Submitting Pull Requests](#submitting-pull-requests)

## Reporting Issues / Starting Discussions

Found a problem? Want a new feature?

- See if your issue or idea has [already been reported]
- If your idea doesn't feel like it fits in an issue, start a [discussion](discussions)
- Provide a [reduced test case] and/or a [live example]

## Working locally

### Repo setup

```bash
# Clone your fork of the repo into the current directory
git clone git@github.com:YOUR_USER/css-typed-om.git

# Navigate to the newly cloned directory
cd css-typed-om

# Assign the source repo to a remote called "upstream" to allow you to sync changes and open pull requests
git remote add upstream git@github.com:tylergaw/css-typed-om.git

# Install dependencies
npm i
```

### Testing and building

Most code changes need new or updated tests

```bash
# Run all tests once
npm test

# Run all tests and re-run when files change
npm run test:watch
```

To run the [demo](demo) locally, you'll need to build a bundle.

```bash
# Run the Rollup build once
npm run build

# Start nodemon and invoke npm run build when files change
npm start
```

### Code formatting

We use Git hooks via husky and lint-staged to format any changed files with Prettier. We follow the [recommended setup](https://prettier.io/docs/en/install#git-hooks).

If you ever need to manually format all code with prettier, run:

```bash
npm run prettier
```

## Submitting Pull Requests

Pull requests are always welcome. Small, focused PRs are the best.

Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feature/thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix/something
```

If your code follows our practices, then push your feature branch:

```bash
# Test current code
npm test
```

```bash
# Push the branch for your new feature
git push origin feature/thing
```

```bash
# Or, push the branch for your update
git push origin update/something
```

When you're ready, [open a pull request] with a descriptive title and description. Descriptions should tell a full story with a what, why, and how. Link to any related issues, discussions, or PRs.

[already been reported]: issues
[fork this project]: fork
[live example]: https://codepen.io/pen
[open a pull request]: https://help.github.com/articles/using-pull-requests/
[reduced test case]: https://css-tricks.com/reduced-test-cases/
