<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\BotController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\NetworkController;
use App\Models\Country;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Routes pour les formations
    Route::get('/courses', [CourseController::class, 'index'])->name('courses');
    Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');
    //Route::get('/courses/{id}/purchase', [CourseController::class, 'purchase'])->name('courses.purchase');
    Route::post('/courses/{id}/purchase', [CourseController::class, 'purchase'])->name('courses.purchase');

    // Routes pour les bots
    Route::get('/bots', [BotController::class, 'index'])->name('bots');

    // Route pour le réseau
    Route::get('/network', [NetworkController::class, 'index'])->name('network');
});

Route::get('/translations/{locale}', [TranslationController::class, 'index'])->name('translations.index');

// Route pour récupérer tous les pays
Route::get('/countries', function () {
    return Country::all(); // Récupère tous les pays
});

Route::get('/currencies', [CurrencyController::class, 'index'])->name('currencies.index');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/auth.php';
