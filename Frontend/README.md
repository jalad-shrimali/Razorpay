# React Ordering App with Razorpay Integration

This is a simple React application for ordering products and processing payments via Razorpay. The app uses React for the frontend and communicates with an API to handle order creation and payment status updates.

---

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager, installed with Node.js)
- **Git**

---

## Getting Started

Follow these steps to pull the project from GitHub and run it locally on your machine.

### 1. Clone the Repository

Open your terminal or command prompt and clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Replace `your-username` and `your-repository-name` with the actual GitHub username and repository name.

### 2. Navigate to the Project Folder

After cloning the repository, navigate to the project directory:

```bash
cd your-repository-name
```

### 3. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

This will install all the necessary packages listed in `package.json`.

### 4. Set Up Environment Variables

You will need to set up your API URL and Razorpay key in a `.env` file in the root of your project.

Create a `.env` file and add the following values:

```bash
REACT_APP_API_URL=http://localhost:9090/api/payment
REACT_APP_RAZORPAY_KEY=rzp_test_yLrSS86Wdc6FBk
```

- Replace `REACT_APP_API_URL` with your actual API URL if it's different from the default.
- Replace `REACT_APP_RAZORPAY_KEY` with your Razorpay test key (you can get it from the Razorpay dashboard).

### 5. Run the Development Server

Now that everything is set up, you can start the development server by running:

```bash
npm start
```

This will start the app on `http://localhost:3000` by default. Open this URL in your browser to see the app in action.

### 6. API Setup (Backend)

Ensure that your backend API is running and accessible at the endpoint specified in the `.env` file (by default, `http://localhost:9090/api/payment`). You can replace this with your actual backend API URL.

> **Important**: You need to configure your backend to handle the order creation and payment updates.

### 7. Run Razorpay Payment Integration

- After placing the order, you will see the Razorpay payment button.
- On successful payment, the app will display a success page with payment details and update the payment information via the API.

---

## Folder Structure

Here’s a breakdown of the folder structure in this project:

```bash
.
├── public/
│   ├── index.html       # Main HTML template
│   └── ...
├── src/
│   ├── pages/           # Different pages (e.g., OrderPage, PaymentSuccessPage)
│   ├── App.js           # Main React component
│   ├── App.css          # Global styles
│   └── index.js         # React entry point
├── .env                 # Environment variables (API URL and Razorpay key)
├── package.json         # Project dependencies and scripts
├── README.md            # This file
└── ...
```

---

## Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode at `http://localhost:3000`.
- `npm run build` — Builds the app for production to the `build` folder.
- `npm test` — Runs the test suite for the project.
- `npm run eject` — Removes the single build dependency and exposes the build configuration files.

---

## Contributing

We welcome contributions to this project! If you have any improvements, bug fixes, or new features, feel free to open a pull request. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Open a pull request to the main repository.

---

## License

This project is demo project.

