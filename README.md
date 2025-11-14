# Honkai Star Rail API

A Fan made API for Honkai Star Rail character data with server-side filtering. 

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

Server will run on `http://localhost:3000`

## API Endpoints

### 1. Search Character by Name
```
GET /api/v1/character/search?name=<character_name>
```
Example: `http://localhost:3000/api/v1/character/search?name=Kafka`

### 2. Filter by Element
```
GET /api/v1/character/element?e=<element>
```
Example: `http://localhost:3000/api/v1/character/element?e=Fire`

Available elements: Physical, Ice, Wind, Fire, Lightning, Quantum, Imaginary

### 3. Get Character by ID
```
GET /api/v1/character/id?id=<character_id>
```
Example: `http://localhost:3000/api/v1/character/id?id=21`

# 🏨 Booking Management System (Flask)

A concise, web-based application for managing booking records, built with **Flask** and **Flask-SQLAlchemy**. It supports full **CRUD** (Create, Read, Update, Delete) functionality and generates **PDF reports**.

---

## ✨ Features

* **Booking Management:** Complete CRUD operations for customer bookings.
* **Database:** Uses SQLite for persistence via Flask-SQLAlchemy.
* **Reporting:** Generates and downloads **PDF reports** of all bookings (using WeasyPrint).
* **Frontend:** Styled using **Bootstrap** for a responsive interface.

---

## 🚀 Setup & Run

### Prerequisites

* Python 3.x

### Installation

1.  **Clone** the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  **Install** the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run** the application:
    ```bash
    python app.py
    ```

The application will start and be accessible at `http://127.0.0.1:5000`.
