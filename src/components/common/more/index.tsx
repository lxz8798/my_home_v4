interface IMoreLinksProps {

}

export const MoreLinks = (props: IMoreLinksProps) => {

  return (
    <div className="w-full h-40 bg-gray-300 px-4 flex justify-beetween items-center">
			<ul className="w-1/2 h-full flex justify-end md:justify-start items-center pr-28 md:pr-40">
        <li>111</li>
      </ul>

      <ul className="w-1/2 h-full flex justify-start items-center pl-28 md:pl-0">
        <li>222</li>
      </ul>
		</div>
  );
};