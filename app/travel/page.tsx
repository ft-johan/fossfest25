"use client";

export default function Travel() {
  return (
    <section id="travel-guide" className="py-16 bg-jwhite">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md px-6 md:px-12 py-12">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-jfont font-bold text-jblue mb-2">
            Welcome Information
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Welcome to FOSS Fest &apos;25 — whether you &apos;re a seasoned developer, a curious student, or someone passionate about open-source, this guide will help you get to the venue and make the most of the event.
          </p>
        </header>

        <div className="space-y-8">
          

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Communication</h3>
            <p className="text-sm md:text-base text-gray-700">
              Join the FOSS community channels for updates. Drop queries on  email 😊 <a className="text-jblue underline" href="mailto:fossfestcek@gmail.com">fossfestcek@gmail.com</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Travel & Venue</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Venue: <strong>College of Engineering Karunagappally</strong><br />
              Dates: <strong>October 11-12, 2025</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">From South Side</h4>
                <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-2">
                  <li>
                    By bus: Take any bus to <strong>KARUNAGAPPALLY bus stand</strong>. From there walk towards the nearby temple to the private bus stand.
                  </li>
                  <li>
                    Option 1: Take a bus on the <strong>EDAKKUNGARA / PATHARAM</strong> route and alight at <strong>VELUTHAMANAL</strong>. The college is within walking distance.
                  </li>
                  <li>
                    Option 2: Take a bus towards <strong>KOTTARAKARA / Driver Junction</strong>, get off at <strong>Driver Junction</strong> and walk or take an auto to the college.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">From North Side</h4>
                <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-2">
                  <li>
                    By bus: Take buses that stop at <strong>KARUNAGAPPALLY</strong> or <strong>KAYUMKULAM</strong>, then local transport to the private bus stop near the temple.
                  </li>
                  <li>
                    By train: Nearest stations are <strong>KARUNAGAPPALLY (~2 km)</strong> and <strong>KAYUMKULAM (~19 km)</strong>. Autos and local buses connect to the venue.
                  </li>
                  <li>
                    Helpful local stops: <em>Veluthamanal</em> or <em>Driver Junction</em> (short walk/auto from there).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Tickets & Registration</h3>
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-2">
              <li>Register through the official site: <a className="text-jblue underline" href="https://konfhub.com/foss-fest-25">https://konfhub.com/foss-fest-25</a></li>
              <li>Tickets include access to sessions, workshops (check workshop-specific ticketing), food and networking areas.</li>
              <li>Entry usually begins at 8 AM — please plan your commute accordingly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}