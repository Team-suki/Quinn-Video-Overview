module.exports = {
  apps : [{
    script: './server/index.js',
    watch: '.',
    env: {
      NODE_ENV: "production"
    }
  }],
};
