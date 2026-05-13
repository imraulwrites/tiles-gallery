import React from 'react';
import { Icon } from '@gravity-ui/uikit';
import { LogoFacebook, LogoTelegram, LogoSlack } from '@gravity-ui/icons';

function Footer() {
  return (
    <footer className="bg-[#232323] border-t border-t-gray-700 px-2 md:px-6">
      <div className="text-white pt-20 text-center">
        <h1 className="text-6xl text-brick-red font-extrabold">Tiles Galore</h1>

        <p className="mt-3 text-sm">
          {' '}
          Premium tiles for modern homes and commercial spaces. Quality, durability, and design in
          every piece.{' '}
        </p>
        <div className="flex flex-col md:flex-row gap-20 justify-center items-center py-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>{' '}
            <ul className="space-y-2 text-sm">
              {' '}
              <li>Email: support@tilesgalore.com</li> <li>Phone: +880 1234 567 890</li>{' '}
              <li>Address: Chattogram, Bangladesh</li>{' '}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Social Links</h4>
            <div className="flex gap-3 justify-center mb-10">
              <div className="bg-white rounded-full px-2 py-1.5 text-black">
                <Icon data={LogoFacebook} size="24" />
              </div>

              <div className="bg-white rounded-full px-2 py-1.5 text-black">
                <Icon data={LogoTelegram} size="24" />
              </div>
              <div className="bg-white rounded-full px-2 py-1.5 text-black">
                <Icon data={LogoSlack} size="24" />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper flex flex-col md:flex-row justify-between py-8 text-[#fafafa]/60 border-t border-t-gray-700">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5 text-center items-center justify-center">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
