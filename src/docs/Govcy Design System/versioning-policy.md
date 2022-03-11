---
sidebar_position: 3
slug: /govcy-design-system/versioning-policy
---

# Versioning Policy

This document describes how to handle versioning on the GovCy Design System project (https://github.com/gov-cy/dsf-design-system).

The purpose of the versioning policy is counter the effects of the “dependency hell”. As we release new components, update old components or correct bugs, care must be taken to make sure the changes do not affect developers that already use our product and that they are not locked in specific versions with no way to upgrade. 

By applying simple rules, requirements to dictate how version numbers are assigned or incremented and processes on specific actions we can tackle the dependency hell phenomenon. These rules are based on but not necessarily limited to pre-existing widespread common practices in use in both closed and open-source software and are based on the Semantic Versioning system https://semver.org/. 

## Versioning Specification
Consider a version format of **X.Y.Z** (Major.Minor.Patch). 

    Given a version number MAJOR.MINOR.PATCH, increment the:
    
    - MAJOR version when you make incompatible changes that require developers to change their code,
    - MINOR version when you add functionality in a backwards compatible manner, and
    - PATCH version when you make backwards compatible bug fixes.

Read more on the versioning specification at https://semver.org/#semantic-versioning-specification-semver.

### Versioning Examples

- 0.0.1 
- 0.0.2
- 0.1.1
- 0.2.1
- 0.3.0 0.x.x_latest
- 1.0.0 
- 1.0.1 
- 1.0.2 1.x.x_latest
- 2.0.0
- 2.1.0
- 2.2.0
- 2.2.1
- 2.2.2
- 2.2.3
- 2.2.4 2.x.x_latest

## When to assign new version number
A new version number should be assigned on each merge to the main branch.

## Versioning Processes
Do the following whenever a new version is assigned:

1. Change the version number in the **package.json** file as shown in the sample below

```json
{
    "name": "govcy-design-system",
    "version": "0.0.1",
    .....
```

2. Update the **changelog.md**

When updating the change log, make it easier for developers and contributors to see precisely what notable changes have been made between each release (or version) of the project. Remember the change log is intended for humans :-). 

Use the format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

Sample changelog.md

```markdown
# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
 
## [v0.2.3] - 2022-02-22
 
### Removed
- auto-changelog package
 
## [v0.2.2] - 2022-02-22
 
### Added
- auto-changelog package
 
### Changed
- Update changelog
 
## [v0.2.0] - 2022-02-22
 
### Changed
- Initial commit after applying Semantic Versioning
```

3. Make a **tag** on Git (support latest major version)
Make sure you are on `master` branch and run the following:

```bash
git pull
git tag v0.2.3
git push origin --tags
```

4. **Publish** the new version on the CDN server . Keep CDN entries for every version AND latest for every Major version. 

5. **Inform** developers and collaborators about the new version. 

- Keep a list of developers so that they can be informed via a newsletter about the new version. 
Suggest that it is strongly suggested that they use the latest Major version and always do visual tests.
- Announce the new version in the `daily stand-up` and in the `tech-talk` channel in discord. 


