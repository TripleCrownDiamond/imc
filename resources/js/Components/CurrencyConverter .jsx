import React, { useEffect, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const mainCurrencyName = import.meta.env.VITE_MAIN_CURRENCY_NAME || 'I-Coin';

    const loadCurrencies = async () => {
        try {
            const response = await fetch(`/currencies`);
            if (response.ok) {
                const data = await response.json();
                setCurrencies(data);
                setSelectedCurrency(data[0]);
            } else {
                console.error('Échec du chargement des devises');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des devises:', error);
        }
    };

    useEffect(() => {
        loadCurrencies();
    }, []);

    const handleConvert = () => {
        if (selectedCurrency && amount) {
            const valueInICoin = parseFloat(selectedCurrency.value_in_i_coin);
            const converted = amount * valueInICoin;
            setConvertedAmount(converted);
        }
    };

    const handleReset = () => {
        setAmount('');
        setConvertedAmount(null);
        setSelectedCurrency(currencies[0]);
    };

    return (
        <div className="p-4 mx-auto max-w-4xl bg-white shadow rounded">
            <h2 className="text-lg font-semibold mb-4">Convertir en {mainCurrencyName}</h2>
            {convertedAmount !== null && (
                <div
                    className="mt-4 p-2 mb-4 rounded-md bg-[#cd8b76] text-base font-semibold text-white shadow-md"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <span>Montant converti :</span>
                    <span className="font-bold text-xl">
                        {convertedAmount.toFixed(2)} {mainCurrencyName}
                    </span>
                </div>
            )}

            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant :</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Devise :</label>
                <select
                    id="currency"
                    value={selectedCurrency ? selectedCurrency.id : ''}
                    onChange={(e) => {
                        const currency = currencies.find(c => c.id === parseInt(e.target.value));
                        setSelectedCurrency(currency);
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    {currencies.map(currency => (
                        <option key={currency.id} value={currency.id}>
                            {currency.name} ({currency.code})
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex gap-2">
                <PrimaryButton
                    onClick={handleConvert}
                    className="w-full flex justify-center items-center" // Classes ajoutées
                >
                    Convertir
                </PrimaryButton>
                <SecondaryButton
                    onClick={handleReset}
                    className="w-full flex justify-center items-center" // Classes ajoutées
                >
                    Réinitialiser
                </SecondaryButton>
            </div>

        </div>
    );
};

export default CurrencyConverter;
