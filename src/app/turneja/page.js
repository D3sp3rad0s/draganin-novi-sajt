import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TourSection from '@/components/TourSection'; // Uvozimo našu komponentu!

export default function TourPage() {
  // Da, kopiramo iste podatke. Kasnije ćemo naučiti kako ovo raditi pametnije.
  const tourDates = [
    { id: 1, grad: 'Beč', drzava: 'Austrija', dvorana: 'Wiener Stadthalle', datum: '10. Okt 2025.' },
    { id: 2, grad: 'Zenica', drzava: 'BiH', dvorana: 'Arena Zenica', datum: '25. Okt 2025.' },
    { id: 3, grad: 'Beograd', drzava: 'Srbija', dvorana: 'Štark Arena', datum: '15. Nov 2025.' },
    { id: 4, grad: 'Zagreb', drzava: 'Hrvatska', dvorana: 'Arena Zagreb', datum: '29. Nov 2025.' },
  ];

  return (
    // Ovdje više ne trebamo layout klase jer smo to riješili u layout.js
    <>
      <h1 className="text-center text-5xl font-bold pt-12">Svi datumi turneje</h1>
      <TourSection dates={tourDates} /> 
    </>
  );
}