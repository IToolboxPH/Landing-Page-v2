# DigiCool - Digital School Platform

**🚀 IToolbox Startup Product**  
**Project Type:** Educational Web Application  
**Status:** Planning  
**Lead:** Nico M.  
**Organization:** IToolbox Company

---

## 🎯 Project Overview

DigiCool is a comprehensive digital school management platform for modern educational institutions. It provides tools for student/teacher management, course tracking, attendance, grading, and communication.

### Key Features (Planned)
- 👨‍🎓 Student management system
- 👨‍🏫 Teacher portal
- 📚 Course management
- 📝 Assignment submission & grading
- 📊 Performance analytics
- 📅 Attendance tracking
- 💬 Communication tools
- 🔐 Independent authentication system (students, teachers, parents, admin)

---

## 🗂️ Project Structure (To Be Created)

```
itoolbox_lab/digicool/
├── web_portal/              # School management portal
│   ├── streamlit_app/       # Main interface
│   └── auth/                # DigiCool authentication system
│       ├── roles: admin, teacher, student, parent
│       └── user_manager.py
│
├── data/                    # School data
│   ├── students/
│   ├── teachers/
│   ├── courses/
│   ├── grades/
│   └── attendance/
│
├── modules/                 # Feature modules
│   ├── enrollment/
│   ├── grading/
│   ├── attendance/
│   └── reports/
│
├── config.yaml              # DigiCool configuration
└── README.md                # This file
```

---

## 🎓 User Roles

### 1. Admin
- Full system access
- Manage teachers and students
- Configure courses
- Generate reports

### 2. Teacher
- View assigned classes
- Mark attendance
- Enter grades
- Communicate with students/parents

### 3. Student
- View courses and grades
- Submit assignments
- Check attendance
- Access learning materials

### 4. Parent
- View child's progress
- Communicate with teachers
- Check attendance
- View report cards

---

## 🚀 Next Steps

1. Design database schema
2. Create user role hierarchy
3. Build student/teacher portals
4. Implement course management
5. Create grading system
6. Set up authentication
7. Build reporting system

---

**Last Updated:** February 5, 2026  
**Status:** Not yet started
