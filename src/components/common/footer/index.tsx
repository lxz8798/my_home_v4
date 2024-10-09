interface IFooterProps {

}

export const Footer = (props:IFooterProps) => {

	return (
		<div className="w-full h-10 bg-gray-900 px-4 flex justify-center md:justify-between items-center text-white text-[10px]">
			<p>Copyright © 2024 MadBox. all rights reserved</p>
		</div>
	);
};