# Little Lemon Restaurant 🍋

A modern, responsive web application for the Little Lemon restaurant, built as the Capstone Project for the Meta Front-End Developer Professional Certificate.

## 📋 Project Overview

This application serves as the digital presence for Little Lemon, a family-owned Mediterranean restaurant. The key feature is the table reservation system, allowing users to book a table online with instant validation.

### Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Table Reservation**: Functional booking form with validation using Formik and Yup.
- **Dynamic Content**: Specials section showcasing featured dishes.
- **Accessible Components**: Built with semantic HTML and accessibility best practices.
- **Unit Testing**: Comprehensive tests for the Booking Form component.

## 🚀 Technologies Used

- **React**: UI Library
- **TypeScript**: Static typing for robustness
- **Vite**: Next Generation Frontend Tooling
- **Styled Components**: CSS-in-JS styling
- **React Router DOM**: Client-side routing
- **Formik**: Form management
- **Yup**: Object schema validation
- **Jest & React Testing Library**: Unit testing

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd little-lemon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm run test
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components (Nav, Header, Hero, etc.)
├── pages/          # Page components (HomePage, BookingPage)
├── styles/         # Global styles and themes
├── App.tsx         # Main application component with routing
└── main.tsx        # Application entry point
```

## 🧪 Testing

The project includes unit tests for the Booking Form to ensure:
- All form fields render correctly.
- Validation rules are enforced (required fields, valid inputs).
- Form submission state is handled.

Run tests with:
```bash
npm run test
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
