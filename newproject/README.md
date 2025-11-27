# Explore Holidays India - Travel Booking Website

A responsive travel booking website inspired by exploreholidaysindia.com, built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Destination Cards**: Beautiful cards showcasing popular Indian destinations
- **Booking System**: Modal-based booking form with validation
- **Contact Form**: Integrated contact form with trip customization options
- **Testimonials Section**: Customer reviews and ratings
- **Travel Tips Blog**: Travel guides and inspiration
- **Animations**: Smooth scroll animations and hover effects
- **Local Storage**: Saves bookings and inquiries locally for demo purposes

## Destinations Covered

- **Discover Agra**: Home of the Taj Mahal and Agra Fort
- **Discover Rajasthan**: Land of kings, forts, and palaces
- **Golden Triangle**: Delhi-Agra-Jaipur cultural tour
- **Discover Delhi**: India's capital with rich history

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (ES6+)**: Interactive features and form handling
- **Font Awesome**: Icons for visual enhancement
- **Google Fonts**: Poppins font family

## File Structure

```
travel-booking-app/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. No build tools or installation required!

## Key Features Explained

### Navigation
- Fixed header with smooth scroll
- Mobile-responsive hamburger menu
- Active section highlighting

### Booking System
- Click "Reserve Your Spot Today" on any destination
- Modal form with real-time validation
- Data stored in localStorage for demo

### Contact Form
- Trip customization options
- Destination and trip type selection
- Form validation and success messaging

### Animations
- Scroll-triggered animations
- Hover effects on cards
- Parallax scrolling on hero section
- Smooth transitions throughout

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #e67e22;
    --secondary-color: #3498db;
    --text-color: #333;
    --background-color: #f8f9fa;
}
```

### Adding New Destinations
1. Copy existing destination card structure in `index.html`
2. Update destination details and modal functionality
3. Add corresponding styles if needed

### Extending Functionality
- Add backend API integration for real bookings
- Implement payment gateway integration
- Add image gallery for destinations
- Include map integration for locations

## Demo Data

The application stores demo data in localStorage:
- Bookings: Stored under `bookings` key
- Inquiries: Stored under `inquiries` key

View stored data in browser console:
```javascript
console.log(JSON.parse(localStorage.getItem('bookings')));
console.log(JSON.parse(localStorage.getItem('inquiries')));
```

## Future Enhancements

- [ ] Image gallery with lightbox
- [ ] Advanced search and filtering
- [ ] User authentication system
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Admin dashboard for managing bookings
- [ ] Email notification system
- [ ] Social media integration

## License

This project is open source and available under the MIT License.

## Contact

For questions or support regarding this project, please refer to the contact section in the website or create an issue in the repository.

---

**Note**: This is a frontend demonstration project. For production use, integrate with a backend server and proper database for handling real bookings and customer data.
