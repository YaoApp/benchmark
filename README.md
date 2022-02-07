# benchmark

this app for Yao benchmark

# 基准测试

准备测试网页

```bash
docker exec nginx sh -c  'echo "[1,2,3,4]" > /usr/share/nginx/html/pure.json'
```

1000 并发，1 万请求数：
ab -n10000 -c1000 http://127.0.0.1:8080/pure.json

# 数据流

1000 并发，1 万请求数：
ab -n10000 -c1000 http://127.0.0.1:5099/api/flows/pure
ab -n10000 -c1000 http://127.0.0.1:5099/api/flows/script

# 数据库

准备测试数据

```bash
yao migrate && yao run scripts.data.Test
```

## SQLite3

1000 并发，1 万请求数 10 行万用户数据
ab -n10000 -c1000 http://127.0.0.1:5099/api/db/find/1
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/search?page=42&pagesize=10"

1000 并发，1 万请求数 10 行万用户数据 hasOne & hasMany
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/find/2?with=manu"
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10"

60 并发，1 万请求数 10 行用户数据基础，并发写 1 条数据 (SQLite)
ab -n10000 -c60 -T application/json -p assets/user.json http://127.0.0.1:5099/api/db/save

## MySQL 8.0

1000 并发，1 万请求数 10 行万用户数据
ab -n10000 -c1000 http://127.0.0.1:5099/api/db/find/1
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/search?page=42&pagesize=10"

1000 并发，1 万请求数 10 行万用户数据 hasOne & hasMany
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/find/2?with=manu"
ab -n10000 -c1000 "http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10"

1000 并发，1 万请求数 10 行用户数据基础，并发写 1 条数据
ab -n10000 -c1000 -T application/json -p assets/user.json http://127.0.0.1:5099/api/db/save

## Postgres 14.0

调整兼容性，稍后启用
