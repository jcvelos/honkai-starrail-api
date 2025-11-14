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

# 📑 Use Case and Actor Analysis for the Booking Management Subsystem

## 1. System and Subsystem Identification

* **Subsystem Name:** Booking Management System (BMS)
* **Assumed Full System Name:** **Hospitality Management System (HMS)** or **Hotel Reservation and Operations System (HROS)**

---

## 2. Actors and Their Implemented Use Cases

The primary actor for the implemented features is the system **Administrator** or **Staff Member** responsible for managing reservations.

| Actor | Implemented Use Cases |
| :--- | :--- |
| **Booking Staff / Administrator** | 1. Manage Bookings (CRUD) |
| | 2. Generate System Reports |

---

## 3. Use Case Details and Event Table

### Use Case 1: Manage Bookings (CRUD)

**Goal:** To maintain an accurate and up-to-date record of customer reservations within the system.

**Implemented Sub-functions:**
* **Create Booking:** Adding a new reservation record.
* **View Bookings:** Retrieving and listing all existing reservations.
* **Update Booking:** Modifying details of an existing reservation.
* **Delete Booking:** Removing a reservation record from the system.

#### Mini Events Table (Booking Management)

| Event | Actor | Route | Method | Data Changed |
| :--- | :--- | :--- | :--- | :--- |
| **New Booking Created** | Administrator | `/create` | `POST` | New `Booking` record is added to `bookings.db`. |
| **Booking Updated** | Administrator | `/update/<int:idNum>` | `POST` | Existing `Booking` record fields (e.g., `status`, `amount`) are modified in `bookings.db`. |
| **Booking Deleted** | Administrator | `/delete/<int:idNum>` | `POST` | The specific `Booking` record is permanently removed from `bookings.db`. |
| **Bookings Queried** | Administrator | `/` | `GET` | Data is retrieved from `bookings.db` and displayed on the index page. |

### Use Case 2: Generate System Reports

**Goal:** To produce printable documentation containing a summary of all booking records for auditing or operational review.

**Implemented Sub-functions:**
* **Preview Report:** Viewing the report structure in a web browser.
* **Download Report:** Generating and saving the report as a PDF file.

#### Mini Events Table (Report Generation)

| Event | Actor | Route | Method | Resulting Artifact |
| :--- | :--- | :--- | :--- | :--- |
| **Report Previewed** | Administrator | `/report/preview` | `GET` | Booking data is rendered as HTML using `report.html` and `report_styles.css`. |
| **Report Downloaded** | Administrator | `/report/download` | `GET` | A binary **PDF file** (`booking_report.pdf`) is generated from the HTML and downloaded. |

---

## 4. Database Schema Context

The `Booking` model facilitates all use cases by storing the necessary data, including:

* **Reference:** `booking_reference` (for unique identification).
* **Guest Info:** `guest_name`, `guest_email`.
* **Dates:** `check_in_date`, `check_out_date`.
* **Financials/Status:** `total_amount`, `booking_status`, `payment_status`.
