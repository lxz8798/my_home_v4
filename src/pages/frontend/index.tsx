import { AppContext } from '../../App'

const HomePage = () => {
  return (
    <AppContext.Consumer>
      {({ text, setText }) => (
        <div className="w-full">
          <div className='w-full min-h-[calc(100vh-3.5rem)] px-0 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40'>{text}</div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

HomePage.propTypes = {}

export default HomePage