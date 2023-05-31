import { Audio } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center w-screen m-auto mt-10'>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#0077b6"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />      
        {/* Loading... */}
    </div>
  )
}
