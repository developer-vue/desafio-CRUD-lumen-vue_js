<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
// use App\Http\Requests\RegisterRequest;
use App\User;
use App\Repositories\AuthRepository;

class AuthController extends Controller
{

    private $repository;

    public function __construct(AuthRepository $repository) {
        $this->repository = $repository;
    }

    // public function register(RegisterRequest $request)
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        // $validated = $request->validated();

        try {

            $data['name'] = $request->input('name');
            $data['email'] = $request->input('email');
            $data['password'] = app('hash')->make($request->input('password'));



            $user = $this->repository->register($data);

            return response()->json(
                $user
            , 201);

        } catch (\Exception $e) {
            return response()->json(['message' => 'User Registration Failed!'], 500);
        }

    }


    public function login(Request $request)
    {
          //validate incoming request
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = Auth::user();

        return response()->json([
            "user"=> $user,
            "token"=> $token
        ]);


        // return $this->respondWithToken($token);
    }


}
