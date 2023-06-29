'use client'
import Image from 'next/image';
import NavBar from './NavBar';

const Home = () => {
  const heroImage = '/responsive/public/heroImage.jpg';

  return (
    <main>
      <NavBar />

      <p>Unhappy with your website?</p>
      <h1>We create beautiful and fast web services</h1>
      <Image  src={heroImage} alt="heroImage" width={3840} height={400} />
    </main>
  );
};

export default Home;

