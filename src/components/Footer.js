export default function Footer() {
  // Ova linija automatski uzima trenutnu godinu
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="mt-12 p-8 bg-black text-white text-center border-t border-gray-800">
      <p>&copy; {currentYear} Dragana Mirković. Sva prava pridržana.</p>
      <p className="text-xs text-gray-500 mt-4">
        Prototip izradio: Budući IT menadžer muzičke industrije ;)
      </p>
    </footer>
  )
}