# This is the backend folder

## Commands

### Start postgres docker instance

```
docker run \
-e POSTGRES_USER=furfinder_db \
-e POSTGRES_PASSWORD=password123 \
-e POSTGRES_DB=furfinder_db \
-v furfinderdata:/var/lib/postgresql/data \
--name furfinder_db \
-p 5435:5432 \
postgres
```

### Docker network without docker compose

```
docker network create ffnetwork

docker run -p 9000:8000 --network ffnetwork --name ffbackend <image:id>

docker run \
-e POSTGRES_USER=furfinder_db \
-e POSTGRES_PASSWORD=password123 \
-e POSTGRES_DB=furfinder_db \
-v furfinderdata:/var/lib/postgresql/data \
--name furfinder_db \
-p 5435:5432 \
--network ffnetwork \
postgres:16
```

Careful with .env
