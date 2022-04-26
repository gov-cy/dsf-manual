---
sidebar_position: 3
slug: /govcy-design-system/cdn
---

# CDN

## CDN Explained

The CDN works like a shared folder but instead of people accessing it websites use it.
Websites use CSS files to describe the styles and components that can be used in the HTML.
Our CSS files can be put in the CDN for any number of websites to use.

## Our Strategy

The files that make up the gov.cy Design System are hosted on Microsoft Edge content delivery network so they can be easily consumed and cached by numerous services.

This strategy has a number of benefits

1. Users browsers can cache the files for use on multiple services. Only downloading the CSS files once across any number of services.

2. Developers do not have to handle serving/ packaging static assets (CSS, javascript, images) with their services

3. Files are optimally served anywhere on the planet from a broad delivery network

## Structure

The CDN is set up to provide every released version of the gov.cy Design System. It could break people's websites if we remove versions, and it is very cheap to leave them up, so we just leave them once they are published.

There are 2 types of link we provide:

### latest

For example:

    version/latest/style.min.css
    version/latest/app.js

Latest always tracks the most up to date version of the code. This version can change but will always be the most up to date version. It is best used for development or on sites that have good automated testing to check that things don't break.

### vX.X.X

For example:

    version/v0.0.1/style.min.css
    version/v1.0.1/style.min.css
    version/v1.0.2/style.min.css

These are explicitly versioned files and their content should never change. These are safe to use on production and once tested will provide a consistent look and feel for your websites.