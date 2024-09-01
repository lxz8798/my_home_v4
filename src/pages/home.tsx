import React from 'react'
import PropTypes from 'prop-types'
import NavigatorComp from '../components/common/navigator/'

const HomePage = () => {
  return (
    // px-0 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40
    <div className="w-screen">
      <NavigatorComp />
      <div className='w-full min-h-screen px-0 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40'></div>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage