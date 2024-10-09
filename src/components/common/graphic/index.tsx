import { CustomButton } from "../button";

interface IGraphicProps {
  order?: boolean;
  title: string;
  description: string;
  img?: string;
}

const RESPONSE_IMAGE = require('../../../assets/images/banner/response.png')


export const Graphic = ({ order, title, description, img }: IGraphicProps) => {

  return (
    <div className={`flex flex-col md:flex-row w-full h-[52vh] px-4 mb-4`}>
      <div className={`w-full md:w-1/2 h-full flex justify-center items-center ${ order ? "md:order-1" :"md:order-2" }`}>
        <img src={img ? img : RESPONSE_IMAGE} alt="response" />
      </div>
      <div className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-4 ${ !order ? "md:order-1" :"md:order-2" }`}>
        <h1 className='w-full text-xl sm:text-2xl text-center md:text-left text-[var(--primary-active-color)] font-bold mb-2 text-gray-800'>{ title }</h1>
        <p className='w-full text-sm text-gray-400 text-center md:text-left'>{ description }</p>
      </div>
    </div>
  );
};