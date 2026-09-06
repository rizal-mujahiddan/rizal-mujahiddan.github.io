import FooterCustom from "@/components/layout/FooterCustom";
import NavBar from "@/components/layout/NavBar";
import { Card, CardContent, CardHeader } from "@mui/material";
import { SkillsTutorial } from "./skills-tutorial";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="max-w-screen-2xl mx-auto px-8 py-12">
        <main>
          <article className="flex items-center justify-center content-between w-screen">
            <SkillsTutorial />
          </article>
        </main>
      </div>
      <FooterCustom />
    </div>
  );
}
