import { HTMLAttributes, ReactNode } from "react";

type carouselItemValue = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export default function CarouselItem({
  children,
  className,
  ...props
}: carouselItemValue) {
  return (
    <div className="flex-[0_0_95%] min-w-0 pl-4">
      <div
        className={`h-96
                rounded-3xl
                bg-primary
                text-white
                flex
                items-center
                justify-center
                text-3xl
                font-bold
                ${className}
                `}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
