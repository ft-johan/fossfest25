"use client";

interface Sponsor {
  name: string;
  logo: string;
  website?: string;
}

interface SponsorCategory {
  title: string;
  subtitle?: string;
  sponsors: Sponsor[];
  cardSize: 'large' | 'medium' | 'small';
  gridCols: string;
}

const sponsorData: SponsorCategory[] = [

  {
    title: "Gold Sponsors",
    subtitle: "Premier Partners",
    sponsors: [
      { name: "Curiefy", logo: "/Curiefy.png", website: "https://curiefy.com" },
     
    ],
    cardSize: 'medium',
    gridCols: 'grid-cols-1 md:grid-cols-1'
  },
  {
    title: "Silver Sponsors",
    subtitle: "Supporting Partners",
    sponsors: [
      { name: "CareStack", logo: "/CareStack.png", website: "https://carestack.com" },
     
    ],
    cardSize: 'medium',
    gridCols: 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
  },
  {
    title: "Swag Sponsors",
    subtitle: "Supporting the ecosystem",
    sponsors: [
      { name: "Blender", logo: "/blender_logo.png", website: "https://blender.com" },
      { name: "Libre Office", logo: "/libreoffice.png", website: "https://libreoffice.org" },
    ],
    cardSize: 'small',
    gridCols: 'grid-cols-2 md:grid-cols-2 lg:grid-cols-2'
  },
  {
    title: "Community Partners",
    subtitle: "Supporting the ecosystem",
    sponsors: [
      { name: "TinkerHub CEK", logo: "/tinkerhub.png", website: "https://blender.com" },
    
    ],
    cardSize: 'small',
    gridCols: 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
  }
];

const SponsorCard = ({ sponsor, size }: { sponsor: Sponsor; size: 'large' | 'medium' | 'small' }) => {
  const sizeClasses = {
    large: 'h-32 md:h-40 lg:h-48 p-8',
    medium: 'h-24 md:h-28 lg:h-32 p-6',
    small: 'h-20 md:h-24 p-4'
  };

  return (
    <div className="group relative">
      {/* Decorative border frame */}
      <div className="absolute inset-0 bg-gray-300 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
      <div className="absolute inset-0 bg-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
      
      {/* Main card */}
      <div className={`relative bg-white rounded-lg ${sizeClasses[size]} flex items-center justify-center border-2 border-gray-300 hover:border-jblue transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
        {sponsor.website ? (
          <a 
            href={sponsor.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ) : (
          <img 
            src={sponsor.logo} 
            alt={sponsor.name}
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        )}
      </div>
    </div>
  );
};

const SponsorCategory = ({ category }: { category: SponsorCategory }) => {
  return (
    <div className="mb-16">
      {/* Category Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-jfont font-bold text-jblue mb-2">
          {category.title}
        </h3>
        {category.subtitle && (
          <p className="text-lg text-gray-600 font-medium">
            {category.subtitle}
          </p>
        )}
        <div className="w-16 h-0.5 bg-joranage mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Sponsors Grid */}
      <div className={`grid ${category.gridCols} gap-6 md:gap-8 justify-items-center`}>
        {category.sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} size={category.cardSize} />
        ))}
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-jfont font-bold text-jblue mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Powering innovation together
          </p>
          <div className="w-24 h-1 bg-joranage mx-auto rounded-full"></div>
        </div>

        {/* Sponsor Categories */}
        {sponsorData.map((category, index) => (
          <SponsorCategory key={index} category={category} />
        ))}

        {/* Become a Sponsor Button */}
        
      </div>
    </section>
  );
};

export default Sponsor;