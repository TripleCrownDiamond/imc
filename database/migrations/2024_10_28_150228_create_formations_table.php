<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationsTable extends Migration
{
    public function up()
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // anciennement 'nom'
            $table->string('description');
            $table->integer('price_usd'); // anciennement 'prix_usd'
            $table->integer('price_i_coin'); // anciennement 'prix_i_coin'
            $table->integer('number_of_videos'); // anciennement 'nombre_de_videos'
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('formations');
    }
}
