import React from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics, aliens } from "../constants/index";
import { bigShoe1 } from "../assets/images";
import setScrollVar from "../components/animation";

function Hero() {
  // aliens.map((alien) => {
  //   console.log(alien);
  // });
  return (
    <>
      <div className="images">
        {shoes.map((alien, index) => {
          console.log(alien, index);
          return (
            <img
              className={
                "translate-x-0 translate-y-[100%] transition-transform  delay-[250ms] " +
                (index == 0 ? "show translate-y-0" : "hidden")
              }
              src={alien.bigShoe}
              alt={alien.label}
            />
          );
        })}
      </div>
      <section
        id="home"
        className="hero  h-[100vh]  w-full flex xl:flex-row flex-col justify-conter min-h-screen gap-10  border-4 border-red-500 p-2"
      >
        <div className="left relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red relative top-4 z-10 text-[80px] pr-10 xl:whitespace-nowrap">
              Nike Elemental Magic
            </span>
            <br />
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfory and innovation for
            your active lifestyle.
          </p>
          <Button label="Show now" iconUrl={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 mb-2 font-bold gap-16">
            {statistics.map((stat, index) => (
              <div>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoe1}
            alt=""
            width={610}
            height={540}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(imgUrl) => {
                    console.log(imgUrl);
                  }}
                  bigSHoeImage=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
