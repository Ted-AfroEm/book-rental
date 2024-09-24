<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            [
                'title' => 'Fikir Eske Mekabir',
                'author' => 'Haddis Alemayehu',
                'category' => 'Romance',
                'description' => 'A classic Ethiopian love story set during the time of Emperor Haile Selassie.',
                'quantity' => 5,
                'is_available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Dertogada',
                'author' => 'Yismake Worku',
                'category' => 'Fiction',
                'description' => 'A popular Ethiopian novel exploring political and social issues.',
                'quantity' => 3,
                'is_available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Oromay',
                'author' => 'Bealu Girma',
                'category' => 'Historical Fiction',
                'description' => 'A novel that delves into Ethiopia’s political landscape and the Derg era.',
                'quantity' => 4,
                'is_available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Tikusat',
                'author' => 'Sebhat Gebregziabher',
                'category' => 'Drama',
                'description' => 'A well-known Ethiopian play depicting social and familial conflicts.',
                'quantity' => 2,
                'is_available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Abisheger',
                'author' => 'Sahle Selassie',
                'category' => 'Historical',
                'description' => 'A historical novel focusing on Ethiopia’s past rulers and events.',
                'quantity' => 6,
                'is_available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
