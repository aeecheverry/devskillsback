# DEVSKILLSBACK

DEVSKILLSBACK is a skills prove for nodejs and databases

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

## DOCUMENTATION 

[Postman Doc](https://documenter.getpostman.com/view/21879946/UzJPMuv2)

