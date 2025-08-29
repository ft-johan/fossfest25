
export default function About() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6">
        Foss Fest 25 is a celebration of open source, collaboration, and community. Our mission is to bring together enthusiasts, developers, and learners to share knowledge, inspire innovation, and foster a spirit of freedom in technology. Join us for workshops, talks, and networking opportunities that empower everyone to unlock their potential and contribute to the open source movement.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-8 items-center justify-center">
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400">Empowering individuals through open technology and collaborative learning.</p>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400">Inclusivity, transparency, and a passion for sharing knowledge.</p>
        </div>
      </div>
    </section>
  );
}
