/**
 * translations.js
 * Bilingual translation data for Dr. Amr Emad Romia's portfolio.
 * Toggle between Arabic (RTL) and English (LTR) without page reload.
 */

const translations = {
  ar: {
    // ── Navbar ──────────────────────────────────────────────────
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_services: "الخدمات",
    nav_cases: "الحالات",
    nav_contact: "تواصل معي",
    nav_consultation_btn: "احجز استشارة",
    lang_btn: "EN",

    // ── Hero ────────────────────────────────────────────────────
    hero_name: "د. عمرو عماد رومية",
    hero_title: "استشاري طب وجراحة الحيوان",
    hero_sub1: "طالب ماجستير في الجراحة البيطرية",
    hero_sub2: "خريج كلية الطب البيطري – جامعة الزقازيق 2025",
    hero_grade: "بتقدير جيد جداً",
    hero_btn_book: "احجز استشارة",
    hero_btn_cases: "استعرض الحالات",

    // ── About ───────────────────────────────────────────────────
    section_about_eyebrow: "من أنا",
    about_title: "خبرة تجمع بين العلم والشغف بصحة الحيوان",
    about_body:
      "د. عمرو عماد رومية طبيب بيطري شغوف بصحة الحيوانات وسلامتها. حصل على درجة البكالوريوس من كلية الطب البيطري بجامعة الزقازيق عام 2025 بتقدير جيد جداً، وهو الآن طالب ماجستير في الجراحة البيطرية. يجمع بين المعرفة الأكاديمية المتعمقة والخبرة الميدانية لتقديم أفضل رعاية ممكنة للحيوانات الأليفة.",
    about_item1_title: "التعليم",
    about_item1_body: "بكالوريوس الطب البيطري – جامعة الزقازيق، 2025",
    about_item2_title: "التخصص",
    about_item2_body: "ماجستير الجراحة البيطرية (قيد الدراسة)",
    about_item3_title: "الرؤية",
    about_item3_body: "تحسين جودة حياة الحيوانات عبر تشخيص دقيق ورعاية شاملة",

    // ── Services ────────────────────────────────────────────────
    section_services_eyebrow: "الخدمات",
    services_title: "خدمات بيطرية متكاملة",
    services_subtitle: "أقدم مجموعة شاملة من الخدمات الطبية البيطرية بأعلى معايير الجودة والاحترافية",
    srv1_title: "الفحص الطبي",
    srv1_desc: "فحص شامل ودقيق لتقييم الحالة الصحية العامة للحيوان والكشف المبكر عن أي مشكلات.",
    srv2_title: "التطعيمات",
    srv2_desc: "برامج تطعيم مخصصة لحماية حيوانك من الأمراض المعدية الشائعة.",
    srv3_title: "التشخيص والعلاج",
    srv3_desc: "تشخيص دقيق باستخدام أحدث الأساليب العلمية ووضع خطط علاجية فعّالة.",
    srv4_title: "الجراحة البيطرية",
    srv4_desc: "إجراء العمليات الجراحية بمهارة عالية في بيئة معقمة وآمنة.",
    srv5_title: "استشارات بيطرية",
    srv5_desc: "استشارات متخصصة لأصحاب الحيوانات الأليفة لمساعدتهم في اتخاذ القرارات الصحيحة.",
    srv6_title: "استشارات أونلاين",
    srv6_desc: "احصل على رأي الطبيب من منزلك مباشرةً عبر واتساب بكل سهولة ويسر.",

    // ── Stats ───────────────────────────────────────────────────
    stat1_label: "حالة تمت معالجتها",
    stat2_label: "رضا العملاء",
    stat2_suffix: "%",
    stat3_label: "دعم متواصل",
    stat3_suffix: "/7",
    stat4_label: "استشارة ناجحة",

    // ── Cases ───────────────────────────────────────────────────
    section_cases_eyebrow: "الحالات",
    cases_title: "أبرز الحالات الطبية",
    cases_subtitle: "نماذج من الحالات البيطرية التي تمت معالجتها بنجاح",
    filter_all: "الكل",
    filter_dogs: "كلاب",
    filter_cats: "قطط",
    filter_surgery: "جراحة",
    case1_title: "كسر في الساق – كلب",
    case1_desc: "تجبير جراحي ناجح لكسر في عظم الفخذ لكلب ذهبي بالغ.",
    case2_title: "عدوى تنفسية – قطة",
    case2_desc: "تشخيص وعلاج التهاب رئوي حاد في قطة فارسية.",
    case3_title: "استئصال ورم – كلب",
    case3_desc: "إزالة ورم حميد من منطقة البطن بنجاح تام.",
    case4_title: "كسر في الحوض – قطة",
    case4_desc: "تثبيت جراحي لكسر الحوض في قطة شيرازية.",
    case5_title: "التهاب الجلد – كلب",
    case5_desc: "علاج حالة التهاب جلدي مزمن مع وضع خطة وقاية مستمرة.",
    case6_title: "عملية تعقيم – قطة",
    case6_desc: "إجراء عملية تعقيم آمنة وسريعة التعافي لقطة منزلية.",

    // ── Why Choose ──────────────────────────────────────────────
    section_why_eyebrow: "لماذا أنا",
    why_title: "ما يميزني عن غيري",
    why1_title: "تشخيص دقيق",
    why1_desc: "أعتمد على أحدث المعايير العلمية لضمان دقة التشخيص.",
    why2_title: "متابعة مستمرة",
    why2_desc: "أتابع كل حالة حتى التعافي الكامل لضمان صحة حيوانك.",
    why3_title: "استشارات متخصصة",
    why3_desc: "خبرة متخصصة في الجراحة البيطرية لتقديم أفضل حل ممكن.",
    why4_title: "رعاية شاملة",
    why4_desc: "أتعامل مع كل حالة بشكل فردي لضمان أعلى مستوى من الرعاية.",

    // ── Contact ──────────────────────────────────────────────────
    section_contact_eyebrow: "تواصل معي",
    contact_title: "هل تحتاج إلى مساعدة؟ تواصل معي الآن",
    contact_subtitle: "أنا هنا للإجابة على جميع استفساراتك وتقديم المساعدة اللازمة لحيوانك الأليف",
    contact_phone_label: "الهاتف",
    contact_phone: "01276583846",
    contact_facebook_label: "فيسبوك",
    contact_facebook: "Dr Amr Emad Romia",
    contact_whatsapp_label: "واتساب",
    contact_whatsapp: "تواصل عبر واتساب",
    contact_cta: "احجز استشارة الآن",

    // ── Footer ───────────────────────────────────────────────────
    footer_tagline: "استشاري طب وجراحة الحيوان",
    footer_copy: "© 2025 د. عمرو عماد رومية. جميع الحقوق محفوظة.",

    // ── Consultation Page ────────────────────────────────────────
    consult_hero_title: "احصل على استشارة بيطرية متخصصة",
    consult_hero_sub: "تواصل مع د. عمرو مباشرةً عبر واتساب للحصول على استشارة بيطرية سريعة ومتخصصة",
    consult_section_eyebrow: "الاستشارات",
    consult_section_title: "اختر نوع الاستشارة",
    consult_section_sub: "استشارات متخصصة في مختلف قطاعات الطب البيطري",
    consult_large_title: "استشارة الحيوانات الكبيرة",
    consult_large_desc: "استشارات متخصصة للحيوانات الكبيرة مثل الأبقار والجاموس والخيول والجمال وغيرها.",
    consult_pets_title: "استشارة الحيوانات الأليفة",
    consult_pets_desc: "استشارات للحيوانات الأليفة والمنزلية مثل القطط والكلاب وغيرها.",
    consult_birds_title: "استشارة الطيور والدواجن",
    consult_birds_desc: "استشارات متخصصة للطيور والدواجن وطيور الزينة.",
    consult_btn: "تواصل عبر واتساب",
    consult_note: "ملاحظة: الاستشارة مدفوعة. سيتم تحديد السعر عند التواصل.",
    back_home: "العودة للرئيسية",
  },

  en: {
    // ── Navbar ──────────────────────────────────────────────────
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_cases: "Cases",
    nav_contact: "Contact",
    nav_consultation_btn: "Book Consultation",
    lang_btn: "AR",

    // ── Hero ────────────────────────────────────────────────────
    hero_name: "Dr. Amr Emad Romia",
    hero_title: "Veterinary Medicine & Surgery Consultant",
    hero_sub1: "Master's Degree Candidate in Veterinary Surgery",
    hero_sub2: "Zagazig University Graduate 2025",
    hero_grade: "Very Good Grade",
    hero_btn_book: "Book Consultation",
    hero_btn_cases: "View Cases",

    // ── About ───────────────────────────────────────────────────
    section_about_eyebrow: "About Me",
    about_title: "Expertise where science meets a passion for animal health",
    about_body:
      "Dr. Amr Emad Romia is a veterinary physician driven by a genuine passion for animal health. He holds a Bachelor's degree from the Faculty of Veterinary Medicine, Zagazig University (Class of 2025, Very Good Grade), and is currently a Master's candidate in Veterinary Surgery. He combines deep academic knowledge with hands-on clinical experience to deliver the highest standard of care for companion animals.",
    about_item1_title: "Education",
    about_item1_body: "B.V.Sc. – Zagazig University, 2025",
    about_item2_title: "Specialisation",
    about_item2_body: "M.Sc. Veterinary Surgery (in progress)",
    about_item3_title: "Vision",
    about_item3_body: "Improving animal quality of life through accurate diagnosis and comprehensive care",

    // ── Services ────────────────────────────────────────────────
    section_services_eyebrow: "Services",
    services_title: "Comprehensive Veterinary Services",
    services_subtitle: "A full range of veterinary medical services delivered to the highest standards of quality and professionalism",
    srv1_title: "Medical Examination",
    srv1_desc: "Thorough full-body examination to assess overall health and enable early detection of issues.",
    srv2_title: "Vaccinations",
    srv2_desc: "Tailored vaccination programmes to protect your pet against common infectious diseases.",
    srv3_title: "Diagnosis & Treatment",
    srv3_desc: "Precise diagnosis using the latest scientific methods and evidence-based treatment plans.",
    srv4_title: "Surgical Procedures",
    srv4_desc: "Skilled surgery performed in a sterile, safe clinical environment.",
    srv5_title: "Veterinary Consultations",
    srv5_desc: "Expert consultations helping pet owners make the right decisions for their animals.",
    srv6_title: "Online Consultations",
    srv6_desc: "Get a professional opinion from home via WhatsApp — fast and convenient.",

    // ── Stats ───────────────────────────────────────────────────
    stat1_label: "Cases Treated",
    stat2_label: "Client Satisfaction",
    stat2_suffix: "%",
    stat3_label: "Support",
    stat3_suffix: "/7",
    stat4_label: "Successful Consultations",

    // ── Cases ───────────────────────────────────────────────────
    section_cases_eyebrow: "Cases",
    cases_title: "Featured Medical Cases",
    cases_subtitle: "A selection of veterinary cases successfully treated",
    filter_all: "All",
    filter_dogs: "Dogs",
    filter_cats: "Cats",
    filter_surgery: "Surgery",
    case1_title: "Leg Fracture – Dog",
    case1_desc: "Successful surgical fixation of a femoral fracture in an adult Golden Retriever.",
    case2_title: "Respiratory Infection – Cat",
    case2_desc: "Diagnosis and treatment of acute pneumonia in a Persian cat.",
    case3_title: "Tumour Removal – Dog",
    case3_desc: "Complete excision of a benign abdominal tumour.",
    case4_title: "Pelvic Fracture – Cat",
    case4_desc: "Surgical stabilisation of a pelvic fracture in a Shirazi cat.",
    case5_title: "Dermatitis – Dog",
    case5_desc: "Treatment of chronic dermatitis with an ongoing prevention plan.",
    case6_title: "Neutering – Cat",
    case6_desc: "Safe and swift neutering procedure with rapid recovery.",

    // ── Why Choose ──────────────────────────────────────────────
    section_why_eyebrow: "Why Me",
    why_title: "What Sets Me Apart",
    why1_title: "Accurate Diagnosis",
    why1_desc: "Applying the latest scientific standards to ensure diagnostic precision.",
    why2_title: "Continuous Follow-Up",
    why2_desc: "Every case is monitored through to full recovery.",
    why3_title: "Specialist Consultations",
    why3_desc: "In-depth surgical expertise to deliver the best possible outcome.",
    why4_title: "Comprehensive Care",
    why4_desc: "Each case treated individually to achieve the highest level of care.",

    // ── Contact ──────────────────────────────────────────────────
    section_contact_eyebrow: "Contact",
    contact_title: "Need help? Get in touch now",
    contact_subtitle: "I'm here to answer all your questions and provide the support your pet needs",
    contact_phone_label: "Phone",
    contact_phone: "01276583846",
    contact_facebook_label: "Facebook",
    contact_facebook: "Dr Amr Emad Romia",
    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp: "Chat on WhatsApp",
    contact_cta: "Book a Consultation",

    // ── Footer ───────────────────────────────────────────────────
    footer_tagline: "Veterinary Medicine & Surgery Consultant",
    footer_copy: "© 2025 Dr. Amr Emad Romia. All rights reserved.",

    // ── Consultation Page ────────────────────────────────────────
    consult_hero_title: "Get Professional Veterinary Consultation",
    consult_hero_sub: "Contact Dr. Amr directly via WhatsApp for a fast and expert veterinary consultation",
    consult_section_eyebrow: "Consultations",
    consult_section_title: "Choose Your Consultation Type",
    consult_section_sub: "Specialised consultations across all veterinary sectors",
    consult_large_title: "Large Animals Consultation",
    consult_large_desc: "Professional consultation for large animals including cattle, buffaloes, horses, camels, and other large animal cases.",
    consult_pets_title: "Pets Consultation",
    consult_pets_desc: "Professional consultation for pets and companion animals including cats, dogs, and other household animals.",
    consult_birds_title: "Birds & Poultry Consultation",
    consult_birds_desc: "Professional consultation for birds, poultry, and ornamental bird species.",
    consult_btn: "Chat on WhatsApp",
    consult_note: "Note: Consultations are paid. Price will be confirmed on contact.",
    back_home: "Back to Home",
  },
};
