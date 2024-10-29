<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Affiche le tableau de bord de l'utilisateur.
     */
    public function index(): Response
    {
        // Récupérer l'utilisateur actuel
        $user = Auth::user();

        // Compter les parrainages directs et les abonnements
        $directReferralsCount = User::where('sponsor_id', $user->uniq_id)->count();
        $subscriptionsCount = Subscription::where('user_id', $user->id)->count();

        // Récupérer la dernière distinction
        $lastDistinction = $user->distinctions()->latest('date_acquired')->first();

        // Récupérer le nom de la distinction
        $lastDistinctionName = $lastDistinction ? $lastDistinction->name : null;

        // Récupérer le nombre total de formations souscrites
        $formationSubscriptionsCount = $user->formationSubscriptions()->count();

        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => $user,
                'directReferralsCount' => $directReferralsCount,
                'subscriptionsCount' => $subscriptionsCount,
                'formationSubscriptionsCount' => $formationSubscriptionsCount, // Ajout du nombre de souscriptions aux formations
                'lastDistinction' => [
                    'id' => $lastDistinction ? $lastDistinction->id : null,
                    'name' => $lastDistinctionName, // Envoie le nom de la dernière distinction
                ],
            ],
        ]);
    }
}
