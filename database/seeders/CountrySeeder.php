<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = [
            ['name' => 'Benin', 'code' => 'BEN'],
            ['name' => 'France', 'code' => 'FRA'],
            ['name' => 'United States', 'code' => 'USA'],
            // Ajoutez d'autres pays ici
        ];

        foreach ($countries as $country) {
            DB::table('countries')->insert(['name' => $country]);
        }
    }
}
