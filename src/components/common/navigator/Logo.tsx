// const COMPUTER_ICON = require('../../../assets/images/responseIcons/computer.svg')
// const PHONE_ICON = require('../../../assets/images/responseIcons/phone.svg')
// const PAD_ICON = require('../../../assets/images/responseIcons/pad.svg')

import COMPUTER_ICON from "../../../assets/images/responseIcons/computer.svg";
import PHONE_ICON from "../../../assets/images/responseIcons/phone.svg";
import PAD_ICON from "../../../assets/images/responseIcons/pad.svg";

const RESPONST_LIST = [PAD_ICON, PHONE_ICON, COMPUTER_ICON]

export const Logo = () => {
  const Logo = require("../../../assets/images/logo.png");
  return (
    <div className="logo flex items-center">
      <img className="hidden md:block" src={Logo} alt="logo" width="50" height="50" />
      <span className="hidden md:block md:text-sm">lazy-studio.com</span>
      <ul className='inline-flex flex-row items-center gap-2 ml-4 hidden md:inline-flex'>
        {
          RESPONST_LIST.map((icon) => <li><img src={icon} width={'20px'} /></li> )
        }
      </ul>
    </div>
  );
};
