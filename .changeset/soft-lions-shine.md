---
"@silverhand/eslint-config": minor
"@silverhand/eslint-config-react": minor
"@silverhand/ts-config": minor
"@silverhand/ts-config-react": minor
---

support Node.js 22, 24 and 26

Widen `engines.node` to `^20.9.0 || ^22.0.0 || ^24.0.0 || ^26.0.0` so the packages no longer emit engine warnings on newer Node.js releases.
