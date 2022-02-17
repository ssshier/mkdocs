# Istio

## 实例

```shell

# https://github.com/istio/istio

istioctl install

kubectl apply -f grafana.yaml
kubectl apply -f jaeger.yaml
kubectl apply -f kiali.yaml
kubectl apply -f prometheus.yaml


istioctl dashboard kiali

# 自动注入 Sidecar
kubectl label namespace default istio-injection=enabled --overwrite
kubectl label namespace argocd istio-injection=enabled --overwrite
kubectl label namespace dev istio-injection=enabled --overwrite
kubectl get namespace -L istio-injection

```

## Gateway

```shell
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
export TCP_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="tcp")].nodePort}')

export INGRESS_HOST=$(minikube ip)

kubectl get svc -n istio-system
echo "INGRESS_HOST=$INGRESS_HOST, INGRESS_PORT=$INGRESS_PORT"

kubectl get gateway --all-namespaces

kubectl get ingress --all-namespaces

```