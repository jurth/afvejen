# Strapi application

## Run with Docker (local)
Build the image
`docker build --tag strapi .` 

Run the image
`docker run -p 1337:1337 strapi`

## Cloud Run config
Authenticate docker for Cloud Run
`gcloud auth configure-docker`

## Build and submit image With Docker
Build the image with Docker 
`docker build . --tag europe-west4-docker.pkg.dev/afvejen/repository/afvejen-backend:latest`

Configure Docker to access repository (one time only)
`gcloud auth configure-docker europe-west4-docker.pkg.dev`

Push to repository
`docker push europe-west4-docker.pkg.dev/afvejen/repository/afvejen-backend:latest`

Deploy new image
`gcloud run deploy afvejen-backend-stage --image europe-west4-docker.pkg.dev/afvejen/repository/afvejen-backend:latest`

## Build and submit image With gcloud
Build the image with gcloud and submit to repository
`gcloud builds submit --tag europe-west4-docker.pkg.dev/afvejen/repository/afvejen-backend:latest`

## Run image locally
`gcloud beta code dev --local-port 1337`

## Run image on Cloud Run
`gcloud run deploy afvejen-backend-stage --image europe-west4-docker.pkg.dev/afvejen/repository/afvejen-backend:latest`

### With db config
`gcloud run services update afvejen-backend-stage \
--add-cloudsql-instances=afvejen:europe-west4:afvejen-stage \
--update-env-vars=INSTANCE_CONNECTION_NAME=afvejen:europe-west4:afvejen-stage \
--update-secrets=DB_USER=STAGE_DATABASE_USERNAME:latest \
--update-secrets=DB_PASS=STAGE_DATABASE_PASSWORD:latest \
--update-secrets=DB_NAME=STAGE_DATABASE_NAME:latest`


## Run Cloud Auth procy
Make cloud sql available locally
`cloud_sql_proxy -instances=afvejen:europe-west4:afvejen-stage=tcp:5432`