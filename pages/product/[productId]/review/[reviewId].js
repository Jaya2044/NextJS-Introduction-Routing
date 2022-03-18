import React from 'react';
import { useRouter } from 'next/router';

function Review() {
  const router = useRouter();
  const {productId, reviewId} = router.query;
  return (
    <div>
        <h2>Review  {reviewId} from Product {productId}</h2>
    </div>
  )
}

export default Review