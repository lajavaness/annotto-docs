---
sidebar_position: 2
---

# Install

This document explains how to start Annotto.

# Table of contents
1. [Start with docker](#start-with-docker)
2. [Start for local development](#start-for-local-development)

# Start with docker
Make sure you have [Docker](https://www.docker.com/) installed.
```
  docker run --rm -d --name annotto -p 3000:3000 -p 8080:8080 \
 -e KEYCLOAK_USER=admin \
 -e KEYCLOAK_PASSWORD=admin \
 ljnrepo/annotto:latest
```
***
**Annotto** will be available at [http://localhost:3000](http://localhost:3000) with default credentials
```
username (email): admin
password: test
```

## Start for local development
### Prerequisites
1. Node 16+
2. Mongo 4.4
3. Keycloak 15.0.1
4. PostgreSQL 13+

### Launch the app

1. Install project dependencies
```shell
yarn install
```
2. Launch environment
```shell
docker-compose up -d
```
3. Launch annotto

```shell
yarn start:dev
```

### Environment variables
| Name                         | Default                                   | Optional-Required | Description                                                          |
|------------------------------|-------------------------------------------|---------------|----------------------------------------------------------------------|
| PORT                         | 5001                                      | optional      | Server listening port                                                |
| NODE_ENV                     | development                               | optional      | NODE Environment to use "[development, test]"                        |
| ENCRYPTION_SECRET_KEY        | -                                         | optional      | A Secret Key used to encrypt AWS creds  (symmetric)                  |
| MONGO_URL                    | mongodb://localhost:27017/ljn_annotto_dev | optional      | Mongo connection string                                              |
| ANNOTTO_FRONT_URL            | http://localhost:3000                     | optional      | Annotto Front base url                                               |
| KEYCLOAK_REALM               | annotto                                   | optional      | Keycloak Realm (preconfigured if started with docker-compose_)       |
| KEYCLOAK_AUTH_URL            | http://localhost:8080/auth                | optional      | Keycloak auth url (preconfigured if started with docker-compose_)    |
| KEYCLOAK_CLIENT_ID           | annotto                                   | optional      | Keycloak client id (preconfigured if started with docker-compose_)   |
| KEYCLOAK_CLIENT_SECRET       | a7b7a29d-abb0-4e21-abec-bca99a47e40e      | optional      | Keycloak client secret (preconfigured if started with docker-compose_) |
| ANNOTTO_UPLOAD_MAX_FILE_SIZE | 1048576000                                | optional      | Max file size permitted to upload (default = 1000 * 1024 * 1024)     |
| ANNOTTO_UPLOAD_BATCH_SIZE    | 50000                                     | optional      | Max file size permitted to upload (default = 1000 * 1024 * 1024)     |
