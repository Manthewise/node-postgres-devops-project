#  Visitor Counter API with Node.js, PostgreSQL & Docker

A production-style multi-container application that tracks website visits using a Node.js API and PostgreSQL database. The application is containerized with Docker, orchestrated with Docker Compose, and designed to be deployed on AWS EC2 behind Nginx with HTTPS and automated CI/CD.

---

##  Live Demo

https://manthewisevisit.duckdns.org/

---

#  Project Overview

This project demonstrates how to build, containerize, and deploy a stateful application using modern DevOps practices.

Every visit to the application is stored in a PostgreSQL database and the total number of visitors is returned through the API.

The project was built to gain hands-on experience with:

- Docker Containerization
- Multi-Container Applications
- PostgreSQL Databases
- Docker Networking
- Docker Volumes
- Environment Variables
- AWS EC2 Deployment
- Nginx Reverse Proxy
- HTTPS with Let's Encrypt
- GitHub Actions CI/CD
- API Design and Health Checks

---

#  Architecture

```text
                    Internet
                        │
                        ▼
               ┌────────────────┐
               │     Nginx      │
               │ Reverse Proxy  │
               └───────┬────────┘
                       │
                       ▼
               ┌────────────────┐
               │  Docker Compose│
               └───────┬────────┘
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
┌────────────────┐       ┌────────────────┐
│ Visitor API    │──────▶│ PostgreSQL DB  │
│ Node.js/Express│       │ Persistent Data│
└────────────────┘       └────────────────┘
```

---

#  Technologies Used

## Cloud
- AWS EC2

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL

## Containerization
- Docker
- Docker Compose

## Web Server
- Nginx

## Security
- Let's Encrypt
- Certbot

## CI/CD
- GitHub Actions

## Version Control
- Git
- GitHub

---

#  Features

- Multi-container application architecture
- Node.js REST API
- PostgreSQL database integration
- Docker containerization
- Docker Compose orchestration
- Persistent database storage
- Environment variable configuration
- Health monitoring endpoint
- HTTPS support
- Automated CI/CD deployment pipeline
- Cloud deployment on AWS EC2

---

#  API Endpoints

## Record a Visit

### Request

```http
GET /
```

### Response

```json
{
  "message": "Visit recorded",
  "totalVisitors": 15
}
```

This endpoint:

- Records a new visit
- Saves the visit in PostgreSQL
- Returns the updated visitor count

---

## Get Visitor Count

### Request

```http
GET /visits
```

### Response

```json
{
  "totalVisitors": 15
}
```

This endpoint:

- Reads data from PostgreSQL
- Does not create a new visit

---

## Health Check

### Request

```http
GET /health
```

### Response

```json
{
  "status": "healthy",
  "database": "connected"
}
```

This endpoint verifies:

- Node.js application is running
- Express server is responding
- PostgreSQL database is reachable

---

#  Project Structure

```text
.
├── .github
│   └── workflows
│       └── deploy.yml
├── Dockerfile
├── docker-compose.yml
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

#  Environment Variables

Example:

```env
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=visitor_db
DB_HOST=db
DB_PORT=5432
```

---

#  Running with Docker

Build and start services:

```bash
docker compose up -d --build
```

View containers:

```bash
docker ps
```

Stop services:

```bash
docker compose down
```

---

#  Persistent Storage

PostgreSQL data is stored using Docker volumes.

```yaml
volumes:
  postgres-data:
```

This allows visitor data to persist even after containers are stopped or recreated.

---

#  Deployment Workflow

```text
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
 GitHub Actions
    │
    ▼
 AWS EC2 Server
    │
    ▼
 Docker Compose
    │
    ▼
 Nginx Reverse Proxy
    │
    ▼
 Live Application
```

---

#  HTTPS Configuration

SSL certificates are managed using Let's Encrypt and Certbot.

Generate certificate:

```bash
sudo certbot --nginx
```

Test renewal:

```bash
sudo certbot renew --dry-run
```

---

#  DevOps Concepts Demonstrated

- Linux Server Administration
- AWS EC2 Deployment
- Docker Containerization
- Docker Compose Orchestration
- Container Networking
- Persistent Storage
- PostgreSQL Administration
- Environment Variables
- Reverse Proxy Configuration
- SSL/TLS Security
- Health Checks
- Continuous Integration
- Continuous Deployment

---

#  Lessons Learned

Through this project I learned:

- How containers communicate over Docker networks
- How to build multi-container applications
- How to integrate Node.js with PostgreSQL
- How to use Docker volumes for persistent data
- How to separate configuration using environment variables
- How to design API endpoints with different responsibilities
- How health checks are used to monitor application availability
- How to deploy containerized applications on AWS EC2
- How to automate deployments using GitHub Actions

---

#  Future Improvements

- Authentication and user accounts
- PostgreSQL backups
- Prometheus metrics collection
- Grafana dashboards
- Zero-downtime deployments
- Infrastructure as Code using Terraform
- Kubernetes deployment using Amazon EKS

---

# Author

**Akinsanya Wisdom**
