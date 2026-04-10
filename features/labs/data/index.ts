export const data = [
  // 🩸 HEMATOLOGY
  {
    id: 1,
    testName: "Complete Blood Count (CBC)",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Evaluates overall blood health. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 2,
    testName: "Hemoglobin",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Measures oxygen-carrying capacity. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 3,
    testName: "Hematocrit",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Measures RBC proportion. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 4,
    testName: "Platelet Count",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Evaluates clotting. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 5,
    testName: "WBC Count",
    groupName: "Hematology",
    commonlyUsed: true,
    description: "Detects infection. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 6,
    testName: "Differential Count",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Breakdown of WBC types. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 7,
    testName: "ESR",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Detects inflammation. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 8,
    testName: "Reticulocyte Count",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Measures immature RBCs. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 9,
    testName: "Peripheral Blood Smear",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Examines blood morphology. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 10,
    testName: "Blood Typing (ABO/Rh)",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Determines blood type. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 11,
    testName: "Prothrombin Time (PT)",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Measures clotting time. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 12,
    testName: "aPTT",
    groupName: "Hematology",
    commonlyUsed: false,
    description:
      "Evaluates clotting pathway. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 13,
    testName: "INR",
    groupName: "Hematology",
    commonlyUsed: true,
    description:
      "Standardized clotting test. Sample: Blood. Fasting: Not required.",
  },

  // 🧪 CLINICAL CHEMISTRY
  {
    id: 14,
    testName: "Fasting Blood Sugar (FBS)",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description:
      "Measures fasting glucose. Sample: Blood. Fasting: Required (8–12 hrs).",
  },
  {
    id: 15,
    testName: "Random Blood Sugar (RBS)",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description:
      "Measures glucose anytime. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 16,
    testName: "Oral Glucose Tolerance Test (OGTT)",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description:
      "Evaluates glucose metabolism. Sample: Blood. Fasting: Required.",
  },
  {
    id: 17,
    testName: "Lipid Profile",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description:
      "Measures cholesterol levels. Sample: Blood. Fasting: Required.",
  },
  {
    id: 18,
    testName: "Total Cholesterol",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Measures cholesterol. Sample: Blood. Fasting: Preferred.",
  },
  {
    id: 19,
    testName: "HDL Cholesterol",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Good cholesterol. Sample: Blood. Fasting: Preferred.",
  },
  {
    id: 20,
    testName: "LDL Cholesterol",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Bad cholesterol. Sample: Blood. Fasting: Preferred.",
  },
  {
    id: 21,
    testName: "Triglycerides",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Measures fats. Sample: Blood. Fasting: Required.",
  },
  {
    id: 22,
    testName: "Creatinine",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description:
      "Kidney function test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 23,
    testName: "Blood Urea Nitrogen (BUN)",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Kidney evaluation. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 24,
    testName: "Uric Acid",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description: "Detects gout risk. Sample: Blood. Fasting: Preferred.",
  },
  {
    id: 25,
    testName: "Sodium",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description:
      "Electrolyte balance. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 26,
    testName: "Potassium",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Electrolyte test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 27,
    testName: "Chloride",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Electrolyte test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 28,
    testName: "Calcium",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description:
      "Bone health indicator. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 29,
    testName: "Magnesium",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Electrolyte test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 30,
    testName: "Phosphorus",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Bone metabolism. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 31,
    testName: "ALT (SGPT)",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description: "Liver enzyme. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 32,
    testName: "AST (SGOT)",
    groupName: "Clinical Chemistry",
    commonlyUsed: true,
    description: "Liver enzyme. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 33,
    testName: "Alkaline Phosphatase",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Liver/bone test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 34,
    testName: "Bilirubin Total",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description:
      "Measures bilirubin. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 35,
    testName: "Bilirubin Direct",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description:
      "Measures direct bilirubin. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 36,
    testName: "Albumin",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description: "Protein level. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 37,
    testName: "Total Protein",
    groupName: "Clinical Chemistry",
    commonlyUsed: false,
    description:
      "Measures protein levels. Sample: Blood. Fasting: Not required.",
  },

  // 🧪 ENDOCRINOLOGY
  {
    id: 38,
    testName: "HbA1c",
    groupName: "Endocrinology",
    commonlyUsed: true,
    description:
      "Average glucose (3 months). Sample: Blood. Fasting: Not required.",
  },
  {
    id: 39,
    testName: "TSH",
    groupName: "Endocrinology",
    commonlyUsed: true,
    description: "Thyroid function. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 40,
    testName: "Free T3",
    groupName: "Endocrinology",
    commonlyUsed: false,
    description: "Thyroid hormone. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 41,
    testName: "Free T4",
    groupName: "Endocrinology",
    commonlyUsed: false,
    description: "Thyroid hormone. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 42,
    testName: "Insulin",
    groupName: "Endocrinology",
    commonlyUsed: false,
    description:
      "Measures insulin levels. Sample: Blood. Fasting: Required.",
  },
  {
    id: 43,
    testName: "Cortisol",
    groupName: "Endocrinology",
    commonlyUsed: false,
    description: "Stress hormone. Sample: Blood. Fasting: Depends.",
  },

  // 🔬 CLINICAL MICROSCOPY
  {
    id: 44,
    testName: "Urinalysis",
    groupName: "Clinical Microscopy",
    commonlyUsed: true,
    description: "Urine evaluation. Sample: Urine. Fasting: Not required.",
  },
  {
    id: 45,
    testName: "Fecalysis",
    groupName: "Clinical Microscopy",
    commonlyUsed: true,
    description: "Stool exam. Sample: Stool. Fasting: Not required.",
  },
  {
    id: 46,
    testName: "Occult Blood Test",
    groupName: "Clinical Microscopy",
    commonlyUsed: false,
    description:
      "Hidden blood detection. Sample: Stool. Fasting: Not required.",
  },
  {
    id: 47,
    testName: "Pregnancy Test (Urine hCG)",
    groupName: "Clinical Microscopy",
    commonlyUsed: true,
    description: "Detects pregnancy. Sample: Urine. Fasting: Not required.",
  },

  // 🦠 MICROBIOLOGY
  {
    id: 48,
    testName: "Urine Culture",
    groupName: "Microbiology",
    commonlyUsed: true,
    description: "Detects bacteria. Sample: Urine. Fasting: Not required.",
  },
  {
    id: 49,
    testName: "Blood Culture",
    groupName: "Microbiology",
    commonlyUsed: false,
    description:
      "Detects bloodstream infection. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 50,
    testName: "Sputum Culture",
    groupName: "Microbiology",
    commonlyUsed: false,
    description:
      "Detects respiratory infection. Sample: Sputum. Fasting: Not required.",
  },
  {
    id: 51,
    testName: "AFB Smear",
    groupName: "Microbiology",
    commonlyUsed: true,
    description: "Detects TB. Sample: Sputum. Fasting: Not required.",
  },
  {
    id: 52,
    testName: "Gram Stain",
    groupName: "Microbiology",
    commonlyUsed: false,
    description:
      "Identifies bacteria. Sample: Various. Fasting: Not required.",
  },

  // 🧫 SEROLOGY
  {
    id: 53,
    testName: "Dengue NS1",
    groupName: "Serology / Immunology",
    commonlyUsed: true,
    description: "Early dengue test. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 54,
    testName: "Dengue IgG/IgM",
    groupName: "Serology / Immunology",
    commonlyUsed: true,
    description: "Dengue antibodies. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 55,
    testName: "HIV Test",
    groupName: "Serology / Immunology",
    commonlyUsed: true,
    description: "Detects HIV. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 56,
    testName: "HBsAg",
    groupName: "Serology / Immunology",
    commonlyUsed: true,
    description:
      "Hepatitis B screening. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 57,
    testName: "Anti-HCV",
    groupName: "Serology / Immunology",
    commonlyUsed: false,
    description:
      "Hepatitis C screening. Sample: Blood. Fasting: Not required.",
  },
  {
    id: 58,
    testName: "CRP",
    groupName: "Serology / Immunology",
    commonlyUsed: true,
    description:
      "Inflammation marker. Sample: Blood. Fasting: Not required.",
  },

  // 🧬 HISTOPATHOLOGY
  {
    id: 59,
    testName: "Pap Smear",
    groupName: "Histopathology & Cytology",
    commonlyUsed: true,
    description:
      "Cervical cancer screening. Sample: Cervical cells. Fasting: Not required.",
  },
  {
    id: 60,
    testName: "Biopsy",
    groupName: "Histopathology & Cytology",
    commonlyUsed: false,
    description: "Tissue examination. Sample: Tissue. Fasting: Depends.",
  },

  // 🧬 MOLECULAR
  {
    id: 61,
    testName: "PCR (COVID-19)",
    groupName: "Molecular Diagnostics",
    commonlyUsed: false,
    description:
      "Detects COVID virus. Sample: Swab. Fasting: Not required.",
  },
  {
    id: 62,
    testName: "PCR (TB)",
    groupName: "Molecular Diagnostics",
    commonlyUsed: false,
    description: "Detects TB DNA. Sample: Sputum. Fasting: Not required.",
  },
];