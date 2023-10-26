import Image from "next/image";

export default function AboutMe() {
	return (
		<section className="bg-portfolio-third pt-10">
			<img className="absolute top-full" src="/wave-primary-third.svg" />
			<img className="absolute bottom-[-100vh]" src="/wave-third-primary.svg" />
			<div>About Me</div>
			<Image
				className="rounded-full"
				alt="Lucas Passeri"
				width={200}
				height={200}
				src="https://avatars.githubusercontent.com/u/16906161?v=4"
			/>
			<div>
				I am being a front end developer for the last two years, the experience
				so far was very rewarding. Now, i am looking further to participate in
				bigger challenges, making pleasant and reliable tools.
			</div>
		</section>
	);
}
