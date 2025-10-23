module.exports = function override (config, env) {
    console.log("inside config-overrides.js")

    // config.resolve.alias['vscode'] = require.resolve('@codingame/monaco-languageclient/lib/vscode-compatibility')
    
    // disable chunks so the index.html won't change during development 
    config.optimization.splitChunks = {
        cacheGroups: {
            default: false,
        },
    };

    config.optimization.runtimeChunk = false;

    return config;
}