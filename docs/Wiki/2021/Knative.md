# Knative

https://knative.dev/docs[https://knative.dev/docs]

在开始使用Knative Quickstart部署之前，您必须安装kind、Kubernetes CLI和Knative CLI。

```shell
brew install kind
brew install kn
# 安装quickstart插件
brew install knative-sandbox/kn-plugins/quickstart

kn quickstart kind

kind get clusters
```

## Knative Serving

### Knative Service: "Hello world!"

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello
spec:
  template:
    metadata:
      # This is the name of our new "Revision," it must follow the convention {service-name}-{revision-name}
      name: hello-world
    spec:
      containers:
        - image: gcr.io/knative-samples/helloworld-go
          ports:
            - containerPort: 8080
          env:
            - name: TARGET
              value: "World"
```

```
Service hello created to latest revision 'hello-world' is available at URL:
http://hello.default.127.0.0.1.nip.io
```

### Ping your Knative Service¶

```
curl http://hello.default.127.0.0.1.nip.io
```

### Basics of Traffic Splitting

#### Creating a new Revision

```yaml
---
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello
spec:
  template:
    metadata:
      name: hello-knative
    spec:
      containers:
        - image: gcr.io/knative-samples/helloworld-go
          ports:
            - containerPort: 8080
          env:
            - name: TARGET
              value: "Knative"
```

```shell
kubectl apply -f hello.yaml
```

```
curl http://hello.default.127.0.0.1.nip.io
```

```
kubectl get revisions
```

#### Splitting Traffic

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello
spec:
  template:
    metadata:
      name: hello-knative
    spec:
      containers:
        - image: gcr.io/knative-samples/helloworld-go
          ports:
            - containerPort: 8080
          env:
            - name: TARGET
              value: "Knative"
  traffic:
  - latestRevision: true
    percent: 50
  - revisionName: hello-world
    percent: 50
```

```shell
kubectl apply -f hello.yaml
```

```
curl http://hello.default.127.0.0.1.nip.io
```

```
kubectl get revisions
```

#### Clean Up

```
kn service delete hello
```