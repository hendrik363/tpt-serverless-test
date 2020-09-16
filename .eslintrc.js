module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node":true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },

    "rules": {
        "no-undef": "off",
        "no-unused-vars": "off",
        "max-len": "off",
        "global-require": "off",
        "import/no-extraneous-dependencies": "off"
    }
};