import React from "react";

const stories = [
	{
		company: "Shree Sugars Ltd.",
		logo: "https://img.icons8.com/color/48/000000/factory.png",
		summary: "Reduced downtime by 30% with our rapid supply of critical bearings.",
		details:
			"Shree Sugars Ltd. faced frequent breakdowns due to delayed bearing replacements. Our team ensured same-day dispatch and technical support, resulting in a 30% reduction in downtime and improved production efficiency.",
		person: "Mr. Ramesh Kumar, Maintenance Head",
	},
	{
		company: "Vijay Engineering Works",
		logo: "https://img.icons8.com/color/48/000000/engineering.png",
		summary: "Enabled on-time commissioning of a new plant with custom valves.",
		details:
			"Vijay Engineering Works needed custom valves for a new sugar plant. We sourced and delivered the required components ahead of schedule, helping them commission the plant on time.",
		person: "Ms. Priya Desai, Project Manager",
	},
	{
		company: "GreenCity Power",
		logo: "https://img.icons8.com/color/48/000000/renewable-energy.png",
		summary: "Improved reliability with quality gear assemblies.",
		details:
			"GreenCity Power was struggling with frequent gear failures. Our high-quality gear assemblies improved reliability and reduced maintenance costs.",
		person: "Mr. Sandeep Singh, Operations Lead",
	},
];

function SuccessStories() {
	return (
		<div className="max-w-5xl mx-auto py-12 px-4">
			<h1 className="text-4xl font-bold text-center text-[#F08000] mb-2">
				Success Stories
			</h1>
			<p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
				Discover how Mahadevi Enterprise has helped leading industries achieve
				operational excellence with timely supply, quality products, and dedicated
				support.
			</p>
			<div className="grid md:grid-cols-3 gap-8">
				{stories.map((story, idx) => (
					<div
						key={idx}
						className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
					>
						<img
							src={story.logo}
							alt={story.company}
							className="w-14 h-14 mb-3"
						/>
						<h2 className="text-xl font-semibold text-blue-900 mb-1">
							{story.company}
						</h2>
						<p className="text-[#F08000] font-medium mb-2 text-center">
							{story.summary}
						</p>
						<p className="text-gray-600 text-sm mb-4 text-center">
							{story.details}
						</p>
						<span className="text-xs text-gray-400 italic">
							{story.person}
						</span>
					</div>
				))}
			</div>

			{/* Growth Timeline */}
			<div className="bg-white rounded-xl shadow p-8 my-12">
				<h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
					Our Growth Journey
				</h2>
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex flex-col items-center">
						<div className="bg-[#F08000] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
							2019
						</div>
						<span className="text-gray-700 font-medium">Founded</span>
						<span className="text-xs text-gray-400">
							Started with a vision to modernize industrial supply
						</span>
					</div>
					<div className="h-12 w-1 bg-gradient-to-b md:bg-gradient-to-r from-[#F08000] to-blue-200 md:h-1 md:w-24 mx-4"></div>
					<div className="flex flex-col items-center">
						<div className="bg-blue-200 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
							2021
						</div>
						<span className="text-gray-700 font-medium">Digital Expansion</span>
						<span className="text-xs text-gray-400">
							Adopted ERP, real-time tracking, and digital tools
						</span>
					</div>
					<div className="h-12 w-1 bg-gradient-to-b md:bg-gradient-to-r from-blue-200 to-green-400 md:h-1 md:w-24 mx-4"></div>
					<div className="flex flex-col items-center">
						<div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
							2024
						</div>
						<span className="text-gray-700 font-medium">Trusted Partner</span>
						<span className="text-xs text-gray-400">
							Serving 100+ clients with excellence
						</span>
					</div>
				</div>
			</div>
			<div className="mt-12 text-center">
				<h3 className="text-lg font-semibold mb-2">
					Want to be our next success story?
				</h3>
				<a
					href="/contact"
					className="inline-block bg-[#F08000] hover:bg-[#c96a00] text-white px-6 py-2 rounded-full font-semibold shadow transition"
				>
					Contact Us
				</a>
			</div>
		</div>
	);
}

export default SuccessStories;