import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 px-6 text-sm">
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-3">PitchCraft</h2>
          <p className="w-full md:w-2/3 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim doloribus pariatur,
            ab inventore eligendi corporis tempore asperiores praesentium consequatur quae debitis
            repudiandae!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-green-400">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About us</li>
            <li className="hover:text-green-400 cursor-pointer">Delivery</li>
            <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 text-green-400">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>+(92) 341 2359702</li>
            <li>contact@pitchcraft.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-5 text-gray-400 text-sm">
        © 2025 PitchCraft — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
