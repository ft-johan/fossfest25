import { IconMicrophone, IconCode, IconMap, IconMusic } from "@tabler/icons-react";
import CountUp from "./ui/count";

export default function Info() {
	return (
		<section id="blocks" className="w-full max-w-4xl mx-auto my-12 p-6 rounded-xl  bg-jyellow text-white">
			<h2 className="text-3xl text-center md:text-5xl font-bold font-jfont text-jblue mb-2">FOSS FEST 25: The Vibe</h2>
			<p className="text-lg md:text-xl text-center text-neutral-200 mb-8">Get ready for an unforgettable fusion of tech, creativity, and community!</p>
			<div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
				<div className="flex flex-col items-center bg-joranage rounded-lg px-8 py-6">
					<CountUp
						from={0}
						to={250}
						separator=","
						direction="up"
						duration={1}
						className="text-jblue text-3xl font-bold font-jfont mb-1"
					/>

					<span className="text-white font-jfont text-base">Student Participants</span>
				</div>
				<div className="flex flex-col items-center bg-joranage rounded-lg px-8 py-6">
					<CountUp
						from={0}
						to={50}
						separator=","
						direction="up"
						duration={1.5}
						className="text-jblue text-3xl font-jfont font-bold mb-1"
					/>
					<span className="text-white text-base font-jfont">Hackathon Coders</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div className="bg-joranage rounded-lg p-6 flex flex-col items-center">
					<IconMicrophone className="text-jblue mb-3" size={36} />
					<h4 className="font-bold font-jfont mb-2">Expert Talks</h4>
					<p className="text-sm text-white">Hear from industry pros & open-source pioneers.</p>
				</div>
				<div className="bg-joranage rounded-lg p-6 flex flex-col items-center justify-center">
					<IconCode className="text-jblue mb-3" size={36} />
					<h4 className="font-bold font-jfont text-center mb-2">Skill-Up Workshops</h4>
					<p className="text-sm text-white">Get hands-on and learn practical skills.</p>
				</div>
				<div className="bg-joranage rounded-lg p-6 flex flex-col items-center">
					<IconMap className="text-jblue mb-3" size={36} />
					<h4 className="font-bold font-jfont mb-2">OS Treasure Hunt</h4>
					<p className="text-sm text-white">Embark on a thrilling, clue-cracking adventure.</p>
				</div>
				<div className="bg-joranage rounded-lg p-6 flex flex-col items-center">
					<IconMusic className="text-jblue mb-3" size={36} />
					<h4 className="font-bold font-jfont mb-2">Live Music & Beats</h4>
					<p className="text-sm text-white">Unwind and connect with amazing performances.</p>
				</div>
			</div>
		</section>
	);
}
