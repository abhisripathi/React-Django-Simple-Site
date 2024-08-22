# My Simple React and Django Website

## Overview

This project is a simple web application developed using React for the frontend and Django for the backend. It demonstrates the basic usage of components in React and API endpoints in Django.

- **Frontend**: Built with React.js
- **Backend**: Built with Django and Django REST framework

## Project Structure
my-simple-site/
├── backend/
│ ├── mysite/
│ ├── api/
│ ├── db.sqlite3
│ └── manage.py
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── index.js
│ │ ├── MainContent.js
│ │ └── ...
│ ├── package.json
│ ├── package-lock.json
│ └── ...
├── README.md
└── ...


## Features

- **Frontend:**
  - Displays a welcome message.
  - Fetches and displays data from Django API endpoints.

- **Backend:**
  - Provides API endpoints for the frontend to consume.
  - Endpoints:
    - `/api/data/`: Returns a JSON message.
    - `/api/items/`: Returns a list of items.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Python 3.x installed
- Django installed

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
     cd frontend
2. Install dependencies:
     npm install
3. Start the React development server:
    npm start

### Backend Setup
1. Navigate to the backend directory:
  cd backend

2. Run Django server:
  python manage.py runserver

### Running the Project
1. Start the React frontend server:
  npm start

2. Start the Django backend server:
  python manage.py runserver

3. Visit http://localhost:3000 to see the frontend.

4. The Django API can be accessed at http://127.0.0.1:8000/api/data/ and http://127.0.0.1:8000/api/items/.

