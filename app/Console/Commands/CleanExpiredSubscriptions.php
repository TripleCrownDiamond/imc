<?php

namespace App\Console\Commands; // Assurez-vous que le namespace est correct

use Illuminate\Console\Command; // N'oubliez pas d'importer la classe Command

class CleanExpiredSubscriptions extends Command
{
    // Le nom de la commande dans la console
    protected $signature = 'subscriptions:clean-expired';

    // Une courte description de la commande
    protected $description = 'Clean up expired subscriptions';

    // La méthode qui sera exécutée lorsque la commande sera appelée
    public function handle()
    {
        // Logique pour nettoyer les abonnements expirés
        $this->info('Expired subscriptions cleaned up successfully.');
        
        // Ici, vous pouvez ajouter la logique pour supprimer les abonnements expirés
        // Par exemple : Subscription::where('expiration_date', '<', now())->delete();
    }
}
