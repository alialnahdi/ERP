I developed a full-stack ERP system application, to manage products, sales reps, and sales.

## Technologies
### Front-end (client)

<div>
 <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" height="30" alt="Tailwind Css logo"/>
 <img src="https://img.shields.io/badge/Next JS-black?logo=next.js&logoColor=white&style=for-the-badge" height="30" alt="Next.js logo"/>
 <img src="https://img.shields.io/badge/Chart JS-eb3b58?logo=chart.js&logoColor=white&style=for-the-badge" height="30" alt="Chart.js logo"/>
</div>

### Back-end (server)
<div>
 <img src="https://img.shields.io/badge/Express-dbd02c?logo=express&logoColor=black&style=for-the-badge" height="30" alt="Express logo"/>
 <img src="https://img.shields.io/badge/PostgreSQL-385a96?logo=postgresql&logoColor=white&style=for-the-badge" height="30" alt="PostgreSQL logo"/>
 <img src="https://img.shields.io/badge/Prisma-6562f0?logo=prisma&logoColor=white&style=for-the-badge" height="30" alt="Prisma logo"/>
</div>

## Prerequisites
**PostgreSQL** relational database management system.

## Installation Guide

This guide walks you through setting up the project on your machine

1. You need to create a user in Postgres. So, these commands will create a user named `theerp_user` with the password `1234` and grant it superuser privileges:<br/>
   **Windows:**<br/>
   <pre>
   psql -U postgres
   CREATE USER theerp_user WITH PASSWORD '1234';
   ALTER USER theerp_user WITH SUPERUSER;
   \q
   </pre>
   **Linux (Ubuntu):**
   <pre>sudo -i -u postgres
   psql
   CREATE USER theerp_user WITH PASSWORD '1234';
   ALTER USER theerp_user WITH SUPERUSER;
   \q</pre>
2. Clone or download the project repository.
3. Navigate to `server` directory, and rename `.env.example` to `.env`, if you in step 1 you created another username or password, put.
4. Open the terminal and navigate to `server` directory, run the following command to create database schema:<br/>
   `npx prisma migrate dev`
5. In `server` directory, run this command to start the server:<br/>
   `npm run start`
6. Open a new terminal navigate to `client` directory, and install dependencies:<br/>
   `npm install`
7. In `client` directory, run this command to start the client-side application:<br/>
   `npm run build`, and `npm run start`

## Screenshots
![Screenshot (107)](https://github.com/user-attachments/assets/68ab8aa3-e2fe-4a4b-90d9-3163e094b9af)
![Screenshot (112)](https://github.com/user-attachments/assets/e13febd5-439b-4389-921a-d37aa977bc79)
![Screenshot (108)](https://github.com/user-attachments/assets/63e563e9-ab4a-4020-8631-03d7dcd73a1d)
![Screenshot (110)](https://github.com/user-attachments/assets/da51b3fc-89d7-4f01-918f-25286094b143)
![Screenshot (111)](https://github.com/user-attachments/assets/52ea5e9d-7c02-465b-afdb-c8f6148216f8)
