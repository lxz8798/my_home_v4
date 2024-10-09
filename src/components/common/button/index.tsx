interface IButtonProps {
  en: string;
  zh: string;
  prefix?: string;
  suffix?: string;
  style?: string;
}

export const CustomButton = ({ en, zh, prefix, suffix, style = "" }: IButtonProps) => {
  return (
    <button className={`group flex-0 flex-col items-center text-center w-28 h-8 text-xs bg-[var(--button-normal-color)] hover:bg-[var(--button-darken-color)] rounded-md hover:text-white overflow-hidden ${style}`}>
      <p className='w-full h-8 leading-8 group-hover:translate-y-[-100%] duration-75'>{ en }</p>
      <p className='w-full h-8 leading-8 group-hover:translate-y-[-100%] duration-75'>{ zh }</p>
    </button>
  );
};