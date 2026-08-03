import { Project, Education, WorkExperience, Competition, PdfPage } from '../types';

import coverImg from '../assets/images/sneha_cover_render_1785772808819.jpg';
import furnaceHero from '../assets/images/furnace_flow_hero_1785772826990.jpg';
import flowlineHero from '../assets/images/flowline_cafe_hero_1785772844364.jpg';
import verticalHero from '../assets/images/vertical_walk_hero_1785772861282.jpg';
import raumWissenHero from '../assets/images/raum_wissen_hero_1785772877543.jpg';
import sketchPhoto from '../assets/images/sneha_profile_sketch_1785772895366.jpg';

export const PERSONAL_INFO = {
  name: "Sneha Patil",
  dob: "17.05.2000",
  phone: "+49 15510292595",
  email: "snehahpatil18@gmail.com",
  location: "Heidelberg, Deutschland",
  taglineDE: "Architektur, Umnutzung, Entwurf & Sustainable Masterplanning",
  taglineEN: "Architecture, Adaptive Reuse, Design & Sustainable Masterplanning",
  statementDE: "Mein architektonischer Ansatz basiert auf Forschung, Innovation und präziser Umsetzung. Durch die Analyse des jeweiligen Kontexts und eine klare Definition des Raumprogramms entwickle ich räumliche Konzepte, die auf soziale, kulturelle und ökologische Bedingungen reagieren. Dabei steht die menschliche Erfahrung im Mittelpunkt. Ich verstehe Architektur als einen rationalen und zugleich sensiblen Rahmen, der Gemeinschaft, Anpassungsfähigkeit und eine langfristige städtebauliche Qualität unterstützt.",
  statementEN: "My architectural approach is grounded in research, innovation, and precise execution. Through context analysis and a clear definition of spatial programming, I develop spatial concepts that respond to social, cultural, and ecological conditions. Human experience remains at the core. I view architecture as a rational yet sensitive framework that supports community, adaptability, and long-term urban quality.",
  closingQuoteImage: sketchPhoto,
  software: ["AutoCAD", "Archicad", "SketchUp", "Revit", "Lumion", "Twinmotion", "Enscape"],
  hobbiesDE: ["Skizzieren", "Malen", "Tanzen", "Reisen"],
  hobbiesEN: ["Sketching", "Painting", "Dancing", "Traveling"],
  languages: [
    { name: "Deutsch", level: "Niveau B1" },
    { name: "Englisch", level: "Fließend / Fluent" }
  ]
};

export const EDUCATION_HISTORY: Education[] = [
  {
    period: "Seit 2025",
    degreeDE: "Masterstudium Architektur",
    degreeEN: "Master of Science in Architecture",
    institution: "SRH University of Applied Sciences Heidelberg",
    location: "Heidelberg, Deutschland",
    isCurrent: true
  },
  {
    period: "2018 – 2023",
    degreeDE: "Bachelorstudium Architektur",
    degreeEN: "Bachelor of Architecture",
    institution: "Jawaharlal Nehru Engineering College",
    location: "Aurangabad, Indien",
    isCurrent: false
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    year: "2024",
    duration: "1 Year",
    company: "Unitecture Design Solution",
    location: "Pune, India",
    roleDE: "Architektin / Entwurfsplanung",
    roleEN: "Architect / Design Planner",
    tasksDE: [
      "Erstellung von Entwürfen, Präsentationsplänen und Ausführungszeichnungen",
      "Bearbeitung von Aufgaben in den Bereichen Architektur, Innenarchitektur, Tragwerksplanung und Angebotserstellung"
    ],
    tasksEN: [
      "Creation of conceptual designs, presentation plans, and working drawings",
      "Handling tasks across architectural design, interior design, structural coordination, and project proposals"
    ]
  },
  {
    year: "2023",
    duration: "1 Year",
    company: "Polite Studio",
    location: "Aurangabad, India",
    roleDE: "Entwurfsarchitektin",
    roleEN: "Design Architect",
    tasksDE: [
      "Konzeptentwurf & Architektonische Diagramme",
      "Räumliche Zonierung & Volumenstudien",
      "Kontextbezogener Entwurf & Präsentationspläne"
    ],
    tasksEN: [
      "Concept Design & Architectural Diagrams",
      "Spatial Zoning & Massing Studies",
      "Contextual Design & Presentation Drawings"
    ]
  },
  {
    year: "2022",
    duration: "Praktikum / Internship",
    company: "Parin Shah Architects",
    location: "Indien",
    roleDE: "Architekturpraktikantin",
    roleEN: "Architectural Intern",
    tasksDE: [
      "Konzeptentwurf & 3D-Modellierung",
      "Ausführungszeichnungen & Präsentationspläne",
      "Wettbewerbsbeiträge"
    ],
    tasksEN: [
      "Conceptual Design & 3D Modeling",
      "Construction Drawings & Presentation Plans",
      "Competition Entries"
    ]
  },
  {
    year: "2019",
    duration: "Freiberufliche Tätigkeit",
    company: "Freiberufliche Projekte / Freelance",
    location: "Aurangabad & Pune, Indien",
    roleDE: "Freie Architektin / Designerin",
    roleEN: "Freelance Architect / Designer",
    tasksDE: [
      "Private Residence at Aurangabad, India: Kundenabstimmung | Entwurfsentwicklung | Ausführungsplanung | Konstruktive Detaillierung | Visualisierung",
      "Private Residence at Pune, India: Innenausbaupläne | Detailzeichnungen | Materialauswahl | Möbelzeichnungen",
      "Cafeteria, Pune, Indien: Innenraumgestaltung | Detailzeichnungen | Konzeptentwicklung | Materialauswahl"
    ],
    tasksEN: [
      "Private Residence at Aurangabad, India: Client coordination | Design development | Construction planning | Detailing | Visualization",
      "Private Residence at Pune, India: Interior layout | Detail drawings | Material selection | Custom furniture drawings",
      "Cafeteria, Pune, India: Interior architecture | Detail drawings | Concept development | Material specification"
    ]
  }
];

