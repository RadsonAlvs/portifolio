import Profile from "./Components/Profile/Profile";
import photo from "./Assets/img/perfil.webp";
import SwitcherColor from "./Components/SwitcherColor/SwitcherColor";

export default function Home() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#151515] relative" id="home">
      <div className="container mx-auto px-4 py-16">
        <Profile
          presentation="Hi, my name is"
          name="Radson Brendon"
          profession="I'm Developer"
          jobs={["Fullstack", "Backend"]}
          description="I have dedicated the past two years to studying and practicing web development. I specialize in both front-end and back-end technologies. I am always striving to learn and implement the best practices in web development to create exceptional user experiences."
          buttonHref="contact"
          buttonText="Get in touch"
          photo={photo.src}
          alt="Radson Brendon's photo"
        />
      </div>
      <div className="absolute top-4 right-4 space-y-2">
        <SwitcherColor />
      </div>
    </section>
  );
}
