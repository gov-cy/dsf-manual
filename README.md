# dsf-manual

[Digital Services Factory Team Manual](https://gov-cy.github.io/dsf-manual/)

This repo is the manual for the Digital Services Factory Team. Initially tech focussed but potentially will include further team docs grow to include further documentation.

# Creating new pages

The manual uses the [Docusaurus Documentation](https://docusaurus.io/docs/create-doc) feature to compile pages into a static site.
All source files are contained in `/src`. You can edit pages here or add new pages as per the above documentation.

# Deployment

The site is updated When a pull request is accepted against `main` and new changes are merged into the `main` branch.

When this happens the files in `'main'` branch -> `/src` directory are compiled and checked in to the root of the `'deployed'` branch [here](https://github.com/gov-cy/dsf-manual/tree/deployed).
Or to put it another way the files in [github.com/gov-cy/dsf-manual/tree/main/src](https://github.com/gov-cy/dsf-manual/tree/main/src) are compiled to [github.com/gov-cy/dsf-manual/tree/deployed](https://github.com/gov-cy/dsf-manual/tree/deployed)


The root directory of the `'deployed'` branch is what is shown at [https://gov-cy.github.io/dsf-manual/](https://gov-cy.github.io/dsf-manual/)

