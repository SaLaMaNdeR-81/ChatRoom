@echo off
Title GitPusher

  @REM git init
  @REM git add README.md
  @REM git commit -m "first commit"
  @REM git branch -M main
  @REM git remote add origin https://github.com/SaLaMaNdeR-81/ChatRoom.git
  @REM git push -u origin main

git add . 
git add .gitignore
git commit -m "UpDate Project."
git pull origin main
git commit -m "Merge remote changes"
git push origin main

pause