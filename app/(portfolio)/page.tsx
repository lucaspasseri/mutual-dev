import AboutMe from "../components/portfolio/AboutMe";
import Introduction from "../components/portfolio/Introduction";
import NextSection from "../components/portfolio/NextSection";
import MySkill from "../components/portfolio/MySkills";
import MyProjects from "../components/portfolio/MyProjects";
import ContactMe from "../components/portfolio/ContactMe";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-portfolio-primary">
			<Introduction />
			<AboutMe />
			<MySkill />
			<MyProjects />
			<ContactMe />
			<NextSection />
		</main>
	);
}
