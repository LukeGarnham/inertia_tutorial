# Inertia Tutorial

A Laravel application with a Vue 3 frontend, Inertia, and Vite.

This repository is used to push work for the [Laracasts](https://laracasts.com/) course [Build Modern Laravel Apps Using Inertia.js](https://laracasts.com/series/build-modern-laravel-apps-using-inertia-js/).

The aim for me is to combine what I've learned separately about Laravel and Vue.js, and bring them together in this course with Inertia.js as the glue that combines a Laravel backend to a Vue.js frontend.

## Requirements

- PHP 8.3 or newer, with the extensions required by Laravel
- [Composer](https://getcomposer.org/)
- Node.js and npm
- SQLite (included with PHP in most local development setups)
- Git

Herd is optional. The steps below use Laravel's built-in development server, so the project can run locally without Herd.

## Setup

Clone the repository and enter its directory:

```sh
git clone <repository-url>
cd inertia_tutorial
```

Install the PHP dependencies, create a local environment file, and generate an application key:

```sh
composer install
```

Copy `.env.example` to `.env` (PowerShell: `Copy-Item .env.example .env`; macOS/Linux: `cp .env.example .env`), then run:

```sh
php artisan key:generate
```

The app is configured to use SQLite. The database file is ignored by Git, so create an empty local file (PowerShell: `New-Item database/database.sqlite -ItemType File`; macOS/Linux: `touch database/database.sqlite`), then run the migrations:

```sh
php artisan migrate
```

Install the frontend dependencies:

```sh
npm ci
```

## Run the app

Start the Laravel server, queue listener, and Vite development server together:

```sh
composer run dev
```

Leave this command running and open [http://localhost:8000](http://localhost:8000). Press `Ctrl+C` to stop the development processes.

`npm run dev` starts **only Vite**, which serves and watches frontend assets. It does not serve Laravel pages. Use `composer run dev` to start both sides together, or start `php artisan serve` and `npm run dev` in separate terminals.

## Using Herd

Herd is optional. If you use it, Herd serves the Laravel app at its `.test` domain (for example, `http://inertia_tutorial.test`). Run `npm run dev` in a terminal to serve and watch frontend assets while developing. You do not need to also run `composer run dev` in this case, since Herd is already serving the Laravel app.

## Generated and local-only files

The repository excludes environment-specific or generated files, including `.env`, `vendor/`, `node_modules/`, `public/build/`, `public/hot`, and SQLite database files. The setup steps above create or install the files needed for local development. Do not commit `.env` or a database containing local data.
