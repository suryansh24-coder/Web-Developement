# Experiment 1 — Git and GitHub

Create a repository on GitHub, then run these commands in this folder:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
git switch -c feature
# Make a change, then:
git add .
git commit -m "Add feature"
git switch main
git merge feature
git push
```

On GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
