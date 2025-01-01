export type PropsDetailedData = {
  title: string;
  category: string;
  date: string;
  image: string;
  image2: string;
  description1: string;
  description2: string;
  heading: string;
  author: string;
};

export const detailedData: PropsDetailedData[] = [
  {
    title: "Prioritize Mental Health at Workplace",
    category: "Health",
    date: "April 15, 2024",
    image: "/mental-health-in-the-workplace.png",

    heading: "Supporting Mental Health in the Workplace",
    description1:
      "Work profoundly affects mental health, with managers often influencing workers’ mental well-being more than doctors, according to studies. The U.S. Surgeon General highlights the workplace's role in shaping overall health, as full-time workers spend half their waking lives at work. Factors like job stress, mismatched roles, and poor working conditions can harm mental health. Research shows that supportive work cultures and managers significantly improve psychological safety and employee satisfaction. Workers prioritize organizations that respect work-life boundaries and offer mental health support. By addressing systemic workplace stressors and creating healthier environments, employers can enhance both employee well-being and organizational success.",

    description2:
      "Work is a major determinant of mental health, impacting employees more than many realize. The Workforce Institute’s Mental Health at Work study reveals that managers influence workers' mental health more than doctors or therapists. With full-time U.S. workers spending about half their waking hours at work, the workplace significantly shapes mental and physical well-being. Stress, poor working conditions, and mismatched job requirements often contribute to mental health issues. Long-term exposure to occupational stress worsens mental health and can even affect health outside work. Employees increasingly value organizations that support mental health. Surveys reveal that 95% of workers prioritize work-life boundaries, and 92% value organizations that support mental well-being. Healthy workplace cultures, where managerial support fosters psychological safety, are more effective than self-care perks in addressing mental health concerns. Employers can adopt strategies like NIOSH’s Total Worker Health approach to create healthier environments by addressing organizational-level issues, training supervisors to reduce stress, and providing resilience-building programs. Tools like the NIOSH WellBQ questionnaire and Impact Wellbeing™ Guide offer frameworks for assessing and improving workplace mental health. By investing in supportive policies and cultivating healthy environments, workplaces can become engines of well-being, enhancing employee mental health and boosting organizational success.",
    author: "Emily Kirby",
    image2: "/mental-health-in-the-workplace.png",
  },

  {
    title: "Journey of Quantum Computing",
    category: "Tech",
    date: "September 16, 2024",
    image: "/quantum-computing.png",
    heading: "Quantum Computing: Between Hope and Hype",
    description1:
      "When Rafi asked me to open this event, he seemed more interested in big ideas than detailed results, which suits me fine—I’ve been reflecting more lately. After a two-year AI safety stint at OpenAI, I’ve returned to quantum computing, and the field feels like it’s finally in a race, not just warming up. Recent breakthroughs, like Google’s logical qubit experiments and Microsoft-Quantinuum’s work with trapped ions, show real progress toward fault-tolerant quantum computing. With error-correction improving and two-qubit gates nearing the critical threshold, this decade could bring scalable quantum machines. It’s an exciting time for both quantum computing and AI.",
    description2:
      "Rafi’s invitation to open this event brought an opportunity to reflect on the current state of quantum computing—a field I’ve returned to after a two-year focus on AI safety at OpenAI. In quantum computing, the race to build fault-tolerant machines has truly begun. No longer just theoretical, groups like Google and Microsoft-Quantinuum have demonstrated critical milestones, such as encoding logical qubits and applying error-corrected operations with measurable gains. This progress stems from steady advancements in two-qubit gate fidelities, now nearing the ~99.99% threshold required for sustainable quantum error correction. When I started in the late 1990s, such fidelity was unthinkable, but today’s pace suggests scalable quantum machines within a decade. Quantum computing remains misunderstood by many, often mistaken for a universal problem-solver. The reality is more nuanced: its strengths lie in chemistry simulation, cryptography, and specialized optimization. While exponential speedups are rare, practical applications are emerging, from cryptographically certified randomness to quantum chemistry simulations.<br/><br/> The air of unreality surrounding quantum computing is dissipating as it edges closer to practical deployment. Combined with AI’s rapid advancements, it’s clear we’re witnessing a transformative era in science and technology, where imagination and experimentation are pushing boundaries like never before.",
    author: "by Scott Aaronson",
    image2: "/quantum-computing.png",
  },

  {
    title: "The Gig Economy and Financial Stability",
    category: "Finance",
    date: "June 28, 2024",
    image: "/gig-economy.png",
    heading: "The Gig Economy: A New Era of Work",
    description1:
      "Flexible work arrangements, remote jobs, and side hustles are transforming the workforce, driven by technology and changing cultural values. Tools like AI, instant messaging, and remote collaboration platforms have made work accessible globally, while shifting attitudes prioritize flexibility, independence, and life balance over rigid 9-to-5 jobs. The gig economy empowers workers to explore diverse income streams, fit work around personal commitments, and prioritize autonomy. However, irregular paychecks and survival-mode challenges, especially for marginalized groups, highlight areas for improvement.",
    description2:
      "For businesses, the gig economy offers scalability, cost-effectiveness, and access to a global talent pool. Companies can adapt quickly to project demands, reduce operational costs by hiring freelancers, and access specialized skills without geographical limits. This agile approach boosts efficiency, enabling businesses to focus on core priorities. The gig economy is redefining work, benefiting both individuals and organizations with flexibility and innovation.",
    author: "by Pedro Barros",
    image2: "/gig-economy.png",
  },

  {
    title: "Impact of Animal Migration Patterns",
    category: "Animals",
    date: "November 19, 2024",
    image: "/migration.png",
    heading: "Animal Migration: Nature’s Remarkable Journey",
    description1:
      "Animal migration, a breathtaking phenomenon, involves countless species traveling across land, air, and sea to find food, breed, and adapt to changing environments. Driven by survival, migration patterns vary, including seasonal moves (e.g., birds escaping cold winters), reproductive migrations (e.g., salmon returning to spawn), nomadic journeys (e.g., caribou seeking resources), and altitudinal shifts (e.g., mountain goats moving to lower elevations in winter). These migrations ensure access to resources, safer breeding grounds, and genetic diversity, all while navigating through techniques like sensing Earth’s magnetic field, celestial navigation, and familiar landmarks.",
    description2:
      "However, climate change, habitat loss, and human-made barriers threaten these crucial journeys. Conservation efforts are essential to protect migratory paths, ensuring species continue their life-sustaining travels. By safeguarding animal migration patterns, we contribute to biodiversity and the planet’s ecological balance.",
    author: "by Adrian",
    image2: "/migration.png",
  },

  {
    title: "How 5G is Transforming Smart Cities and IoT",
    category: "Tech",
    date: "August 31, 2024",
    image: "/5G.png",
    heading: "The Impact of 5G on IoT and Smart Cities",
    description1:
      "The advent of 5G technology has ushered in an era of high-speed, low-latency, and highly connected networks, redefining the possibilities for the Internet of Things (IoT) and smart cities. By enabling seamless communication between devices, real-time data processing, and enhanced reliability, 5G amplifies IoT’s potential. In smart cities, this translates into smarter infrastructure, optimized public services, and intelligent transportation systems, paving the way for sustainable urban living.",
    description2:
      "From advancing healthcare through telemedicine and remote surgeries to improving energy management and environmental monitoring, 5G is driving transformative change. Despite privacy and security challenges, robust measures can ensure data protection and network integrity. As global adoption expands, 5G will continue to shape urban landscapes, fostering innovation and elevating the quality of life for residents.",
    author: "by Rohit Mehta",
    image2: "/5G.png",
  },

  {
    title: "The Importance of Gut Health for Your Overall Wellness",
    category: "Health",
    date: "February 2, 2024",
    image: "/gut-health.png",
    heading: "Understanding Gut Health for Overall Well-being",
    description1:
      "Gut health plays a vital role in overall well-being, influencing everything from digestion to mental health and immunity. Often called the body's second brain, the gut microbiome, a complex ecosystem of bacteria, viruses, and fungi, impacts inflammation, nutrient absorption, and defense against harmful pathogens. An imbalance in the microbiome, or dysbiosis, can lead to issues like obesity, type 2 diabetes, and mental health disorders. A balanced diet rich in fiber and diverse foods fosters a healthy gut, underscoring the importance of mindful lifestyle choices in maintaining optimal health.",
    description2:
      "Navigating the wealth of information on gut health can be overwhelming. Trusted sources, from blogs to podcasts, offer valuable insights for enthusiasts and professionals alike. Blogs like The Gut Stuff and Love Your Gut simplify complex topics, while podcasts such as Butts & Guts and The Gut Health Gurus provide engaging discussions led by experts. These resources, combining scientific accuracy with accessibility, empower readers to make informed decisions and better care for their gut health.",
    author: "By Sasha Aparicio",
    image2: "/gut-health.png",
  },
];
