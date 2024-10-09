import { useEffect, useState } from 'react'
import { AppContext } from '../../App'
import { CustomButton } from '../../components/common/button'
import { Graphic } from '../../components/common/graphic'
import { randomColor } from '../../utils/tool'

const BANNER_IMAGE = require('../../assets/images/banner/word-cloud.webp')

const JS_ICON = require('../../assets/images/icons/js_active.png')
const TS_ICON = require('../../assets/images/icons/ts_active.png')
const VUE_ICON = require('../../assets/images/icons/vue_active.png')
const NODE_ICON = require('../../assets/images/icons/node_active.png')
const REACT_ICON = require('../../assets/images/icons/react_active.png')
const CSS_ICON = require('../../assets/images/icons/css_active.png')
const SASS_ICON = require('../../assets/images/icons/sass_active.png')
const ARKTS_ICON = require('../../assets/images/icons/arkts_active.png')
const FLUTTER_ICON = require('../../assets/images/icons/flutter_active.png')
const ICONS_LIST = [JS_ICON, TS_ICON, VUE_ICON, NODE_ICON, REACT_ICON, CSS_ICON, SASS_ICON, ARKTS_ICON, FLUTTER_ICON];

const HomePage = () => {

  const [colors, setColors] = useState<string[]>([])

  useEffect(() => {
    let _colors = [];
    for (let i = 0; i < 11; i++) {
      _colors.push(randomColor());
    }
    setColors(_colors)    
  }, [])

  return (
    <AppContext.Consumer>
      {({ text, setText }) => (
        <div className="w-full min-h-80 xl:min-h-[60vh]">
          {/* 主体大图 */}
          <div className="w-full min-h-80 xl:min-h-[60vh] bg-gray-100 px-12">
            <div className='w-full md:w-1/2 min-h-80 xl:min-h-[60vh] flex flex-col justify-center items-start'>
              <h1 className='w-full text-2xl sm:text-4xl text-center md:text-left font-bold mb-4 text-gray-800'>李啸竹的个人简历</h1>
              <p className='w-full text-sm text-gray-500'>能独立从0到1完成中小型项目，开发经验5年多，带20人团队经验2年左右。参与并完成各种大大小小的项目，能解决项目开发过程中遇到的大多数问题并善于攻坚，实战派，爱学习，喜欢研究新技术，自带资源，我的能力可以匹配工资，同时如果公司能保证项目持续，我也能为公司创造远超我工资数倍的价值。</p>
              <div className='w-full flex pt-6 justify-center md:justify-start'>
                <CustomButton style={"w-32 mr-2 "} en={"Give me the project"} zh={"找我做项目"}  />
                <CustomButton en={"Give me an offer"} zh={"给我Offer"}  />
              </div>
            </div>
          </div>
          {/* 技术栈文字云 */}
          <div className='w-full flex flex-col justify-center items-center'>
            <img src={BANNER_IMAGE} alt="word cloud" />
          </div>
          {/* 技术栈描述 */}
          <div className='w-full flex flex-col justify-center items-center py-2'>
            <h1 className='w-4/5 text-md md:text-2xl font-bold mb-2 text-gray-500 text-center'>全面的技术栈</h1>
            <p className='w-4/5 md:w-1/4 text-xs md:text-sm text-gray-400 text-center'>作为在前端行业沉浸多年的资深程序员</p>
            <p className='w-4/5 md:w-1/4 text-xs md:text-sm text-gray-400 text-center'>不敢夸大其词的说自身已经做到了所有技术全部精通</p>
            <p className='w-3/5 md:w-1/3 text-xs md:text-sm text-gray-400 text-center'>写个B/S架构，Android/iOS，H5，C端，小程序等等，都能从0到1</p>
          </div>
          {/* 技术栈图标 */}
          <div className='w-full flex justify-center items-center'>
            <ul className='w-4/5 md:w-1/2 inline-flex justify-around items-center py-2'>
              {
                ICONS_LIST.map((icon) => <li><img src={icon} width={'30px'} /></li> )
              }
            </ul>
          </div>
          {/* 项目展示 */}
          <div className='w-full flex flex-col items-center py-2'>
            <h1 className='w-4/5 text-md md:text-2xl font-bold mb-2 text-gray-500 text-center'>我的项目集合</h1>
            <div className='w-full flex flex-col px-2 md:px-4'>
              <ul className='w-full grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-4'>
                <li className={`h-80 bg-gray-100 hidden md:block col-span-2`}></li>
                <li className='h-80 bg-gray-100 col-span-4 md:col-span-4'></li>
                <li className='h-80 bg-gray-100 col-span-4 md:col-span-4'></li>
                <li className='h-80 bg-gray-100 col-span-2'></li>
                <li className='h-80 bg-gray-100 md:hidden col-span-2'></li>

                <li className='h-80 bg-gray-100 col-span-4'></li>
                <li className='h-80 bg-gray-100 hidden md:block col-span-3'></li>
                <li className='h-80 bg-gray-100 hidden md:block col-span-2'></li>
                <li className='h-80 bg-gray-100 md:hidden col-span-2'></li>
                <li className='h-80 bg-gray-100 hidden md:block col-span-3'></li>
                <li className='h-80 bg-gray-100 md:hidden col-span-2'></li>
              </ul>
              <div className='w-full flex justify-center items-center py-2'>
                <CustomButton style={"mt-2 bg-transparent hover:bg-transparent hover:text-[#167a26] border-[1px]"} en={"View All Projects"} zh={"查看全部项目"}  />
              </div>
            </div>
          </div>
          {/* 响应图 */}
          <div className='w-full flex flex-col'>
            <Graphic order={ true } title={ "响应式" } description={ "在生产环境，如果一个项目需要写多套代码会极大提高开发成本，用一套代码适配多种设备是前端最重要的基础能力之一，本站适配大多主流设备的屏幕尺寸，以保证访问时的体验无差异。" } />
            <Graphic order={ false } title={ "自学能力强" } description={ "多年的开发，我发现在项目开发过程中，根据需求的不同，需要可的技术也可能多种多样。在工作环境，不会给出太多时间去学习，毕竟公司是以盈利为导向的，快速的学习并投入到项目中，是我一大的优势。" } />
            <Graphic order={ true } title={ "自带资源" } description={ "2023年经朋友介绍，我带着几个朋友一起做了一个中大型项目，业绩差不多30万，我可以在有需要的时候快速的完成团队的组建，也可以在有支撑的情况下拓展项目。" } />
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

HomePage.propTypes = {}

export default HomePage