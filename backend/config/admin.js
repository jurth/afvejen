module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd2b03678a30e8158d8e53ada1c1c2022'),
  },
});
