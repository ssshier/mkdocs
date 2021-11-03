---
template: overrides/main.html
description: >
  Kubernets document
search:
  exclude: true
---


# Kubernetes

<aside class="mdx-author" markdown>
![@ssshier][@ssshier avatar]

<span>__SsShier__ · @ssshier</span>
<span>
:octicons-calendar-24: September 26, 2021 ·
:octicons-clock-24: 5 min read ·
[:octicons-tag-24: 1.0.1]
</span>
</aside>

  [@ssshier avatar]: https://avatars.githubusercontent.com/u/39915673

---

## 概念

### Kubernets 是什么？

Kubernetes 是一个可移植的、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态系统。Kubernetes 的服务、支持和工具广泛可用。

#### 为什么需要 Kubernetes，它能做什么?

容器是打包和运行应用程序的好方式。在生产环境中，你需要管理运行应用程序的容器，并确保不会停机。 例如，如果一个容器发生故障，则需要启动另一个容器。如果系统处理此行为，会不会更容易？

这就是 Kubernetes 来解决这些问题的方法！ Kubernetes 为你提供了一个可弹性运行分布式系统的框架。 Kubernetes 会满足你的扩展要求、故障转移、部署模式等。 例如，Kubernetes 可以轻松管理系统的 Canary 部署。

Kubernetes 为你提供：

- 服务发现和负载均衡
- 存储编排
- 自动部署和回滚
- 自动完成装箱计算
- 自我修复
- 密钥与配置管理

## Minikube

```shell
brew install kubectl minikube

minikube start --memory=4096 --cpus=4 --driver=virtualbox --kubernetes-version v1.21.5

minikube start --memory=4096 --cpus=4 --driver=docker --kubernetes-version v1.21.5

minikube start  --memory=4096 --cpus=4 --driver=hyperkit --kubernetes-version v1.21.5

export HTTPS_PROXY=http://127.0.0.1:7890 HTTP_PROXY=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890

minikube kubectl -- get pods -A
```

