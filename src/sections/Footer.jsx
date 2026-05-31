const socials = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/lucky-sharda-416789202/",
    icon: "/assets/linkedin.svg",
  },
  {
    name: "twitter",
    href: "https://x.com/lucky_sharda",
    icon: "/assets/twitter.svg",
  },
  {
    name: "github",
    href: "https://github.com/luckysharda",
    icon: "/assets/github.svg",
  },
];

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socials.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={name}
          >
            <img src={icon} alt={name} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p className="text-white-500">creator-Lucky Sharda</p>
    </footer>
  );
};

export default Footer;
