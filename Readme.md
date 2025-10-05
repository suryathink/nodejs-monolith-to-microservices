# Node.js Monolith to Microservices

A demo project to demonstrate how to convert a Node.js monolithic application into a microservices architecture. This project is structured to help beginners understand the concepts of microservices, service isolation, and API gateways.

---

## 🚀 Project Structure

```
nodejs-monolith-to-microservices/
 ├── api-gateway/
 │    ├── src/
 │    └── package.json
 ├── services/
 │    ├── user-service/
 │    │    ├── src/
 │    │    └── package.json
 │    ├── order-service/
 │    │    ├── src/
 │    │    └── package.json
 │    └── product-service/
 │         ├── src/
 │         └── package.json
 ├── shared/
 │    ├── db/
 │    └── utils/
 ├── docker-compose.yml
 └── README.md
```

---

## 💾 Features

- **Independent services:** Each microservice (User, Order, Product) runs independently.
- **API Gateway:** Routes client requests to the appropriate service.
- **Database isolation:** Each service can have its own database.
- **Scalable architecture:** Microservices allow independent scaling and development.
- **CORS & JSON parsing** configured in each service.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB / PostgreSQL (per service)
- Docker & Docker Compose
- CORS

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nodejs-monolith-to-microservices.git
cd nodejs-monolith-to-microservices
```

### 2. Install dependencies for root (for dev tools)

```bash
npm install
```

### 3. Run services individually

For example, to run the **user service**:

```bash
cd services/user-service
npm install
npm run dev
```

Then the API will be available at: `http://localhost:3001`

### 4. Run API Gateway

```bash
cd api-gateway
npm install
npm run dev
```

Requests to `http://localhost:3000/api/users` will be forwarded to the user service.

---

## 📌 API Endpoints

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "user service is up and running"
}
```

### User Registration

```
POST /api/users/register
```

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 🔗 Roadmap

- [x] Convert user module to microservice
- [ ] Convert order module to microservice
- [ ] Convert product module to microservice
- [ ] Add message queue (RabbitMQ / Kafka) for async communication
- [ ] Add service discovery (optional)
- [ ] Dockerize all services

---

## 📖 References

- [Microservices Architecture](https://martinfowler.com/articles/microservices.html)
- [Node.js Microservices Best Practices](https://www.freecodecamp.org/news/how-to-build-nodejs-microservices/)

---

## 👤 Author

Surya Singh

---

## ⭐ License

MIT
