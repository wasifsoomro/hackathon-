import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-lightGray">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 py-16 lg:py-32">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight lg:text-6xl">
            Find Clothes <br /> That Matches Your Style
          </h1>
          <p>
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        {/* Statistics - This will be shown below text on mobile and left-aligned on large screens */}
        <div className="lg:hidden mt-8 flex flex-wrap justify-center gap-8 lg:justify-start lg:w-1/2 lg:mt-0">
          <div className="text-center">
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="text-gray-600">Innovative Brands</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">2,000+</h2>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">30,000+</h2>
            <p className="text-gray-600">Happy Purchases</p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/Rectangle 2.jpg" // Replace with your image file name
            alt="Fashion Banner"
            layout="responsive"
            width={900}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
