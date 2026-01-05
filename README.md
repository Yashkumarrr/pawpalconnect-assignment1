# pawpalconnect-assignment1

overview

This repository contains a simple Node.js application with a CI/CD pipeline configured using GitHub

Pipeline Stages

The pipeline is defined in .github/workflows/ci.yml and runs the following stages:

1. Checkout Code

Pulls the latest code from the repository.

Ensures CI is working with the correct branch and commit.

2. Setup Node.js

Installs Node.js runtime for the project.

Ensures consistent Node.js version across environments.

3. Install Dependencies

Uses npm ci to install dependencies based on package-lock.json.

Guarantees deterministic installs so the pipeline behaves the same every time.

4. Lint

Checks the code for syntax issues and basic code quality.

Runs npm run lint.

Fails the pipeline if code does not meet linting rules.

5. Unit Tests

Runs automated tests using Jest (npm test).

Fails the pipeline if any test fails.

Ensures that code changes don’t break functionality.

6. Build

Runs a build step (npm run build) to confirm that the application is ready for deployment.

In this simple app, it’s a placeholder for actual build steps in real-world projects.
