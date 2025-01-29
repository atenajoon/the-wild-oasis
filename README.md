# The Wild Oasis

The Wild Oasis is a full-stack internal application designed specifically for managing the operations of a small boutique hotel with 8 luxurious wooden cabins. This application empowers staff to efficiently manage bookings, cabins, guests, and other essential hotel operations. The Wild Oasis offers a seamless experience with light and dark mode settings, a guest check-in feature, breakfast options management, and a comprehensive dashboard displaying business statistics and charts.

## Features

### Core Functionality:

* **User Authentication:** Staff can securely log in using email and password via Supabase authentication.

* **Light/Dark Mode Toggle:** Switch between dark and light modes in the settings.

* **Guest Check-In:** Check in guests upon arrival and manage their breakfast preferences.

* **Business Dashboard:** Visualize key business statistics and insights through interactive charts and graphs.

### Technology Stack:

#### Frontend:

* [Vite](https://vite.dev/) for fast development and builds.

* [Styled Components](https://styled-components.com/) for dynamic styling.

* [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) for server state management.

* [React Hook Form](https://react-hook-form.com/) for form handling.

* [React Router](https://reactrouter.com/) for navigation.

* Context API for global state management.

#### Other Libraries:

* React Icons for icons.

* [React Hot Toast](https://react-hot-toast.com/) for toast notifications.

* [Recharts](https://recharts.org/en-US/) for data visualization.

* [date-fns](https://date-fns.org/) for date manipulation.

#### Backend:

* [Supabase](https://supabase.com/) for database management and authentication.

### Deployment:

Hosted on [Vercel](https://vercel.com/) for fast and reliable deployment.

## Roadmap

### Completed:

* Development of an internal staff-facing application.

* Secure login with Supabase authentication.

* Implementation of a user-friendly dashboard and essential management features.

### Future Plans:

* Build a customer-facing website where guests can book stays using the same API.

* Add more advanced features, such as automated guest notifications, housekeeping management, and revenue tracking.

## Acknowledgments

This project was created with  the help of _The Ultimate React Course 2024: React, Next.js, Redux & More_ by Jonas Schmedtmann. The tutorial served as a foundation for understanding the core concepts and implementing features, with additional customizations and improvements made to suit the specific requirements of this project.

## Getting Started

### Prerequisites:

[Node.js](https://nodejs.org/en) installed on your machine.

[Vite](https://vite.dev/) setup for development.

### Installation:

1. Clone the repository:  
``` git clone https://github.com/your-username/the-wild-oasis.git ```
2. Navigate to the project directory:  
``` cd the-wild-oasis ```
3. Install dependencies:  
``` npm install ```
5. Start the development server:  
``` npm run dev ```
6. Access the application at ``` http://localhost:3000. ```

### Environment Variables:

Ensure the following environment variables are set:

* ``` VITE_SUPABASE_URL ```

* ``` VITE_SUPABASE_ANON_KEY ```

## Usage

* Log in using the provided staff credentials:  
_Email: test@user.com  
Password: testuser123_

* Navigate through the dashboard to manage bookings, guests, and cabins.

* Use the settings page to toggle between light and dark mode.

## Screenshots
### Login Page
<img width="1439" alt="login-page" src="https://github.com/user-attachments/assets/340317df-7b60-432f-a176-18c41af55692" />

### Dashboard Page
<img width="1437" alt="Dashboard-light" src="https://github.com/user-attachments/assets/696fa38d-4c66-49ad-9da7-b855fb6c90b8" />
<img width="1438" alt="Dashboard-dark" src="https://github.com/user-attachments/assets/f5138ed2-8d54-4cc7-95cc-cceca9207a3d" />

### Booking Page
<img width="1435" alt="Booking-page" src="https://github.com/user-attachments/assets/833aa0e1-1cca-4c92-a431-3378dd061a03" />

### Cabins Page
<img width="1436" alt="Cabins-page" src="https://github.com/user-attachments/assets/65136ff8-c084-4ca0-a599-e64ac1db2d9d" />
<img width="1431" alt="AddCabin" src="https://github.com/user-attachments/assets/33de4e1e-a303-4a84-ac27-6b05385aec22" />

## Contributing

Contributions are welcome! If you have any ideas for new features or improvements, feel free to open an issue or submit a pull request.

## Connect with Me

I’m building The Wild Oasis as part of my developer portfolio to showcase my skills in creating real-world applications. Follow my journey on [LinkedIn](https://www.linkedin.com/in/a-razm/) or check out more of my projects on [GitHub](https://github.com/atenajoon).

Thank you for exploring The Wild Oasis! Feel free to reach out if you have any questions or feedback.




