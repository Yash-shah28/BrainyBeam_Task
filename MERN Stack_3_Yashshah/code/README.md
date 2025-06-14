
# Formik Forms Web App

This is a **React.js web application** that demonstrates reusable form components using **Formik** and **Yup** for form state management and validation. The app includes:  
✅ A **Signup Form** with email, password, username, and age fields  
✅ A **Login Form** with email and password  
✅ A custom **InputField** component for clean, consistent inputs  
✅ Simple **404 Not Found** page  
✅ Navigation using **React Router**

---

## 🚀 Features

- **Formik** for form handling and submission  
- **Yup** for schema-based validation  
- **Reusable InputField component** that displays labels, handles formik’s field binding, and shows validation errors  
- **Client-side validation** for email, password strength, username, and age  
- **React Router** for page navigation (Login, Signup, 404)  
- **Simple and clean CSS styling**

---


## 🔑 Validation Rules

### Signup Form
| Field | Validation |
|--------|-------------|
| Email | Required, valid email format |
| Password | Required, min 6 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character |
| Username | Required, min 3 chars, letters/numbers/underscores only |
| Age | Required, number between 18 and 99 |

### Login Form
| Field | Validation |
|--------|-------------|
| Email | Required, valid email format |
| Password | Required |

---


## ⚙ How to Run

1️⃣ Clone the repository  
```bash
git clone https://github.com/Yash-shah28/BrainyBeam_Task.git
cd MERN Stack_3_Yashshah
```

2️⃣ Install dependencies  
```bash
npm install
```

3️⃣ Start the app  
```bash
npm run dev
```

🌐 Visit: http://localhost:3000

---
