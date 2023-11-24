import  { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Redirect to http://localhost:3001/ when the component mounts
    window.location.href = "https://mern-project-final-ivory.vercel.app/";
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // This component doesn't render anything since it redirects immediately

  return null;
}

export default Home;
