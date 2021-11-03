import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <div> Pagina de admin de usuario</div>
            <Link href='/'>
            <a>ir al home</a>
            </Link>
        </div>
    )
}

export default index
