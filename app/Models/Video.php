<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    // Spécifie les colonnes qui peuvent être remplies en masse
    protected $fillable = [
        'formation_id',
        'link',
    ];

    // Relation avec le modèle Formation
    public function formation()
    {
        return $this->belongsTo(Formation::class);
    }
}
