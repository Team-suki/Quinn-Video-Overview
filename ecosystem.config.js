module.exports = {
  apps : [{
    name: "KS Banner",
    script: './server/index.js',
    watch: '.',
    env: {
      NODE_ENV: "production"
    }
  }],
};
