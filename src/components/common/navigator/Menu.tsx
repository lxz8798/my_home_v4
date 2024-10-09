// 创建一个Menu组件，用于渲染菜单 
import { MenuItem } from './MenuItem';

import HomePage from '../../../pages/home';
import FrontendPage from '../../../pages/frontend';
import BackPage from '../../../pages/backend';
import DesignerPage from '../../../pages/designer';
import ProjectPage from '../../../pages/project';
import { CustomButton } from '../button';

// interface IMenuProps {
// 	id: number;
// 	name: string;
// 	to: string;
// 	component: React.ComponentType;
// }

export const MenuList = [
	{ id: 1, name: 'HOME', to: '/',	children: [], component: HomePage },
	{ id: 2, name: 'FRONTEND', to: '/frontend', children: [
		{ id: 21, name: 'JS/TS', to: '/js', children: [], component: null },
		{ id: 22, name: 'VUE2/VUE3', to: '/vue', children: [], component: null },
		{ id: 23, name: 'REACT/RN', to: '/react', children: [], component: null },
		{ id: 24, name: 'ASKTS', to: '/askts', children: [], component: null },
		{ id: 25, name: 'FLUTTER', to: '/flutter', children: [], component: null },
		{ id: 26, name: 'ELECTRON', to: '/electron', children: [], component: null },
		{ id: 27, name: 'OPENLAYERS', to: '/openlayers', children: [], component: null },
		{ id: 28, name: 'THREEJS', to: '/threejs', children: [], component: null },
	], component: FrontendPage },
	{ id: 3, name: 'BACKEND', to: '/backend', children: [
		{ id: 31, name: 'NODEJS', to: '/nodejs', children: [], component: null },
		{ id: 32, name: 'EGGJS', to: '/eggjs', children: [], component: null },
		{ id: 33, name: 'PYTHON', to: '/python', children: [], component: null },
	], component: BackPage },
	{ id: 4, name: 'DESIGNER', to: '/Designer', children: [
		{ id: 41, name: 'PS', to: '/ps', children: [], component: null },
		{ id: 42, name: 'FIGMA', to: '/figma', children: [], component: null },
		{ id: 43, name: 'FRAMER', to: '/framer', children: [], component: null },
	], component: DesignerPage },
	{ id: 5, name: 'PROJECT', to: '/Project',	children: [], component: ProjectPage },
]

export const Menu = () => {
	return (
		<div className='flex items-center'>
			<ul className='flex gap-x-2 md:gap-x-4'>
				{
					MenuList.map((item) => <MenuItem to={item.to} name={item.name} children={item.children} /> )
				}
				<li className='hidden md:block'>
					<CustomButton en={"Contact Me"} zh={"联系我"} />
				</li>
			</ul>
		</div>
	);
};