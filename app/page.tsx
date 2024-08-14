import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
  {
    icon: "/car.png",
    name: "Auto Collision Claims",
    description:
      "Expert representation for victims of car accidents, ensuring fair compensation for injuries, property damage, and lost wages. We navigate complex insurance claims and litigation to protect your rights.",
  },
  {
    icon: "/bike.png",
    name: "Bicycle Accident Advocacy",
    description:
      "Specialized legal support for cyclists injured in road accidents. We understand the unique challenges faced by bicycle accident victims and fight for comprehensive compensation and improved road safety.",
  },
  {
    icon: "/motorcycle.png",
    name: "Motorcycle Injury Litigation",
    description:
      "Dedicated legal assistance for motorcyclists involved in accidents. We combat bias against riders and work tirelessly to secure full compensation for injuries, bike damage, and long-term care needs.",
  },
  {
    icon: "/pedestrian.png",
    name: "Pedestrian Accident Protection",
    description:
      "Vigorous representation for pedestrians injured by vehicles. We hold negligent drivers accountable and advocate for safer streets while ensuring our clients receive maximum compensation for their injuries.",
  },
  {
    icon: "/truck.png",
    name: "Commercial Truck Collision Cases",
    description:
      "Expertly handling complex truck accident claims. We challenge powerful trucking companies and their insurers to secure the justice and compensation that victims of these devastating crashes deserve.",
  },
  {
    icon: "/tomb.png",
    name: "Wrongful Death Representation",
    description:
      "Compassionate and determined advocacy for families who have lost loved ones due to others' negligence. We pursue maximum compensation while helping families find closure and justice.",
  },
];

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <AreaOfPractice />
      <Testimonial />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div className="h-[780px] overflow-hidden relative">
        <Image
          src="/hero-image.jpg"
          fill
          objectFit="cover"
          alt="Image of Dr Pamoyo"
        />
        <div className="absolute px-[100px] mt-[237px]">
          <h1 className="max-w-lg text-6xl text-white font-georgia">
            The #1 Personal Injury Lawyer
          </h1>
          <p className="max-w-lg mt-8 text-2xl text-white">
            With a 90% win rate, our clients can rest easier knowing that their
            case is positioned to secure the best possible outcome.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="px-[100px] mt-16">
      <div className="relative">
        <div className="absolute z-10 max-w-lg shadow-md -top-60 bg-brand-red">
          <div className="px-6 py-8">
            <h2 className="font-georgia text-[42px] text-white">
              Request a Consultation
            </h2>
            <p className="text-white">
              Get a free quote 30 - 60 minute consultation, please complete the
              online form below.
            </p>
          </div>
          <form className="flex flex-col items-start gap-4 p-6 bg-white">
            <input
              className="w-full p-4 border border-gray-600"
              placeholder="Full Name"
            />
            <input
              className="w-full p-4 border border-gray-600"
              placeholder="Phone Number"
            />
            <input
              className="w-full p-4 border border-gray-600"
              placeholder="Email Address"
            />
            <textarea
              className="w-full h-32 p-4 border border-gray-600"
              placeholder="Tell us about your case"
            />
            <button className="px-6 py-3 text-white bg-brand-red">
              Request a Consultation
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-32">
          <div className=""></div>
          <div className="">
            <h2 className="uppercase">about us</h2>
            <h3 className="font-georgia font-bold tracking-tight leading-tight text-[42px] text-brand-red">
              Highly Qualified & Experienced in Personal Injury Law
            </h3>
            <p className="mt-4 text-base">
              We have expertise in many aspects of personal injury law. We fight
              to ensure our clients and their families receive the compensation,
              care and support they deserve. We proudly act as your advocate and
              trusted advisor through the complex legal, medical and insurance
              issues related to your recovery.
            </p>
            <Image
              className="mt-12"
              src="/signature.png"
              width="196"
              height="28"
              alt="signature of Dr. Pamoyo"
            />
            <span>Founder & Senior Lawyer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function AreaOfPractice() {
  return (
    <div className="mt-32">
      <div className="px-[100px]">
        <h2 className="uppercase">practice area</h2>
        <h3 className="font-georgia text-[42px] text-brand-red">
          A range of Practice Areas
        </h3>
        <div className="grid items-center grid-cols-1 mt-24 gap-14 sm:grid-cols-2 md:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <ExampleArea
              key={index}
              icon={area.icon}
              name={area.name}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type area = {
  icon: string;
  name: string;
  description: string;
};

function ExampleArea(props: area) {
  return (
    <div className="">
      <div className=" max-w-[80px] max-h-[80px] min-w-[80px] min-h-[80px] flex items-center justify-center">
        <Image
          src={props.icon}
          width={80}
          height={80}
          alt="icon for"
          aria-disabled
        />
      </div>
      <h3 className="text-xl font-bold font-georgia">{props.name}</h3>
      <p className=" max-w-80">{props.description}</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="mt-32">
      <div className="flex justify-center px-[100px]">
        <div>
          <h2 className="uppercase">testimonials</h2>
          <h3 className="font-georgia text-[42px] text-brand-red leading-none">
            Hear what our past clients say
          </h3>
          <p>
            We strive to provide all of our clients with the best possible
            results and value how each feels about us and the services we have
            provided. We are honored by the reviews we have received from both
            past and present clients
          </p>
          <button>Request a Consultation</button>
        </div>
        <div className="max-w-xl pt-10">
          <div className="px-7">
            <p className="">
              Working with Dr. Moyo was an exceptional experience during a
              challenging time. His deep legal expertise, coupled with a
              compassionate approach, made navigating my case much easier. Dr.
              Moyo was always available to answer my questions, ensuring I fully
              understood each step. I highly recommend Dr. Moyo to anyone
              seeking a lawyer who combines legal excellence with a personal
              touch.
            </p>
          </div>
          <div className="mt-6 px-7">
            <div className="flex items-center gap-1">
              <div>
                <Image
                  className="rounded-full"
                  src="/miss-kaombe.jpg"
                  height={80}
                  width={80}
                  alt="image of Miss Kaombe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">Miss Kaombe</span>
                <span>Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  const list = [
    { name: "Car Accidents", url: "url" },
    { name: "Bicycle Accidents", url: "url" },
    { name: "Motorcycle Accidents", url: "url" },
    { name: "Pedestrian Accidents", url: "url" },
    { name: "Truck Crashes", url: "url" },
    { name: "Wrongful Death", url: "url" },
  ];
  return (
    <div className="mt-24 bg-red-600">
      <div className="">
        <div className="bg-[url('/footer-image-1.jpg')] bg-cover bg-center min-h-[700px] ">
          <div className="px-[100px] ">
            <div className="pt-24">
              <h2 className="text-white text-[14px] uppercase">Contact us</h2>
              <h3 className="text-white font-georgia bold text-[42px] max-w-lg">
                We are here to help you with law questions
              </h3>
            </div>
            <div className="flex justify-between gap-10 mt-24">
              <div>
                <h4 className="text-2xl font-bold text-white">Contact</h4>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={"/building.svg"}
                      width={24}
                      height={24}
                      alt="phone icon"
                    />
                  </div>
                  <div>
                    <p className="text-white max-w-60">
                      Toronto Law Personal Injury 3354 Sheppard Ave Toronto
                      Ontario
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={"/phone.svg"}
                      width={24}
                      height={24}
                      alt="phone icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white">hello@example.com</span>
                    <span className="text-white"> +1 555 555 5555</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Practice Area</h4>
                <div>
                  <ul>
                    {list.map((item, index) => (
                      <li key="index">
                        <ListItem name={item.name} url={item.url} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Social Media</h4>
                <div className="flex gap-5">
                  <div className="p-2 bg-white">
                    <Image
                      src={"/fb-logo.png"}
                      alt="alt"
                      height={16}
                      width={16}
                    />
                  </div>
                  <div className="p-2 bg-white">
                    <Image
                      src={"/twitter-logo.png"}
                      alt="alt"
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="p-2 bg-white">
                    <Image
                      src={"/linkedin-logo.png"}
                      alt="alt"
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="p-2 bg-white">
                    <Image
                      src={"/instagram-logo.png"}
                      alt="alt"
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem({ name, url }: { name?: string; url: string }) {
  return (
    <div className="inline-flex items-center gap-1">
      <span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <Link href={url} className="text-white">
        {name}
      </Link>
    </div>
  );
}
