import { FaLaptopCode } from "react-icons/fa6";

function PortfolioFooter() {
  return (
    <footer className="bg-footer fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-2 py-1 ">
      <FaLaptopCode size={20} className="text-lightBlue dark:text-darkRed" />
      <span className="text-sm font-medium uppercase text-light">
        code and design by lonzo
      </span>
    </footer>
  );
}

export default PortfolioFooter;
