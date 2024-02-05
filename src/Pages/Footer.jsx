const Footer = () => {
  return (
    <div className="bg-gray-700 text-gray-300 ">
      <div className="flex items-center justify-between gap-5 p-4 container mx-auto">
        <p>
          Copyright © {new Date().getFullYear()} Liton Nath.
          <a className="hover:text-orange-400" href="litonnath4184@gmail.com"> litonnath4184@gmail.com</a> .
        </p>
      </div>
    </div>
  );
};

export default Footer;
