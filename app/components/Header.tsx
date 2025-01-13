interface HeaderProps {
  readonly title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-gray-700">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        {title}
      </h1>
    </header>
  );
}

export default Header;
