import React from 'react';
import Link from 'next/link'

function ProductList() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <Link href="/"><a>Home</a></Link>
        <br />
        <Link href="/product/1"><a>Product 1</a></Link>
        <Link href="/product/2"><a>Product 2</a></Link>
        <Link href="/product/3" replace><a>Product 3</a></Link>
    </div>
  )
}

export default ProductList