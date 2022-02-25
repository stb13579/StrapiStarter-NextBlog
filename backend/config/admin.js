module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c05fcf8a52df1c9d73c1b2945593a5a9'),
  },
});
