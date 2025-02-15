interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="w-full mx-4 mb-16">
      <h2
        className="text-4xl text-gray-900 dark:text-white
				font-bold relative before:content-[''] before:h-1 before:w-[50px]
				before:bg-skin-base before:absolute before:top-full before:left-0
				after:content-[''] after:h-1 after:w-[25px] after:bg-skin-base
				after:absolute after:top-[calc(100%+8px)] after:left-0"
      >
        {title}
      </h2>
    </div>
  );
}
