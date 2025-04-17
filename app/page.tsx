import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItsWork";
import JoinWaitlist from "@/components/JoinWaitlist";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <div>
          <HowItWorks/>
        </div>
        <div className="w-full flex justify-center items-center">
          <JoinWaitlist/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
