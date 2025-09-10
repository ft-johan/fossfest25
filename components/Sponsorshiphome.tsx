
export default function SponsorshipHome() {
	return (
		<section id="Sponsor" className="w-full min-h-[80vh] flex flex-col items-center justify-center px-2 py-12 text-center">
			<h2 className="text-4xl md:text-6xl font-bold font-jfont text-jblue mb-6">Partner with FOSS Fest CEK &#39;25</h2>
					<p className="max-w-3xl text-xl md:text-2xl text-jblue  mb-10">
						Sponsoring FOSS Fest is more than just a donation—it&#39;s an investment in the next generation of innovators. By partnering with us, you&#39;ll gain direct access to a highly engaged audience of aspiring developers and tech leaders.
					</p>
							{/* Why Sponsor Section */}
							<div className="w-full max-w-3xl mx-auto mb-12">
								<div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col justify-center items-start">
									<h3 className="text-xl md:text-2xl font-semibold font-jfont mb-4">Why Sponsor?</h3>
									<ul className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 list-disc pl-5 text-left space-y-2">
										<li><strong>Massive Visibility:</strong> Your brand gets highlighted across our website, social media, and on event banners and posters, ensuring maximum exposure to a highly engaged audience.</li>
										<li><strong>Talent Access:</strong> Directly engage with passionate learners from engineering and computer science backgrounds, opening doors for recruitment, internships, and mentorships.</li>
										<li><strong>Tech Advocacy:</strong> Position your brand as a strong supporter of the open-source ecosystem and ethical technology development.</li>
										<li><strong>Thought Leadership:</strong> Lead a talk or workshop session, sharing your vision with a tech-savvy audience.</li>
									</ul>
								</div>
							</div>

							{/* Sponsorship Tiers Section */}
							<div className="w-full max-w-5xl mx-auto mb-16">
								<h3 className="text-xl md:text-2xl font-semibold mb-6 text-jblue font-jfont text-left">Sponsorship Tiers</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
									<div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow p-4 flex flex-col items-center justify-center min-h-[180px]">
										<h4 className="text-lg md:text-xl font-bold mb-1 text-yellow-900 dark:text-yellow-100">Platinum</h4>
										<span className="text-base font-semibold mb-1 text-yellow-900 dark:text-yellow-100">INR 50,000</span>
										<ul className="text-sm md:text-base text-yellow-900 dark:text-yellow-100 list-disc pl-5 text-left">
											<li>Logo on website & event signage</li>
											<li>Blog post</li>
											<li>Workshop/talk slot</li>
										</ul>
									</div>
									<div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center justify-center min-h-[180px]">
										<h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Gold</h4>
										<span className="text-base font-semibold mb-1 text-gray-900 dark:text-gray-100">INR 30,000</span>
										<ul className="text-sm md:text-base text-gray-900 dark:text-gray-100 list-disc pl-5 text-left">
											<li>Logo on website & signage</li>
											<li>Social media branding</li>
											<li>Blog post</li>
										</ul>
									</div>
									<div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow p-4 flex flex-col items-center justify-center min-h-[180px]">
										<h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Silver</h4>
										<span className="text-base font-semibold mb-1 text-gray-900 dark:text-gray-100">INR 20,000</span>
										<ul className="text-sm md:text-base text-gray-900 dark:text-gray-100 list-disc pl-5 text-left">
											<li>Logo & company description on website</li>
											<li>Social media branding</li>
										</ul>
									</div>
									<div className="bg-orange-100 dark:bg-orange-900 rounded-lg shadow p-4 flex flex-col items-center justify-center min-h-[180px]">
										<h4 className="text-lg md:text-xl font-bold mb-1 text-orange-900 dark:text-orange-100">Bronze</h4>
										<span className="text-base font-semibold mb-1 text-orange-900 dark:text-orange-100">INR 10,000</span>
										<ul className="text-sm md:text-base text-orange-900 dark:text-orange-100 list-disc pl-5 text-left">
											<li>Logo & company description on website</li>
											<li>Social media branding</li>
										</ul>
									</div>
									<div className="bg-blue-100 dark:bg-blue-900 rounded-lg shadow p-4 flex flex-col items-center justify-center min-h-[180px]">
										<h4 className="text-lg md:text-xl font-bold mb-1 text-blue-900 dark:text-blue-100">Other Supports</h4>
										<span className="text-base font-semibold mb-1 text-blue-900 dark:text-blue-100">Below INR 10,000</span>
										<ul className="text-sm md:text-base text-blue-900 dark:text-blue-100 list-disc pl-5 text-left">
											<li>Goodies, stickers, or registration kits</li>
										</ul>
									</div>
								</div>
							</div>
			<div className="w-full max-w-4xl mx-auto mb-12">
				<h3 className="text-2xl font-semibold text-jblue font-jfont mb-4">Past Success</h3>
				<p className="text-lg text-jblue  mb-4">Last year&#39;s FOSS Fest 2023 successfully brought together students and professionals to promote the awareness and adoption of FOSS technologies. With 62 participants and a focus on  Git, Flutter and web development, our inaugural event was a great success.</p>
				<h4 className="text-xl text-jblue font-jfont font-semibold mb-2">Past Supporters</h4>
				<div className="flex flex-row gap-8 items-center justify-center mb-4">
					<div className="bg-white rounded p-4 flex items-center justify-center">
						<img src="/fossunited.svg" alt="FOSS United Logo" className="w-24 h-24 object-contain" />
					</div>
					<div className="bg-white rounded p-4 flex items-center justify-center">
						<img src="/bytsolv.svg" alt="Bytsolv Logo" className="w-24 h-24 object-contain" />
					</div>
				</div>
			</div>
			<div className="mt-8">
				<p className="text-lg md:text-xl text-jblue  mb-2">For more information, download our <span className="underline">Sponsorship Brochure</span> or contact us directly:</p>
				<a href="mailto:fossfestceknpy@gmail.com" className="text-blue-600 dark:text-blue-400 underline text-lg font-medium">fossfestceknpy@gmail.com</a>
			</div>
		</section>
	);
}
