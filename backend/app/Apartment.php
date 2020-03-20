<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model {

    protected $fillable = [
        'description', 'rooms', 'bathrooms', 'size', 'type', 'location',
    ];

}
