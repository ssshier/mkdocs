# ArgoCD

```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml


kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```

### images

```
docker pull quay.io/argoproj/argocd:v2.1.5
docker pull ghcr.io/dexidp/dex:v2.27.0
docker pull redis:6.2.4-alpine

docker tag  quay.io/argoproj/argocd:v2.1.5 docker.io/ssshier/argocd:v2.1.5
docker tag  ghcr.io/dexidp/dex:v2.27.0 docker.io/ssshier/dex:v2.27.0
docker tag  redis:6.2.4-alpine docker.io/ssshier/redis:6.2.4-alpine

docker push docker.io/ssshier/argocd:v2.1.5
docker push docker.io/ssshier/dex:v2.27.0
docker push docker.io/ssshier/redis:6.2.4-alpine

docker pull docker.io/ssshier/argocd:v2.1.5
docker pull docker.io/ssshier/dex:v2.27.0
docker pull docker.io/ssshier/redis:6.2.4-alpine

docker tag  docker.io/ssshier/argocd:v2.1.5 quay.io/argoproj/argocd:v2.1.5
docker tag  docker.io/ssshier/dex:v2.27.0 ghcr.io/dexidp/dex:v2.27.0
docker tag  docker.io/ssshier/redis:6.2.4-alpine redis:6.2.4-alpine
```