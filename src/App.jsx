
import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Background/Navbar/Navbar";
import Hero from "./Components/Background/Navbar/Hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "What your Love" },
    { text1: "I like some", text2: "Where are you" },
    // { text1: "I like Mountain", text2: "Amazing Surprise" },
    { text1: "This make by", text2: "Mr Babul" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
