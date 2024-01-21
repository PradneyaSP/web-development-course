export default function Footer() {
  return (
    <footer className=" h-16 bg-green-600 flex justify-center items-center absolute bottom-0 w-full">
      <h3 className=" font-sans font-bold text-green-100">
        ©️Pradneya Prabhudesai, {new Date().getFullYear()}
      </h3>
    </footer>
  );
}
