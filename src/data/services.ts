const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

export interface ServiceSection {
  heading: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  intro: string;
  bullets: string[];
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "industrial-maintenance",
    shortTitle: "Industrial Maintenance and Plant Operation Services",
    title: "Industrial Maintenance and Plant Operation Services",
    image: `${BASE}s5.jpeg`,
    intro: "At PANSA GROUP OF COMPANIES N.V., we understand that the heart of any industrial operation lies in its maintenance and efficient plant operation. Our dedicated team of experts is committed to ensuring the reliability, safety, and optimal performance of your industrial facilities.",
    bullets: [
      "Preventive & risk based maintenance",
      "Machinery inspection, repair, upgrade or modification",
      "Field services, trouble shooting",
      "Heat exchangers maintenance",
      "Inspection supervision & source inspection",
    ],
    sections: [
      { heading: "Comprehensive Maintenance Solutions", text: "Our industrial maintenance services are designed to proactively address the unique challenges of your equipment and infrastructure. From routine inspections to predictive maintenance strategies, we employ cutting-edge technologies and industry best practices to maximize the lifespan of your assets." },
      { heading: "Plant Operation Excellence", text: "Achieving operational excellence is key to sustained success. PANSA GROUP OF COMPANIES N.V. partners with you to streamline and enhance your plant operations. We focus on optimizing processes, reducing downtime, and increasing overall efficiency to keep your operations running smoothly." },
      { heading: "Customized Maintenance Programs", text: "Recognizing that every industry and facility has distinct needs, we tailor our maintenance programs to align with your specific requirements. Whether you operate in manufacturing, energy, or any other sector, our customized approach ensures that your assets are maintained at peak performance levels." },
      { heading: "Emergency Response", text: "In the dynamic world of industry, emergencies can arise at any time. PANSA GROUP OF COMPANIES N.V. stands ready with a rapid response team equipped to handle unforeseen situations. Our 24/7 emergency services ensure minimal downtime and a swift resolution to any issues that may arise." },
      { heading: "Technology-Driven Solutions", text: "We leverage the latest technologies, including predictive analytics and condition monitoring, to identify potential issues before they become critical. This proactive approach minimizes the risk of unplanned downtime, reduces maintenance costs, and enhances the overall reliability of your operations." },
      { heading: "Compliance and Safety", text: "PANSA GROUP OF COMPANIES N.V. is dedicated to upholding the highest standards of safety and compliance. Our maintenance services are not only focused on performance but also on creating a secure work environment. We work in adherence to industry regulations and guidelines to safeguard your assets and personnel.\n\nPartner with PANSA GROUP OF COMPANIES N.V. for Industrial Maintenance and Plant Operation Services that go beyond expectations. Your success is our priority, and we are committed to ensuring that your industrial infrastructure operates at its peak, efficiently and safely." },
    ],
  },
  {
    slug: "human-resource-services",
    shortTitle: "Human Resource Services",
    title: "Human Resource Services",
    image: `${BASE}s6.jpeg`,
    intro: "At PANSA GROUP OF COMPANIES N.V., we recognize that the success of any organization lies in its people. Our Human Resource Services are designed to empower your workforce, drive talent development, and ensure that your organization thrives in the competitive business landscape.",
    bullets: [
      "Construction Management Services: Managers, Supervisors, Foremen, Coordinators for all construction works",
      "Field Labor Force: Equipment Operators, Mechanics, Drillers, Warehouse personnel, Carpenters, Steel Workers, Masons, Plate & Pipe Welders, Pipe Fitters, Plumbers, Electrical & Instrumentation Technicians, etc.",
    ],
    sections: [
      { heading: "Talent Acquisition and Recruitment", text: "Finding the right talent is crucial for the growth of your business. Our dedicated team specializes in identifying, attracting, and recruiting top-tier professionals who align with your company's values and objectives. We streamline the recruitment process, saving you time and resources while ensuring you get the best candidates." },
      { heading: "Workforce Management", text: "Efficiently managing your workforce is essential for optimal productivity. PANSA GROUP OF COMPANIES N.V. provides comprehensive workforce management solutions, including payroll services, time and attendance tracking, and compliance management. Our goal is to simplify complex HR processes, allowing you to focus on your core business." },
      { heading: "Employee Training and Development", text: "Investing in the development of your employees is an investment in the future success of your organization. We offer tailored training programs designed to enhance the skills and capabilities of your workforce. From technical skills to leadership development, our training initiatives contribute to a skilled and motivated team." },
      { heading: "Strategic HR Consulting", text: "Our experienced HR consultants work closely with your leadership team to align human resource strategies with your overall business objectives. We provide insights and recommendations on talent management, organizational development, and HR policies, ensuring that your HR practices contribute to the success of your business." },
      { heading: "Employee Relations and Engagement", text: "A positive workplace culture is key to employee satisfaction and retention. Pansa Holding N.V. focuses on fostering a healthy work environment through effective employee relations and engagement initiatives. We help create a workplace where employees feel valued, motivated, and connected to the organization's mission." },
      { heading: "Regulatory Compliance", text: "Navigating the complex landscape of HR regulations and compliance can be challenging. PANSA GROUP OF COMPANIES N.V. stays abreast of the latest legal requirements to ensure that your HR policies align with local and international standards. This commitment minimizes legal risks and reinforces ethical HR practices." },
      { heading: "Customized HR Solutions", text: "Recognizing that each organization is unique, our Human Resource Services are customizable to meet your specific needs. Whether you are a small startup or a large enterprise, we adapt our services to fit the scale and scope of your operations." },
    ],
  },
  {
    slug: "technical-vocational-training",
    shortTitle: "Technical Vocational Training & Qualification",
    title: "Technical Vocational Training & Qualification",
    image: `${BASE}s7.jpg`,
    intro: "Quality technical vocational training and demand-driven programs & Qualification (ASME, AWS, API, NIL, SBB, CANTA-CVQ, VCA). PANSA GROUP OF COMPANIES N.V. is committed to empowering individuals and organizations with the skills and qualifications needed to excel in technical and vocational fields.",
    bullets: [
      "HSE Training programs",
      "ISO Training programs",
      "Welding, Machinist, Mechanical- and Electrical Maintenance training programs",
    ],
    sections: [
      { heading: "Comprehensive Training Programs", text: "Our curriculum covers a wide range of technical and vocational disciplines, providing participants with hands-on, practical skills and theoretical knowledge." },
      { heading: "Industry-Relevant Curriculum", text: "Our training programs are developed in collaboration with industry experts, ensuring that the curriculum aligns with current industry standards and practices." },
      { heading: "Experienced Instructors", text: "Our trainers are seasoned professionals with extensive industry experience, providing mentorship and guidance that bridges the gap between education and real-world application." },
      { heading: "Qualification and Certification", text: "Upon successful completion of our programs, participants receive industry-recognized qualifications and certifications, enhancing their employability and career prospects." },
      { heading: "Customized Training Solutions", text: "We understand that every organization has unique training needs. We offer customized training solutions to address specific skill gaps and operational requirements." },
      { heading: "Continuous Learning and Development", text: "We encourage a culture of continuous learning by offering ongoing development opportunities, allowing individuals to stay current with industry advancements." },
    ],
  },
  {
    slug: "health-safety-environment",
    shortTitle: "Health, Safety, Environment",
    title: "Health, Safety, Environment",
    image: `${BASE}s8.jpg`,
    intro: "Pansa Group of Companies is committed to work according to the Health, Safety and Environmental standards, policies and regulations. Injuries occurring during our work are preventable when the work is well planned and safety policies and rules are followed.\n\nAt PANSA GROUP OF COMPANIES N.V., we recognize that a commitment to Health, Safety, and Environment (HSE) is not only a legal and ethical obligation but a fundamental aspect of sustainable business practices. Our comprehensive HSE solutions are designed to safeguard your workforce, protect the environment, and ensure compliance with the highest industry standards.",
    bullets: [
      "HSE policy implementation and management",
      "Risk assessment and hazard identification",
      "Safety inspections and audits",
      "Environmental impact assessments",
      "Emergency response planning",
    ],
    sections: [
      { heading: "Occupational Health and Safety", text: "Prioritizing the well-being of your workforce is paramount. PANSA GROUP OF COMPANIES N.V. provides tailored Occupational Health and Safety programs that go beyond compliance. From risk assessments to safety training and emergency response planning, our HSE experts work collaboratively with your team to create a secure and healthy work environment." },
      { heading: "Environmental Sustainability", text: "Our commitment to environmental stewardship is evident in every aspect of our operations. PANSA GROUP OF COMPANIES N.V. integrates sustainable practices into our HSE solutions, helping clients minimize their environmental footprint. From waste reduction strategies to energy-efficient processes, we aim to contribute to a cleaner, greener future." },
      { heading: "Regulatory Compliance", text: "Navigating the complex landscape of health, safety, and environmental regulations can be challenging. PANSA GROUP OF COMPANIES N.V. stays abreast of the latest legal requirements, ensuring that your operations align with local and international standards. Our HSE consultants work to mitigate risks, avoid penalties, and promote a culture of compliance within your organization." },
      { heading: "HSE Training and Awareness", text: "Empower your workforce with the knowledge and skills needed to maintain a safe and environmentally conscious workplace. PANSA GROUP OF COMPANIES N.V. offers comprehensive HSE training programs, covering topics such as hazard identification, emergency response, and sustainable practices. Investing in employee awareness enhances overall safety and contributes to a culture of responsibility." },
      { heading: "Incident Investigation and Risk Management", text: "In the event of incidents, prompt and thorough investigation is crucial. PANSA GROUP OF COMPANIES N.V. excels in incident investigation and risk management, identifying root causes, implementing corrective actions, and developing preventive strategies. Our proactive approach aims to minimize the likelihood of incidents, protecting both personnel and assets." },
      { heading: "HSE Audits and Assessments", text: "Regular assessments are essential to maintaining the effectiveness of HSE programs. PANSA GROUP OF COMPANIES N.V. conducts thorough HSE audits to evaluate the performance of existing systems, identify areas for improvement, and ensure ongoing compliance. Our assessments provide valuable insights for optimizing HSE strategies and enhancing overall organizational resilience." },
    ],
  },
  {
    slug: "power-boilers-pressure-vessels",
    shortTitle: "Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels",
    title: "Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels",
    image: `${BASE}s1.jpeg`,
    intro: "PANSA GROUP OF COMPANIES N.V. stands at the forefront of the industry, delivering unparalleled expertise in the manufacturing, repair, and alteration of power boilers and pressure vessels. With a commitment to precision engineering, safety, and reliability, we offer comprehensive solutions tailored to meet the unique requirements of our clients.",
    bullets: [
      "Pressure vessel & power boiler",
      "Tank construction, erection & repairs",
      "Alterations, repairs, revisions & manufacturing",
      "Assembly of pumps & parts, casings, impellers",
      "Shafts & sleeves, valve plates, stems, discs & seats",
    ],
    sections: [
      { heading: "Manufacturing Excellence", text: "Our state-of-the-art manufacturing facilities are equipped with cutting-edge technology and staffed by a team of skilled engineers and craftsmen. From concept to completion, PANSA GROUP OF COMPANIES N.V. ensures the highest standards in the fabrication of power boilers and pressure vessels. Our manufacturing process prioritizes quality, efficiency, and adherence to industry codes and standards." },
      { heading: "Repair and Restoration", text: "Extend the lifespan of your power boilers and pressure vessels with our expert repair and restoration services. PANSA GROUP OF COMPANIES N.V. specializes in the diagnosis and resolution of issues, implementing precise solutions to ensure optimal performance and safety. Our experienced technicians conduct thorough assessments to identify areas of concern and execute timely repairs, minimizing downtime and maximizing efficiency." },
      { heading: "Alteration for Enhanced Performance", text: "In the dynamic landscape of industrial operations, adaptability is key. PANSA GROUP OF COMPANIES N.V. offers alteration services to enhance the performance and efficiency of power boilers and pressure vessels. Whether it's upgrading components, implementing advanced technologies, or optimizing design for increased capacity, our alteration services are tailored to meet the evolving needs of your operations." },
      { heading: "Compliance and Safety Assurance", text: "Safety is paramount in the manufacturing, repair, and alteration of power boilers and pressure vessels. PANSA GROUP OF COMPANIES N.V. is committed to strict adherence to industry regulations and safety standards. Our processes and procedures prioritize compliance, ensuring that your equipment meets or exceeds the necessary codes and guidelines." },
      { heading: "Quality Control", text: "Quality control is ingrained in every step of our manufacturing and repair processes. Rigorous inspections and testing procedures are conducted to guarantee the integrity and reliability of our products. PANSA GROUP OF COMPANIES N.V. is dedicated to delivering solutions that not only meet but exceed the expectations of our clients." },
      { heading: "Environmental Stewardship", text: "In addition to ensuring operational excellence, PANSA GROUP OF COMPANIES N.V. is committed to environmental responsibility. Our manufacturing, repair, and alteration processes incorporate sustainable practices to minimize environmental impact, aligning with global initiatives for a greener, more sustainable future." },
    ],
  },
  {
    slug: "steel-fabrication",
    shortTitle: "Fabrication of Steel Construction, Storage Tanks, Silo's, Cyclones",
    title: "Fabrication of Steel Construction, Storage Tanks, Silo's, Cyclones",
    image: `${BASE}s2.jpeg`,
    intro: "Pansa Group of Companies N.V. takes pride in its expertise in the fabrication of steel structures, offering a diverse range of services tailored to meet the unique needs of our clients. From intricate steel constructions to robust storage solutions, silos, and cyclones, we deliver high-quality, custom-fabricated products that stand the test of time.",
    bullets: [
      "Steel and pipeline modification",
      "Pontoon construction",
      "Barge and dredge construction",
    ],
    sections: [
      { heading: "Precision Steel Construction", text: "Our skilled craftsmen and engineers bring precision and innovation to every steel construction project. Pansa Group of Companies N.V. specializes in the fabrication of steel structures that are not only aesthetically pleasing but also engineered for durability and functionality. Whether it's complex architectural designs or large-scale industrial structures, we excel in turning concepts into reality." },
      { heading: "Storage Tanks", text: "Efficient and reliable storage is the backbone of many industries. Pansa Group of Companies N.V. provides expert fabrication services for storage tanks, catering to a wide range of applications. Our tanks are meticulously designed and fabricated to meet industry standards, ensuring the safe and secure storage of liquids, gases, and bulk materials." },
      { heading: "Silos for Optimal Material Handling", text: "Pansa Group of Companies N.V. understands the importance of efficient material handling in industrial processes. Our silo fabrication services are tailored to meet the specific requirements of your operation, providing reliable storage solutions for bulk materials. From design to fabrication, our silos are built to optimize material flow, ensuring seamless and controlled production." },
      { heading: "Cyclones for Air Pollution Control", text: "Air quality is a critical aspect of industrial operations. Pansa Group of Companies N.V. specializes in the fabrication of cyclones for air pollution control. Our cyclones are designed to efficiently separate particulate matter from air or gas streams, contributing to a cleaner and safer working environment. Our commitment to environmental responsibility is evident in every aspect of our cyclone fabrication." },
      { heading: "Quality Assurance and Compliance", text: "Pansa Group of Companies N.V. places a strong emphasis on quality assurance throughout the fabrication process. Our facilities adhere to strict quality control measures, ensuring that every product meets or exceeds industry standards. We are committed to compliance with relevant codes and regulations, providing our clients with confidence in the structural integrity and safety of our fabricated steel products." },
      { heading: "Customized Solutions", text: "Recognizing that every project is unique, our fabrication services are highly customizable. Whether you require a specific design, material, or finish, Pansa Group of Companies N.V. collaborates closely with clients to deliver tailored solutions that align with project specifications and objectives." },
      { heading: "Project Management Excellence", text: "From conceptualization to installation, Pansa Group of Companies N.V. excels in project management. Our experienced teams coordinate every aspect of the fabrication process, ensuring timely delivery and seamless integration into your operations. We prioritize transparency and communication throughout, providing clients with confidence in the progress and success of their projects." },
    ],
  },
  {
    slug: "engineering-procurement",
    shortTitle: "Engineering, Procurement, Construction & Maintenance",
    title: "Engineering, Procurement, Construction & Maintenance (EPCM)",
    image: `${BASE}s3.jpg`,
    intro: "We are flexible, creative, inquisitive and innovative. We constantly develop and improve the standards of excellence in everything we do, while we incorporate new ideas within our services and products.\n\nPansa Group of Companies N.V. is your strategic partner in achieving seamless project execution through our comprehensive Engineering, Procurement, Construction & Maintenance (EPCM) services. From conceptualization to maintenance, we bring a wealth of expertise, cutting-edge technology, and a commitment to excellence to every phase of your project.",
    bullets: [
      "Integrated engineering and project management",
      "Procurement of specialized industrial equipment",
      "Construction management and supervision",
      "Maintenance and asset lifecycle management",
      "HSE compliance throughout all project phases",
    ],
    sections: [
      { heading: "Engineering Excellence", text: "Our experienced engineering teams specialize in translating concepts into reality. Pansa Group of Companies N.V. offers a full spectrum of engineering services, including feasibility studies, detailed engineering design, and project planning. Whether it's civil, mechanical, electrical, or process engineering, we deliver innovative solutions that meet and exceed industry standards." },
      { heading: "Procurement Solutions", text: "Efficient procurement is vital for project success. Pansa Group of Companies N.V. employs a strategic approach to procurement, ensuring timely and cost-effective sourcing of materials and equipment. Our extensive network of suppliers and global procurement expertise enables us to secure the highest quality components, adhering to project specifications and budget constraints." },
      { heading: "Construction Management", text: "Seamless construction execution is the cornerstone of our EPCM services. Pansa Group of Companies N.V. provides comprehensive construction management solutions, overseeing every aspect of the project from groundbreaking to completion. Our skilled project managers, supervisors, and construction teams work in harmony to ensure that projects are delivered on time, within budget, and to the highest quality standards." },
      { heading: "Maintenance and Asset Management", text: "Post-construction, our commitment to your success continues through our maintenance and asset management services. Pansa Group of Companies N.V. offers proactive maintenance programs, asset integrity management, and ongoing support to maximize the lifespan and performance of your facilities. Our focus on reliability ensures that your assets consistently operate at peak efficiency." },
      { heading: "Health, Safety, and Environmental Compliance", text: "Safety is paramount in every aspect of our EPCM services. Pansa Group of Companies N.V. prioritizes the well-being of our personnel and the environment through rigorous safety protocols and compliance with industry standards. Our commitment to HSE extends to every phase of the project, contributing to a culture of safety and sustainability." },
      { heading: "Project Optimization", text: "Pansa Group of Companies N.V. is dedicated to optimizing project performance. Through advanced project management methodologies, efficient resource allocation, and continuous monitoring, we identify opportunities for improvement and innovation. Our goal is to enhance project efficiency, reduce costs, and deliver exceptional value to our clients." },
      { heading: "Customized Solutions", text: "Recognizing that each project is unique, our EPCM services are tailored to meet the specific needs and objectives of our clients. Whether you are embarking on a new construction project or requiring ongoing maintenance for existing facilities, Pansa Group of Companies N.V. provides customized solutions that align with your vision and goals." },
    ],
  },
  {
    slug: "valve-pump-machine-shop",
    shortTitle: "Valve & Pump Maintenance and Machine Shop Works",
    title: "Valve & Pump Maintenance and Machine Shop Works",
    image: `${BASE}s4.jpeg`,
    intro: "PANSA GROUP OF COMPANIES N.V. offers specialized valve & pump maintenance and machine shop work services to keep your critical equipment in optimal operating condition.",
    bullets: [
      "Control, butterfly, ball, plug and clarkson valves revision",
      "Pressure relief valves, testing and repairs of parts",
      "CNC turning, NC milling, drilling, boring",
    ],
    sections: [
      { heading: "Valve & Pump Maintenance", text: "Our certified technicians provide comprehensive maintenance services for a wide range of valves and pumps, ensuring reliable operation and preventing costly downtime." },
      { heading: "Machine Shop Works", text: "Our fully equipped machine shop offers precision machining services, including CNC turning, milling, drilling, and more, to manufacture or repair critical components to exact specifications." },
      { heading: "Overhaul and Refurbishment", text: "We offer complete overhaul and refurbishment services for valves and pumps, restoring them to optimal performance and extending their service life." },
      { heading: "Performance Optimization", text: "Through systematic testing and analysis, we identify performance bottlenecks in your valve and pump systems, implementing targeted improvements to enhance efficiency and reliability." },
      { heading: "Emergency Repairs", text: "Understanding the critical nature of valve and pump failures, we provide rapid-response emergency repair services to minimize downtime and restore operations as quickly as possible." },
      { heading: "Quality Assurance", text: "Every maintenance task and machined component undergoes rigorous quality checks, ensuring they meet or exceed original equipment manufacturer (OEM) specifications and industry standards." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
