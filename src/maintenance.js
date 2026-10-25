const copy = {
  en: {
    skip:"Skip to content",headerCta:"Discover Studio 17",heroKicker:"MIA EVENTS · New website in development",
    heroLine1:"Something good",heroLine2:"is",heroHighlight:"coming.",
    heroCopy:"The new MIA EVENTS digital experience is being created. While we build, meet the European studio bringing the strategy, creativity and technology together.",
    heroAction:"Meet the studio behind the work",buildTitle:"A new online home is taking shape.",buildStatus:"Development active",
    buildNote:"The complete MIA EVENTS website will return when it is ready.",studioKicker:"Created with Studio 17",
    studioTitle:"Strategy, creativity and technology. Connected.",
    studioCopy:"Studio 17 is a European multidisciplinary studio bringing strategy, creativity, technology and operations into one connected way of working—helping businesses communicate clearly, stay relevant and grow.",
    exploreStudio:"Explore Studio 17",talkStudio:"Talk to Studio 17",insightsKicker:"Selected Studio 17 insights",
    insightsTitle:"Useful thinking for modern businesses.",insightsIntro:"Practical perspectives on websites, marketing, local discovery and new ways to build digital income.",
    article1Title:"What should a website quote include? 12 things to check.",article1Copy:"A practical checklist for comparing scope, deliverables, responsibilities and ongoing costs—not only the headline price.",
    article2Title:"What should social media management include each month?",article2Copy:"Understand the planning, production, publishing, replies and reporting behind a properly managed service.",
    article3Title:"How to rank higher on Google Maps in Cyprus.",article3Copy:"A clear guide to the signals that help local businesses become easier to find.",
    article4Title:"Build an income stream selling digital services—without running an agency.",article4Copy:"Focus on opportunities and client relationships while Studio 17 handles strategy and delivery.",
    readArticle:"Read article",viewAll:"View all articles",finalLine1:"Have a business problem?",finalLine2:"Studio 17",finalHighlight:"builds the solution.",
    footerCredit:"Website in development · Created with"
  },
  el: {
    skip:"Μετάβαση στο περιεχόμενο",headerCta:"Ανακαλύψτε τη Studio 17",heroKicker:"MIA EVENTS · Νέα ιστοσελίδα υπό κατασκευή",
    heroLine1:"Κάτι υπέροχο",heroLine2:"είναι",heroHighlight:"καθ’ οδόν.",
    heroCopy:"Η νέα ψηφιακή εμπειρία της MIA EVENTS δημιουργείται. Όσο τη χτίζουμε, γνωρίστε το ευρωπαϊκό στούντιο που συνδέει τη στρατηγική, τη δημιουργικότητα και την τεχνολογία.",
    heroAction:"Γνωρίστε το στούντιο πίσω από τη δουλειά",buildTitle:"Ένα νέο ψηφιακό σπίτι παίρνει μορφή.",buildStatus:"Η ανάπτυξη βρίσκεται σε εξέλιξη",
    buildNote:"Η ολοκληρωμένη ιστοσελίδα της MIA EVENTS θα επιστρέψει όταν είναι έτοιμη.",studioKicker:"Δημιουργήθηκε με τη Studio 17",
    studioTitle:"Στρατηγική, δημιουργικότητα και τεχνολογία. Συνδεδεμένα.",
    studioCopy:"Η Studio 17 είναι ένα ευρωπαϊκό πολυκλαδικό στούντιο που συνδέει στρατηγική, δημιουργικότητα, τεχνολογία και λειτουργίες σε έναν ενιαίο τρόπο εργασίας—βοηθώντας επιχειρήσεις να επικοινωνούν καθαρά, να παραμένουν επίκαιρες και να αναπτύσσονται.",
    exploreStudio:"Ανακαλύψτε τη Studio 17",talkStudio:"Μιλήστε με τη Studio 17",insightsKicker:"Επιλεγμένα άρθρα της Studio 17",
    insightsTitle:"Χρήσιμες ιδέες για σύγχρονες επιχειρήσεις.",insightsIntro:"Πρακτικές απόψεις για ιστοσελίδες, marketing, τοπική αναζήτηση και νέους τρόπους δημιουργίας ψηφιακού εισοδήματος.",
    article1Title:"Τι πρέπει να περιλαμβάνει μια προσφορά ιστοσελίδας; 12 σημεία ελέγχου.",article1Copy:"Μια πρακτική λίστα για να συγκρίνετε εύρος εργασιών, παραδοτέα, ευθύνες και συνεχή κόστη—όχι μόνο την αρχική τιμή.",
    article2Title:"Τι πρέπει να περιλαμβάνει η διαχείριση social media κάθε μήνα;",article2Copy:"Κατανοήστε τον σχεδιασμό, την παραγωγή, τις δημοσιεύσεις, τις απαντήσεις και την αναφορά αποτελεσμάτων μιας ολοκληρωμένης υπηρεσίας.",
    article3Title:"Πώς να εμφανίζεστε ψηλότερα στο Google Maps στην Κύπρο.",article3Copy:"Ένας σαφής οδηγός για τα σήματα που βοηθούν τις τοπικές επιχειρήσεις να γίνονται πιο εύκολα ορατές.",
    article4Title:"Δημιουργήστε εισόδημα πουλώντας ψηφιακές υπηρεσίες—χωρίς να λειτουργείτε agency.",article4Copy:"Εστιάστε στις ευκαιρίες και στις σχέσεις με πελάτες, ενώ η Studio 17 αναλαμβάνει τη στρατηγική και την υλοποίηση.",
    readArticle:"Διαβάστε το άρθρο",viewAll:"Δείτε όλα τα άρθρα",finalLine1:"Έχετε ένα επιχειρηματικό πρόβλημα;",finalLine2:"Η Studio 17",finalHighlight:"χτίζει τη λύση.",
    footerCredit:"Ιστοσελίδα υπό κατασκευή · Δημιουργήθηκε με"
  }
};

const languages = navigator.languages || [navigator.language || "en"];
let activeLanguage = languages.some(language => String(language).toLowerCase().startsWith("el")) ? "el" : "en";

function setLanguage(language) {
  activeLanguage = language === "el" ? "el" : "en";
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = copy[activeLanguage][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.getElementById("languageToggle").textContent = activeLanguage === "el" ? "EN" : "EL";
  document.querySelectorAll(".studio-link").forEach(link => {
    const url = new URL(link.href);
    if (activeLanguage === "el") url.searchParams.set("lang", "el");
    else url.searchParams.delete("lang");
    link.href = url.toString();
  });
}

document.getElementById("languageToggle").addEventListener("click", () => setLanguage(activeLanguage === "el" ? "en" : "el"));

document.querySelectorAll("[data-track]").forEach(link => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "studio17_referral_click", {
        event_category: "outbound_referral",
        link_id: link.dataset.track,
        link_url: link.href,
        link_text: link.textContent.trim(),
        page_language: activeLanguage,
        transport_type: "beacon"
      });
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(activeLanguage);

