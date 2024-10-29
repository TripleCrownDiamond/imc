import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-hot-toast";

export default function Register() {
    // Extraire sponsor_id de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const sponsorId = urlParams.get('sponsor_id') || '';

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        sponsor_id: sponsorId,
        country_id: '',
    });

    const [countries, setCountries] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Fonction pour récupérer les pays
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/countries');
                setCountries(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des pays:', error);
            }
        };

        fetchCountries(); // Appeler la fonction pour récupérer les pays
        
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: (response) => {
                if (response.props.flash?.success) {
                    toast.success(response.props.flash.success);
                    reset();

                    // Ajouter un petit délai avant d'afficher le toast de redirection
                    setTimeout(() => {
                        toast("Redirection en cours...");
                        
                        // Redirection après le second toast
                        setTimeout(() => {
                            window.location.href = route('login');
                        }, 1500); // Délai de 1,5 secondes avant la redirection
                    }, 1000); // Délai de 1 seconde avant d'afficher le toast de redirection
                }
            },
            onError: (errors) => {
                for (const error in errors) {
                    toast.error(errors[error]);
                }
            },
        });
    };

    // Fonction pour basculer la visibilité du mot de passe
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <GuestLayout>
            <Head title="Inscription" /> {/* Utilisez la traduction pour le titre */}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="first_name" value="Prenom" /> {/* Traduction du label "Name" */}

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="first_name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="last_name" value="Nom" /> {/* Traduction du label "Name" */}

                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="last_name"
                        isFocused={true}
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Nom d'utilisateur" /> {/* Traduction du label "Name" */}

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="E-mail" /> {/* Traduction du label "Email" */}

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="country" value="Pays" /> {/* Ajout du label pour le pays */}

                    <select
                        id="country"
                        name="country"
                        value={data.country}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('country', e.target.value)}
                        required
                    >
                        <option value="">Sélectionnez un pays</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                                {country.name} {/* Assurez-vous que "name" est la colonne appropriée */}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.country} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" /> {/* Traduction du label "Password" */}

                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'} // Utilisez le type en fonction de l'état
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />

                    {/* Lien pour afficher ou masquer le mot de passe */}
                    <a
                        href="#"
                        onClick={togglePasswordVisibility}
                        className="text-sm text-blue-600 hover:underline mt-1"
                    >
                        {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    </a>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" /> {/* Traduction du label "Confirm Password" */}

                    <TextInput
                        id="password_confirmation"
                        type={showPassword ? 'text' : 'password'}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                {/* Champ caché pour sponsor_id */}
                <input
                    type="hidden"
                    name="sponsor_id"
                    value={data.sponsor_id}
                />

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Déjà inscrit ? {/* Traduction pour "Already registered?" */}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        S'inscrire {/* Traduction pour "Register" */}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
