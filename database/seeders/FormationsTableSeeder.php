<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormationsTableSeeder extends Seeder
{
    public function run()
    {
        $formations = [
            [
                'name' => 'IMARKET SCHOOL', // anciennement 'nom'
                'description' => 'Introduction to forex, Trading platform, The guide, Demo mode assistant and analysis',
                'price_usd' => 100, // anciennement 'prix_usd'
                'price_i_coin' => 223, // anciennement 'prix_i_coin'
                'number_of_videos' => 1, // anciennement 'nombre_de_videos'
            ],
            [
                'name' => 'APOLLON TRADER',
                'description' => 'Trading strategy, Meta pro, Weekly forecast 1 month, Weekly signals 1 month, Real mode assistant and advisor for 1 month',
                'price_usd' => 500,
                'price_i_coin' => 1112,
                'number_of_videos' => 2,
            ],
            [
                'name' => 'ZEUS TRADER PRO',
                'description' => 'Pro trader, Pro secrets, Introduction to cryptocurrency, Crypto pro, Imarket expertise certificate, Unlimited real mode expert assistant, Unlimited daily signals, Unlimited daily forecast, Join the Imarket pro traders team',
                'price_usd' => 1250,
                'price_i_coin' => 2778,
                'number_of_videos' => 2,
            ],
        ];

        DB::table('formations')->insert($formations);
    }
}
