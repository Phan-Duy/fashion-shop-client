import Link from 'next/link';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - DSHOP</title>
        <meta name="description" content="Contact information for DSHOP" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8 text-lg">
        Please contact me!
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="mb-4">
            <p className="font-bold">Email:</p>
            <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
              trduy.1002@gmail.com
            </a>
          </div>
          <div className="mb-4">
            <p className="font-bold">Phone:</p>
            <a href="tel:+84384845301" className="text-blue-500 hover:underline">
              +84384845301
            </a>
          </div>
          <div className="mb-4">
            <p className="font-bold">Address:</p>
            <p>453 Kha Van Can, Hiep Binh Chanh ward, Ho Chi Minh City, Viet Nam</p>
          </div>
        </div>
        <Link href="/">
          <a className="mt-8 text-blue-500 hover:underline">Back to Home</a>
        </Link>
      </div>
    </>
  );
};

export default Contact;

