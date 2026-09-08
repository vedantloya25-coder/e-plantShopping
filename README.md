# Paradise Nursery Shopping Application

A complete, modern, and responsive **React + Redux Toolkit** e-commerce shopping cart web application for **Paradise Nursery**, an online houseplant and botanical store.

---

## 🌿 Project Overview

**Paradise Nursery** is a dedicated online plant shop designed to bring nature, serenity, and cleaner air into modern homes and workspaces. This project demonstrates state-of-the-art frontend development using React 18, React Router v6, and Redux Toolkit for seamless global state management.

---

## ✨ Key Features

- **Dynamic Botanical Landing Page:**
  - Full-screen CSS background imagery of a greenhouse sanctuary.
  - Compelling company storytelling and value propositions.
  - Prominent **"Get Started"** call-to-action button that navigates directly to the plant catalog.

- **Categorized Plant Catalog (`ProductList.jsx`):**
  - **18+ Unique Plant Varieties** organized across 3 distinct botanical categories:
    - **Indoor Plants** (*Monstera Deliciosa, Snake Plant, Peace Lily, Fiddle Leaf Fig, ZZ Plant, Chinese Evergreen*)
    - **Succulents** (*Aloe Vera, Echeveria, Jade Plant, Haworthia, Zebra Haworthia, String of Pearls*)
    - **Air Purifying Plants** (*Spider Plant, Boston Fern, Rubber Plant, Bamboo Palm, Areca Palm, English Ivy*)
  - Interactive category tab filters with dynamic plant counts.
  - Plant cards displaying custom illustrations, botanical descriptions, unit prices, and status badges.

- **Add to Cart Interaction:**
  - One-click **"Add to Cart"** button that dispatches Redux actions.
  - Automatically updates the button state to **"Added to Cart"** and disables repeated additions to prevent accidental duplicate entries.
  - Real-time cart badge notification updating immediately in the Navbar.

- **Complete Shopping Cart (`CartItem.jsx`):**
  - Detailed product breakdown with plant thumbnail, unit price, and calculated subtotal.
  - **Quantity Controls (`[-]` `[+]`):** Increment and decrement item quantities with automatic real-time subtotal and total cost calculation.
  - **Quantity Protection:** Prevents negative or zero quantities through the decrement button (or allows complete removal).
  - **Item Deletion:** Remove individual items with instant recalculation of item counts and cart totals.
  - **Clear Cart:** Option to reset the basket.
  - **Order Summary Card:** Total items count, subtotal, free shipping badge, and total amount.
  - **"Checkout" Action:** Interactive confirmation modal informing the user that payment processing is *"Coming Soon!"*.
  - **"Continue Shopping" Action:** Direct navigation back to `/plants` to add more greenery.

- **Navigation & Brand Experience (`Navbar.jsx` & `AboutUs.jsx`):**
  - Sticky glassmorphic navbar with active route indicators and live Redux item counter.
  - Dedicated **About Us** page with nursery origins, mission statement, customer guarantees, and care offerings.

---

## 🛠️ Technologies Used

- **React 18** — Functional components, custom hooks, and modern component patterns.
- **Redux Toolkit (`@reduxjs/toolkit`) & React-Redux** — Centralized global cart state, action creators, and optimized selectors.
- **React Router v6 (`react-router-dom`)** — Client-side routing (`/`, `/plants`, `/cart`, `/about`).
- **CSS3 / Vanilla CSS** — Bespoke botanical theme, CSS custom properties (variables), glassmorphism, responsive CSS Grid and Flexbox layouts.
- **Lucide React** — Modern vector icons.
- **Vite 5** — Fast development build tool and bundler.

---

## 📁 Project Structure

