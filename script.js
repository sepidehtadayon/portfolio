document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  en: {
    role:"Product Management<br>Product Design", navWork:"Work", navAbout:"About", navApproach:"Approach", navContact:"Contact",
    scribble:"From complex<br>to clear", heroTitle:"I turn complex problems into <em>clear products.</em>",
    heroBody:"I’m Sepideh Tadayon, a Product Manager with a product design background. I help organizations digitize complex, traditional workflows — especially insurance claims — by understanding real user needs, simplifying processes and building products that work in the real world.",
    disc1:"Product Design", disc2:"Business Analysis", disc3:"Product Management", explore:"Explore my work",
    photoNote:"People<br>Processes<br>Better experiences", location:"Tehran,<br>Iran", selectedWork:"SELECTED WORK",
    pmLabel:"PRODUCT MANAGEMENT", present1403:"2024 — PRESENT", claimsTitle:"Insurance Claims Platform",
    claimsSub:"Digitizing insurance claims for a faster, more transparent and people-centered experience.",
    claimsBody:"An end-to-end platform for insurance claims, with a focus on motor claims including both property damage and bodily injury. From digital claim reporting to case management, document collection, assessments, settlement and payment.",
    tagMotor:"Motor Claims", tagBodily:"Bodily Injury", tagProperty:"Property Damage", tagWorkflow:"Digital Workflow",
    pdLabel:"PRODUCT & UX DESIGN", designTitle:"Designing for complex systems", designSub:"From user research to intuitive interfaces.",
    designBody:"A selection of UX/UI projects across insurance, automotive and other domains, focusing on understanding users, simplifying complex workflows and designing clear, consistent experiences.",
    tagResearch:"UX Research", tagFlows:"User Flows", tagUI:"UI Design", tagSystems:"Design Systems",
    businessLabel:"BUSINESS / EXPERIENCE DESIGN", present1391:"2012 — PRESENT", sandTitle:"Sandland Playhouse",
    sandSub:"Designing and building a physical experience for children and families.",
    sandBody:"Co-founding and managing a children’s playhouse from the ground up — from concept and space design to operations, team, customer experience and growth. A hands-on experience in turning ideas into a real business.",
    tagService:"Service Design", tagOperations:"Operations", tagTeam:"Team Building", tagCX:"Customer Experience",
    orangeNote:"Curious<br>Pragmatic<br>People-focused", aboutLabel:"ABOUT", aboutTitle:"Hi, I’m Sepideh Tadayon.",
    aboutP1:"I started my career in visual design, moved into product design, and today I work as a product manager. This journey has given me a unique perspective: I deeply understand users, their needs and pain points, and I can connect that understanding to business goals and technical realities.",
    aboutP2:"I enjoy working at the intersection of design, business and technology — turning complex problems into practical, scalable solutions.",
    aboutP3:"I care about people. I build teams where people feel heard, supported and motivated. I believe trust, open communication and collaboration are key to creating great products.",
    sideNote:"Same curiosity<br>Different tools<br>Bigger impact", practiceTitle:"A MULTIDISCIPLINARY<br>PRODUCT PRACTICE",
    practiceIntro:"Combining design, business and product to turn complexity into clear and efficient workflows.",
    practice1Title:"User-centered<br>product thinking", practice1Body:"Grounded in real user needs, contexts and pain points.",
    practice2Title:"Business analysis<br>& process understanding", practice2Body:"Bridging business goals, regulations and user needs.",
    practice3Title:"Product design<br>& experience", practice3Body:"From discovery to intuitive, consistent interfaces.",
    practice4Title:"Product management<br>& delivery", practice4Body:"Prioritization, roadmap and cross-functional collaboration.",
    aiTitle:"AI AS A SUPPORTING TOOL", aiBody:"I use AI to explore ideas, analyze information, create drafts and move faster — while keeping human judgment, user understanding and real-world context at the center.",
    aiNote:"A helpful assistant,<br>not a replacement.", footerRole:"Product Manager · Product Designer", email:"Email", top:"Top ↑", footerLocation:"Tehran, Iran"
  },
  fa: {
    role:"مدیریت محصول<br>طراحی محصول", navWork:"نمونه‌کارها", navAbout:"درباره من", navApproach:"رویکرد", navContact:"تماس",
    scribble:"از پیچیدگی<br>تا وضوح", heroTitle:"مسائل پیچیده را به <em>محصولات شفاف</em> تبدیل می‌کنم.",
    heroBody:"من سپیده تدین هستم؛ مدیر محصول با پیش‌زمینه طراحی محصول. با شناخت نیازها و نقاط درد واقعی کاربران، به سازمان‌ها کمک می‌کنم فرایندهای سنتی و پیچیده — به‌ویژه در صنعت بیمه — را به جریان‌های دیجیتال ساده، کارآمد و قابل استفاده تبدیل کنند.",
    disc1:"طراحی محصول", disc2:"تحلیل کسب‌وکار", disc3:"مدیریت محصول", explore:"مشاهده نمونه‌کارها",
    photoNote:"آدم‌ها<br>فرایندها<br>تجربه‌های بهتر", location:"تهران،<br>ایران", selectedWork:"نمونه‌کارهای منتخب",
    pmLabel:"مدیریت محصول", present1403:"۲۰۲۴ — اکنون", claimsTitle:"پلتفرم مدیریت خسارت بیمه",
    claimsSub:"دیجیتالی‌کردن فرایند خسارت برای تجربه‌ای سریع‌تر، شفاف‌تر و کاربرمحور.",
    claimsBody:"یک پلتفرم یکپارچه برای مدیریت خسارت‌های بیمه، با تمرکز ویژه بر خسارت‌های خودرو شامل خسارت‌های مالی و جانی. از اعلام دیجیتال خسارت تا مدیریت پرونده، مدارک، ارزیابی، تسویه و پرداخت.",
    tagMotor:"خسارت خودرو", tagBodily:"خسارت جانی", tagProperty:"خسارت مالی", tagWorkflow:"فرایند دیجیتال",
    pdLabel:"طراحی محصول و تجربه کاربری", designTitle:"طراحی برای سیستم‌های پیچیده", designSub:"از شناخت کاربر تا رابط‌های ساده و قابل فهم.",
    designBody:"مجموعه‌ای از پروژه‌های UX/UI در حوزه بیمه، خودرو و سایر محصولات؛ با تمرکز بر شناخت کاربران، ساده‌سازی فرایندهای پیچیده و طراحی تجربه‌های روشن و منسجم.",
    tagResearch:"تحقیق کاربر", tagFlows:"جریان کاربر", tagUI:"طراحی رابط", tagSystems:"دیزاین سیستم",
    businessLabel:"کسب‌وکار / طراحی تجربه", present1391:"۲۰۱۲ — اکنون", sandTitle:"خانه بازی سرزمین ماسه",
    sandSub:"طراحی و ساخت یک تجربه فیزیکی برای کودکان و خانواده‌ها.",
    sandBody:"هم‌بنیان‌گذاری و مدیریت یک خانه بازی از نقطه صفر؛ از ایده و طراحی فضا تا عملیات، تیم، تجربه مشتری و رشد. تجربه‌ای عملی از تبدیل یک ایده به کسب‌وکاری واقعی.",
    tagService:"طراحی خدمت", tagOperations:"عملیات", tagTeam:"تیم‌سازی", tagCX:"تجربه مشتری",
    orangeNote:"کنجکاو<br>عمل‌گرا<br>آدم‌محور", aboutLabel:"درباره من", aboutTitle:"سلام، من سپیده تدین هستم.",
    aboutP1:"مسیر حرفه‌ای من از طراحی بصری شروع شد، به طراحی محصول رسید و امروز به‌عنوان مدیر محصول کار می‌کنم. این مسیر باعث شده کاربران، نیازها و نقاط دردشان را عمیق‌تر درک کنم و این شناخت را به اهداف کسب‌وکار و واقعیت‌های فنی متصل کنم.",
    aboutP2:"کار در نقطه تلاقی طراحی، کسب‌وکار و فناوری را دوست دارم؛ جایی که می‌توان مسائل پیچیده را به راه‌حل‌های عملی و مقیاس‌پذیر تبدیل کرد.",
    aboutP3:"آدم‌ها برایم مهم‌اند. تیم‌هایی می‌سازم که افراد در آن شنیده شوند، حمایت شوند و انگیزه داشته باشند. اعتماد، ارتباط شفاف و همکاری را از پایه‌های ساخت محصولات خوب می‌دانم.",
    sideNote:"همان کنجکاوی<br>ابزارهای متفاوت<br>اثر بیشتر", practiceTitle:"یک رویکرد چندرشته‌ای<br>به محصول",
    practiceIntro:"ترکیب طراحی، تحلیل کسب‌وکار و مدیریت محصول برای تبدیل پیچیدگی به فرایندهای روشن و کارآمد.",
    practice1Title:"تفکر محصول<br>با محوریت کاربر", practice1Body:"بر پایه نیازها، زمینه استفاده و نقاط درد واقعی کاربران.",
    practice2Title:"تحلیل کسب‌وکار<br>و شناخت فرایند", practice2Body:"پیوند میان اهداف کسب‌وکار، قوانین و نیازهای کاربران.",
    practice3Title:"طراحی محصول<br>و تجربه کاربری", practice3Body:"از کشف مسئله تا طراحی رابط‌های ساده، روشن و منسجم.",
    practice4Title:"مدیریت محصول<br>و تحویل", practice4Body:"اولویت‌بندی، نقشه راه و همکاری میان تیم‌های مختلف.",
    aiTitle:"هوش مصنوعی به‌عنوان ابزار کمکی", aiBody:"از هوش مصنوعی برای کشف ایده‌ها، تحلیل اطلاعات، ساخت پیش‌نویس و سریع‌تر پیش رفتن استفاده می‌کنم؛ در حالی که قضاوت انسانی، شناخت کاربر و واقعیت کسب‌وکار در مرکز تصمیم‌ها باقی می‌ماند.",
    aiNote:"یک دستیار مفید،<br>نه جایگزین.", footerRole:"مدیر محصول · طراح محصول", email:"ایمیل", top:"بالا ↑", footerLocation:"تهران، ایران"
  }
};

const switcher = document.getElementById("langSwitch");
function setLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  switcher.querySelectorAll("span").forEach(s => s.classList.remove("active"));
  switcher.querySelector(lang === "fa" ? "span:last-child" : "span:first-child").classList.add("active");
  switcher.setAttribute("aria-label", lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
  localStorage.setItem("portfolio-language", lang);
}
switcher.addEventListener("click", () => setLanguage(document.documentElement.lang === "fa" ? "en" : "fa"));
setLanguage(localStorage.getItem("portfolio-language") || "en");

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href");
  if (id === "#") return;
  const target = document.querySelector(id);
  if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth", block:"start"}); }
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), {threshold:.1});
document.querySelectorAll(".project,.practice-item,.about-copy").forEach(el => {
  el.style.opacity="0"; el.style.transform="translateY(16px)";
  el.style.transition="opacity .6s ease, transform .6s ease"; observer.observe(el);
});
const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);
