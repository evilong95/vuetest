#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/evilong95/vuetest.git main:gh-pages
cd -