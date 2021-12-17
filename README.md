# Node Redis Job Expire

## Setup
### Install package
```sh 
$ npm install
```

```sh
$ redis-cli
$ config set notify-keyspace-events Exg
```

```sh
$ node app.js

$ curl http://localhost:3000/order
```

## Video
- [Services tự động hủy đơn hàng nếu chưa thanh toán N phút](https://www.youtube.com/watch?v=tIuUXU2Zf04)
- [Redis Keyspace Notifications](https://redis.io/topics/notifications)
- [Getting Notified When a Key is Expired or Changed](https://medium.com/nerd-for-tech/redis-getting-notified-when-a-key-is-expired-or-changed-ca3e1f1c7f0a)
- [Redis Keyspace Notifications for a Reminder Service with Node](https://medium.com/@micah1powell/using-redis-keyspace-notifications-for-a-reminder-service-with-node-c05047befec3)
