import { About } from "../Components/About";
import { Abstract } from "../Components/Abstract";
import { Header } from "../Components/Header";
import { Skills } from "../Components/Skills";

export function Home() {
    return <div>
        <Header />
        <Abstract />
        <Skills />
        <About />
    </div>
}