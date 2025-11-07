# National Judicial Portal - e-Governance MVP

A responsive, citizen-facing judicial portal built with React and Tailwind CSS. This MVP allows citizens to file cases, track case status, view public judgments, and access legal resources online.

## 🎯 Features

### Core Functionality
- **Home Page**: Overview with quick links, announcements, and portal statistics
- **Authentication**: Mock login/register system with localStorage session management
- **User Dashboard**: View filed cases, notifications, and quick actions
- **File a Case**: Complete form for case filing with mock document upload
- **Track Case**: Search and view detailed case status with timeline
- **Judgments & Orders**: Browse and search public court judgments
- **Legal Resources**: FAQs, filing guides, legal acts, and aid information
- **Contact/Support**: Feedback form and contact information

### Technical Highlights
- ✅ Client-side routing with React Router
- ✅ Mock API calls with simulated delays
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Reusable UI components
- ✅ LocalStorage for user sessions
- ✅ Government/judicial color scheme (blue, gray, white)
- ✅ Mock data for cases, judgments, and notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Start the development server:**
   ```powershell
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```powershell
npm run build
```

The build files will be in the `dist` folder.

## 📁 Project Structure

```
portal/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   ├── TextArea.jsx
│   │   └── Loading.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FileCase.jsx
│   │   ├── TrackCase.jsx
│   │   ├── Judgments.jsx
│   │   ├── LegalResources.jsx
│   │   └── Contact.jsx
│   ├── context/            # React Context
│   │   └── AuthContext.jsx
│   ├── services/           # Mock API services
│   │   └── api.js
│   ├── data/               # Mock JSON data
│   │   ├── cases.json
│   │   ├── judgments.json
│   │   ├── notifications.json
│   │   └── announcements.json
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

### Colors
- **Primary**: `#1e40af` (Judicial Blue)
- **Secondary**: `#3b82f6` (Light Blue)
- **Dark**: `#1e3a8a`
- **Accent**: `#0369a1`

### Components
All components are built with Tailwind CSS and follow a consistent design pattern:
- Cards with shadow and hover effects
- Buttons with primary/secondary/danger variants
- Form inputs with validation styling
- Responsive grid layouts

## 🔐 Authentication (Mock)

The portal includes mock authentication:
- **Login**: Any email with password length ≥ 6 characters
- **Register**: All fields required, password ≥ 6 characters
- Session stored in localStorage
- Protected routes for dashboard

## 📊 Mock Data

All data is client-side mock data:
- **Cases**: Pre-populated case data with timelines
- **Judgments**: Sample court judgments with categories
- **Notifications**: Case-related notifications
- **Announcements**: Portal announcements and news

## 🛠️ Technology Stack

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## 📱 Responsive Design

The portal is fully responsive:
- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Optimized for tablets (768px - 1024px)
- **Desktop**: Full experience (> 1024px)

## 🔮 Future Enhancements (Optional)

- [ ] Multilingual support (English/Nepali toggle)
- [ ] Payment gateway integration for court fees
- [ ] Real-time notifications with WebSocket
- [ ] Advanced search filters
- [ ] Case document viewer
- [ ] Print-friendly case details
- [ ] Email notifications
- [ ] Dark mode toggle
- [ ] Accessibility improvements (WCAG compliance)

## 📝 Usage Guide

### Filing a Case
1. Login or register an account
2. Navigate to "File Case"
3. Fill in complainant and respondent details
4. Select case type and provide description
5. Upload supporting documents (mock)
6. Submit and receive case reference number

### Tracking a Case
1. Navigate to "Track Case"
2. Enter case number or party name
3. View case status, timeline, and next hearing
4. Print or download case details

### Browsing Judgments
1. Navigate to "Judgments"
2. Search by keywords, case number, or category
3. View detailed judgment
4. Download PDF (mock)

## 🤝 Contributing

This is an MVP project for educational purposes. Feel free to fork and enhance!

## 📄 License

This project is created for academic purposes as part of an e-Governance course.

## 👥 Authors

- Pranjal Kharel
- e-Governance Course Project



**Note**: This is a mock MVP for demonstration purposes. All data, API calls, and services are simulated client-side. In a production environment, this would connect to real backend services with proper authentication, authorization, and data persistence.
