<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Créer 20 utilisateurs avec tous les champs remplis et le rôle 'user'
        User::factory()->count(20)->create([
            'role' => 'user', // Tous les utilisateurs auront le rôle 'user'
            'sponsor_id' => null, // Vous pouvez définir un sponsor_id spécifique si nécessaire
        ]);
    }
}
