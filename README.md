# Event Reservation System

The Event Reservation System is a full-stack application that allows users to register events and manage event-related data. It consists of a React frontend and a Spring Boot backend, with PostgreSQL as the database.

---

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Running the Application](#running-the-application)
   - [Using Docker](#using-docker)
   - [Manually Using npm and Spring Boot](#manually-using-npm-and-spring-boot)
3. [Environment Variables](#environment-variables)
4. [Project Structure](#project-structure)

---

## Technologies Used
- **Frontend**: React (with Vite)
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Containerization**: Docker and Docker Compose

---

## Running the Application

### Using Docker
To run the entire application (frontend, backend, and database) using Docker:

1. **Install Docker**:
   Ensure Docker and Docker Compose are installed on your system.

2. **Build and Start Services**:
   Run the following command in the root directory of the project:
   ```bash
   docker-compose up --build