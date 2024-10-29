<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    // Spécifie les colonnes qui peuvent être remplies en masse
    protected $fillable = [
        'name',             // anciennement 'nom'
        'description',
        'price_usd',        // anciennement 'prix_usd'
        'price_i_coin',     // anciennement 'prix_i_coin'
        'number_of_videos', // anciennement 'nombre_de_videos'
        'details',
        'advantages',
    ];

    // Si tu souhaites ajouter des relations, tu peux le faire ici
    // Par exemple, si une formation a plusieurs utilisateurs inscrits :
    // public function users()
    // {
    //     return $this->belongsToMany(User::class);
    // }
}
