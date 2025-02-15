import Profile from "./Components/Profile/Profile";
import photo from "./assets/img/perfil.webp";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen bg-white dark:bg-[#151515] relative">
      <div className="container mx-auto px-4 py-16">
        <Profile
          presentation="Hi, my name is"
          name="Radson Brendon"
          profession="I am "
          jobs={["Developer FullStack", "Developer Backend"]}
          description="I have dedicated the past two years to studying and practicing web development. I specialize in both front-end and back-end technologies. I am always striving to learn and implement the best practices in web development to create exceptional user experiences."
          buttonHref="contact"
          buttonText="Get in touch"
          photo={photo.src}
          alt="Foto de Radson Brendon"
        />
      </div>
    </main>
  );
}
