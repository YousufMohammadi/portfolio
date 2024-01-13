import { About } from "../Components/About";
import { Abstract } from "../Components/Abstract";
import { Contact } from "../Components/Contact";
import { Header } from "../Components/Header";
import { Projects } from "../Components/Projects";
import { Skills } from "../Components/Skills";

export function Home() {
    return <div>
        <Header />
        <Abstract />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
}