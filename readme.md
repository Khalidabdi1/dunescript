# DuneScript

DuneScript is a secure and isolated runtime environment for managing and verifying NPM packages using Docker containers. It helps developers and teams ensure package compatibility and security before installation in their projects.

---

## Features

- Runs NPM packages inside Docker containers to isolate dependencies and environment.
- Automatically checks compatibility with the user's Node.js version and environment.
- Prevents breaking changes by verifying packages before installation.
- Provides a secure sandbox to avoid potential malicious code affecting your system.
- Easy CLI commands to run checks and interact with packages.

---

## Installation

Install via NPM:

```bash
npm install -g dunescript
Make sure you have Docker installed and running on your system.

Usage
Run a simple command to check a package:

bash
نسخ
تحرير
dunescript check <package-name>
Example:

bash
نسخ
تحرير
dunescript check express
This command will spin up a Docker container, install the package, and run compatibility and security checks.

Commands
hello - Simple test command to verify DuneScript is installed and working.

check <package-name> - Verifies compatibility and security of the specified NPM package using Docker.

(More commands to be added in future releases)

Why Use DuneScript?
Avoid dependency conflicts by testing in isolated environments.

Prevent security risks by sandboxing package installation.

Simplify managing complex dependency trees in your projects.

Ideal for teams and CI/CD pipelines focused on reliability.

Requirements
Node.js (version 12+ recommended)

Docker (latest stable version)

NPM (comes with Node.js)

Contributing
Feel free to contribute by opening issues or submitting pull requests!

License
MIT License © Khalid Abdi

