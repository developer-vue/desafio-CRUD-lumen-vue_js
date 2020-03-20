<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Repositories\ApartmentRepository;

class ApartmentController extends Controller
{

    private $repository;

    public function __construct(ApartmentRepository $repository) {
        $this->repository = $repository;
    }

   public function index(Request $request) {
       try {
             $this->validate($request, [
                'q' => 'string',
                'page' => 'required|integer',
                'perPage' => 'required|integer'
            ]);
           return $this->repository->findAll($request->all());
       } catch (\Exeception $e) {
           return response()->json(["error" => "Erro ao pesquisar"], 500);
       }
   }


   public function store(Request $request) {
    try{


        // $this->validate($request, [
        //     'description' => 'required|string',
        //     'rooms' => 'required|integer',
        //     'bathrooms' => 'required|integer',
        //     'size' => 'required|integer',
        //     'location' => 'required|string',
        //     'type' => 'required|string',
        //     'status' => 'required|integer',
        // ]);

        $this->validator($request);

        $model = $this->repository->create($request->all());
        return response()->json($model);
    } catch (\Exeception $e) {
        return response()->json(["error" => "Erro ao salvar"], 500);
    }
   }


   public function update($id, Request $request) {
    try {

        $this->validator($request);

        $model =  $this->repository->update($id, $request->all());
        return response()->json($model);

    } catch (\Exeception $e) {
        return response()->json(["error" => "Erro ao atualizar"], 500);
    }
   }


   public function destroy($id) {
    try {
        $this->repository->delete($id);
        return response()->json([], 204);
    } catch (\Exeception $e) {
        return response()->json(["error" => "Erro ao deletar"], 500);
    }
   }


   /**
    *  Método auxiliar para validar os dados no (STORE e UPDATE)
    */
   private function validator($request) {
        return $this->validate($request, [
            'description' => 'required|string',
            'rooms' => 'required|integer',
            'bathrooms' => 'required|integer',
            'size' => 'required|integer',
            'location' => 'required|string',
            'type' => 'in:Vende-se,Aluga-se,Vendido,Alugado'
        ]);
   }


}
