#!/usr/bin/env bash
set -euo pipefail
cd /workspace/podologa
npm ci --cache /tmp/podologa-npm
npm run build
