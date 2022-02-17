# Kustomize


## Install

```shell
brew install kustomize
```

## Make a kustomization file

```
~/someApp
├── deployment.yaml
├── kustomization.yaml
└── service.yaml
```

```shell
# Generate customized YAML with:
kustomize build ~/someApp
# The YAML can be directly applied to a cluster:
kustomize build ~/someApp | kubectl apply -f -
```

## Create variants using overlays

```
~/someApp
├── base
│   ├── deployment.yaml
│   ├── kustomization.yaml
│   └── service.yaml
└── overlays
    ├── development
    │   ├── cpu_count.yaml
    │   ├── kustomization.yaml
    │   └── replica_count.yaml
    └── production
        ├── cpu_count.yaml
        ├── kustomization.yaml
        └── replica_count.yaml
```

```shell
# Generate YAML with
kustomize build ~/someApp/overlays/production
# The YAML can be directly applied to a cluster:
kustomize build ~/someApp/overlays/production | kubectl apply -f -

```