export const COMPETITIONS: Competition[] = [
  {
    year: "2018",
    titleDE: "Skulpturendesign-Wettbewerb, Indien",
    titleEN: "Sculpture Design Competition, India",
    location: "Indien",
    tasksDE: ["Konzeptentwurf", "Detailzeichnungen", "3D-Modellierung"],
    tasksEN: ["Conceptual Design", "Detail Drawings", "3D Modeling"]
  },
  {
    year: "2018",
    titleDE: "Fashion Trophy, ANDC",
    titleEN: "Fashion Trophy, ANDC",
    location: "Indien",
    tasksDE: ["Präsentationspläne", "Konzeptentwicklung"],
    tasksEN: ["Presentation Drawings", "Concept Development"]
  },
  {
    year: "2018",
    titleDE: "Tiny House Design Competition, Indien",
    titleEN: "Tiny House Design Competition, India",
    location: "Indien",
    tasksDE: ["Konzeptentwicklung", "Präsentationspläne", "3D-Modellierung"],
    tasksEN: ["Concept Development", "Presentation Drawings", "3D Modeling"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "furnace-and-flow",
    number: 1,
    titleDE: "Furnace and Flow / Erhalt des Hochofens, Dortmund",
    titleEN: "Furnace and Flow / Preserving Blast Furnace, Dortmund",
    subtitleDE: "Projekt zur Umnutzung eines Bestandsgebäudes",
    subtitleEN: "Adaptive Reuse Project of an Industrial Landmark",
    categoryDE: "Masterprojekt | Heidelberg, Deutschland 2025",
    categoryEN: "Master's Project | Heidelberg, Germany 2025",
    type: "Adaptive Reuse / Culture / Coworking",
    locationDE: "Dortmund, Deutschland",
    locationEN: "Dortmund, Germany",
    year: "2025",
    heroImage: furnaceHero,
    descriptionDE: "Auf dem Gelände des ehemaligen Hochofens in Dortmund interpretiert dieses Projekt ein industrielles Denkmal als modernes, gemischt genutztes Zentrum. Der neue Ort fördert Offenheit, Bewegung und gemeinschaftliche Aktivitäten. Im Dialog mit der historischen Stahlkonstruktion entsteht ein niedriges, fließendes Gebäude mit einer lichtdurchlässigen Polycarbonatfassade. Seine ruhige und helle Erscheinung bildet einen bewussten Kontrast zur schweren und starren Masse der alten Industrieanlage.\n\nDas Raumprogramm verbindet Coworking-Bereiche, eine öffentliche Bibliothek, eine Cafeteria, Büros, Werkstätten und ein Museum. Dadurch entsteht ein vielseitiger Ort für Arbeit, Bildung, Kultur und sozialen Austausch. Die verschiedenen Funktionen werden nicht voneinander getrennt. Stattdessen ermöglicht der Entwurf fließende Übergänge zwischen den Räumen und führt die Besucher durch das gesamte Gelände.\n\nTransparenz, Durchlässigkeit und weiche Formen stehen im Gegensatz zur massiven Konstruktion des alten Hochofens. So wird das ehemalige Industriegelände zu einem offenen und zugänglichen Ort für die Gemeinschaft.\n\nDas Projekt ersetzt die Geschichte des Ortes nicht, sondern schafft ein harmonisches Zusammenleben von Alt und Neu: Stahl trifft auf Licht, Beständigkeit trifft auf fließende Formen und Industrie entwickelt sich zu Gemeinschaft.",
    descriptionEN: "Located on the grounds of the former blast furnace in Dortmund, this project interprets an industrial monument as a modern, mixed-use center. The new hub fosters openness, movement, and community activities. In dialogue with the historic steel structure, a low-slung, flowing building emerges with a translucent polycarbonate facade. Its calm and bright appearance creates a deliberate contrast to the heavy, rigid mass of the old industrial plant.\n\nThe spatial program integrates coworking spaces, a public library, a cafeteria, offices, workshops, and a museum. This creates a versatile venue for work, education, culture, and social exchange. Rather than separating functions, the design enables seamless transitions between spaces, guiding visitors fluidly across the site.\n\nTransparency, permeability, and soft forms stand in opposition to the massive construction of the old furnace. Thus, the former industrial area becomes an open, accessible place for the community.\n\nThe project does not replace history but creates a harmonious coexistence of old and new: steel meets light, permanence meets fluid geometry, and industry evolves into community.",
    highlightsDE: [
      "Niedriges, fließendes Gebäude mit Polycarbonatfassade",
      "Harmonischer Kontrast zwischen historischem Stahl-Hochofen und transparenter Leichtbauweise",
      "Integriertes Raumprogramm: Coworking, Bibliothek, Cafeteria, Büros, Werkstätten, Museum",
      "Detaillierte Fassadenkonstruktion (Rodeca-System, 1:20 & 1:5 Details)"
    ],
    highlightsEN: [
      "Low-slung, fluid building envelope with translucent polycarbonate facade",
      "Harmonious dialogue between heavy historic blast furnace steel and lightweight transparency",
      "Integrated spatial program: Coworking, Library, Cafeteria, Offices, Workshops, Museum",
      "Precision facade engineering detail (Rodeca building elements, 1:20 & 1:5 scales)"
    ],
    conceptSteps: [
      {
        step: 1,
        titleDE: "1. Legible Rigidity",
        titleEN: "1. Legible Rigidity",
        descriptionDE: "Aufnahme der bestehenden Industriestruktur und Definition der Grundgeometrie.",
        descriptionEN: "Acknowledging the existing industrial framework and setting structural boundaries.",
        svgType: "rigidity"
      },
      {
        step: 2,
        titleDE: "2. Contrast in Hierarchy",
        titleEN: "2. Contrast in Hierarchy",
        descriptionDE: "Ausklinken von Innenhöfen zur Erzeugung visueller und funktionaler Kontraste.",
        descriptionEN: "Carving courtyard voids to create distinct spatial and visual contrasts.",
        svgType: "hierarchy"
      },
      {
        step: 3,
        titleDE: "3. Regeneration",
        titleEN: "3. Regeneration",
        descriptionDE: "Einfügen grüner Freiräume und Durchbrüche zur Belebung des Standorts.",
        descriptionEN: "Integrating landscaped courtyards and open pathways to revitalize the site.",
        svgType: "regeneration"
      },
      {
        step: 4,
        titleDE: "4. Creating Fluidity",
        titleEN: "4. Creating Fluidity",
        descriptionDE: "Verbindung der Baukörper durch eine lichtdurchlässige, geschwungene Polycarbonathülle.",
        descriptionEN: "Unifying structures with a continuous translucent polycarbonate shell.",
        svgType: "fluidity"
      }
    ],
    sitePlanLegend: [
      { number: 1, labelDE: "EINGANG", labelEN: "ENTRANCE", x: 18, y: 44 },
      { number: 2, labelDE: "GEMISCHT GENUTZTES GEBÄUDE", labelEN: "MIXED-USE BUILDING", x: 24, y: 38 },
      { number: 3, labelDE: "MUSEUM", labelEN: "MUSEUM", x: 62, y: 55 },
      { number: 4, labelDE: "BIBLIOTHEK", labelEN: "LIBRARY", x: 45, y: 52 },
      { number: 5, labelDE: "AUSSENBEREICH", labelEN: "OUTDOOR PLAZA", x: 55, y: 32 },
      { number: 6, labelDE: "FREIZEITBEREICH", labelEN: "RECREATION AREA", x: 82, y: 48 }
    ],
    technicalSpecs: [
      { itemNumber: 1, nameDE: "Attikaabdeckung", nameEN: "Attic Cover / Parapet Flashing" },
      { itemNumber: 2, nameDE: "Betonwand", nameEN: "Concrete Wall" },
      { itemNumber: 3, nameDE: "Metallschutz", nameEN: "Metal Protection Guard" },
      { itemNumber: 4, nameDE: "Substratschicht", nameEN: "Substrate Layer" },
      { itemNumber: 5, nameDE: "Filtervlies", nameEN: "Filter Fleece" },
      { itemNumber: 6, nameDE: "Wärmedämmung", nameEN: "Thermal Insulation" },
      { itemNumber: 7, nameDE: "Dränageschicht", nameEN: "Drainage Layer" },
      { itemNumber: 8, nameDE: "Feuerbeständige Stahlrahmenkonstruktion", nameEN: "Fire-Resistant Steel Frame Construction" },
      { itemNumber: 9, nameDE: "Geschweißte Laufstegkonstruktion", nameEN: "Welded Catwalk / Walkway Structure" },
      { itemNumber: 10, nameDE: "Verankerung an der Tragkonstruktion zur Aufnahme horizontaler Lasten", nameEN: "Anchorage to Main Structure for Horizontal Loads" },
      { itemNumber: 11, nameDE: "Polycarbonatplatte (RODECA)", nameEN: "Polycarbonate Panel (RODECA System)" },
      { itemNumber: 12, nameDE: "Über eine Gleitverbindung am Laufsteg befestigtes Zwischenprofil", nameEN: "Intermediate Profile Attached via Sliding Joint" },
      { itemNumber: 13, nameDE: "Bodenbelag, 20 mm", nameEN: "Flooring Finish, 20 mm" },
      { itemNumber: 14, nameDE: "Dämmung, 70 mm", nameEN: "Insulation, 70 mm" },
      { itemNumber: 15, nameDE: "Bitumendickbeschichtung", nameEN: "Bituminous Thick Waterproofing Coating" },
      { itemNumber: 16, nameDE: "Dämmung, 100 mm", nameEN: "Thermal Insulation, 100 mm" }
    ],
    drawings: [
      {
        id: "ff-hero-render",
        titleDE: "Aussenperspektive & Innenhof",
        titleEN: "Exterior Courtyard Perspective",
        scale: "Render",
        type: "elevation",
        imageOrSvg: furnaceHero,
        descriptionDE: "Blick in den begrünten Innenhof mit Polycarbonatfassade und historischem Hochofen im Hintergrund.",
        descriptionEN: "View into the landscaped inner courtyard featuring translucent polycarbonate cladding with the industrial blast furnace behind."
      },
      {
        id: "ff-site-plan",
        titleDE: "Lageplan / Site Plan",
        titleEN: "Site Plan",
        scale: "1:500",
        type: "site_plan",
        imageOrSvg: "site_plan_furnace",
        descriptionDE: "Lageplan des Konversionsgeländes in Dortmund mit Funktionszuordnung (Eingang, Bibliothek, Museum, Freizeitbereich).",
        descriptionEN: "Site master plan of the converted blast furnace precinct in Dortmund showing spatial organization."
      },
      {
        id: "ff-facade-detail",
        titleDE: "Fassadendetail & Schnitt",
        titleEN: "Facade Detail & Section",
        scale: "1:20 / 1:5",
        type: "facade_detail",
        imageOrSvg: "facade_detail_furnace",
        descriptionDE: "Vertikalschnitt durch die lichtdurchlässige RODECA-Polycarbonat-Fassade mit Details A, B und C.",
        descriptionEN: "Vertical section detail through the translucent RODECA polycarbonate facade showing connections A, B, and C."
      }
    ]
  },
  {
    id: "flowline-cafe",
    number: 2,
    titleDE: "Flowline Café / Umnutzung eines bestehenden Raumes",
    titleEN: "Flowline Café / Adaptive Reuse of Existing Space",
    subtitleDE: "Projekt zur Umnutzung | Bachelorprojekt",
    subtitleEN: "Adaptive Reuse Project | Bachelor's Thesis",
    categoryDE: "Bachelorprojekt | Indien, 2020",
    categoryEN: "Bachelor's Project | India, 2020",
    type: "Gastronomy / Parametric Vault / Interiors",
    locationDE: "Indien",
    locationEN: "India",
    year: "2020",
    heroImage: flowlineHero,
    descriptionDE: "Das Flowline Café zeigt die transformative Umnutzung einer Cafeteria in Indien durch eine organisch geschwungene Holzlamellendecke. Die parametrische Gitterschale fließt dynamisch von der Decke bis zu den Stützpunkten hinab und schafft eine warme, einladende Atmosphäre.\n\nGroßflächige, bodentiefe Vorhangfassaden verbinden das Innere nahtlos mit den umgebenden Grünanlagen. Der Entwurf kombiniert parametrische Holzkonstruktion, Aluminium-Mullions und eine leichte Stahlbetonschale (R.C.C. Shell) mit durchdachter Tisch- und Sitzplatzplanung.",
    descriptionEN: "Flowline Café showcases the transformative adaptive reuse of a cafeteria space in India featuring an undulating timber-slat ceiling shell. The parametric lattice flows dynamically from roof canopy to floor piers, creating an immersive, warm atmosphere.\n\nExpansive floor-to-ceiling glass curtain walls connect the interior seamlessly with surrounding greenery. The design combines parametric timber structures, aluminum mullions, and a lightweight reinforced concrete shell (R.C.C. Shell) with meticulously planned seating arrangements.",
    highlightsDE: [
      "Parametrisch geschwungene Holzlamellendecke mit integrierter LED-Beleuchtung",
      "Leichte Stahlbetonschale (R.C.C. Shell) mit Vorhangfassade",
      "Isometrische Strukturstudie & Gitternetz-Modellierung",
      "Physisches Gips- / Papiermodell zur Erforschung der Freiform-Schalengeometrie"
    ],
    highlightsEN: [
      "Parametrically curved timber slat ceiling with integrated warm LED strip lighting",
      "Lightweight RCC shell roof supported by curtain wall mullions",
      "Isometric structural study & mesh surface engineering",
      "Handcrafted physical model exploring freeform vaulted shell geometry"
    ],
    drawings: [
      {
        id: "fl-hero-render",
        titleDE: "Innenraumperspektive Cafeteria",
        titleEN: "Cafeteria Interior Rendering",
        scale: "Render",
        type: "elevation",
        imageOrSvg: flowlineHero,
        descriptionDE: "Blick in den Gastraum mit geschwungener Holzdecke und bodentiefer Verglasung.",
        descriptionEN: "Interior perspective of the dining hall featuring the sweeping timber ceiling and full-height windows."
      },
      {
        id: "fl-plan-isometric",
        titleDE: "Isometrie & Grundriss",
        titleEN: "Isometric View & Floor Plan",
        scale: "1:100",
        type: "floor_plan",
        imageOrSvg: "flowline_plan_iso",
        descriptionDE: "Isometrische Gesamtdarstellung der Schalenstruktur und Bestuhlungsgrundriss.",
        descriptionEN: "Isometric overview of the vaulted shell roof and interior layout grid."
      },
      {
        id: "fl-section-elevation",
        titleDE: "Ansicht & Schnitt",
        titleEN: "Elevation & Section Details",
        scale: "1:20",
        type: "section",
        imageOrSvg: "flowline_details",
        descriptionDE: "Schnitt und Ansicht im Maßstab 1:20 mit Höhenangaben (GL 0, Plinth 600, Lintel 3200, Level 1 6600).",
        descriptionEN: "Architectural elevation and section at 1:20 showing level benchmarks and structural shell."
      }
    ]
  },
  {
    id: "vertikaler-spaziergang",
    number: 3,
    titleDE: "Der vertikale Spaziergang / Reaktivierung eines Wasserturms",
    titleEN: "The Vertical Walk / Reactivation of a Water Tower",
    subtitleDE: "Projekt zur Umnutzung | Masterprojekt",
    subtitleEN: "Adaptive Reuse Project | Master's Thesis",
    categoryDE: "Masterprojekt | Heidelberg, Deutschland 2026 (Wettbewerb Italien)",
    categoryEN: "Master's Project | Heidelberg, Germany 2026 (Competition Italy)",
    type: "Urban Landscaping / Cultural Monument / Public Space",
    locationDE: "Milanino, Italien",
    locationEN: "Milanino, Italy",
    year: "2026",
    heroImage: verticalHero,
    descriptionDE: "Das Projekt mit dem Titel „Vertikaler Spaziergang“ interpretiert den historischen Wasserturm und seine Umgebung als einen neuen Ort für Bewegung, Begegnung und Erholung. Der Entwurf orientiert sich an den Prinzipien der Gartenstadt, besonders an kurzen Fußwegen und einem Leben im Grünen.\n\nEin durchgehender Fußweg führt rund um den Turm. Besucher können das Gelände langsam erkunden und das historische Bauwerk aus verschiedenen Perspektiven erleben. Der kreisförmige Weg macht das Spazieren zu einem räumlichen Erlebnis und integriert den Turm als zentralen Bestandteil des öffentlichen Raums.\n\nDurch die Verbindung von Bewegung, Ruhe und Natur entsteht rund um den Wasserturm eine lebendige öffentliche Landschaft. Das Projekt bewahrt das historische Erbe der Gartenstadt Milanino und gibt dem Turm gleichzeitig eine neue Bedeutung. Er ist nicht mehr nur ein technisches Denkmal, sondern wird zu einem attraktiven Ort, an dem Menschen spazieren, sich treffen und die Verbindung zur Natur und zur Gemeinschaft erleben können.",
    descriptionEN: "Titled 'The Vertical Walk', this project reinterprets a historic water tower and its park environment into a vibrant destination for movement, gathering, and recreation. Inspired by Garden City principles, it prioritizes pedestrian accessibility and immersion in nature.\n\nA continuous helical walkway winds around the tower. Visitors explore the grounds gradually, experiencing the historic monument from ever-changing elevations and perspectives. The spiraling path turns a stroll into a three-dimensional spatial journey, establishing the tower as the heart of the civic realm.\n\nBy marrying movement, serenity, and landscape, the design breathes new life into Milanino's heritage. The water tower transforms from a static industrial artifact into a dynamic community hub where people walk, connect, and enjoy nature.",
    highlightsDE: [
      "Rot schwebende Fußgänger-Rampe als skulpturales Band um den Wasserturm",
      "Städtebauliches Konzept orientiert an den Prinzipien der Gartenstadt Milanino",
      "Multifunktionale Innenräume im Turm: Meditationsbereich, Cafeteria, Workshops, Veranstaltungsraum",
      "Integrierte Parklandschaft mit Spielbereich, Amphitheater und Freiluft-Sitzbereichen"
    ],
    highlightsEN: [
      "Floating red helical walkway winding around the historic water tower",
      "Urban master plan guided by Milanino Garden City principles",
      "Multifunctional internal program: Meditation steps, Cafeteria, Workshops, Event spaces",
      "Integrated public park with playground, amphitheater, and open seating lawns"
    ],
    sitePlanLegend: [
      { number: 1, labelDE: "Fußweg", labelEN: "Pedestrian Walkway", x: 25, y: 55 },
      { number: 2, labelDE: "Spielbereich", labelEN: "Playground Area", x: 42, y: 62 },
      { number: 3, labelDE: "Amphitheater", labelEN: "Amphitheater", x: 58, y: 65 },
      { number: 4, labelDE: "Offener Sitzbereich", labelEN: "Open Seating Lounge", x: 72, y: 50 }
    ],
    drawings: [
      {
        id: "vw-hero-render",
        titleDE: "Vogelperspektive Wasserturm & Roter Fußweg",
        titleEN: "Aerial View of Water Tower & Red Ramp",
        scale: "Render",
        type: "elevation",
        imageOrSvg: verticalHero,
        descriptionDE: "Perspektivischer Blick auf den skulpturalen roten Spazierweg, der sich um den historischen Wasserturm schlingt.",
        descriptionEN: "Perspective aerial view showcasing the sculptural red ribbon pathway looping around the brick water tower."
      },
      {
        id: "vw-site-plan",
        titleDE: "Lageplan & Schnitt AA'",
        titleEN: "Site Plan & Section AA'",
        scale: "1:500",
        type: "site_plan",
        imageOrSvg: "vertical_site_plan",
        descriptionDE: "Lageplan im Maßstab 1:500 mit Darstellung des gewundenen Weges, Amphitheaters und Turmschnitts.",
        descriptionEN: "Master site plan at 1:500 scale detailing walkway geometry, park zones, and cross-section AA'."
      },
      {
        id: "vw-section-details",
        titleDE: "Schnitt BB' & Detailansichten",
        titleEN: "Section BB' & Detail Views",
        scale: "1:100",
        type: "section",
        imageOrSvg: "vertical_section_details",
        descriptionDE: "Turm-Vertikalschnitt BB' sowie Innenraumperspektiven von Meditationsbereich, Fußweg und Cafeteria.",
        descriptionEN: "Tower section BB' with interior perspectives of meditation steps, ramp walkway, and cafe."
      }
    ]
  },
  {
    id: "raum-fuer-wissen",
    number: 4,
    titleDE: "Raum für Wissen / Das Lernzentrum Der Universität Bonn",
    titleEN: "Room for Knowledge / University of Bonn Learning Center",
    subtitleDE: "Projekt zur Umnutzung | Masterprojekt",
    subtitleEN: "Adaptive Reuse Project | Master's Thesis",
    categoryDE: "Masterprojekt | Heidelberg, Deutschland 2026",
    categoryEN: "Master's Project | Heidelberg, Germany 2026",
    type: "Education / Campus Masterplan / Timber Architecture",
    locationDE: "Bonn, Deutschland",
    locationEN: "Bonn, Germany",
    year: "2026",
    heroImage: raumWissenHero,
    descriptionDE: "Das Lernzentrum der Universität Bonn ist als moderne akademische Lernlandschaft geplant. Der Entwurf verbindet Lernen, Kommunikation und räumliches Erleben auf eine neue Weise.\n\nVerschiedene Diskussionsräume, flexibel nutzbare Seminarräume und offene Sitzbereiche bieten Möglichkeiten für gemeinsames Arbeiten und individuelles Lernen. Transparente Räume, anpassbare Grundrisse und miteinander verbundene Wege fördern den Austausch von Wissen und spontane Begegnungen zwischen den Studierenden.\n\nNatürliches Licht, flexible Möbel und einladende Gemeinschaftsbereiche sorgen für eine angenehme und produktive Lernatmosphäre. Durch die Verbindung von Funktionalität und moderner Architektursprache entsteht ein offener und inspirierender Ort, der unterschiedliche Lernformen unterstützt und die soziale sowie akademische Gemeinschaft auf dem Universitätscampus stärkt.",
    descriptionEN: "The University of Bonn Learning Center is envisioned as a modern academic landscape. The design synthesizes learning, interaction, and spatial experience in a contemporary architectural language.\n\nA suite of discussion rooms, flexible seminar spaces, and open lounge zones support both collaborative group work and quiet individual study. Transparent glass enclosures, adaptable floor plans, and interconnected circulation paths stimulate knowledge sharing and spontaneous student dialogue.\n\nAbundant daylight, ergonomic furniture, and welcoming common areas create an inviting learning atmosphere. By pairing functional clarity with a refined timber facade, the center forms an inspiring nexus that reinforces the social and intellectual life of the campus.",
    highlightsDE: [
      "Fassade aus vertikalen Holzlamellen im Dialog mit dem historischen Schlossflügel der Universität Bonn",
      "6-stufiges Entwurfskonzept: Programm, Erschließung, Interaktionsbereiche, Schnittentwicklung, Geschlossene Räume, Transfomation",
      "Präzises Fassadendetail im Maßstab 1:20 mit 18 zertifizierten Konstruktionsschichten",
      "Erdgeschossgrundriss (1:200) mit Seminarhall, Foyer, Unterrichtsräumen und Diskussionszonen"
    ],
    highlightsEN: [
      "Vertical timber slat facade in harmonious conversation with the historic baroque university palace wing",
      "6-stage spatial design methodology: Program, Circulation, Interaction zones, Section development, Enclosed focus, Transformation",
      "Technical 1:20 facade detail with 18 numbered structural layers (timber rainscreen, double glazing, insulation)",
      "Ground floor plan at 1:200 featuring seminar hall, entrance foyer, quiet study classrooms, and discussion hubs"
    ],
    technicalSpecs: [
      { itemNumber: 1, nameDE: "Attikaabdeckung", nameEN: "Attic Covering / Parapet Cap" },
      { itemNumber: 2, nameDE: "Betonwand", nameEN: "Concrete Wall" },
      { itemNumber: 3, nameDE: "Metallschutz", nameEN: "Metal Guard Flashing" },
      { itemNumber: 4, nameDE: "Substratschicht", nameEN: "Green Roof Substrate" },
      { itemNumber: 5, nameDE: "Filtervlies", nameEN: "Filter Membrane" },
      { itemNumber: 6, nameDE: "Wärmedämmung", nameEN: "Thermal Insulation" },
      { itemNumber: 7, nameDE: "Dränageschicht", nameEN: "Drainage Layer" },
      { itemNumber: 8, nameDE: "Außenverkleidung aus Holz, 5 cm", nameEN: "Timber Rainscreen Cladding, 5 cm" },
      { itemNumber: 9, nameDE: "Feuerbeständige Stahlrahmenkonstruktion", nameEN: "Fire-Resistant Steel Framework" },
      { itemNumber: 10, nameDE: "Geschweißte Laufstegkonstruktion an Tragstrebe verankert", nameEN: "Welded Catwalk Structure Anchored to Main Strut" },
      { itemNumber: 11, nameDE: "Weiß lackierter, abgehängter Rahmen", nameEN: "White Lacquered Suspended Ceiling Frame" },
      { itemNumber: 12, nameDE: "Doppelverglasung", nameEN: "Double Glazed Window Units" },
      { itemNumber: 13, nameDE: "Zwischenprofil mit Gleitverbindung zur Laufstegkonstruktion", nameEN: "Intermediate Profile with Sliding Joint" },
      { itemNumber: 14, nameDE: "Bodenbelag, 15 mm", nameEN: "Flooring Layer, 15 mm" },
      { itemNumber: 15, nameDE: "Dämmung, 70 mm", nameEN: "Insulation Layer, 70 mm" },
      { itemNumber: 16, nameDE: "Stahlbetondecke, 200 mm", nameEN: "Reinforced Concrete Slab, 200 mm" },
      { itemNumber: 17, nameDE: "Bitumendickbeschichtung", nameEN: "Bituminous Waterproof Coating" },
      { itemNumber: 18, nameDE: "Dämmung, 100 mm", nameEN: "Thermal Insulation, 100 mm" }
    ],
    conceptSteps: [
      {
        step: 1,
        titleDE: "1. Programm / Konzept",
        titleEN: "1. Program / Concept",
        descriptionDE: "Explosionsdarstellung der funktionalen Schichten (Discussion, Student-Faculty Interaction, Growth).",
        descriptionEN: "Exploded axonometric mapping of program layers (Discussion, Interaction, Growth).",
        svgType: "rw_program"
      },
      {
        step: 2,
        titleDE: "2. Erschließung",
        titleEN: "2. Circulation",
        descriptionDE: "Verbindung der Ebenen durch fließende Bewegungswege.",
        descriptionEN: "Connecting study levels via continuous circulation paths.",
        svgType: "rw_circulation"
      },
      {
        step: 3,
        titleDE: "3. Interaktionsbereiche",
        titleEN: "3. Interaction Zones",
        descriptionDE: "Verschiedene Sitztypen (Group discussion, Mentoring, Presentation, Lounge).",
        descriptionEN: "Varied seating typologies for mentoring, group work, and informal lounges.",
        svgType: "rw_interaction"
      },
      {
        step: 4,
        titleDE: "4. Räumliche Entwicklung im Schnitt",
        titleEN: "4. Sectional Development",
        descriptionDE: "Gestufte Sitzlandschaft als soziales Verbindungselement.",
        descriptionEN: "Stepped seating creating a continuous social learning landscape.",
        svgType: "rw_section"
      },
      {
        step: 5,
        titleDE: "5. Geschlossener Unterrichtsraum",
        titleEN: "5. Enclosed Classroom",
        descriptionDE: "Konzentrierter Lernbereich mit natürlichem Oberlicht.",
        descriptionEN: "Focused learning environment with zenithal natural daylight.",
        svgType: "rw_classroom"
      },
      {
        step: 6,
        titleDE: "6. Räumliche Transformation",
        titleEN: "6. Spatial Transformation",
        descriptionDE: "Vom reinen Erschließungsbereich zum gemeinsamen Lernraum.",
        descriptionEN: "Evolving circulation hallways into vibrant collaborative learning spaces.",
        svgType: "rw_transformation"
      }
    ],
    drawings: [
      {
        id: "rw-hero-render",
        titleDE: "Campus-Perspektive & Holzfassade",
        titleEN: "Campus Perspective & Timber Facade",
        scale: "Render",
        type: "elevation",
        imageOrSvg: raumWissenHero,
        descriptionDE: "Außenansicht des neuen Lernzentrums neben dem historischen Unigebäude in Bonn.",
        descriptionEN: "Exterior perspective showing the new timber-slatted learning center alongside the historic university building."
      },
      {
        id: "rw-axonometric-concept",
        titleDE: "Konzeptdiagramme & Site Plan",
        titleEN: "Concept Axonometrics & Site Plan",
        scale: "1:500",
        type: "axonometric",
        imageOrSvg: "rw_concept_diagrams",
        descriptionDE: "6-teilige axonometrische Konzeptfolge und Campus-Lageplan (1:500).",
        descriptionEN: "6-step axonometric concept diagrams and campus site plan at 1:500 scale."
      },
      {
        id: "rw-floor-plan",
        titleDE: "Erdgeschossgrundriss & Schnitt AA'",
        titleEN: "Ground Floor Plan & Section AA'",
        scale: "1:200",
        type: "floor_plan",
        imageOrSvg: "rw_floor_plan_sec",
        descriptionDE: "Grundriss mit Seminar Hall, Foyer, Unterrichtsräumen und Diskussionsraum sowie Gebäude-Längsschnitt.",
        descriptionEN: "Ground floor plan specifying seminar hall, foyer, classrooms, and discussion lounge plus longitudinal section."
      },
      {
        id: "rw-facade-detail",
        titleDE: "Fassadendetail Holzlamellen",
        titleEN: "Timber Facade Detail & Section",
        scale: "1:20",
        type: "facade_detail",
        imageOrSvg: "rw_facade_detail",
        descriptionDE: "Fassadenschnitt 1:20 mit 18 nummerierten Konstruktionsschichten der Holz-Rainscreen-Fassade.",
        descriptionEN: "Technical facade detail at 1:20 scale with 18 numbered structural layers of the timber rainscreen."
      },
      {
        id: "rw-context-elevations",
        titleDE: "Kontext-Ansichten AT A & AT B",
        titleEN: "Context Elevations AT A & AT B",
        scale: "1:200",
        type: "elevation",
        imageOrSvg: "rw_context_elevations",
        descriptionDE: "Städtebauliche Ansichten A und B im Vergleich mit dem barocken Bestandsbau der Universität.",
        descriptionEN: "Urban context elevations AT A and AT B contrasting the modern learning center with the historic baroque palace."
      }
    ]
  }
];

export const ALL_PDF_PAGES: PdfPage[] = [
  {
    pageNumber: 1,
    titleDE: "Portfolio Cover",
    titleEN: "Portfolio Cover",
    category: "Cover",
    previewImage: coverImg,
    textSnippetDE: "Portfolio - Sneha Patil",
    textSnippetEN: "Portfolio - Sneha Patil"
  },
  {
    pageNumber: 2,
    titleDE: "Lebenslauf & Qualifikationen",
    titleEN: "Curriculum Vitae & Qualifications",
    category: "Resume",
    textSnippetDE: "AUSBILDUNG: Bachelor & Master Architektur | BERUFSFAHRUNG: Unitecture, Polite Studio, Parin Shah | KENNTNISSE: Revit, AutoCAD, Archicad, Lumion",
    textSnippetEN: "EDUCATION: B.Arch & M.Sc Architecture | EXPERIENCE: Unitecture, Polite Studio, Parin Shah | SKILLS: Revit, AutoCAD, Archicad, Lumion"
  },
  {
    pageNumber: 3,
    titleDE: "Inhaltsverzeichnis",
    titleEN: "Table of Contents",
    category: "Contents",
    textSnippetDE: "1. Furnace and Flow | 2. Flowline Café | 3. Der vertikale Spaziergang | 4. Raum für Wissen",
    textSnippetEN: "1. Furnace and Flow | 2. Flowline Café | 3. The Vertical Walk | 4. Room for Knowledge"
  },
  {
    pageNumber: 4,
    titleDE: "Furnace and Flow - Visualisierung",
    titleEN: "Furnace and Flow - Hero Render",
    category: "Furnace and Flow",
    previewImage: furnaceHero,
    textSnippetDE: "Erhalt des Hochofens, Dortmund - Perspektive Innenhof",
    textSnippetEN: "Preserving Blast Furnace, Dortmund - Courtyard View"
  },
  {
    pageNumber: 5,
    titleDE: "Furnace and Flow - Konzept & Text",
    titleEN: "Furnace and Flow - Concept & Text",
    category: "Furnace and Flow",
    textSnippetDE: "1. Legible Rigidity | 2. Contrast in Hierarchy | 3. Regeneration | 4. Creating Fluidity",
    textSnippetEN: "1. Legible Rigidity | 2. Contrast in Hierarchy | 3. Regeneration | 4. Creating Fluidity"
  },
  {
    pageNumber: 6,
    titleDE: "Furnace and Flow - Site Plan",
    titleEN: "Furnace and Flow - Site Plan",
    category: "Furnace and Flow",
    textSnippetDE: "Lageplan (1:500) - 1. Eingang, 2. Gemischt genutztes Gebäude, 3. Museum, 4. Bibliothek, 5. Außenbereich, 6. Freizeitbereich",
    textSnippetEN: "Site Plan (1:500) - 1. Entry, 2. Mixed-Use Building, 3. Museum, 4. Library, 5. Outdoor Plaza, 6. Recreation Area"
  },
  {
    pageNumber: 7,
    titleDE: "Furnace and Flow - Fassadendetail",
    titleEN: "Furnace and Flow - Facade Detail",
    category: "Furnace and Flow",
    textSnippetDE: "Schnitt (1:20) & Details A, B, C (1:5) - Rodeca Polycarbonat & Stahlrahmen mit 16 Konstruktionsschichten",
    textSnippetEN: "Section (1:20) & Details A, B, C (1:5) - Rodeca Polycarbonate & Steel Frame with 16 Structural Layers"
  },
  {
    pageNumber: 8,
    titleDE: "Furnace and Flow - Innenansicht",
    titleEN: "Furnace and Flow - Interior View",
    category: "Furnace and Flow",
    previewImage: furnaceHero,
    textSnippetDE: "Interior View - Blick auf die historischen Hochofentürme aus dem transparenten Foyer",
    textSnippetEN: "Interior View - Looking out at historic blast furnace towers from the transparent hallway"
  },
  {
    pageNumber: 9,
    titleDE: "Flowline Café - Interior Render",
    titleEN: "Flowline Café - Interior Render",
    category: "Flowline Café",
    previewImage: flowlineHero,
    textSnippetDE: "Flowline Café, Cafeteria Indien - Parametrische Holzlamellendecke",
    textSnippetEN: "Flowline Café, Cafeteria India - Parametric undulating timber ceiling"
  },
  {
    pageNumber: 10,
    titleDE: "Flowline Café - Isometrie & Plan",
    titleEN: "Flowline Café - Isometric & Floor Plan",
    category: "Flowline Café",
    textSnippetDE: "Isometric View, Mesh Structure & Floor Plan Bestuhlung",
    textSnippetEN: "Isometric View, Mesh Shell Structure & Seating Floor Plan"
  },
  {
    pageNumber: 11,
    titleDE: "Flowline Café - Schnitte & Ansicht",
    titleEN: "Flowline Café - Sections & Elevation",
    category: "Flowline Café",
    textSnippetDE: "Ansicht (1:20) & Schnitt (1:20) - R.C.C. Shell, Aluminum Mullion, Curtain Wall",
    textSnippetEN: "Elevation (1:20) & Section (1:20) - R.C.C. Shell, Aluminum Mullion, Curtain Wall"
  },
  {
    pageNumber: 12,
    titleDE: "Flowline Café - Physical Model",
    titleEN: "Flowline Café - Physical Model",
    category: "Flowline Café",
    textSnippetDE: "Physisches Modell der geschwungenen Schalenüberdachung",
    textSnippetEN: "Handmade physical plaster/clay model of the vaulted shell canopy"
  },
  {
    pageNumber: 13,
    titleDE: "Der vertikale Spaziergang - Konzept & Site Plan",
    titleEN: "The Vertical Walk - Concept & Site Plan",
    category: "Der vertikale Spaziergang",
    previewImage: verticalHero,
    textSnippetDE: "Wasserturm Milanino - Roter Rundweg um das Kulturdenkmal, Site Plan (1:500) & Schnitt AA'",
    textSnippetEN: "Milanino Water Tower - Red spiral walkway around historic monument, Site Plan (1:500) & Section AA'"
  },
  {
    pageNumber: 14,
    titleDE: "Der vertikale Spaziergang - Schnitt BB' & Details",
    titleEN: "The Vertical Walk - Section BB' & Details",
    category: "Der vertikale Spaziergang",
    textSnippetDE: "Schnitt BB' durch Wasserturm + Visualisierungen: Sitzbereich, Fußweg, Cafeteria",
    textSnippetEN: "Section BB' through water tower + Renderings: Meditation steps, Walkway, Cafeteria"
  },
  {
    pageNumber: 15,
    titleDE: "Raum für Wissen - Hero Render",
    titleEN: "Room for Knowledge - Hero Render",
    category: "Raum für Wissen",
    previewImage: raumWissenHero,
    textSnippetDE: "Das Lernzentrum der Universität Bonn - Perspektive Campusplatz mit Holzfassade",
    textSnippetEN: "University of Bonn Learning Center - Campus plaza view with timber facade"
  },
  {
    pageNumber: 16,
    titleDE: "Raum für Wissen - Konzept & Site Plan",
    titleEN: "Room for Knowledge - Concept & Site Plan",
    category: "Raum für Wissen",
    textSnippetDE: "6 Axonometrische Schrittfolgen (Programm, Erschließung, Interaktion, Schnitt, Unterrichtsraum, Transformation) + Site Plan (1:500)",
    textSnippetEN: "6 Axonometric sequence steps (Program, Circulation, Interaction, Section, Focus, Transformation) + Site Plan (1:500)"
  },
  {
    pageNumber: 17,
    titleDE: "Raum für Wissen - Erdgeschossgrundriss",
    titleEN: "Room for Knowledge - Ground Floor Plan",
    category: "Raum für Wissen",
    textSnippetDE: "Erdgeschossgrundriss (1:200) & Schnitt AA' (1:200) - Seminar Hall, Foyer, Diskussionsräume",
    textSnippetEN: "Ground Floor Plan (1:200) & Section AA' (1:200) - Seminar Hall, Foyer, Discussion rooms"
  },
  {
    pageNumber: 18,
    titleDE: "Raum für Wissen - Fassadendetail",
    titleEN: "Room for Knowledge - Facade Detail",
    category: "Raum für Wissen",
    textSnippetDE: "Ansicht & Schnitt (1:20) - 18 nummerierte Materialschichten der Holzlamellenfassade",
    textSnippetEN: "Elevation & Section (1:20) - 18 numbered structural specification layers of timber facade"
  },
  {
    pageNumber: 19,
    titleDE: "Raum für Wissen - Kontextansichten",
    titleEN: "Room for Knowledge - Context Elevations",
    category: "Raum für Wissen",
    textSnippetDE: "Städtebauliche Kontextansichten AT A (1:200) & AT B (1:200) im Dialog mit dem Universitätsschloss",
    textSnippetEN: "Urban context elevations AT A (1:200) & AT B (1:200) alongside historic university palace"
  },
  {
    pageNumber: 20,
    titleDE: "Abschluss / Haltung & Kontakt",
    titleEN: "Closing / Architectural Statement & Contact",
    category: "Closing",
    previewImage: sketchPhoto,
    textSnippetDE: "Sneha Patil | snehahpatil18@gmail.com | +49 15510292595 | Mein architektonischer Ansatz basiert auf Forschung, Innovation und präziser Umsetzung...",
    textSnippetEN: "Sneha Patil | snehahpatil18@gmail.com | +49 15510292595 | My architectural approach is grounded in research, innovation, and precise execution..."
  }
];
