#!/bin/bash

# Criar diretórios necessários
mkdir -p docs/deploy
mkdir -p docs/tutorials/build-blockchain

# Copiar arquivos MD
cp ../substrate-docs/content/md/en/docs/deploy/*.md docs/deploy/
cp ../substrate-docs/content/md/en/docs/tutorials/build-blockchain/*.md docs/tutorials/build-blockchain/

# Copiar imagens
cp -r ../substrate-docs/content/media/* static/media/