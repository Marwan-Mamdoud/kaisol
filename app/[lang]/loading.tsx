import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <Image
        src="/LogoWide.svg"
        alt=""
        width={782}
        height={227}
        priority
        className="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  );
}
