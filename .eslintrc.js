module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/display-name": 0,
        indent: ["error", 4],
        "no-unused-vars":1,
        "@typescript-eslint/ban-ts-comment":0,
        "brace-style": [2, "1tbs"],
        "rest-spread-spacing": ["error"],
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-dupe-keys": 2,
        "no-empty": 2,
        "no-eq-null": 2,
        "no-mixed-spaces-and-tabs": [2, false],
        "guard-for-in": 1,
        "prefer-const": 1,
        "prefer-spread": 1,
        "quotes": [2, "single", { "avoidEscape": true }],
        "curly":1,
        "comma-dangle":2,
        "comma-style":2,
        "dot-location":2,
        "eol-last":2,
        "new-cap":2,
        "no-duplicate-imports":2,
        "no-multi-spaces":2,
        "use-isnan":2,
        "space-infix-ops": ["error", { "int32Hint": false }],
        "@typescript-eslint/no-explicit-any":0,
        "comma-spacing":2
    }

};
