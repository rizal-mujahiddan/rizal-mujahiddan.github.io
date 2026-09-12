import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import FooterCustom from "../components/layout/FooterCustom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterCustom />
    </div>
  );
}