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

# Booking Management System (Flask/SQLAlchemy)

A concise, web-based application for managing booking records, built with **Flask** and **Flask-SQLAlchemy**. It supports full **CRUD** (Create, Read, Update, Delete) functionality and generates **PDF reports**.

---

## Features

* **Booking Management:** Complete CRUD operations for customer bookings.
* **Database:** Uses SQLite for persistence via Flask-SQLAlchemy, making setup simple.
* **Reporting:** Generates and downloads **PDF reports** of all bookings using the powerful WeasyPrint library.
* **Frontend:** Styled using **Bootstrap** for a responsive user interface.
* **Automatic Reference:** Automatically generates a unique `BK-XXXXX` booking reference for each new record.

---

## 🛠️ Project Structure & Technology

### Key Technologies

* **Backend Framework:** Flask (Python)
* **Database ORM:** Flask-SQLAlchemy
* **PDF Generation:** WeasyPrint
* **Frontend Styling:** Bootstrap

### Database Schema

The core data is managed by the `Booking` model. The `sqlite:///bookings.db` file is created automatically on first run.

| Column Name | Data Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| `idNum` | Integer | Primary Key | Primary Key |
| `booking_reference` | String(20) | Unique Booking ID (e.g., `BK-00001`) | Unique, Not Null |
| `guest_name` | String(100) | Guest's Full Name | Not Null |
| `guest_email` | String(100) | Guest's Email Address | Not Null |
| `check_in_date` | String(20) | Date of Check-in | Not Null |
| `check_out_date` | String(20) | Date of Check-out | Not Null |
| `room_type` | String(50) | Type of room booked | Not Null |
| `number_of_guests` | Integer | Number of guests | Not Null |
| `booking_status` | String(20) | Status (e.g., Confirmed, Cancelled) | Default: 'Pending' |
| `total_amount` | Float | Total cost of the booking | Not Null |
| `payment_status` | String(20) | Payment status | Default: 'Partial' |

---

## Available Endpoints (Routes)

The application provides the following functional routes:

| Route | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Displays the **index page** listing all current bookings. |
| `/create` | `GET`, `POST` | Renders the **creation form** (`GET`) or **processes** a new booking record (`POST`). |
| `/update/<int:idNum>` | `GET`, `POST` | Renders the **update form** (`GET`) for a specific booking or **commits** changes (`POST`). |
| `/delete/<int:idNum>` | `POST` | **Deletes** a specific booking record. |
| `/report/preview` | `GET` | Renders the booking list as an HTML preview, ready for PDF conversion. |
| `/report/download` | `GET` | Generates the booking report and **downloads** it as a `booking_report.pdf` file. |

---

## Setup & Run

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

The application will automatically create the `bookings.db` file and run on: `http://127.0.0.1:5000`.

---

## ⚙️ Customization

* **Database:** To change the database (e.g., to PostgreSQL or MySQL), modify the `SQLALCHEMY_DATABASE_URI` line in `app.py`. You will also need to install the corresponding database adapter (e.g., `psycopg2` for PostgreSQL).
* **Styling:** Customize the look by editing the `report_styles.css` file for PDF reports or the main HTML templates (`index.html`, `create.html`, etc.) for the web interface.
