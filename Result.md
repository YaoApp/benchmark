# 基准

## Nginx

wrk -t12 -c400 -d30s http://172.10.0.11/pure.json

```bash
Running 30s test @ http://172.10.0.11/pure.json
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    17.30ms   12.92ms 256.37ms   85.40%
    Req/Sec     2.10k   684.10     8.55k    73.42%
  751400 requests in 30.07s, 178.43MB read
Requests/sec:  24985.06
Transfer/sec:      5.93MB
```

## Gin

wrk -t12 -c400 -d30s http://127.0.0.1:8087/pure

```bash
Running 30s test @ http://127.0.0.1:8087/pure
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.77ms   22.34ms 276.73ms   86.26%
    Req/Sec     2.08k   347.66     6.53k    72.97%
  746753 requests in 30.07s, 91.87MB read
Requests/sec:  24837.87
Transfer/sec:      3.06MB
```

## YAO

## Public

wrk -t12 -c400 -d30s http://127.0.0.1:5099/pure.json

```bash
Running 30s test @ http://127.0.0.1:5099/pure.json
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.16ms   22.49ms 297.35ms   90.45%
    Req/Sec     3.82k     1.07k   10.62k    75.97%
  1368996 requests in 30.04s, 242.84MB read
Requests/sec:  45566.57
Transfer/sec:      8.08MB
```

## Flow

### Pure Flow

wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/flows/pure

```bash
Running 30s test @ http://127.0.0.1:5099/api/flows/pure
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.45ms   21.17ms 245.76ms   87.95%
    Req/Sec     3.78k     0.95k    8.42k    73.42%
  1355867 requests in 30.05s, 147.41MB read
Requests/sec:  45123.12
Transfer/sec:      4.91MB
```

### Script Flow

wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/flows/script

```bash
Running 30s test @ http://127.0.0.1:5099/api/flows/script
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    48.76ms   46.04ms 672.54ms   76.44%
    Req/Sec   795.17    200.83     2.16k    75.59%
  285125 requests in 30.08s, 32.63MB read
Requests/sec:   9478.81
Transfer/sec:      1.08MB
```

## Scirpt

wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/scripts/pure

```bash
Running 30s test @ http://127.0.0.1:5099/api/scripts/pure
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    41.03ms   33.07ms 334.68ms   67.46%
    Req/Sec     0.88k   204.02     2.72k    74.00%
  316214 requests in 30.09s, 34.38MB read
Requests/sec:  10510.35
Transfer/sec:      1.14MB
```

## DB

### SQLite

10 万条数据

#### Find

wrk -t12 -c400 -d30s http://127.0.0.1:5099/api/db/find/1

```bash
Running 30s test @ http://127.0.0.1:5099/api/db/find/1
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    76.94ms   87.25ms 795.64ms   85.11%
    Req/Sec   617.88    276.94     1.86k    68.99%
  221584 requests in 30.09s, 70.37MB read
Requests/sec:   7363.75
Transfer/sec:      2.34MB
```

#### Search

wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?page=42&pagesize=10"

```bash
Running 30s test @ http://127.0.0.1:5099/api/db/search?page=42&pagesize=10
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   171.39ms  176.64ms   1.61s    85.01%
    Req/Sec   244.02    101.42   660.00     67.69%
  87507 requests in 30.09s, 283.82MB read
Requests/sec:   2907.93
Transfer/sec:      9.43MB
```

#### hasOne

wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/find/2?with=manu"

```bash
Running 30s test @ http://127.0.0.1:5099/api/db/find/2?with=manu
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   119.29ms  125.73ms   1.12s    84.57%
    Req/Sec   365.23    202.57     1.95k    73.33%
  131096 requests in 30.09s, 47.76MB read
Requests/sec:   4357.16
Transfer/sec:      1.59MB
```

#### hasMany

wrk -t12 -c400 -d30s "http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10"

```bash
Running 30s test @ http://127.0.0.1:5099/api/db/search?with=users&page=42&pagesize=10
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   249.33ms  238.14ms   1.87s    68.80%
    Req/Sec   158.18     73.58   520.00     68.60%
  56770 requests in 30.08s, 184.13MB read
Requests/sec:   1887.46
Transfer/sec:      6.12MB
```
