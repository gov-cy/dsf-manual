---
sidebar_position: 4
slug: /ways-of-working/git-flow
---

# Team's flow

This document describes the Team's git wokflow. It is bases on the [GitHub workflow](https://docs.github.com/en/get-started/quickstart/github-flow).

## Prerequisites

###  (Recommended) Install node.js and git

- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **If required** by the project Install [Note.js](https://nodejs.org/en/download/)

### Clone repository 

- Get repository URL. From the repository page on Github, click `Code` and copy URL.
- Clone locally. (downloads repository)
    - **Command line** `git clone URL`
    - **VSCode** use `clone repository`

### Install Dependencies

**If required** by the project, update npm dependencies locally (on your computer)
- **Command line**: `npm install`

## Workflow

### 1. Create a branch

First you are going to need to create a branch in your repository. To do this you need to pick a name for your branch. Use your name initials and a short, descriptive branch name enables your collaborators to see ongoing work at a glance. For example, `CE-increase-test-timeout` or `NR-add-code-of-conduct`

- Make sure you are in `main` branch and `pull` from remote. 
    - **command line**: `git pull`
    - **VSCore**: click on `♻` icon under `source control`
- Create a new local branch
    - **command line**: `git checkout -b ＜new-branch＞`
    - **vscode**: click on `main` (bottom left) under `source control` and then click on `create new branch `. 

### 2. Make changes

- Make change in files
    - **vscode**: When a change is saved, all changes under that branch is displayed under  `Source Control`
    - **command line**: You can see changes with `git status`
- Add files to stage (locally) 
    - **command line**: `git add <file>` or `git add <directory>` or `git add .` to add all changes
    - **vscode**: use the `+` icon under `Source control`
- Commit changes.
    - **command line**: `git commit -m "commit message"`
    - **vscode**: click the `✓` icon under `commit` in `source control`
- Push changes. 
    - **Command line**: `git push`
    - **vscode**: Click `Publish Changes`in `source control`

Changes are done now in remote repository. Next step you need to create a pull request.

### 3. Pull request

- In github and check `Branches`  (i.e. https://github.com/gov-cy/dsf-design-system/branches )  and select your branch
- Create a `Pull request`. Add a meaningful comment

### 4. Review and Approve Pull Request

- Another member team needs to review and `approve` the pull request on github. Use meaningful comments on review.
    - Check [Visual Review with Percy](percy#github-review-builds)

### 5. Merge

If the change is approved, the developer who made the changes in the first place has to `merge`.

### 6. Delete Branch 

After you merge your pull request, delete your branch. This indicates that the work on the branch is complete and prevents you or others from accidentally using old branches. For more information, see [Deleting and restoring branches in a pull request](https://docs.github.com/en/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request).

## Best Practice
- Delete local branch after each merge
- Create new branch for new changes. I.e. different branch for `jumbotron` changes and different branch for `button` changes.
- Branch naming: Developer_Initials-Feaure i.e. : `CE_button_styles`
- For commits always have a descriptive, meaningful small message
- Make small changes and quick commits and pushes to remote

## Github Policy

- Default branch is `main`
- Production branch is `main`
- Protection rules for branch `main`
    - Require a pull request before merging
    - Require approvals


## Github Various Commands

- `git checkout <existing_branch>` Switch to existing Branch
- `git checkout -b <new_branch>` Switch to new Branch
- `git branch -a` display all branches (both local and remote).
- `git branch` To see local branches
- `git branch -d <branch-name> ` To delete local branch. If the branch contains unmerged changes, though, Git will refuse to delete it. If you’re sure you want to do it, you’ll have to force the deletion by replacing the -d parameter with an uppercase D

## Rebasing and Conflicts
### Rebasing

Remember to think about a git repository as a _series of changes_.

When you create a new branch git makes a copy of 'main' and you start putting changes on top of it.

But what if someone else puts more changes onto 'main'? The copy of main you are putting changes on top of is out of date.

To update the copy of main that is underneath our changes we perform a rebase.

First we update out main locally as usual:

```
git checkout main
git pull
```

then we go to our branch and rebase:

```
git checkout my-cool-branch
git rebase main
```

Done!

---
**NOTE**
For more information check this [guide from Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
---
### Conflicts

But...

Sometimes there will be conflicts with you changes and the new changes in main. **Don't Panic.**

You should get a message like this:

```
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git rebase --abort" to abort the rebase)

Unmerged paths:
(use "git add <file>..." to mark resolution)

both modified:   test.txt
```

The first thing this tells you is you can always cancel the rebase. If you run `git rebase --abort` you will be back with your branch before you tried to rebase the changes from main.

It also tells you how to fix the problem:

```
> both modified:   test.txt
> use "git add <file>..." to mark resolution
> fix conflicts and run "git commit"
```

In our example the file with a conflict is `test.txt`. In that file you will see more info:

```
$ cat test.txt
<<<<<<< HEAD
the changes from my branch
=======
the changes from main
>>>>>>> main
```

All you need to do now is to get test.txt how you want it then:

```
git add test.txt
git commit -m 'Resolving conflict in test.txt' test.txt
git rebase --continue
```

Done!

**NOTE**
For more information check this [guide from Atlassian](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
---