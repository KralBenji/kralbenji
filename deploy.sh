#!/bin/bash
set -e

cd /var/www/kralbenji.com/public_html

echo "Syncing with GitHub..."
git fetch origin main
git reset --hard origin/main
git clean -fd

echo "Deployment complete."
git status