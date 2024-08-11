import Image from "next/image";

let hi = "";
const practiceAreas = [
  {
    icon: "/car.svg",
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
    icon: "/pedestrian.svg",
    name: "Pedestrian Accident Protection",
    description:
      "Vigorous representation for pedestrians injured by vehicles. We hold negligent drivers accountable and advocate for safer streets while ensuring our clients receive maximum compensation for their injuries.",
  },
  {
    icon: "/truck.svg",
    name: "Commercial Truck Collision Cases",
    description:
      "Skilled handling of complex truck accident claims. We take on large trucking companies and their insurers to secure justice for victims of these often catastrophic crashes.",
  },
  {
    icon: "/tomb.svg",
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
          src="/hero-image.png"
          fill
          objectFit="cover"
          alt="Image of Dr Pamoyo"
        />
        <div className="absolute">
          <h1 className="max-w-lg text-6xl text-white font-georgia">
            The #1 Personal Injury Lawyer
          </h1>
          <p className="max-w-lg text-2xl text-white">
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
    <div>
      <div>
        <h2 className="font-georgia text-[42px] text-white">
          Request a Consultation
        </h2>
        <p>
          Get a free quote 30 - 60 minute consultation, please complete the
          online form below.
        </p>
        <form>
          <input placeholder="Full Name" />
          <input placeholder="Phone Number" />
          <input placeholder="Email Address" />
          <input placeholder="Tell us about your case" />
          <button>Request a Consultation</button>
        </form>
      </div>
      <div>
        <h2 className="uppercase">about us</h2>
        <h3 className="font-georgia text-[42px] text-brand-red">
          Highly Qualified & Experienced in Personal Injury Law
        </h3>
        <p>
          We have expertise in many aspects of personal injury law. We fight to
          ensure our clients and their families receive the compensation, care
          and support they deserve. We proudly act as your advocate and trusted
          advisor through the complex legal, medical and insurance issues
          related to your recovery.
        </p>
        <Image
          src="/signature.png"
          width="196"
          height="28"
          alt="signature of Dr. Pamoyo"
        />
        <span>Founder & Senior Lawyer</span>
      </div>
    </div>
  );
}
function AreaOfPractice() {
  return (
    <div>
      <div>
        <h2 className="uppercase">practice area</h2>
        <h3 className="font-georgia text-[42px] text-brand-red">
          A range of Practice Areas
        </h3>
        <div>
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
    <div>
      <span>
        <Image
          src={props.icon}
          width={80}
          height={80}
          alt="icon for"
          aria-disabled
        />
      </span>
      <h3 className="text-xl font-bold font-georgia">{props.name}</h3>
      <p className="max-w-80">{props.description}</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div>
      <div>
        <div>
          <h2 className="uppercase">testimonials</h2>
          <h3 className="font-georgia text-[42px] text-brand-red">
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
        <div>
          <p>
            Working with Dr. Moyo was an exceptional experience during a
            challenging time. His deep legal expertise, coupled with a
            compassionate approach, made navigating my case much easier. Dr.
            Moyo was always available to answer my questions, ensuring I fully
            understood each step. I highly recommend Dr. Moyo to anyone seeking
            a lawyer who combines legal excellence with a personal touch.
          </p>
          <div>
            <div>
              <Image
                className="rounded-full"
                src="/miss-kaombe.jpg"
                height={80}
                width={80}
                alt="image of Miss Kaombe"
              />
            </div>
            <div>
              <span className="font-bold">Miss Kaombe</span>
              <span>Psychologist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <div className="bg-[url('/footer-image.png')] bg-cover bg-center min-h-[700px]"></div>
    </div>
  );
}
