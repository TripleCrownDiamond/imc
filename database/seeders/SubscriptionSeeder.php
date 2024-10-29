<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon; // Importer Carbon pour gérer les dates
use App\Models\User;
use App\Models\TradingBot;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Récupérer des utilisateurs et des bots existants
        $users = User::all();
        $bots = TradingBot::all();

        // Vérifier qu'il y a suffisamment d'utilisateurs et de bots
        if ($users->isEmpty() || $bots->isEmpty()) {
            return; // Si pas d'utilisateurs ou de bots, ne rien faire
        }

        // Créer 6 souscriptions expirées
        for ($i = 0; $i < 6; $i++) {
            DB::table('subscriptions')->insert([
                'user_id' => $users->random()->id, // Choisir un utilisateur aléatoire
                'bot_id' => $bots->random()->id,   // Choisir un bot aléatoire
                'subscription_date' => Carbon::now()->subDays(rand(30, 50)), // Entre 30 et 50 jours dans le passé
                'expiration_date' => Carbon::now()->subDays(rand(1, 10)), // Entre 1 et 10 jours dans le passé
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Créer 4 souscriptions non expirées
        for ($i = 0; $i < 4; $i++) {
            DB::table('subscriptions')->insert([
                'user_id' => $users->random()->id, // Choisir un utilisateur aléatoire
                'bot_id' => $bots->random()->id,   // Choisir un bot aléatoire
                'subscription_date' => Carbon::now()->subDays(rand(1, 5)), // Entre 1 et 5 jours dans le passé
                'expiration_date' => Carbon::now()->addDays(rand(5, 15)), // Entre 5 et 15 jours dans le futur
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
