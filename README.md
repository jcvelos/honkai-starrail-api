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

Hotel Booking Management System
A Flask-based web application for managing hotel bookings with PDF report generation capabilities.
Features

CRUD Operations: Create, Read, Update, and Delete booking records
Booking Management: Track guest information, room types, dates, and payment status
PDF Reports: Generate and download booking reports as PDF files
Report Preview: View reports in the browser before downloading
Responsive Design: Bootstrap 5-based UI for mobile and desktop
SQLite Database: Lightweight database for storing booking information

Prerequisites
Before running this application, make sure you have Python 3.7+ installed on your system.
Installation

Clone or download this repository
Install required dependencies:

bash   pip install -r requirements.txt
The main dependencies are:

Flask==3.0.0
Flask-SQLAlchemy==3.1.1
WeasyPrint==60.1


WeasyPrint System Requirements:
WeasyPrint requires some system libraries to generate PDFs:

Windows: Install GTK+ for Windows from https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer
Linux (Ubuntu/Debian):



bash     sudo apt-get install python3-dev python3-pip python3-cffi libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info

macOS:

bash     brew install python3 cairo pango gdk-pixbuf libffi
```

## Project Structure
```
hotel-booking-system/
│
├── app.py                      # Main Flask application
├── requirements.txt            # Python dependencies
├── bookings.db                 # SQLite database (auto-created)
│
├── static/
│   └── css/
│       ├── bootstrap.min.css   # Bootstrap CSS framework
│       └── report_styles.css   # Custom styles for reports
│
├── templates/
│   ├── index.html             # Main booking list page
│   ├── create.html            # Create new booking form
│   ├── update.html            # Update booking form
│   └── report.html            # Report template
│
└── static/js/
    └── bootstrap.bundle.min.js # Bootstrap JavaScript
Database Schema
The application uses a single Booking table with the following fields:
FieldTypeDescriptionidNumIntegerPrimary key (auto-increment)booking_referenceString(20)Unique booking reference (e.g., BK-00001)guest_nameString(100)Guest's full nameguest_contactString(20)Guest's phone numberguest_emailString(100)Guest's email addresscheck_in_dateString(20)Check-in datecheck_out_dateString(20)Check-out dateroom_typeString(50)Type of room bookednumber_of_guestsIntegerNumber of guestsbooking_statusString(20)Status (Pending/Confirmed/Cancelled)total_amountFloatTotal booking amountpayment_statusString(20)Payment status (Partial/Full/Pending)created_atString(50)Timestamp of booking creation
Running the Application

Start the Flask application:

bash   python app.py
```

2. **Access the application**:
   Open your web browser and navigate to:
```
   http://127.0.0.1:5000/
Usage
Creating a Booking

Click the "Create New Booking" button on the home page
Fill in all required fields:

Guest information (name, contact, email)
Check-in and check-out dates
Room type and number of guests
Booking status and payment information


Click "Create Booking" to save

Viewing Bookings

All bookings are displayed in a table on the home page
Each booking shows:

Booking reference
Guest details
Dates and room information
Status and payment information



Updating a Booking

Click the "Edit" button next to any booking
Modify the desired fields
Click "Update Booking" to save changes

Deleting a Booking

Click the "Delete" button next to any booking
Confirm the deletion

Generating Reports
Preview Report:

Click "Preview Report" to view all bookings in a formatted report

Download PDF Report:

Click "Download PDF Report" to generate and download a PDF file of all bookings

Troubleshooting
WeasyPrint Installation Issues
If you encounter errors related to WeasyPrint:

"No module named 'weasyprint'":

bash   pip install WeasyPrint==60.1

Cairo/Pango library errors:

Ensure you've installed the system dependencies listed in the Installation section
On Windows, make sure GTK+ is properly installed and in your system PATH


PDF generation fails:

Check that all system dependencies are installed
Try updating WeasyPrint: pip install --upgrade WeasyPrint



Database Issues
If the database file gets corrupted:
bash# Delete the database file
rm bookings.db

# Restart the application (database will be recreated automatically)
python app.py
Features Explained
Automatic Booking Reference Generation
The system automatically generates unique booking references in the format BK-XXXXX where XXXXX is a 5-digit number that increments with each booking.
PDF Report Generation
Reports include:

Complete list of all bookings
Guest information
Booking dates and room details
Payment status
Formatted table layout
Professional styling

Responsive Design
The application uses Bootstrap 5 to ensure it works well on:

Desktop computers
Tablets
Mobile phones

Development
To modify the application:

Change the database schema: Edit the Booking model in app.py
Modify the UI: Edit HTML templates in the templates/ folder
Update styles: Modify CSS files in static/css/
Add new routes: Add new route handlers in app.py

Security Notes
This is a demonstration application. For production use, consider:

Adding user authentication
Implementing CSRF protection
Using environment variables for configuration
Adding input validation and sanitization
Implementing proper error handling
Using HTTPS
Adding database backups

License
This project is provided as-is for educational purposes.
Support
For issues related to:

Flask: https://flask.palletsprojects.com/
WeasyPrint: https://weasyprint.org/
Bootstrap: https://getbootstrap.com/
