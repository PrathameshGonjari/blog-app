interface HeaderProps {
  readonly title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-gray-700">
      <h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold">
        {title}
      </h2>
    </header>
  );
}

export default Header;
