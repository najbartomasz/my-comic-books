# **`My Comic Books`**

# Project Structure

## `globals`

Fiename | Description
------- | -----------
README.md | Detailed description of the project.
.gitignore | List of files and directory that are not under version control.
sonar-project.properties | Properties file required by SonarQube to analyse the project.

## `configs`

This directory contains all configs file commonly used by the project components.

### `eslint`

ESLint configurations.

Filename | Description
-------- | -----------
.common.eslintrc| Base configuration file. Used by other eslint configs. Uses `esnext` and `jest` **env** as well as `jest` **plugin**.
.node.eslintrc | Configruation file for NodeJS components. Extends `.common.eslintrc` and sets `node` **env**.
.browser.eslintrc | Configruation file for Web applications. Extends `.common.eslintrc` and sets `browser` **env**.

### `jest`

Jest testing framework configuration.

## `libs`

Libraries written for the project purposes.

## `packages`

Project components.

## `ci`

Continous Integration pipelines.

# Libraries

# Components

# CI Pipelines
