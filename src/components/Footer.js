import Image from "next/image";
import FooterNav from "./FooterNav";
import amznLogoREV from "../assets/images/amzn-logo-rev.svg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-amzn_blue-light text-gray-300">
      {/* Top */}
      <div className="flex flex-col space-y-8 md:flex-row justify-between lg:justify-around md:space-y-0">
        <FooterNav
          head="Get to Know Us"
          subHead={[
            "About Us",
            "Careers",
            "Press Releases",
            "Amazon Cares",
            "Gift a Smile",
          ]}
        />
        <FooterNav
          head="Make Money with Us"
          subHead={[
            "Sell on Amazon",
            "Sell under Amazon Accelerator",
            "Amazon Global Selling",
            "Become an Affiliate",
            "Fulfilment by Amazon",
            "Advertise Your Products",
            "Amazon Pay on Merchants",
          ]}
        />
        <FooterNav
          head="Amazon Payment"
          subHead={[
            "Amazon Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Amazon Currency Converter",
          ]}
        />
        <FooterNav
          head="Let Us Help You"
          subHead={[
            "Amazon and COVID-19",
            "Shipping Rates & Policies",
            "Returns & Replacements",
            "Manage Your Devices",
            "Amazon Assistant",
          ]}
        />
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-12 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center text-center border-t border-solid border-gray-600">
        <Image src={amznLogoREV} width={90} height={35} alt="Amazon logo" />
        <span>
          &copy; {year} | Developed by{" "}
          <a
            href="https://github.com/rajdeep-ghosh/amazon-clone"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Rajdeep Ghosh
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
