# benchmark

this app for Yao benchmark

# 基准测试

## Gin

启动 Gin server

```bash
./bin/gin
```

```bash
wrk -t12 -c400 -d30s http://127.0.0.1:8087/pure
```

## Nginx

准备测试网页

```bash
docker exec nginx sh -c  'echo "[1,2,3]" > /usr/share/nginx/html/pure.json'
```

1 万请求数：

```bash
wrk -t12 -c400 -d30s http://172.10.0.11/pure.json
```

# 数据流

1000 并发，1 万请求数：

```bash
wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/flows/pure
wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/flows/script
```

# 脚本

```bash
wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/scripts/pure
```

# 数据库

## SQLite3

准备测试数据

```bash
mkdir /tests
yao migrate --force --reset && yao run scripts.data.Test
```

10 行万用户数据

```bash
wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/db/find/1
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?page=42&pagesize=10"
```

10 行万用户数据 hasOne & hasMany

```bash
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/find/2?with=manu"
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10"
```

## MySQL 8.0

准备测试数据

```bash
yao migrate --force --reset && yao run scripts.data.Test
```

10 行万用户数据

```bash
wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/db/find/1
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?page=42&pagesize=10"
```

10 行万用户数据 hasOne & hasMany

```bash
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/find/2?with=manu"
wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10"
```

## Postgres 14.0

调整兼容性，稍后启用
