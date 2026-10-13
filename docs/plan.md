# ME Technologies Website - Project Plan

## 1. Project Overview
A responsive company website for ME Technologies, an engineering consultancy and training provider.

## 2. Sitemap
- Home
- About Us
- Services
  - Electrical Engineering
  - Solar PV
  - Battery Energy Storage Systems (BESS)
  - EV Charging
  - Architecture and Building Design
  - Civil and Structural Engineering
- EV Charging Solutions
- Training
- Projects
- Blog
- Contact Us
- Get a Quote
- Admin Dashboard

## 3. Database Schema

### Users
- name
- email
- passwordHash
- role

### Services
- title
- slug
- icon
- shortText
- description
- order

### Courses
- title
- slug
- tools
- duration
- fee
- outline
- image

### Batches
- course
- startDate
- mode
- totalSeats
- seatsTaken

### Enrollments
- name
- phone
- email
- university
- course
- batch
- status

### Projects
- title
- slug
- capacity
- sector
- systemType
- city
- images
- description

### Posts
- title
- slug
- category
- coverImage
- content
- publishedAt

### Leads
- name
- phone
- email
- city
- service
- message
- source
- status

## 4. Planned API Endpoints
- GET /api/services
- GET /api/services/:id
- POST /api/services
- PUT /api/services/:id
- DELETE /api/services/:id
- GET /api/courses
- POST /api/courses
- GET /api/projects
- GET /api/posts
- POST /api/leads
- POST /api/auth/login

## 5. Home Page Wireframe

Header:
- ME Technologies logo
- Navigation menu
- Get a Quote button

Hero:
- Tagline: Smart Engineering Today. Sustainable Tomorrow.
- Short introduction
- Explore Services button

Main Sections:
- Engineering services
- EV charging solutions
- Solar design training
- Featured projects
- Latest blog posts
- Contact and quote form

Footer:
- Contact information
- Social media links
- WhatsApp contact

## 6. Technology Stack
- Frontend: React and Tailwind CSS
- Backend: Node.js and Express
- Database: To be selected
- Authentication: JWT and bcrypt

## 7. Brand Assets
- Download the official logo from the company LinkedIn profile.
- Prepare a transparent PNG version.
- Identify brand colors from the official logo.
- Use readable fonts and accessible color contrast.
