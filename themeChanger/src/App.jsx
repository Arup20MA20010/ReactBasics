import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/themeBtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  useEffect(() => {
    const htmlclasslist = document.querySelector("html").classList;
    htmlclasslist.remove("light", "dark");
    htmlclasslist.add(isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
