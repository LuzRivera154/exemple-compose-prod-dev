
# Start applications (front and back) for Developpement

1. Build the dockerfiles
```
docker compose -f compose.yaml -f compose.dev.yaml build
```

2. Run the containers

```
docker compose -f compose.yaml -f compose.dev.yaml up
```
> **WARNING** Don't forget to build before up

# Start applications (front and back) for Production

1. Run the containers using prod compose and dockerfile
```
docker compose -f compose.yaml -f compose.prod.yaml up
```
> Before doing compose up on the server don't forget to build and push to dockerhub :
> ```
> docker compose -f compose.yaml -f compose.prod.yaml build
>```  
>```  
> docker compose -f compose.yaml -f compose.prod.yaml push 
> ```
>  