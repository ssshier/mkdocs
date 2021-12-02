# docker 

## share volume

```
# sharer
-v /usr1

# user
--from-volumes [sharer container id/name]

```

## restart with docker serivce

```
--restart=always
```

## restart docker when container not stop generate directory


eg: `-v /home/docker.env:/home/docker.env`

when restart docker and set `--restart=always` but container not stop

will generate `/home/docker.env` directory 