import { Fragment } from 'react';
import { Link } from 'react-router-dom';


interface IMenuItemProps {
	to: string;
	name?: string;
	params?: string;
	children: IMenuItemProps[];
	component?: null;
}

export const MenuItem = ({ name, to, children }: IMenuItemProps) => {
	const DownIcon = require("../../../assets/images/icons/down.png");
	return (
		<Fragment>
			<li className='flex items-center relative group py-2 px-2 md:px-4 rounded-md hover:bg-gray-100'>
				<Link className='text-xs hover:text-[var(--primary-color)] duration-300 ease-in-out' to={to}>{ name }</Link>
				{
					children.length ? <img className='rotate-180 group-hover:rotate-0 duration-100 ease-in-out' src={DownIcon} alt="down" width="20" height="20" /> : null
				}
				{
					children.length ? (
						<ul className='min-w-28 absolute top-full left-0 rounded-md border border-[var(--border-color)] bg-white hidden group-hover:block'>
							{
								children.map((child, index) => (
									<MenuItem key={index} to={child.to} name={child.name} params={child.params} children={child.children} />
								))
							}
						</ul>
					) : null
				}
			</li>
		</Fragment>
	);
};