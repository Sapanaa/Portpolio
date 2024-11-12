import { Button } from "@/components/ui/moving-border";




export const MainBody = () => {



  return (
    <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <p className="text-5xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent  bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
        <span className="dark:text-white text-black ">Hi, Its me </span> SAPANA DHAMI
      </p>
      <p className="text-lg">I am a passionate and dedicated full-stack developer with experience in building dynamic web applications</p>
      <div className="flex flex-row justify-between items-center gap-x-6">
      <Button
        borderRadius="1.95rem"
        className="bg-transparent relative text-xl overflow-hidden dark:bg-transparent dark:text-white text-black"
      >
        View my work
      </Button>
      <div className="flex items-center justify-center py-4">
      <Button
        className="bg-transparent dark:bg-transparent dark:text-white text-black border-2 border-black dark:border-white px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300"
        onClick={() => {
          navigator.clipboard.writeText("sapanadhami@gmail.com");
          alert("Email copied");
        }}
      >
        Copy email address
      </Button>
    </div>
      </div>
    </div>
  );
};
