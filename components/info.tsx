import { IconMicrophone, IconCode, IconMap, IconMusic } from "@tabler/icons-react";

export default function Info() {
	return (
		<section className="w-full max-w-4xl mx-auto my-12 p-6 rounded-xl  bg-transparent text-white">
			<h2 className="text-3xl text-center md:text-5xl font-bold text-green-400 mb-2">FOSS FEST '25: The Vibe</h2>
			<p className="text-lg md:text-xl text-center text-neutral-200 mb-8">Get ready for an unforgettable fusion of tech, creativity, and community!</p>
			<div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
				<div className="flex flex-col items-center bg-[#182233] rounded-lg px-8 py-6">
					<span className="text-green-400 text-3xl font-bold mb-1">150+</span>
					<span className="text-neutral-300 text-base">Student Participants</span>
				</div>
				<div className="flex flex-col items-center bg-[#182233] rounded-lg px-8 py-6">
					<span className="text-green-400 text-3xl font-bold mb-1">50+</span>
					<span className="text-neutral-300 text-base">Hackathon Coders</span>
				</div>
			</div>
			<h3 className="text-2xl font-semibold mb-6">The Experience</h3>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div className="bg-[#182233] rounded-lg p-6 flex flex-col items-center">
					<IconMicrophone className="text-green-400 mb-3" size={36} />
					<h4 className="font-bold mb-2">Expert Talks</h4>
					<p className="text-sm text-neutral-300">Hear from industry pros & open-source pioneers.</p>
				</div>
				<div className="bg-[#182233] rounded-lg p-6 flex flex-col items-center">
					<IconCode className="text-green-400 mb-3" size={36} />
					<h4 className="font-bold mb-2">Skill-Up Workshops</h4>
					<p className="text-sm text-neutral-300">Get hands-on and learn practical skills.</p>
				</div>
				<div className="bg-[#182233] rounded-lg p-6 flex flex-col items-center">
					<IconMap className="text-green-400 mb-3" size={36} />
					<h4 className="font-bold mb-2">OS Treasure Hunt</h4>
					<p className="text-sm text-neutral-300">Embark on a thrilling, clue-cracking adventure.</p>
				</div>
				<div className="bg-[#182233] rounded-lg p-6 flex flex-col items-center">
					<IconMusic className="text-green-400 mb-3" size={36} />
					<h4 className="font-bold mb-2">Live Music & Beats</h4>
					<p className="text-sm text-neutral-300">Unwind and connect with amazing performances.</p>
				</div>
			</div>
		</section>
	);
}
