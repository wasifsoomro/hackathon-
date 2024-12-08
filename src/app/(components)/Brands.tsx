import Image from 'next/image';

export default function Brands() {
  return (
    <div className="bg-black py-8 px-6 flex flex-wrap gap-8 justify-center items-center">
      {/* Brand Logos */}
      <Image src="/versage.png" alt="Versace" width={90} height={40} />
      <Image src="/zara.png" alt="Zara" width={90} height={40} />
      <Image src="/Vector (2).png" alt="Brand Logo" width={90} height={40} />
      <Image src="/Vector (3).png" alt="Brand Logo" width={90} height={40} />
      <Image src="/Vector (4).png" alt="Brand Logo" width={90} height={40} />
    </div>
  );
}
