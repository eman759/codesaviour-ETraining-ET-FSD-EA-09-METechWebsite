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

8. Company Information

- Company Name: ME Technologies
- Industry: Engineering Services
- Company Type: Self-employed
- Company Size: 1 employee (as listed on LinkedIn)
- About: ME Technologies is a startup in the engineering and technology field. It works with software related to electrical engineering, including Proteus, SketchUp, MATLAB, and Multisim.
- LinkedIn: https://www.linkedin.com/company/metechnologies/
- Facebook: https://www.facebook.com/METechnologies45/

9. Company Social Media Research

LinkedIn Research

- Company Name: ME Technologies
- Industry: Engineering Services
- Company Type: Self-employed (as listed on LinkedIn)
- Company Size: 1 employee (as listed on LinkedIn)
- Description: ME Technologies is a startup in the engineering and technology field. It works with software related to electrical engineering, including Proteus, SketchUp, MATLAB, and Multisim.
- LinkedIn: https://www.linkedin.com/company/metechnologies/

Facebook Research

- Page Name: ME Technologies
- Followers: 307 (as displayed on the page)
- Description: ME Technologies is an engineering consultancy focused on providing professional consulting across multiple engineering disciplines.
- Facebook: https://www.facebook.com/METechnologies45/

10. Verified Company Information

Consulting Areas

- Electrical Engineering
- Solar PV
- Battery Energy Storage Systems (BESS)
- EV Charging
- Architecture and Building Design
- Civil and Structural Engineering

Contact Information

- Business Contact: 0316 6379325

Content Research Notes

- The company shares information about its consulting areas, engineering insights, and projects.
- Available Facebook content includes company posts and photos.
- The website should use verified company information.
- Do not invent real client names, completed projects, or testimonials.

11. Brand Colors Research

Logo Color Palette

The following HEX color codes were identified from the ME Technologies logo using an image color picker.

- Dark Green: "#09893E"
- Light Green: "#55CA1A"
- Yellow: "#FFD22F"
- Dark Green: "#12753D"
- Light Green: "#2EAA11"
- Yellow-Gold: "#CBC53A"
- Olive Green: "#559629"
- Light Green: "#6AA74D" 
- Green: "#3E9D69"
- Mustard Yellow: "#A6AE2A"
- Brown/Olive: "#687900"
- Dark Green: "#064702"

Color Usage Plan

- Use dark green for headings and important buttons.
- Use light green for highlights and accents.
- Use yellow and mustard tones for small decorative elements.
- Maintain readable text and sufficient color contrast.
- Match the website colors with the official ME Technologies logo.

Brand Assets

- Company logo downloaded from the ME Technologies Facebook page.
- Background removed from the logo using remove.bg.
- Logo image saved in the "client/public/images" folder.
- HEX color codes collected using an image color picker.

11. Reference Website Research

SkyElectric

- The navigation bar includes Company, Products, Projects, System Components, and Contact Us.
- Dropdown menus display additional options under Company and Products.
- The homepage uses an automatic hero image slider to display different promotional messages.
- The design uses a clean navigation structure and large hero images.

Pantera Energy

- The website displayed a human-verification check that requested Windows keyboard commands.
- The verification instructions were not followed, and the website was closed for safety.

SolarPanels.pk

- The website could not be reached during the research session.

Design Inspiration for ME Technologies

- Use a clear and simple navigation bar.
- Organize engineering services into easy-to-understand categories.
- Use a professional hero section with a clear heading and call-to-action buttons.
- Keep the design responsive and easy to navigate.
