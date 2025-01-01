import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040d35] text-white py-6 px-5">
      <div className="flex justify-between lg:flex-row flex-col items-center mt-5 max-w-[1200px] lg:mx-auto gap-4">
        
        <div className="flex gap-4">
          <a
            href="https://github.com/mshsheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0784ef] transition duration-100"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mshsheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0784ef] transition duration-100"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com/magiciansheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0784ef] transition duration-100"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://youtube.com/@SalmanSheikhOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0784ef] transition duration-100"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        <div className="text-center lg:text-right">
          <p className="text-[#888CB0] leading-5 text-sm">
            &copy;2024 All Rights Reserved
          </p>
          <h2 className="font-[600] text-sm">NextWave by MSH</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
