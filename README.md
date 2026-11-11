# Product Pagination App

## Overview

Product Pagination App is a React-based application built using Vite that demonstrates server-side pagination by fetching product data from an open-source API.

The application displays products in a responsive grid layout and allows users to navigate between multiple pages using pagination controls.

Instead of fetching all products at once, the application requests only the products required for the currently selected page. This approach helps reduce unnecessary data transfer and improves application efficiency.

## Features

- **Product Listing:** Fetches and displays products from the DummyJSON Products API.
- **Server-Side Pagination:** Retrieves products based on the selected page using API pagination parameters.
- **Dynamic Page Navigation:** Allows users to navigate between pages using numbered pagination controls.
- **Previous and Next Navigation:** Provides controls to move between adjacent pages.
- **Active Page Indicator:** Highlights the currently selected page.
- **Boundary Handling:** Disables the Previous button on the first page and the Next button on the last page.
- **Loading State:** Displays a loading indicator while product data is being fetched.
- **Error Handling:** Displays an appropriate error message when an API request fails.
- **Request Cancellation:** Uses AbortController to cancel outdated API requests when the selected page changes.
- **Responsive Design:** Adapts the product grid and pagination controls to different screen sizes.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- React Hooks

## API Integration

The application uses the DummyJSON Products API to retrieve product information.

API Documentation: https://dummyjson.com/docs/products

The API supports pagination through two parameters:

- **Limit:** Defines the maximum number of products to retrieve per request.
- **Skip:** Defines the number of products to skip before retrieving the next set of results.

The application uses these parameters to fetch products dynamically whenever the user navigates to another page.

The API response includes the product collection and total product count, which are used to calculate the total number of available pages.

## Project Structure

- **src/components:** Contains reusable UI components.
  - ProductCard: Responsible for displaying individual product information.
  - Pagination: Handles page navigation and pagination controls.
- **src/services:** Contains API-related functionality.
  - productService: Responsible for fetching product data.
- **src/App.jsx:** Main application component that manages product data, pagination state, loading state, and error handling.
- **src/main.jsx:** Application entry point.
- **src/index.css:** Contains application-wide styling and responsive layouts.

## Application Workflow

1. The application loads and initializes the pagination state.
2. The first page is selected by default.
3. The application requests the required products from the DummyJSON API.
4. The API response is used to update the product collection and total product count.
5. Products are displayed in a responsive grid.
6. Pagination controls are generated based on the total number of available pages.
7. When the user selects another page, the current page state is updated.
8. The application calculates the required offset and fetches the corresponding products.
9. The product grid is updated with the newly retrieved data.

## Pagination Logic

The application implements server-side pagination.

The number of products displayed per page is configurable. The current implementation displays eight products per page.

The total number of pages is calculated using the total product count returned by the API and the configured page size.

The offset is calculated based on the currently selected page and the number of products per page.

This ensures that each API request retrieves only the required products instead of downloading the entire product collection.

## Installation and Setup

### Prerequisites

- Node.js
- npm
- A modern web browser
- Internet connection for API requests

### Getting Started

1. Clone or download the project repository.
2. Navigate to the project directory.
3. Install the required dependencies.
4. Start the Vite development server.
5. Open the local development URL displayed in the terminal.

### Production Build

The application can be prepared for production using the Vite build process.

A production preview can also be started locally to verify the generated build.

## Learning Objectives

This project demonstrates practical React concepts, including:

- Managing component state using useState.
- Handling side effects using useEffect.
- Fetching data from external APIs.
- Implementing server-side pagination.
- Passing data and callbacks through component props.
- Rendering dynamic lists using map.
- Handling asynchronous API requests.
- Managing loading and error states.
- Preventing outdated requests using AbortController.
- Building reusable and maintainable React components.
- Creating responsive user interfaces.

## Future Enhancements

The application can be extended with the following features:

- Product search with debouncing.
- Category-based product filtering.
- Product sorting by price and rating.
- Configurable page size.
- Product details page.
- React Router integration.
- Custom pagination hook.
- Improved accessibility for pagination controls.
- Unit testing for pagination and API functionality.

## Conclusion

This project provides a practical demonstration of implementing server-side pagination in React using Vite and an external API.

It focuses on component reusability, state management, asynchronous data fetching, API integration, and responsive UI development.
