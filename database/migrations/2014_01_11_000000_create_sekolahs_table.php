<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sekolahs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('npsn');
            $table->string('nss');
            $table->string('address');
            $table->string('postal_code');
            $table->string('phone');
            $table->string('email');
            $table->string('website');
            $table->string('logo');
            $table->string('headmaster');
            $table->string('headmaster_nip');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sekolahs');
    }
};
