<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Formation::all();
        $user = Auth::user(); // Get the authenticated user

        // Retrieve the user's subscriptions
        $subscriptions = $user->formationSubscriptions()->pluck('formation_id')->toArray(); // Get an array of subscribed formation IDs

        // Send both courses and subscriptions to the view
        return inertia('Course/List', [
            'courses' => $courses,
            'subscriptions' => $subscriptions, // Separate variable for subscriptions
        ]);
    }

    public function show($id)
    {
        $course = Formation::findOrFail($id);
        return inertia('Course/Show', [
            'course' => $course,
        ]);
    }

    public function purchase(Request $request, $id)
    {
        $user = Auth::user();
        $course = Formation::findOrFail($id);

        // Logic to handle the purchase (e.g., payment processing)
        // For now, just add the course to the user's subscriptions
        $user->formationSubscriptions()->attach($course->id);

        // Return a JSON response indicating success
        return response()->json(['message' => 'Course purchased successfully!'], 200);
    }

}
