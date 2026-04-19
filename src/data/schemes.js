export const schemes = [
  {
    id: 1,
    name: "Pradhan Mantri Kisan Samman Nidhi",
    description:
      "Income support for eligible farmer families through direct benefit transfer.",
    eligibility:
      "Small or marginal farmers aged 18+ with annual household income up to Rs. 8 lakh.",
    applyLink: "https://pmkisan.gov.in/",
    ageRange: [18, 70],
    maxIncome: 800000,
    occupations: ["Farmer"],
    states: ["All States"],
    categories: ["General", "OBC", "SC", "ST", "Minority"]
  },
  {
    id: 2,
    name: "Ayushman Bharat PM-JAY",
    description:
      "Health insurance support for economically vulnerable families for secondary and tertiary care.",
    eligibility:
      "Low-income households, especially informal workers and vulnerable families.",
    applyLink: "https://pmjay.gov.in/",
    ageRange: [0, 99],
    maxIncome: 300000,
    occupations: ["Unemployed", "Farmer", "Labourer", "Self-employed"],
    states: ["All States"],
    categories: ["General", "OBC", "SC", "ST", "Minority"]
  },
  {
    id: 3,
    name: "PMEGP",
    description:
      "Credit-linked subsidy scheme to help individuals start micro-enterprises and small businesses.",
    eligibility:
      "Adults planning to start a business, especially self-employed applicants in rural and urban areas.",
    applyLink: "https://www.kviconline.gov.in/pmegpeportal/jsp/pmegponline.jsp",
    ageRange: [18, 60],
    maxIncome: 1000000,
    occupations: ["Self-employed", "Student", "Unemployed"],
    states: ["All States"],
    categories: ["General", "OBC", "SC", "ST", "Minority"]
  },
  {
    id: 4,
    name: "Post Matric Scholarship for SC Students",
    description:
      "Financial assistance for eligible SC students pursuing studies after class 10.",
    eligibility:
      "SC students aged 16+ with family income within the scholarship limits.",
    applyLink: "https://scholarships.gov.in/",
    ageRange: [16, 30],
    maxIncome: 250000,
    occupations: ["Student"],
    states: ["All States"],
    categories: ["SC"]
  },
  {
    id: 5,
    name: "Stand-Up India",
    description:
      "Bank loans for greenfield enterprises promoted by women and SC/ST entrepreneurs.",
    eligibility:
      "Adults starting a new business venture, with special support for SC, ST, and women applicants.",
    applyLink: "https://www.standupmitra.in/",
    ageRange: [18, 65],
    maxIncome: 1200000,
    occupations: ["Self-employed", "Unemployed"],
    states: ["All States"],
    categories: ["SC", "ST", "General", "OBC", "Minority"]
  },
  {
    id: 6,
    name: "National Apprenticeship Promotion Scheme",
    description:
      "Supports skill development and apprenticeship opportunities for youth entering the workforce.",
    eligibility:
      "Young applicants looking for vocational training or work-based learning opportunities.",
    applyLink: "https://www.apprenticeshipindia.gov.in/",
    ageRange: [18, 25],
    maxIncome: 600000,
    occupations: ["Student", "Unemployed"],
    states: ["All States"],
    categories: ["General", "OBC", "SC", "ST", "Minority"]
  },
  {
    id: 7,
    name: "State Skill Development Mission Support",
    description:
      "State-led skilling and placement support for youth and job seekers in selected regions.",
    eligibility:
      "Students, unemployed youth, or workers seeking new skills and better job access.",
    applyLink: "https://www.nsdcindia.org/",
    ageRange: [18, 35],
    maxIncome: 500000,
    occupations: ["Student", "Unemployed", "Labourer"],
    states: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Delhi"],
    categories: ["General", "OBC", "SC", "ST", "Minority"]
  }
];
