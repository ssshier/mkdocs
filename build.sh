#!/bin/bash

pnpm install

rm -rf ./docs/.vitepress/dist

pnpm docs:build

VERSION=`cat package.json | grep "version" | awk 'NR==1 {print $2}' | cut -d '"' -f 2`
TAG=mkdocs:${VERSION}

docker build . -t $TAG