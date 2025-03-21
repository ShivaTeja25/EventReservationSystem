# Build stage
FROM maven:3.9.9-amazoncorretto-21-alpine AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -Dmaven.test.skip=true

# Run stage
FROM openjdk:21-jdk-slim

WORKDIR /app
COPY --from=build /app/target/*.jar /app/my-spring-boot-app.jar

EXPOSE 8080


ENTRYPOINT ["java", "-jar", "/app/my-spring-boot-app.jar"]
