interface TimeLineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  text?: string;
}

export default function TimeLineItem({
  // date
  title,
  subtitle,
  text,
}: TimeLineItemProps) {
  return (
    <div
      className="relative pb-[50px] pl-[37px] 
				last:pb-0 before:content-[''] before:w-[1px]
				before:absolute before:h-full before:left-[7px]
				before:top-[5px] before:bg-skin-base
				before:shadow-[0_0_10px_1px_var(--skin-color)]
				before:z-[1] 
        "
    >
      <div
        className="w-[15px] h-[15px] rounded-full
					bg-skin-base absolute top-[3px] left-0
					z-[1] shadow-[0_0_10px_1px_var(--skin-color)]
					animation-pulse
					"
      />
      <h3 className="text-sm font-normal mb-3 text-gray-600 dark:text-gray-400">
        <i className="fa fa-calendar mr-[5px]"></i>
      </h3>
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>

      {subtitle && (
        <h4 className="text-base font-semibold mb-[15px] text-gray-600 dark:text-gray-400">
          {subtitle}
        </h4>
      )}

      {text && <p className="text-base leading-[25px] text-gray-600 dark:text-gray-400">{text}</p>}
    </div>
  );
}
