"use client";
import TypewriterComponent from "typewriter-effect";

interface ProfileProps {
  presentation: string;
  name: string;
  profession: string;
  jobs: Array<string>;
  description: string;
  buttonText: string;
  buttonHref: string;
  photo?: string;
  alt?: string;
}

export default function Profile({
  presentation,
  name,
  profession,
  jobs,
  description,
  buttonText,
  buttonHref,
  photo,
  alt,
}: ProfileProps) {
  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <div className="flex flex-wrap relative">
        <div className="w-full lg:w-3/5">
          <h3 className="text-2xl my-4">
            {presentation}{" "}
            <span className="font-secondary text-3xl font-bold text-skin-base">{name}</span>
          </h3>

          <h3 className="flex flex-wrap items-center text-3xl">
            <p className="mr-2">
              {profession}
              <span className="text-skin-base">
                <TypewriterComponent
                  options={{
                    strings: jobs,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 60,
                  }}
                />
              </span>
            </p>
          </h3>
          <p className="my-4 mb-16 text-xl text-gray-700 dark:text-gray-300 ">{description}</p>

          <a
            href={`#${buttonHref}`}
            className="px-6 py-3 bg-skin-base text-white rounded hover:opacity-90 transition-opacity"
          >
            {buttonText}
          </a>
        </div>
        {photo && (
          <div className="hidden lg:flex w-2/5 pl-4 justify-center relative">
            <div className="relative">
              <div className="absolute -top-10 left-9 h-20 w-20 border-b-[10px] border-r-[10px] border-skin-base"></div>
              <img
                src={photo}
                alt={alt}
                className="w-full h-[35rem] object-cover object-top rounded "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
