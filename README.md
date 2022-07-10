# DEVSKILLSBACK

DEVSKILLSBACK is a skills prove for nodejs and databases, using a 3-layer-arch with and severals design patterns, factory, sijngleton, abstract factory, dao, using express and schema to validate input data. Postgres is the seleted database using a ORM (sequelize) to optimize the implementation and PgAdmin to manage postgres databases. Deployed using containers with docker and docker-compose.

## CONFIG

Copy and paste de **.env** file into **devskillback** folder


If you use MacOS do you need change one environment variable in the [docker-compose.yml](docker-compose.yml) for the service devskillsback.

```yaml
devskillsback:
    ...
    environment:
      ...
      DB_HOST: ${DB_HOST}
      ...
```
to

```yaml
devskillsback:
    ...
    environment:
      ...
      DB_HOST: host.docker.internal
      ...
```

## RUN

Use docker-compose to run the services

```bash
docker-compose up -d
```

## PGADMIN

Open when services are fully deployed

[pgadmin.com](http://localhost:5050/)

## DOCUMENTATION 

[Postman Doc](https://documenter.getpostman.com/view/21879946/UzJPMuv2)

