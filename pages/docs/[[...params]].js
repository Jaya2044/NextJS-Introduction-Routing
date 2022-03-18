import { useRouter } from 'next/router'
import React from 'react'

function Docs() {
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params)
 
  if(params.length ===2) {
      return <h2>Viewing doc for feature {params[0]} and concept {params[1]}</h2>
  } else if(params.length === 1) {
      return <h2>Viewing doc for feature {params[0]}</h2>
  } else {
      return <h2>Doc Home page</h2>
  }
}

export default Docs