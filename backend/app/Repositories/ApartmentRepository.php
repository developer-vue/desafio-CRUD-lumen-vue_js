<?php

namespace App\Repositories;

use App\Apartment;

class ApartmentRepository {

    private $model;

    public function __construct(Apartment $model) {
        $this->model = $model;
    }

    public function findAll($params) {
        return Apartment::where('description', 'like', "%${params['q']}%")->paginate($params['perPage']);
    }
    public function create($data) {
        return Apartment::create($data);
    }
    public function update($id, $data) {
        $model = Apartment::find($id);
        $model->fill($data);
        $model->save();
        return $model;
    }
    public function delete($id) {
        return Apartment::destroy($id);
    }
}
