# Quick Start Guide - Judicial Portal

## 🎉 Your portal is ready!

The development server is running at: **http://localhost:3000**

## 🔑 Quick Login

Use these mock credentials to test:
- **Email**: `user@example.com` (any valid email)
- **Password**: `123456` (minimum 6 characters)

## 🧭 Navigation Guide

### 1. **Home Page** (`/`)
- View portal overview and statistics
- Quick access to all services
- Latest announcements

### 2. **Register** (`/register`)
- Create a new account
- All fields required
- Password must be at least 6 characters

### 3. **Login** (`/login`)
- Login with any email + password (6+ chars)
- Session saved in localStorage

### 4. **Dashboard** (`/dashboard`) - Protected
- View your filed cases
- Check notifications
- Quick action buttons
- Must be logged in to access

### 5. **File Case** (`/file-case`)
- Complete case filing form
- Mock document upload
- Receive case reference number
- Can be used without login (will redirect if not logged in)

### 6. **Track Case** (`/track-case`)
- Search by case number: `CASE-2025-001`, `CASE-2025-002`, `CASE-2024-455`
- Or search by party name: `Ram`, `Sita`, `Hari`
- View detailed timeline and status

### 7. **Judgments** (`/judgments`)
- Browse public judgments
- Search by keywords: `banking`, `fraud`, `property`, `labor`, `telecom`
- View detailed judgment with summary

### 8. **Legal Resources** (`/legal-resources`)
- FAQs section
- Step-by-step filing guide
- Legal acts and documents
- Legal aid information

### 9. **Contact** (`/contact`)
- Submit feedback/queries
- View contact information
- Emergency helpline details

## 🧪 Testing Features

### Test Case Numbers:
- `CASE-2025-001` - Under Review
- `CASE-2025-002` - Hearing Scheduled
- `CASE-2024-455` - Verdict Announced

### Test Party Names:
- `Ram Kumar Sharma`
- `Sita Devi Thapa`
- `Hari Bahadur Gurung`

### Test Judgment Keywords:
- `banking`
- `fraud`
- `property tax`
- `labor dispute`
- `telecom`

## 📱 Responsive Testing

Test on different screen sizes:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Use browser DevTools to test responsive design.

## 🎨 UI Components

### Reusable Components Created:
- `Button` - with primary/secondary/danger variants
- `Input` - with labels and error states
- `Select` - dropdown with options
- `TextArea` - multi-line input
- `Card` - container with shadow
- `Loading` - spinner component
- `Navbar` - responsive navigation
- `Footer` - site footer

## 🔄 Workflow Examples

### Example 1: File and Track a Case
1. Click "File Case" from home
2. Fill in the form (will redirect to login if not logged in)
3. Login/Register
4. Complete case filing form
5. Note the case reference number
6. Go to "Track Case"
7. Enter the case number
8. View timeline and status

### Example 2: Browse Judgments
1. Go to "Judgments"
2. Try search: "banking" or "fraud"
3. Click on a judgment to view details
4. Try "Download" (mock action)

### Example 3: Get Legal Help
1. Go to "Legal Resources"
2. Browse FAQs
3. View filing steps guide
4. Check legal acts
5. Find legal aid offices

## 🛠️ Development Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure Highlights

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (routes)
├── context/       # React Context (Auth)
├── services/      # Mock API services
└── data/          # Mock JSON data
```

## ✨ Features Implemented

✅ Home page with announcements
✅ Login/Register with mock validation
✅ User dashboard with stats
✅ Case filing form with mock upload
✅ Case tracking with timeline
✅ Judgment search and display
✅ Legal resources (FAQs, guides, acts)
✅ Contact form
✅ Responsive design
✅ Client-side routing
✅ Mock API with delays
✅ LocalStorage sessions
✅ Protected routes

## 🎯 Next Steps (Optional Extensions)

1. Add multilingual support (English/Nepali)
2. Implement payment success page
3. Add email notifications
4. Create print-friendly views
5. Add advanced search filters
6. Implement dark mode
7. Add accessibility features
8. Create admin panel

## 💡 Tips

- All data is client-side mock data
- Sessions are stored in localStorage
- API calls have simulated delays (300-800ms)
- Document uploads are simulated
- No backend required for this MVP

## 🐛 Known Limitations

- No real backend integration
- No actual file uploads
- No email functionality
- No payment processing
- Mock authentication only
- Data resets on browser refresh (except user session)

## 📞 Need Help?

Check the main README.md for detailed documentation.

---

**Enjoy exploring the Judicial Portal MVP! 🎉**
