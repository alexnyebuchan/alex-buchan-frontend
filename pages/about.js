import Link from 'next/link';

function about() {
  return (
    <div>
      <div>About</div>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default about;
