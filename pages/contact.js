import React from 'react';
import Link from 'next/link';

function contact() {
  return (
    <div>
      <div>Contact</div>
      <div>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default contact;
