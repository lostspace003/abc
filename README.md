<div align="center">

# 🚀 Node.js CI/CD Starter Template

[![Node.js CI with GitHub Pages](https://github.com/lostspace003/abc/actions/workflows/nodejs-ci.yml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/nodejs-ci.yml)
[![Deploy static content to Pages](https://github.com/lostspace003/abc/actions/workflows/static.yml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/static.yml)
[![Publish to GitHub Packages](https://github.com/lostspace003/abc/actions/workflows/publish-npm.yaml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/publish-npm.yaml)
[![Deploy Images to GHCR](https://github.com/lostspace003/abc/actions/workflows/ghcr-publish.yaml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/ghcr-publish.yaml)

**A production-ready Node.js starter template with comprehensive CI/CD pipelines, automated testing, Docker support, and GitHub Pages deployment.**

[Features](#-features) • [Quick Start](#-quick-start) • [Usage](#-usage) • [CI/CD](#-cicd-pipelines) • [Docker](#-docker-support) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [CI/CD Pipelines](#-cicd-pipelines)
- [Docker Support](#-docker-support)
- [Publishing to GitHub Packages](#-publishing-to-github-packages)
- [GitHub Pages Deployment](#-github-pages-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **🔧 Zero External Dependencies** - Pure Node.js implementation with no runtime dependencies
- **✅ Built-in Testing** - Simple yet effective testing framework using Node's built-in `assert`
- **🔄 Automated CI/CD** - Multiple GitHub Actions workflows for comprehensive automation
- **📦 GitHub Packages** - Automated NPM package publishing to GitHub Packages Registry
- **🐳 Docker Ready** - Containerized deployment with multi-stage builds
- **🌐 GitHub Pages** - Automatic static site deployment
- **🏗️ Build Pipeline** - Automated build process with artifact generation
- **🔒 Type-Safe** - Clean JavaScript with proper error handling
- **📊 Code Quality** - Automated testing on every push

---

## 🔑 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** v14.x or higher ([Download](https://nodejs.org/))
- **npm** v6.x or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Docker** (optional, for containerized deployment) ([Download](https://www.docker.com/))
- **nvm** (optional, for Node.js version management) ([Install](https://github.com/nvm-sh/nvm))

---

## 🚀 Quick Start

Get up and running in just a few steps:

### 1. Clone the Repository

```bash
git clone https://github.com/lostspace003/abc.git
cd abc
```

### 2. Install Dependencies

```bash
# Using npm
npm ci

# Or if using nvm to match the project's Node.js version
nvm use 14
npm ci
```

### 3. Run the Application

```bash
# Build the project
npm run build

# Run tests
npm test

# Start the application
npm start
```

You should see output like:
```
Hello from Node.js CI starter. sum(2, 3) = 5
```

---

## 📖 Usage

### Running Tests

Execute the test suite to ensure everything is working correctly:

```bash
npm test
```

Expected output:
```
All tests passed ✅
```

### Building the Project

The build process creates a production-ready bundle in the `dist/` directory:

```bash
npm run build
```

This will generate `dist/index.js` with a banner comment indicating the build timestamp.

### Starting the Application

Run the main application:

```bash
npm start
```

This executes the `src/index.js` file which demonstrates a simple sum function.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the main application from `src/index.js` |
| `npm test` | Executes the test suite using Node's built-in assert |
| `npm run build` | Builds the project and creates `dist/index.js` |

---

## 📁 Project Structure

```
abc/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
│       ├── nodejs-ci.yml   # Main Node.js CI with GitHub Pages
│       ├── publish-npm.yaml # NPM package publishing
│       ├── ghcr-publish.yaml # Docker image publishing
│       ├── static.yml      # Static content deployment
│       └── ...             # Additional workflow files
├── src/
│   ├── index.js           # Main application entry point
│   └── sum.js             # Example module with sum function
├── tests/
│   └── test.js            # Test suite
├── scripts/
│   └── build.js           # Build script
├── dist/                  # Build output directory (generated)
├── Dockerfile             # Docker container definition
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Locked dependency versions
├── .nvmrc                 # Node.js version specification
└── README.md             # This file
```

---

## 🔄 CI/CD Pipelines

This project includes multiple automated workflows that run on every push to the `main` branch:

### 1. **Node.js CI with GitHub Pages** (`nodejs-ci.yml`)

A comprehensive workflow that:
- ✅ Checks out the code
- 🔧 Sets up Node.js v14
- 📦 Installs dependencies with `npm ci`
- 🏗️ Builds the project
- ✅ Runs all tests
- 📤 Uploads build artifacts
- 🚀 Deploys to GitHub Pages

**Status:** [![Node.js CI with GitHub Pages](https://github.com/lostspace003/abc/actions/workflows/nodejs-ci.yml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/nodejs-ci.yml)

### 2. **Static Content Deployment** (`static.yml`)

Deploys static content directly to GitHub Pages:
- 📤 Uploads entire repository as static content
- 🌐 Publishes to GitHub Pages

**Status:** [![Deploy static content to Pages](https://github.com/lostspace003/abc/actions/workflows/static.yml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/static.yml)

### 3. **NPM Package Publishing** (`publish-npm.yaml`)

Automatically publishes the package to GitHub Packages:
- 📦 Builds and packages the application
- 🚀 Publishes to GitHub NPM registry

**Status:** [![Publish to GitHub Packages](https://github.com/lostspace003/abc/actions/workflows/publish-npm.yaml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/publish-npm.yaml)

### 4. **Docker Image Publishing** (`ghcr-publish.yaml`)

Builds and publishes Docker images to GitHub Container Registry:
- 🐳 Builds Docker image
- 📤 Pushes to GHCR (GitHub Container Registry)

**Status:** [![Deploy Images to GHCR](https://github.com/lostspace003/abc/actions/workflows/ghcr-publish.yaml/badge.svg)](https://github.com/lostspace003/abc/actions/workflows/ghcr-publish.yaml)

---

## 🐳 Docker Support

This project includes a production-ready Dockerfile for containerized deployments.

### Building the Docker Image

```bash
docker build -t abc-app .
```

### Running the Container

```bash
docker run -p 3000:3000 abc-app
```

### Pulling from GitHub Container Registry

```bash
docker pull ghcr.io/lostspace003/hello:latest
docker run -p 3000:3000 ghcr.io/lostspace003/hello:latest
```

### Dockerfile Overview

The Dockerfile uses Node.js 20 Alpine image for a lightweight container:
- 📦 Installs dependencies
- 🏗️ Builds the application
- 🚀 Exposes port 3000
- ▶️ Runs the application with `npm start`

---

## 📦 Publishing to GitHub Packages

This project is configured to publish to GitHub's NPM registry automatically.

### Installing from GitHub Packages

First, authenticate with GitHub Packages by adding a `.npmrc` file:

```bash
echo "@lostspace003:registry=https://npm.pkg.github.com/" >> .npmrc
```

Then install the package:

```bash
npm install @lostspace003/abc
```

### Using the Package

```javascript
const { sum } = require('@lostspace003/abc');

console.log(sum(5, 3)); // Output: 8
```

### Manual Publishing

If you need to publish manually:

```bash
npm login --registry=https://npm.pkg.github.com/
npm publish
```

---

## 🌐 GitHub Pages Deployment

The project automatically deploys to GitHub Pages on every push to `main`. The deployment includes:

- 📄 Build artifacts from the `dist/` directory
- 📊 Full repository content (via static workflow)
- 🔄 Automatic updates on code changes

**View the deployed site:** Check your repository settings under Pages for the URL.

---

## ✅ Testing

The project uses Node.js built-in `assert` module for testing. No external testing frameworks required!

### Test Structure

```javascript
// tests/test.js
const assert = require('assert');
const { sum } = require('../src/sum');

// Test valid inputs
assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');

// Test error handling
assert.throws(() => sum('1', 2), /expects two numbers/);
```

### Running Tests Locally

```bash
npm test
```

### Adding New Tests

1. Add test cases to `tests/test.js`
2. Follow the existing assertion pattern
3. Run tests to verify
4. Push changes - CI will automatically run tests

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### 1. Fork the Repository

Click the "Fork" button at the top right of this page.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/abc.git
cd abc
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 5. Test Your Changes

```bash
npm test
npm run build
npm start
```

### 6. Commit and Push

```bash
git add .
git commit -m "Add your descriptive commit message"
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Go to your fork on GitHub and click "New Pull Request".

### Code Style Guidelines

- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all tests pass before submitting PR
- Keep commits atomic and descriptive

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

✅ **You can:**
- Use commercially
- Modify
- Distribute
- Use privately

❗ **You must:**
- Include license and copyright notice

❌ **You cannot:**
- Hold liable

---

## 🙏 Acknowledgments

- Built with ❤️ using Node.js
- Powered by GitHub Actions for CI/CD
- Containerized with Docker
- Deployed on GitHub Pages

---

## 📞 Support

If you have any questions or need help getting started:

1. 📖 Check the [documentation](#-table-of-contents)
2. 🐛 [Open an issue](https://github.com/lostspace003/abc/issues)
3. 💬 Start a [discussion](https://github.com/lostspace003/abc/discussions)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [lostspace003](https://github.com/lostspace003)

</div>
