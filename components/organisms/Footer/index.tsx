import Image from "next/image";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start">
              <a href="/" className="mb-30">
                <Image
                  src="/icon/logo.svg"
                  width={60}
                  height={60}
                  alt="gasent"
                />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Gasent membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                {`Copyright ${year}  All Rights Reserved.`}
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <Menu title="Company">
                  <MenuItem link="/" title="About Us" />
                  <MenuItem link="/" title="Press Release" />
                  <MenuItem link="/" title="Terms Of Use" />
                  <MenuItem link="/" title="Privacy & Policy" />
                </Menu>

                <Menu title="Support">
                  <MenuItem link="/" title="Refund Policy" />
                  <MenuItem link="/" title="Unlock Rewards" />
                  <MenuItem link="/" title="Live Chatting" />
                </Menu>

                <Menu title="Connect">
                  <MenuItem
                    link="mailto: hola@gasent.com"
                    title="hola@gasent.com"
                  />
                  <MenuItem
                    link="mailto: team@gasent.com"
                    title="team@gasent.com"
                  />
                  <MenuItem
                    link="http://maps.google.com/?q=Pasific 12,Jakarta Selatan"
                    title="Pasific 12, Jakarta Selatan"
                  />
                  <MenuItem link="tel: 02111229090" title="021 - 1122 - 9090" />
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
