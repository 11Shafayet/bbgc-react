import Hero from '/src/components/home/Hero';
import AdditionalLinks from '/src/components/home/AdditionalLinks';
import ImLinks from '/src/components/home/ImLinks';
import Marquee from '/src/components/home/Marquee';
import PrincipalBio from '/src/components/home/PrincipalBio';
import PrincipalMessage from '/src/components/home/PrincipalMessage';
import SebaBox from '/src/components/home/SebaBox';
import Technics from '/src/components/home/Technics';
import Terms from '/src/components/home/Terms';
import VicePriBio from '/src/components/home/VicePriBio';
import VicePriMes from '/src/components/home/VicePriMes';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <div className="container mx-auto px-4">
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          <SebaBox />
          <PrincipalMessage />
          <PrincipalBio />
          <ImLinks />
          <VicePriMes />
          <VicePriBio />
          <AdditionalLinks />
          <Technics />
          <Terms />
        </div>
      </div>
    </>
  );
}
