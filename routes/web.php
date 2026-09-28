<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Welcome')->name('home');

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Luke Garnham',
        'frameworks' => ['Laravel', 'Vue', 'Inertia']
    ]);
});
