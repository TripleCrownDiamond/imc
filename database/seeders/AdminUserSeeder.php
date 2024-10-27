<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('Azerty%1234'), 
            'uniq_id' => Str::random(8), // Identifiant unique de 8 caractères en minuscules sans tirets
            'role' => 'admin',
            'balance' => 0,
            'sponsor_id' => null,
        ]);
    }
}
