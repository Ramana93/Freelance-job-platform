# 🚀 GigFinder – Freelance Job Listing Platform

GigFinder is a React.js-based platform that displays freelance job listings with features like **search, sorting, saving gigs to local storage**, and a sleek, responsive UI.

---

## 🛠️ **Tech Stack**
- **Frontend:** React.js, CSS  
- **State Management:** useState, useEffect  
- **Data Persistence:** Local Storage  

---

## 🎯 **Features**
- ✅ **Dynamic Gig Listings:** Displayed job cards with company, location, and payment details.  
- ✅ **Local Storage:** Saved selected gigs persistently, even after page reload.  
- ✅ **Search & Sort:**  
  - Search gigs by **title** or **company name**.  
  - Sort gigs by **payment** (ascending/descending).  
- ✅ **Responsive Design:**  
  - Grid layout with **side-by-side gig cards**.  
  - Modern CSS styling with hover effects and transitions.  
- ✅ **Interactive Buttons:**  
  - `View Details` button to explore individual gig information.  
  - `Save` button to bookmark gigs locally.  

---
📂 Project Structure
/src  
 ┣ 📁components  
 ┃ ┣ 📄GigCard.jsx         # Gig card component  
 ┃ ┣ 📄GigList.jsx         # Displays list of gigs  
 ┃ ┣ 📄Pagination.jsx      # Pagination component  
 ┃ ┣ 📄FilterBar.jsx       # Search and sorting  
 ┣ 📄App.jsx               # Main app component  
 ┣ 📄index.jsx             # Entry point  
 ┣ 📁assets                # Images and static assets  
 ┣ 📁styles  
 ┃ ┣ 📄App.css             # Global styles  
 ┃ ┣ 📄GigCard.css         # Gig card styles  
 ┗ 📄index.css             # Root styling  
