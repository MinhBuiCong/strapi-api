module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bea11fc687977758d4e575dc8674ef2b'),
  },
});
