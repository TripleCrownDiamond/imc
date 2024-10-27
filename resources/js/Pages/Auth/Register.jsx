import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { trans } from '../../i18n'; // Assurez-vous que le chemin est correct

export default function Register() {
    // Extraire sponsor_id de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const sponsorId = urlParams.get('sponsor_id') || '';

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        sponsor_id: sponsorId, // Initialiser sponsor_id dans l'état
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title={trans('register.title')} /> {/* Utilisez la traduction pour le titre */}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value={trans('register.name')} /> {/* Traduction du label "Name" */}

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value={trans('register.email')} /> {/* Traduction du label "Email" */}

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value={trans('register.password')} /> {/* Traduction du label "Password" */}

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value={trans('register.confirm_password')} /> {/* Traduction du label "Confirm Password" */}

                    <TextInput
                        id="password_confirmation"
                        type="password"
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
                        {trans('register.already_registered')} {/* Traduction pour "Already registered?" */}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        {trans('register.register_button')} {/* Traduction pour "Register" */}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