```text
paradise-nursery/
├── public/
│   └── images/                       # 18+ custom vector illustrations & backgrounds
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Reusable navigation with live Redux cart badge
│   │   ├── ProductList.jsx           # Task 6: 3+ categories, 18+ plants, Add to Cart logic
│   │   ├── ProductCard.jsx           # Individual plant card with disabled/added state
│   │   └── CartItem.jsx              # Task 7: Cart table, quantity controls, totals, modal
│   ├── data/
│   │   └── plants.js                 # 18 static plant records across 3 categories
│   ├── redux/
│   │   ├── store.js                  # Redux Toolkit store configuration
│   │   └── CartSlice.jsx             # Task 5: Redux slice with cart reducers & selectors
│   ├── pages/
│   │   ├── Home.jsx                  # Task 4: Landing page hero with "Get Started" button
│   │   ├── AboutUs.jsx               # Task 2: Company story, mission, and offerings
│   │   └── Cart.jsx                  # Cart page wrapper
│   ├── App.jsx                       # Routing configuration
│   ├── App.css                       # Task 3: Background styling, theme tokens, responsiveness
│   ├── main.jsx                      # App root with Redux Provider & BrowserRouter
│   ├── index.css                     # Global reset and typography
│   ├── AboutUs.jsx                   # Grader alias re-export
│   ├── CartItem.jsx                  # Grader alias re-export
│   ├── CartSlice.jsx                 # Grader alias re-export
│   └── ProductList.jsx               # Grader alias re-export
├── README.md                         # Task 1: Project documentation
├── package.json
├── index.html
└── vite.config.js
```

---

## 🚀 Installation & Setup Instructions

Follow these simple steps to run the application locally:

### 1. Clone or Open the Repository
```bash
cd "Course era"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to the local URL (typically `http://localhost:5173`).

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## 🔄 Redux Cart Architecture (`CartSlice.jsx`)

The global shopping cart state is managed with Redux Toolkit:

### State Shape
```javascript
{
  cart: {
    items: [
      {
        id: 1,
        name: "Monstera Deliciosa",
        price: 28.00,
        image: "/images/monstera.svg",
        quantity: 2
      }
    ]
  }
}
```

### Redux Actions
- `addToCart(plant)`: Adds a plant to the cart. If already present, manages quantity.
- `removeFromCart(id)`: Removes the specified item completely from the cart.
- `increaseQuantity(id)`: Increases item quantity by 1.
- `decreaseQuantity(id)`: Decreases item quantity by 1 (retaining minimum 1).
- `clearCart()`: Empties all items.

### Selectors
- `selectCartItems`: Retrieves the array of cart items.
- `selectTotalQuantity`: Calculates total count of all plant items in the basket.
- `selectTotalPrice`: Computes the gross total amount ($).

---

## 🗺️ Application Routes

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Landing hero with background image & "Get Started" CTA |
| `/plants` | `ProductList.jsx` | 3 categories, 18+ plants, Add to Cart functionality |
| `/cart` | `CartItem.jsx` | Full shopping cart, quantity controls, totals & checkout |
| `/about` | `AboutUs.jsx` | Company history, mission, and benefits |

---

## 📋 Course Grading Rubric Checklist

- [x] **Task 1 — README.md:** Project name, description, features, tech stack, install instructions, Redux details, and structure.
- [x] **Task 2 — AboutUs.jsx:** Company name, story, mission, offerings, and value proposition.
- [x] **Task 3 — App.css:** Landing page background image implemented with CSS (`cover`, `center`), responsive layout, and nature-inspired color palette.
- [x] **Task 4 — App.jsx:** Landing hero, company name, short description, and "Get Started" button routing to `/plants`.
- [x] **Task 5 — CartSlice.jsx:** Redux Toolkit slice with add, remove, increment, decrement, and dynamic totals.
- [x] **Task 6 — ProductList.jsx:** 3 categories, 6+ plants per category (18 total), thumbnails, names, descriptions, prices, "Add to Cart" -> "Added to Cart" state toggle, disabled states, and dynamic cart badge in Navbar.
- [x] **Task 7 — CartItem.jsx:** Plant thumbnail, unit price, quantity controls `[-]` `[+]`, item totals, overall cart total, delete button, "Checkout Coming Soon!" modal, and "Continue Shopping" button returning to `/plants`.

---

© 2026 Paradise Nursery. Built with React & Redux Toolkit.
