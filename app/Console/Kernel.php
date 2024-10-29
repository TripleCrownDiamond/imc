<?php

namespace App\Console;

use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Console\Scheduling\Schedule;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Planifiez la commande pour qu'elle s'exécute tous les jours
        $schedule->command('subscriptions:clean-expired')->daily();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands'); // Chargez les commandes
    }
}
