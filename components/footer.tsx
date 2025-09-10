import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
	return (
		<footer id="footer" className="w-full bg-neutral-900 text-neutral-100 py-8 px-4 mt-12">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex flex-col items-center md:items-start">
					<span className="font-semibold text-lg mb-2">Contact Us</span>
					<a href="mailto:fossceknpy@gmail.com" className="text-blue-400 underline mb-1">fossceknpy@gmail.com</a>
					<div className="flex gap-4 mt-2">
						<a href="https://instagram.com/fossfestcek" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<IconBrandInstagram size={28} className="hover:text-pink-400" />
						</a>
						<a href="https://linkedin.com/company/fossfestcek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<IconBrandLinkedin size={28} className="hover:text-blue-400" />
						</a>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-end">
					<span className="font-semibold text-lg mb-2">Organisers</span>
					<span className="mb-1">Abhijith H: <a href="tel:+919876543210" className="underline">+91 77369 77391</a></span>
					<span className="mb-1">Chinthak Divan: <a href="tel:+919812345678" className="underline">+91 77367 63162</a></span>
				</div>
			</div>
			<div className="text-center text-neutral-400 text-sm mt-6">&copy; {new Date().getFullYear()} FOSS Club CEKNPY. All rights reserved.</div>
		</footer>
	);
}
