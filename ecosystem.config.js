module.exports = {
  apps : [{
    script: './server/index.js',
    watch: '.',
    env_production: {
      NODE_ENV: "production"
    }
  }],
};
