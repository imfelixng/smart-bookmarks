import logo from "@assets/images/logo.svg";

export default function Popup(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800 ">
      <section className="flex flex-col items-center justify-center">
        <img
          src={logo}
          className="h-36 pointer-events-none animate-spin-slow"
          alt="logo"
        />
      </section>
      <section className="flex flex-col items-center justify-center text-white text-lg mt-6">
        Welcome to Smart Bookmarks
      </section>
    </div>
  );
}
