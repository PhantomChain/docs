---
title: "Docker"
---

# Docker

[[toc]]

Required prerequisites to be installed: *Docker Engine, Docker Compose*

## Use case #1

> Run PostgreSQL and Redis Docker containers, use NodeJS from your local environment.

::: danger
Redis and PostgreSQL ports are mapped to your localhost, so you should not have Redis or PostgreSQL installed locally.
:::

```bash
cd docker/development
docker-compose up
```

To run the containers on the background:

```bash
docker-compose up -d
```

*In case you need to start with clean DBs:*

```bash
docker-compose down -v
docker-compose up -d
```

## Use case #2

> Run PostgreSQL and Redis Docker containers, build and run Core container.

::: tip
Along with PostgreSQL and Redis containers, now you have also NodeJS container which mounts your local core git folder inside the container and installs all NPM prerequisites.
:::

```bash
cd docker/$NETWORK (NETWORK = testnet || devnet)
docker-compose up -d
```

*You can now enter your core container and use nodejs in a Docker container (Linux environment).*

```bash
docker exec -it core bash
```

*Need to start everything from scratch and make sure there aren't any cached containers, images or volumes left, just use **purge_all.sh** script.*

::: warning
**Current files/preset are not Production ready. Official Production Core Docker images will be released soon after Core v2 goes live**.
:::
