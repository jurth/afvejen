# Next application

## Build and submit image With Docker
Build the image with Docker 
`docker build . --tag europe-west4-docker.pkg.dev/afvejen/repository/afvejen-frontend:latest`

Push to repository
`docker push europe-west4-docker.pkg.dev/afvejen/repository/afvejen-frontend:latest`

Deploy new image
`gcloud run deploy afvejen-frontend-stage --image europe-west4-docker.pkg.dev/afvejen/repository/afvejen-frontend:latest`

Run locally
`docker run 3000:3000 europe-west4-docker.pkg.dev/afvejen/repository/afvejen-frontend:latest`

## Build and submit image with gcloud
Build the image with gcloud and submit to repository
`gcloud builds submit --tag europe-west4-docker.pkg.dev/afvejen/repository/afvejen-frontend:latest`
