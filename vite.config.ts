{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "starfall-defense-systems",
  "compatibility_date": "2026-06-21",
  "observability": {
    "enabled": true
  },
  "main": "./dist/server/server.js",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "directory": "./dist/client"
  }
}
