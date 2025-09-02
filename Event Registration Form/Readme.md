## **Event Registration Form**

This is a simple **Event Registration Web App** where users can fill in their details, move to the next page to confirm their participation, and submit the final form. The project includes **HTML, CSS, and JavaScript** for front-end functionality.

---

### **Project Structure**

```
Event Registration Form/
│
├── indexevent1.html      # First page - Basic details form
├── indexevent2.html      # Second page - Event confirmation form
├── style.css             # CSS file for styling both pages
├── script.js             # JavaScript for form alert
└── event registration girl pic.png               # Folder for character illustrations
|__ event registration girl pic.png
```

---

### **Features**

* **Two-step form:** First page for basic details → Second page for event confirmation.
* **Hover border effect:** Attractive glow effect on form container borders.
* **Popup message:** Shows success alert on final submission.
* **Simple UI:** Clean and user-friendly design.

---

### **How It Works**

1. **Open `indexevent1.html`**

   * Fill out **Name** and **Email** fields.
   * Click **Next** → Redirects to `indexevent2.html`.

2. **Open `indexevent2.html`**

   * Choose **Yes/No** for event attendance.
   * Enter **Name, Phone Number, and Guest Count**.
   * Click **Next** → Shows success alert message.

---

### **Setup Instructions**

1. **Download or Clone the Project**

   ```bash
   git clone https://github.com/your-username/event-registration-form.git
   ```

2. **Open the Project Folder** in any code editor like VS Code.

3. **Run with Live Server** or simply open `indexevent1.html` in your browser.

---

### **Technologies Used**

* **HTML5** – Structure of web pages
* **CSS3** – Styling and hover effects
* **JavaScript** – alert message

---

### **Sample Code (Redirect on Next Button)**

```javascript
// script.js

function showSuccessMessage() {
    alert("Thank You! You have successfully registered for the Event.");
}
```

---

### **Future Enhancements**

* Store form data in a **database** using PHP/Node.js & MySQL.
* Add **form validation** before submission.
* Improve UI with **modern CSS frameworks** like Bootstrap or Tailwind.
* Make it a **Single Page Application** using React or Vue.js.

---


