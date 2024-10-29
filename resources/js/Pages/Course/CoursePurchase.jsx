import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'react-hot-toast';

export default function CoursePurchase() {
    const { course } = usePage().props;

    const handlePurchase = () => {
        // Logique d'achat, peut être intégrée à une API
        // On va afficher un toast pour simuler l'achat réussi
        toast.success('Achat du cours effectué avec succès !');
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Achat de Cours
                </h2>
            }
        >
            <Head title="Achat de Cours" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-4">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold">{course.title}</h3>
                            <p className="mt-2">{course.description}</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-[#88ae75] rounded-full p-2 mr-2">
                                    <FontAwesomeIcon icon={faCoins} className="text-white" />
                                </div>
                                <p className="text-xl font-extrabold">{course.price} I-coin</p>
                            </div>
                            <button
                                onClick={handlePurchase}
                                className="mt-4 bg-[#88ae75] text-white rounded px-4 py-2"
                            >
                                Acheter le cours
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster /> {/* Ajout du Toaster ici pour afficher les messages */}
        </AuthenticatedLayout>
    );
}
