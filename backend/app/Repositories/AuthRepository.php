<?php

namespace App\Repositories;

use App\User;

class AuthRepository {

    private $model;

    public function __construct(User $model) {
        $this->model = $model;
    }

    public function register($data) {
        return $this->model->create($data);
    }
}
