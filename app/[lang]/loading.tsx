import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <Image
        src="/kaisol_hero_logo.svg"
        alt=""
        width={277}
        height={216}
        priority
        className="h-16 md:h-20 w-auto object-contain brightness-0"
      />
    </div>
  );
}