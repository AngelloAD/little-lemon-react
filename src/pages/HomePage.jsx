import Hero from "../components/Home/Hero";
import Highlights from "../components/Home/Highlights";
import Testimonials from "../components/Home/Testimonials";
import About from "../components/Home/About";

export default function HomePage() {
  return (
    // The container ensures consistent horizontal spacing
    // across all main pages of the application
    <main className="container">
      {/* Primary visual and call-to-action section */}
      <Hero />

      {/* Featured dishes or main selling points */}
      <Highlights />

      {/* Social proof to build trust with users */}
      <Testimonials />

      {/* Brand story and restaurant background */}
      <About />
    </main>
  );
}
