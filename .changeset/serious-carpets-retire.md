---
"@silverhand/eslint-config-react": patch
---

downgrade stylelint to v15 for transition

stylelint v16 removed a lot of deprecated rules and we need to update our stylelint config to work with the new version. this is a temporary downgrade to v15 to give us time to update our stylelint config.
