import '../styles/globals.css'
import Navbar from './components/navbar'


function MyApp({ Component, pageProps }) {
  return <>
  <div className='flex flex-col h-screen'>
    <Navbar />
    <Component {...pageProps} />
  </div>
  </>
}

export default MyApp