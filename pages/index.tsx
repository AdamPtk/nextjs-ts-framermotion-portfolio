import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white text-center snap-y snap-mandatory z-0 overflow-hidden h-screen">
      <Head>
        <title>Adam&apos;s portfolio</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* projects */}
      {/* Contact me */}
    </div>
  );
}
