import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Home() {
  const router = useRouter();


  const handleClick = () => {
    router.replace('/product')
  }

  return (
    <div>
        <h2>Home Page</h2>
        <Link href='/blog'>
           <a>Blog</a>
        </Link>
        <br />
        <Link href='/product'>
           <a>Product</a>
        </Link>
        <br />
        <button onClick={handleClick}>Place Order</button>

    </div>
  )
}

export default Home