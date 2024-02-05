import image from "../assets/Liton-Nath-Passport-Pic-1-removebg-preview-modified.png";

const BannerLogo = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center">
          <img src={image} />
        </div>
      </div>
      <h1 className="otto text-2xl font-bold text-center">Liton Nath</h1>
    </div>
  );
};

export default BannerLogo;
