<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', [App\Http\Controllers\FormsController::class, 'index'])->name('get_forms');

Route::middleware(['auth'])->group(function () {
    Route::prefix('forms')->group(function(){
        Route::get('/', [App\Http\Controllers\FormsController::class, 'index']); // all
        Route::get('/{form_id}', [App\Http\Controllers\FormsController::class, 'show'])->where(['form_id' => '[0-9]+']); // single
        Route::post('/', [App\Http\Controllers\FormsController::class, 'store']); //add
        Route::put('/{form_id}', [App\Http\Controllers\FormsController::class, 'update'])->where(['form_id' => '[0-9]+']); 
        Route::delete('/{form_id}', [App\Http\Controllers\FormsController::class, 'destroy'])->where(['form_id' => '[0-9]+']);
    });
});

Route::get('/csrf', function () {    return view('components/csrf');}); //@csrf 
Route::get('/', function () {    return view('welcome');});
Route::get('/login-join', function () {    return view('welcome');});
Route::get('/dashboard', function () {    return view('dashboard');})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
