<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About the Book Rental Application

The Book Rental Application allows users to rent books from owners within their neighborhood. Owners can register to upload books they own, while users can browse and rent available books. System admins monitor the platform to approve owners and book listings. The app is built using Laravel and offers a user-friendly experience for both renters and book owners.

### Features

There are three types of users in the system:

1. **Users who rent books**
2. **Users who upload books for rent (book owners)**
3. **System admins who monitor and govern book owners**

### User Flows

#### Owner Dashboard

Owners can:

-   Upload books for rent.
-   Update book information, such as quantity and availability (using Laravel Policies).
-   Remove books from the system (using Laravel Policies).
-   View the list of books they have uploaded.
-   Track revenue generated from renting their books.
-   Add new books if they are not already registered, including details like title, author, and category.

#### System Admin Dashboard

Admins can:

-   View and approve newly registered owners.
-   View and approve newly registered books.
-   Disable owners and their listings (using Laravel Policies).
-   Filter books by category, author, or owner.
-   Track statistics on available books by category and owner location.

### Basic Access Control

-   Owners manage their own books, and their books will be available for rent only after admin approval.
-   Only system admins can see all books and filter through them.
-   When both copies of a rented book are out, it becomes unavailable until returned.
-   If an owner is disabled, all of their books are removed from availability.

### Technology Stack

-   **Backend:** Laravel with JWT or cookies for authentication (using Laravel Passport or Sanctum for JWT).
-   **Frontend:** React
-   **Database:** MySQL

### Requirements

1. Implement proper access control so that owners can manage only their books.
2. Ensure only system admins can view and filter through all books.
3. Owner-uploaded books will only appear for rent if both the owner and the books are approved by a system admin.
4. Update the owner’s wallet when a book is rented.
5. Use fixed book categories, which can be seeded directly into the database.

### Libraries to Use

-   Laravel for backend logic and validation.
-   MySQL for the database.
-   JWT Authentication via Laravel Passport or Sanctum.
-   Frontend UI with React.

## Learning Laravel

Laravel is a web application framework with expressive, elegant syntax. The [documentation](https://laravel.com/docs) offers a comprehensive guide to help developers get started. Additionally, the [Laravel Bootcamp](https://bootcamp.laravel.com) and [Laracasts](https://laracasts.com) provide video tutorials and courses.

## Contributing

Thank you for considering contributing to the Laravel framework! Contributions are welcome and can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

Please review the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct) to ensure that the Laravel community remains welcoming to all.

## Security Vulnerabilities

If you discover a security vulnerability in Laravel, please report it by sending an email to Taylor Otwell at [taylor@laravel.com](mailto:taylor@laravel.com). We will address the issue promptly.

## License

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
