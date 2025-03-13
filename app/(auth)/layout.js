import Navbar from '../../components/navbar/Navbar';

const AuthLayout = ({children}) => {
  return (
    <div className=''>     
        <Navbar  />
      {children}
    </div>
  )
}

export default AuthLayout
