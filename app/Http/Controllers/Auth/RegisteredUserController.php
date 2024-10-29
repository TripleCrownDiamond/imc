<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Country;
use App\Models\Distinction;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        // Récupérer les pays depuis la table "countries"
        $countries = Country::all();
       
        return Inertia::render('Auth/Register', [
            'countries' => $countries,
            'flash' => session('flash'),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validation des données
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:' . User::class,
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'country' => 'required|string|max:255',
        ], [
            'first_name.required' => 'Le prénom est requis.',
            'last_name.required' => 'Le nom de famille est requis.',
            'username.required' => 'Le nom d\'utilisateur est requis.',
            'username.unique' => 'Ce nom d\'utilisateur est déjà pris.',
            'email.required' => 'L\'email est requis.',
            'email.email' => 'L\'email doit être une adresse valide.',
            'email.unique' => 'Cet email est déjà utilisé.',
            'password.required' => 'Le mot de passe est requis.',
            'password.confirmed' => 'La confirmation du mot de passe doit correspondre.',
            'country.required' => 'Le pays est requis.',
        ]);

        // Récupérer le sponsor_id depuis l'URL ou définir l'admin par défaut si non fourni
        $sponsorId = $request->input('sponsor_id') ?? 'admin';

        // Création de l'utilisateur
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'uniq_id' => Str::random(8),
            'role' => 'user',
            'balance' => 2,
            'sponsor_id' => $sponsorId,
            'country' => $request->country,
        ]);

        // Attribuer la première distinction
        $firstDistinction = Distinction::first();
        if ($firstDistinction) {
            $user->distinctions()->attach($firstDistinction->id, [
                'date_acquired' => now(),
            ]);
        }

        // Événement d'inscription
        event(new Registered($user));

        // Redirection avec message flash de succès
        return redirect()->route('register')->with('flash', ['success' => 'Inscription réussie. Bienvenue!']);
    }
}
