import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
const mainCurrencyName = import.meta.env.VITE_MAIN_CURRENCY_NAME || 'I-coin';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton'; // Adjust the import based on your file structure
import { Link } from '@inertiajs/react'; // Import Link for navigation
import SecondaryButton from '@/Components/SecondaryButton';

const handlePurchase = async (courseId) => {
    const response = await fetch(`/courses/${courseId}/purchase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content // Ensure CSRF token is sent
        },
    });

    if (response.ok) {
        // Simulating a successful purchase
        toast.success('Achat réussi!');
    } else {
        // Handle error
        toast.error('Achat échoué!');
    }
};


export default function CourseList({ courses, userRole, subscriptions }) {
    // Display only if the role is not 'admin'
    if (userRole === 'admin') {
        return (
            <AuthenticatedLayout>
                <div className="py-12">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Admin View
                    </h2>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Formations</h2>}>
            <Head title="Formations" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/* Course List */}
                            <ul>
                                {courses.map(course => {
                                    const isSubscribed = subscriptions.includes(course.id);
                                    return (
                                        <li key={course.id} className="border-b border-gray-300 py-4 hover:bg-gray-100 transition duration-200">
                                            <h3 className="text-lg font-semibold text-[#cd8b76]">{course.name}</h3>
                                            <p className="text-gray-700">{course.description}</p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm text-gray-500">Videos: {course.number_of_videos}</span>
                                                <div className="flex space-x-2">
                                                    <span className="text-sm text-green-600">Price: ${course.price_usd} USD</span>
                                                    <span className="text-sm text-green-600">Price: {course.price_i_coin} {mainCurrencyName}</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                {isSubscribed ? (
                                                    // Link to the course details when subscribed
                                                    <Link href={`/courses/${course.id}`}>
                                                        <SecondaryButton>
                                                            Voir la formation
                                                        </SecondaryButton>
                                                    </Link>
                                                ) : (
                                                     // Link to purchase the course
                                                    <Link href={`/courses/${course.id}/purchase`}>
                                                        <PrimaryButton onClick={() => handlePurchase(course.id)}>
                                                            Acheter cette formation
                                                        </PrimaryButton>
                                                    </Link>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
