# Kubernets

## Install on macOS

```shell
# https://minikube.sigs.k8s.io/docs/start/
brew install kubectl
brew install minikube
kubectl version --client
minikube version
```



```shell
minikube start --driver=virtualbox --kubernetes-version v1.20.8 --image-mirror-country cn --image-repository=registry.cn-hangzhou.aliyuncs.com/ --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers



export HTTPS_PROXY=http://127.0.0.1:7890 HTTP_PROXY=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
export NO_PROXY=localhost,127.0.0.1,10.96.0.0/12,192.168.99.0/24,192.168.39.0/24,192.168.49.0/24
minikube start --driver=docker --kubernetes-version v1.20.8 --image-mirror-country cn --image-repository=registry.cn-hangzhou.aliyuncs.com/ --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers

minikube start --docker-env http_proxy=http://192.168.99.1:7890 --docker-env https_proxy=http://192.168.99.1:7890 --docker-env no_proxy=localhost,127.0.0.1,10.96.0.0/12,192.168.99.0/24,192.168.39.0/24,192.168.49.0/24
minikube status
minikube dashboard

kubectl get pods --all-namespaces

# describe
kubectl describe pods dashboard-metrics-scraper-8554f74445-qcf2t -n kubernetes-dashboard

# minikube dashboard 503
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/storage-provisioner:v4 registry.cn-hangzhou.aliyuncs.com/google_containers/k8s-minikube/storage-provisioner:v4

docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-scraper:v1.0.4 registry.cn-hangzhou.aliyuncs.com/google_containers/kubernetesui/metrics-scraper:v1.0.4

docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/dashboard:v2.1.0 registry.cn-hangzhou.aliyuncs.com/google_containers/kubernetesui/dashboard:v2.1.0
```



## Docker tag

[https://www.cnblogs.com/hongdada/p/11395200.html](https://www.cnblogs.com/hongdada/p/11395200.html)

```shell
MY_REGISTRY=gcr.azk8s.cn/google-containers

# pull image
docker pull ${MY_REGISTRY}/kube-apiserver:v1.15.1
docker pull ${MY_REGISTRY}/kube-controller-manager:v1.15.1
docker pull ${MY_REGISTRY}/kube-scheduler:v1.15.1
docker pull ${MY_REGISTRY}/kube-proxy:v1.15.1
docker pull ${MY_REGISTRY}/pause:3.1
docker pull ${MY_REGISTRY}/etcd:3.3.10
docker pull ${MY_REGISTRY}/coredns:1.3.1

# tag
docker tag ${MY_REGISTRY}/kube-apiserver:v1.15.1 k8s.gcr.io/kube-apiserver:v1.15.1
docker tag ${MY_REGISTRY}/kube-controller-manager:v1.15.1 k8s.gcr.io/kube-controller-manager:v1.15.1
docker tag ${MY_REGISTRY}/kube-scheduler:v1.15.1 k8s.gcr.io/kube-scheduler:v1.15.1
docker tag ${MY_REGISTRY}/kube-proxy:v1.15.1 k8s.gcr.io/kube-proxy:v1.15.1
docker tag ${MY_REGISTRY}/pause:3.1 k8s.gcr.io/pause:3.1
docker tag ${MY_REGISTRY}/etcd:3.3.10 k8s.gcr.io/etcd:3.3.10
docker tag ${MY_REGISTRY}/coredns:1.3.1 k8s.gcr.io/coredns:1.3.1
 
# delete
docker images | grep ${MY_REGISTRY} | awk '{print "docker rmi "  $1":"$2}' | sh -x

echo "end"
```

## Create service

```shell
kubectl create deployment hello-nginx --image=nginx --port=80
kubectl expose deployment hello-nginx --type=NodePort --port=80
kubectl get services hello-nginx
minikube service hello-nginx

kubectl delete services hello-nginx
kubectl delete deployment hello-nginx
```

