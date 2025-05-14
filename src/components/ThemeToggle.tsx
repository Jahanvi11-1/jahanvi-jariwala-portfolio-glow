
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full bg-portfolio-accent/10 hover:bg-portfolio-accent/20 dark:bg-portfolio-skyblue/10 dark:hover:bg-portfolio-skyblue/20"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-portfolio-accent" />
      ) : (
        <Moon className="h-5 w-5 text-portfolio-skyblue" />
      )}
    </Button>
  );
}
