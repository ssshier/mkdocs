# GraphQL

[[toc]]

GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。


## Python

Query

```Python
import graphene
 
class Query(graphene.ObjectType):
  hello = graphene.String(name=graphene.String(default_value="World"))
 
  def resolve_hello(self, info, name):
    return 'Hello ' + name
 
schema = graphene.Schema(query=Query)
result = schema.execute('{ hello }')
print(result.data['hello']) # "Hello World"

```

Mutation

```Python
import graphene

class CreatePerson(graphene.Mutation):
    class Arguments:
        name = graphene.String()

    ok = graphene.Boolean()
    person = graphene.Field(lambda: Person)

    def mutate(root, info, name):
        person = Person(name=name)
        ok = True
        return CreatePerson(person=person, ok=ok)
```

## Project

### starlette

Graphiql support custom request headers


### graphene-sqlalchemy-auto

String ID support

```python
from sqlalchemy.sql.sqltypes import String 


class DatabaseIdInt(graphene.Interface):
    db_id = graphene.Int(description="real database id")


class DatabaseIdString(graphene.Interface):
    db_id = graphene.String(description="real database id")


def database_id_interface(model):
    if isinstance(model.id.type, String):
        return DatabaseIdString
    else:
        return DatabaseIdInt
```