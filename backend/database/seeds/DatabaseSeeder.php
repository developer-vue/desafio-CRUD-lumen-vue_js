<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Apartment;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call('UsersTableSeeder');

        User::create([
            "name" => "Admin",
            "email"=> "admin@gmail.com",
            "password"=> app('hash')->make('123456')
        ]);

        Apartment::create([
            "description" => "Apartamento 101",
            'rooms' => 3,
            'bathrooms' => 2,
            'size' => 131,
            'type' => 'Aluga-se',
            'location' => '1 º Andar',
        ]);
    }
}
