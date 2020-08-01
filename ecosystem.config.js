module.exports = {
  apps : [{
    name: "KS Banner",
    script: './server/index.js',
    watch: 'false',
    env: {
      NODE_ENV: "production"
    },
    node_args: '--max-old-space-size=1000'
  }],
};
