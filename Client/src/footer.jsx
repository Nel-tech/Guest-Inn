import { MessageSquare, Phone } from 'lucide-react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="flex justify-center">
        <hr className="w-[100%] border-gray-500" />
      </div>
      <div className="xsMobile:flex-col xsMobile:items-center xsMobile:gap-10 miniMobile:flex-col miniMobile:items-center miniMobile:gap-10 mobile:flex-col mobile:items-center mobile:gap-10 miniTablet:flex-col miniTablet:items-center miniTablet:gap-10 tablet:flex-col tablet:items-center tablet:gap-10 miniLaptop:flex-col miniLaptop:items-center miniLaptop:gap-10 laptop:justify-around container flex justify-center space-x-12 pt-8">
        <div>
          <p className="miniMobile:text-[1rem] miniTablet:text-[1.4rem] tablet:text-center text-[1.3rem] tracking-wide text-white">
            &copy; {year} University guest-inn All rights reserved.
          </p>
        </div>

        <ul className="mobile:gap-10 miniLaptop:gap-9 flex space-x-11 text-[1.5rem]">
          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-white"
            >
              <Instagram />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-white"
            >
              <Twitter />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-white"
            >
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

function DashboardFooter() {
  return (
    <footer className="mt-[12.8rem]">
      <div className="flex justify-center">
        <hr className="w-[80rem] border-gray-500" />
      </div>
      <div className="relative mx-auto w-full pb-8">
        <div className="xsMobile:flex-col miniMobile:flex-col mobile:flex-col miniTablet:flex-col tablet:flex-col miniLaptop:flex-col laptop:flex-col flex content-center justify-between self-center px-10 pb-8">
          <div className="mb-[3rem] mt-[3rem]">
            <a href="#" className="">
              <div className="mt-11">
                <span className="font-logoFonts laptop:text-[1.5rem] text-[1.7rem] text-[#32CD32]">
                  University guest inn
                </span>
              </div>
            </a>

            <section className="flex gap-2 py-[2rem]">
              <main className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border">
                <MessageSquare className="text-center text-[1.3rem] text-white" />
              </main>

              <div>
                <h3 className="laptop:text-[1rem] text-white">Email</h3>
                <p>
                  <a
                    href="mailto:Workifyy@gmail.com"
                    className="laptop:text-[1rem] text-white"
                  >
                    Workifyy@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="flex gap-2">
              <main className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border">
                <Phone className="text-center text-[1.3rem] text-white" />
              </main>

              <div>
                <h3 className="laptop:text-[1rem] text-white">Contact Us</h3>
                <p>
                  <a
                    href="tel:+2349081715621"
                    className="laptop:text-[1rem] text-white"
                  >
                    +2349081715621
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div>
            <h6 className="laptop:text-[1.2rem] pb-10 pt-24 text-[1.2rem] uppercase text-white">
              Company
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="laptop:text-[1.2rem] pb-10 pt-24 text-[1.2rem] uppercase text-white">
              Support
            </h6>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Online Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="laptop:text-[1.2rem] pb-10 pt-24 text-[1.2rem] uppercase text-white">
              Legals
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="laptop:text-[1.1rem] text-[1rem] text-white"
                >
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BaseFooter />
      </div>
    </footer>
  );
}

export default DashboardFooter;
