---
sidebar_position: 2
---

# Installation

Dans ce document, on explique le processus de démarrage d'Annotto.

## Table des matières

1. [Lancer avec docker](#lancer-avec-docker)
2. [Démarrage pour le développement local](#démarrage-pour-le-développement-local)

## Lancer avec docker

Vous devez avoir [Docker](https://www.docker.com/) installé.

```
  docker run --rm -d --name annotto -p 3000:3000 -p 8080:8080 \
 -e KEYCLOAK_USER=admin \
 -e KEYCLOAK_PASSWORD=admin \
 ljnrepo/annotto:latest
```

---

**Annotto** est disponible à [http://localhost:3000](http://localhost:3000) avec les credentials par défaut:

```
username (email): admin
password: test
```

## Démarrage pour le développement local

### Pré-requis

1. Node 16+
2. Mongo 4.4
3. Keycloak 15.0.1
4. PostgreSQL 13+

### Démarrage de l'application

1. Installer les dépendances

```shell
yarn install
```

2. Préparer l'environnement

```shell
docker-compose up -d
```

3. Démarrer annotto en mode développement

```shell
yarn start:dev
```

### Variables d'environnement

| Name                         | Default                                   | Optional-Required | Description                                                             |
| ---------------------------- | ----------------------------------------- | ----------------- | ----------------------------------------------------------------------- |
| PORT                         | 5001                                      | optional          | Server listening port                                                   |
| NODE_ENV                     | development                               | optional          | NODE Environment to use "[development, test]"                           |
| ENCRYPTION_SECRET_KEY        | -                                         | optional          | A Secret Key used to encrypt AWS creds (symmetric)                      |
| MONGO_URL                    | mongodb://localhost:27017/ljn_annotto_dev | optional          | Mongo connection string                                                 |
| ANNOTTO_FRONT_URL            | http://localhost:3000                     | optional          | Annotto Front base url                                                  |
| KEYCLOAK_REALM               | annotto                                   | optional          | Keycloak Realm (preconfigured if started with docker-compose\_)         |
| KEYCLOAK_AUTH_URL            | http://localhost:8080/auth                | optional          | Keycloak auth url (preconfigured if started with docker-compose\_)      |
| KEYCLOAK_CLIENT_ID           | annotto                                   | optional          | Keycloak client id (preconfigured if started with docker-compose\_)     |
| KEYCLOAK_CLIENT_SECRET       | a7b7a29d-abb0-4e21-abec-bca99a47e40e      | optional          | Keycloak client secret (preconfigured if started with docker-compose\_) |
| ANNOTTO_UPLOAD_MAX_FILE_SIZE | 1048576000                                | optional          | Max file size permitted to upload (default = 1000 _ 1024 _ 1024)        |
| ANNOTTO_UPLOAD_BATCH_SIZE    | 50000                                     | optional          | Max file size permitted to upload (default = 1000 _ 1024 _ 1024)        |
