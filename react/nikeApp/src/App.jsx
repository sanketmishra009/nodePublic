import {
  Hero,
  CustomerReviews,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  Footer,
} from "./sections/index";
import setScrollVar from "./components/animation";

import Nav from "./components/Nav";

const APP = () => {
  setScrollVar();
  return (
    <main className="relative" id="main">
      <div className="scroll-watcher h-[10px] bg-coral-red fixed top-0 z-[1000] w-[100%] scale-x-[calc(var(--scroll)/100)] scale-y-1 "></div>
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer />
      </section>
    </main>
  );
};

export default APP;
