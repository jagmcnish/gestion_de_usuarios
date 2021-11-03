import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
     <p> Pagina Index</p>
       <Link href='/admin/usuarios'>
         <p className='cursor-pointer'> Ir aa admin de usuarios</p>
       </Link>
    </div>
  );
};

export default Home
