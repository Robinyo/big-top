# Contributing to the Big Top App

Thank you for taking the time to contribute!

The following is a set of guidelines for contributing to the Big Top app. These are just guidelines, not rules, 
use your best judgment and feel free to propose changes to this document in a pull request.

## Table of Contents
 - [How To Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
    - [Before Submitting an Issue](#before-submitting-an-issue)
    - [Submitting the Issue](#submitting-the-issue)
  - [Submitting a Pull Request](#submitting-a-pull-request)
    - [Guidelines for Submitting](#guidelines-for-submitting)
    - [Code Style](#code-style)

## How To Contribute

### Reporting Issues

Before submitting an issue, please go through [the list below](#before-submitting-an-issue) as you might find a solution to your issue.

#### Before Submitting an Issue

* Make sure you get the latest version of the code and run through the [Getting Started](https://github.com/Robinyo/big-top#getting-started) steps to see if this resolves your issue.
* Go through [all the issues](https://github.com/Robinyo/big-top/issues) on this repository to see if the issue has already been created. It could have been closed with a resolution, so check closed issues, too.

#### Submitting the Issue

* **Use a clear and descriptive title** for the issue to identify the problem. This makes it easier for others to find.
* **Describe the exact steps to reproduce the problem** with as many details as needed.
* **Provide your configuration** by running `ionic info` in a terminal from *within* the project folder and pasting this information in the issue.

### Submitting a Pull Request

#### Guidelines for Submitting

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, do not bundle more than one "feature" or bug fix per PR. Doing so makes it very hard to accept it if one of the fixes has issues.

It's always best to create two smaller PRs than one big one.

Talk to us before creating a PR that refactors the code or directory structure of the project. This project is constantly changing to reflect the latest version of Ionic 2.0 so sometimes it will be in the process of getting fixed.

#### Code Style

Make sure to follow the existing code style as much as possible.

* No underscores prefixing JS functions.
* Use flat Sass.
 * **Don't** use [BEM conventions](https://css-tricks.com/bem-101/).
 * Avoid nesting selectors. This is done to make it easier for users without Sass experience to understand and read.
