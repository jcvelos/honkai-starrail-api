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

# Booking Management Subsystem Documentation
### *Part of Tony's Apartel Management System (MS)*

This document provides the **Use Case and Actor Analysis** for the Booking Management Subsystem, following standard GitHub documentation formatting for clarity, readability, and project consistency.

---

# Use Case and Actor Analysis for the Booking Management Subsystem

## 1. System and Subsystem Identification

- **Subsystem Name:** Booking Management System (BMS)  
- **Full Name of Original System:** **Tony's Apartel Management System (MS)** (Derived from the Organization's Brief History)

---

## 2. Actors and Implemented Use Cases

Based on the implemented **CRUD (Create, Read, Update, Delete)** and **Report Generation** functions in the provided subsystem code (`app.py`), the following use cases and actors are supported:

| Actor | Implemented Use Cases (from Context) | Related Module (from Context) |
| :--- | :--- | :--- |
| **Front Desk** | Create New Booking (M5) | Booking Management |
| **Booking Staff / Administrator** | View Booking Details (Read) | Booking Management |
| **Booking Staff / Administrator** | Perform Guest Check-in (Update - M7) / Check-out (Update - M9) | Guest Operations Management |
| **Booking Staff / Administrator** | Process Booking Cancellation (Update/Delete) | Booking Management |
| **Manager / Owner** | Generate System Reports | Reporting Management |

---

## 3. Use Case Details and Event Table

The implemented subsystem primarily focuses on **Booking Management (CRUD)** and **Reporting**, covering the core routes in `app.py`.

### **Use Case 1: Manage Bookings (CRUD)**

**Goal:** To create, read, update, and delete customer reservation records.

| Event | Actor | Route (Code) | Method | Data Entity & Change |
| :--- | :--- | :--- | :--- | :--- |
| **New Booking Created** | Front Desk | `/create` | `POST` | `Booking` entity created with auto-generated reference (M5). |
| **Booking Queried/Viewed** | Front Desk | `/` | `GET` | All `Booking` records are retrieved and displayed on the index page (Read). |
| **Booking Updated** | Front Desk | `/update/<int:idNum>` | `POST` | Existing `Booking` record fields (e.g., `status`, `payment_status`) are modified (M7, M9). |
| **Booking Deleted/Cancelled** | Front Desk | `/delete/<int:idNum>` | `POST` | The specific `Booking` record is permanently removed (Process Cancellation). |

---

### **Use Case 2: Generate System Reports**

**Goal:** To produce printable documentation containing a summary of all booking records.

| Event | Actor | Route (Code) | Method | Resulting Artifact |
| :--- | :--- | :--- | :--- | :--- |
| **Report Previewed** | Manager / Owner | `/report/preview` | `GET` | Booking data is rendered as HTML, ready for print (M12). |
| **Report Downloaded** | Manager / Owner | `/report/download` | `GET` | A binary **PDF file** (`booking_report.pdf`) is generated and downloaded (M12). |
