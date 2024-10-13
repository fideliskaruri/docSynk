import Image from "next/image";

export default function Home() {
  return (

    <div className="flex flex-col align-center items-center mt-32">
      <div className="flex flex-col items-center gap-24 w-full justify-center mb-48">
        <div className="flex flex-col items-center  gap-8">
          <h1 className="text-5xl font-medium text-center">Seamless Collaboration. Anytime, Anywhere</h1>
          <p className="text-gray-600 text-lg text-center tracking-wide w-3/4">Collaborate in real-time, track every change, and import your documents with ease. All on the cloud.</p>
        </div>
        <div className="flex gap-8">
          <button className="bg-gradient-to-r from-primary to-secondary p-4 text-white font-bold rounded-md w-52">Get Started</button>
          <button className="text-gray-800 w-52 font-bold border border-gray-800 rounded-md" >Learn more...</button>
        </div>


      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4  items-center">
          <p className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl">Real-time collaboration with your team.</p>
          <p className="text-center text-md text-gray-600 w-3/4 mb-10">Work with your team in real-time, seeing changes as they happen. Perfect for remote work and collaboration.</p>
        </div>
        <Image className="border border-gray-300 rounded-lg " src="/gifs/demo.gif" alt="Real-time collaboration" width={800} height={800} />
      </div>

    </div>
  );
}
