---
template: overrides/main.html
description: >
  Istio document
search:
  exclude: true
---


# Istio

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

### Istio 是什么？

云平台令使用它们的公司受益匪浅。但不可否认的是，上云会给 DevOps 团队带来压力。为了可移植性，开发人员必须使用微服务来构建应用，同时运维人员也正在管理着极端庞大的混合云和多云的部署环境。 Istio 允许您连接、保护、控制和观察服务。

从较高的层面来说，Istio 有助于降低这些部署的复杂性，并减轻开发团队的压力。它是一个完全开源的服务网格，作为透明的一层接入到现有的分布式应用程序里。它也是一个平台，拥有可以集成任何日志、遥测和策略系统的 API 接口。Istio 多样化的特性使您能够成功且高效地运行分布式微服务架构，并提供保护、连接和监控微服务的统一方法。

### 服务网格是什么？

术语服务网格用来描述组成这些应用程序的微服务网络以及它们之间的交互。随着服务网格的规模和复杂性不断的增长，它将会变得越来越难以理解和管理。它的需求包括服务发现、负载均衡、故障恢复、度量和监控等。服务网格通常还有更复杂的运维需求，比如 A/B 测试、金丝雀发布、速率限制、访问控制和端到端认证。

Istio 提供了对整个服务网格的行为洞察和操作控制的能力，以及一个完整的满足微服务应用各种需求的解决方案。

### 为什么使用 Istio？

- 为 HTTP、gRPC、WebSocket 和 TCP 流量自动负载均衡。
- 通过丰富的路由规则、重试、故障转移和故障注入对流量行为进行细粒度控制。
- 可插拔的策略层和配置 API，支持访问控制、速率限制和配额。
- 集群内（包括集群的入口和出口）所有流量的自动化度量、日志记录和追踪。
- 在具有强大的基于身份验证和授权的集群中实现安全的服务间通信。
- Istio 为可扩展性而设计，可以满足不同的部署需求。
### 核心特性

- 流量管理
- 安全
- 可观察性
### 平台支持

- Kubernetes 上的服务部署
- 基于 Consul 的服务注册
- 服务运行在独立的虚拟机上
### 整合和定制

Istio 的策略实施组件可以扩展和定制，与现有的 ACL、日志、监控、配额、审查等解决方案集成。


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