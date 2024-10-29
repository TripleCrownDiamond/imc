<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'username' => $this->faker->unique()->userName,
            'country_id' => $this->faker->numberBetween(1, 3), // Remplacez avec une valeur valide pour le pays
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // Utilisez une méthode de hachage appropriée
            'uniq_id' => $this->faker->uuid, // Assurez-vous que ce champ est généré
            'balance' => '2', // Balance fictive entre 0 et 1000
            'sponsor_id' => 'admin', // À définir dans le seeder
            'role' => 'user', // Rôle par défaut pour ces utilisateurs
        ];
    }
}
