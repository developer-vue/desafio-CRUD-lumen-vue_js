<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Repositories\UserRepository;

class UserController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    private $repository;

    public function __construct(UserRepository $repository) {
        $this->repository = $repository;
    }

   public function index() {
       try {
           return $this->repository->findAll();
       } catch (\Exeception $e) {
           return response()->json(["error" => "Erro ao pesquisar"], 500);
       }
   }



}
