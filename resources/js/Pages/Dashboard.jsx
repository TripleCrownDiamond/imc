import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faUserFriends, faRobot, faLink, faClipboard, faAward } from '@fortawesome/free-solid-svg-icons'; // Ajoutez l'icône pour la distinction
import { Toaster, toast } from 'react-hot-toast'; // Importer le Toaster et toast

const mainCurrencyName = import.meta.env.VITE_MAIN_CURRENCY_NAME || 'I-coin';
const appUrl = import.meta.env.VITE_APP_URL || 'http://localhost'; // Récupérer l'URL de l'application

const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Dashboard() {
    const { user, directReferralsCount, subscriptionsCount, lastDistinction } = usePage().props.auth;

    // Construire le lien de parrainage
    const referralLink = `${appUrl}:8000/register?sponsor_id=${user.uniq_id}`;

    // Fonction pour copier le lien de parrainage
    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                toast.success('Lien de parrainage copié avec succès!'); // Utiliser React Hot Toast
            })
            .catch((err) => {
                console.error('Erreur lors de la copie: ', err);
                toast.error('Erreur lors de la copie du lien.'); // Message d'erreur
            });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tableau de bord
                </h2>
            }
        >
            <Head title="Tableau de bord" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-4">
                        <div className="p-6 text-gray-900">
                            Bienvenue, {capitalizeFirstLetter(user.username)}!
                        </div>
                        {user.role === 'admin' && (
                            <small className="p-6 text-gray-600">
                                Compte administrateur
                            </small>
                        )}
                    </div>
                    
                    {/* Conteneur pour les cartes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Carte 1 : Solde en i-coin */}
                        {user.role !== 'admin' && (
                            <div className="bg-white shadow rounded-lg p-4">
                                <h3 className="text-lg font-normal flex items-center">
                                    <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                        <FontAwesomeIcon icon={faCoins} className="text-white" />
                                    </div>
                                    Solde en {mainCurrencyName}
                                </h3>
                                <p className="mt-2 text-xl font-extrabold">
                                    {user.balance} {mainCurrencyName}
                                </p>
                            </div>
                        )}

                        {/* Carte 2 : Direct referrals */}
                        <div className="bg-white shadow rounded-lg p-4">
                            <h3 className="text-lg font-normal flex items-center">
                                <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                    <FontAwesomeIcon icon={faUserFriends} className="text-white" />
                                </div>
                                Filleul(s) directes
                            </h3>
                            <p className="mt-2 text-xl font-extrabold">
                                {directReferralsCount} Filleul(s) direct(s)
                            </p>
                        </div>

                        {/* Carte 3 : Souscriptions aux bots */}
                        {user.role !== 'admin' && (
                            <div className="bg-white shadow rounded-lg p-4">
                                <h3 className="text-lg font-normal flex items-center">
                                    <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                        <FontAwesomeIcon icon={faRobot} className="text-white" />
                                    </div>
                                    Souscriptions aux bots
                                </h3>
                                <p className="mt-2 text-xl font-extrabold">
                                    {subscriptionsCount} Souscription(s) à des bot(s)
                                </p>
                            </div>
                        )}

                        {/* Carte 4 : Souscription à la formation */}
                        {user.role !== 'admin' && (
                            <div className="bg-white shadow rounded-lg p-4">
                                <h3 className="text-lg font-normal flex items-center">
                                    <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                        <FontAwesomeIcon icon={faClipboard} className="text-white" />
                                    </div>
                                    Souscription à la formation
                                </h3>
                                <p className="mt-2 text-xl font-extrabold">
                                    {/* Remplacez cette valeur par le nombre réel de souscriptions à la formation */}
                                    {subscriptionsCount} Souscription(s) à des formation(s)
                                </p>
                            </div>
                        )}

                        {/* Carte 5 : Lien de parrainage */}
                        <div className="bg-white shadow rounded-lg p-4">
                            <h3 className="text-lg font-normal flex items-center">
                                <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                    <FontAwesomeIcon icon={faLink} className="text-white" />
                                </div>
                                Lien de parrainage
                            </h3>
                            <div className="flex items-center mt-2">
                                <input
                                    type="text"
                                    value={referralLink}
                                    readOnly
                                    className="flex-1 border border-gray-300 rounded p-2"
                                />
                                <button
                                    onClick={copyToClipboard}
                                    className="ml-2 bg-[#88ae75] text-white rounded px-4 py-2 flex items-center"
                                    aria-label="Copier le lien de parrainage"
                                >
                                    <FontAwesomeIcon icon={faClipboard} />
                                </button>
                            </div>
                        </div>

                        {/* Carte 6 : Dernière distinction */}
                        {lastDistinction && (
                            <div className="bg-white shadow rounded-lg p-4">
                                <h3 className="text-lg font-normal flex items-center">
                                    <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                        <FontAwesomeIcon icon={faAward} className="text-white" />
                                    </div>
                                    Dernière distinction
                                </h3>
                                <p className="mt-2 text-xl font-extrabold">
                                    {lastDistinction.name}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
