#!/bin/sh

npm run build
git add dist/assets
git commit -sa
git push
git subtree push --prefix dist origin gh-pages
