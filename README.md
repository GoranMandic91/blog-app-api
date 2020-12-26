# blog-app-api

Server for blog application


 ### Run it inside Docker 
  - build docker image
  ```console
  docker build -t blog-app-api .
  ```
  - run docker container
  ```console
  docker start blog-api 2>/dev/null || \
  docker run --name blog-api \
    -p 8000:4000 \
    -e PORT=4000 \
    -d blog-app-api:latest
  ```
  - run a command in a running container
  ```console
  docker exec -it blog-api sh
  ```
  - get container logs
  ```console
  docker logs blog-api
  ```
