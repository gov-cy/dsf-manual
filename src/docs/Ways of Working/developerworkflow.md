---
sidebar_position: 6
slug: /ways-of-working/developerworkflow
---

# End-to-end developer workflow

## Introduction

This document describes the end-to-end workflow for developer backlog ticket from their creation through to their completion.

## Steps to take

### 1. Provisional sprint goals identified by product managers and shared with tech archs by the last Thursday of the sprint.

### 2. Development work require to achieve the provisional sprint goals identified by tech archs, product managers and delivery managers.

### 3. Placeholder tickets are defined by the tech archs.

Placeholder tickets should be added to the [product backlog](https://trello.com/b/FBtFHwq6/cyprus-product-backlog) on the last Thursday of the sprint.

By this step, each ticket should have the following information, using the [developer ticket template](https://trello.com/c/Wtm0dAhT/349-template-development-ticket-please-copy).
	
- description
- user story (only required if the item is a new feature or product enhancement)
- the sprint goal that the ticket relates to
- design, analysis and technical artefacts

### 4. Placeholder tickets are discussed and refined by the team.

This happens in the "three amigos" session (on the last Friday of the sprint) and involves developers, tech archs, quality analysts and product managers.

By this step, each ticket should have the following information, using the [developer ticket template](https://trello.com/c/Wtm0dAhT/349-template-development-ticket-please-copy).

- description
- user story (only required if the item is a new feature or product enhancement)
- the sprint goal that the ticket relates to
- design, analysis and technical artefacts
- acceptance criteria
- user acceptance tests

 
### 5. Sprint goals are agreed and the tech team commits tickets to pull to the sprint backlog.

Tickets are added in priority order to the “sprint backlog” column on the [team board](https://trello.com/b/DcLXFAmN/cyprus-team-board). This happens during sprint planning.

### 6. developers pick up tickets in priority order.

Tickets being actively worked should be moved from the sprint backlog to the ‘doing column’ on the team board.

### 7. Once developers are confident that the acceptance criteria are met, the ticket is marked as ready for review.

To do this, you should raise a pull request and place the ticket in the “ready for dev review” column on the team board.

### 8. The pull request is peer reviewed by another developer or tech arch.

If the ticket is fit to pass to review, the pull request will be approved.

If the ticket is not ready to pass peer review, the reviewer should add a comment on the pull request outlining any changes to be made and the reasons for it. The ticket should then be moved back to the “doing” column on the team board.
	
The developer should then review any comments on the pull request and address outstanding issues, before submitting the ticket for further review.
	
The following tests should be passing before the ticket can proceed to the step 9:
- automated tests
	- visual regression
	- linting
	- unit tests
	- accessibility tests
- manual tests
	- user acceptance tests

### 9. Acceptance criteria are tested by a QA (or a developer acting as QA).

If the acceptance criteria are met and there are no bugs or issues, the QA should add a comment to the ticket's trello card indicating it is ready for PM review.

If there are unmet acceptance criteria or new bugs or issues to be addressed, the QA should add a comment to the trello card documenting the issues. The developer, QA and PM should then agree whether any bugs or issues should be resolved as part of the scope of this ticket, or whether a separate ticket should be created.

### 10. A final review is conducted by the developer with the product manager(s), to check if the 'definition of done' is met.

The definition of done conditions are:
- all unit tests passing
- code has been peer reviewed by another developer or tech arch
- all acceptance criteria are met
- all functional and UI tests are passing

If the definition of done is met, the PR can be merged and the ticket moved to the "done" column.

If the definition of done is not met, the ticket should be moved back to "doing" column for further work.

## Outstanding process issues

There are a number of remaining process issues to address:

1. what performance tests need to be run for each release
2. what process should be followed for running performance tests
3. whether or not there are dedicated QAs on the DSF team or the QA role is shared across the developers

These process issues will be addressed from Sprint 9 onwards.
