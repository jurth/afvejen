module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
          serviceAccount: Buffer.from(env("GCS_SERVICE_ACCOUNT"), "base64").toString("ascii"),
          bucketName: env('GCS_BUCKET_NAME'),
          basePath: '',
          baseUrl: env('GCS_BASE_URL'),
          publicFiles: true,
          uniform: true,
        },
      },
    },
});