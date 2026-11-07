import "../styles/style.css";

const PHONE = "35799010282";
const STORAGE_KEY = "mia-language";

const translations = {
  en: {
    "gallery.captions.festive": "Corporate Festive Celebrations",
    "proof.point5": "Seamless On-Site Management",
    "proof.point4": "Attention to Every Detail",
    "proof.point3": "Reliable Supplier Coordination",
    "proof.point2": "Creative & Tailored Solutions",
    "proof.point1": "End-to-End Event Planning",
    "booking.budget": "Estimated Budget",
    "booking.location": "Event Location",
    "booking.phone": "Phone Number",
    "booking.email": "Email",
    "booking.company": "Company Name",
    "booking.optional": "(optional)",
    "booking.other": "Other / Not sure yet",
    "meta.title": "MIA EVENTS | Corporate Events in Cyprus",
    "meta.description": "MIA EVENTS brings corporate events to life across Cyprus with thoughtful planning, creative ideas and personal attention at every stage.",
    "a11y.skip": "Skip to main content",
    "a11y.primaryNav": "Primary navigation",
    "a11y.footerNav": "Footer navigation",
    "a11y.galleryControls": "Gallery controls",
    "a11y.previous": "Previous category",
    "a11y.next": "Next category",
    "a11y.closeMenu": "Close menu",
    "a11y.closeDialog": "Close consultation form",
    "a11y.scrollApproach": "Scroll to our approach",
    "a11y.brandIntro": "MIA EVENTS brand introduction",
    "nav.home": "Home",
    "nav.approach": "Our approach",
    "nav.about": "About MIA EVENTS",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.navigation": "Navigation",
    "actions.call": "Call MIA EVENTS",
    "actions.consultation": "Book a consultation",
    "actions.whatsapp": "WhatsApp us",
    "whatsapp.consultationMessage": "Hello MIA EVENTS, I would like to book a consultation for an upcoming event.",
    "actions.bookService": "Enquire about this service",
    "actions.discussGifts": "Discuss your gifts",
    "actions.skipIntro": "Skip intro",
    "hero.experience": "years of experience",
    "hero.title": "Corporate Events",
    "hero.titleSecond": "Experiences",
    "hero.statement": "Designed around",
    "hero.statementStrong": "your people.",
    "hero.summary": "From the first idea to the final detail, we bring corporate events to life across Cyprus — with thoughtful planning, creative ideas and personal attention at every stage.",
    "approach.eyebrow": "Why MIA",
    "approach.titleStart": "Events are about",
    "approach.titleHighlight": "people.",
    "approach.titleEnd": "Everything else should work around them.",
    "about.eyebrow": "About MIA EVENTS",
    "about.titleStart": "Personally Planned.",
    "about.titleHighlight": "Thoughtfully Delivered.",
    "about.textOne": "MIA EVENTS plans and manages corporate events across Cyprus. Maria brings over a decade of experience and a hands-on approach to every project.",
    "about.textTwo": "With a focus on people, details and meaningful experiences, Maria works closely with each client to turn ideas into events that feel effortless, personal and beautifully considered.",
    "about.portraitLabel": "Maria · MIA EVENTS",
    "gallery.eyebrow": "Made for meaningful moments",
    "gallery.titleStart": "Our Work",
    "gallery.description": "Explore the types of events we plan across Cyprus. Event photographs will be added here.",
    "gallery.captions.conference": "Conferences & Business Meetings",
    "gallery.captions.gala": "Corporate Events & Galas",
    "gallery.captions.social": "Team Events & Employee Experiences",
    "services.eyebrow": "Our expertise",
    "services.titlePrefix": "A",
    "services.titleHighlight": "complete",
    "services.titleSuffix": "service suite,",
    "services.titleEnd": "shaped around your objectives.",
    "services.groups.events": "Events & Experiences",
    "services.groups.planning": "Planning & Production",
    "services.groups.gifting": "Corporate Gifting",
    "services.items.events.title": "Corporate Events & Parties",
    "services.items.events.text": "Company parties, galas and milestone celebrations.",
    "services.items.conferences.title": "Conferences & Business Meetings",
    "services.items.conferences.text": "Planning and coordination for conferences, panels and business meetings.",
    "services.items.socials.title": "Employee Engagement & Team Events",
    "services.items.socials.text": "Team gatherings and activities that bring colleagues together.",
    "services.items.venue.title": "Venue & Supplier Management",
    "services.items.venue.text": "Venue sourcing and coordination of catering, entertainment and other suppliers.",
    "services.items.design.title": "Event Design & Production",
    "services.items.design.text": "Creative direction, décor, staging and technical production.",
    "services.items.onsite.title": "On-Site Event Management",
    "services.items.onsite.text": "Event-day oversight of schedules, suppliers and logistics.",
    "services.items.employeeGifts.title": "Gifts for Employees",
    "services.items.employeeGifts.text": "Welcome, milestone and seasonal gifts for your team.",
    "services.items.partnerGifts.title": "Client & Partner Gifting",
    "services.items.partnerGifts.text": "Gifts tailored to your brand for clients and business partners.",
    "services.items.festive.title": "Corporate Festive Events",
    "services.items.festive.text": "Seasonal company celebrations, from festive dinners to year-end parties.",
    "services.ctaEyebrow": "Have something different in mind?",
    "services.ctaTitle": "Let’s Plan Your Event",
    "faq.titlePrefix": "Questions before",
    "faq.titleHighlight": "we begin?",
    "faq.items.types.question": "What types of corporate events does MIA organise?",
    "faq.items.types.answer": "We plan corporate celebrations, conferences, executive meetings, recurring team events, offsites and bespoke business experiences across Cyprus.",
    "faq.items.notice.question": "How early should we get in touch?",
    "faq.items.notice.answer": "Earlier is always better for venue choice and supplier availability, but we can also assess short-lead projects depending on scope.",
    "faq.items.scope.question": "Can MIA manage only part of an event?",
    "faq.items.scope.answer": "Yes. We can manage the full experience or support a defined area such as venue sourcing, production, gifts or on-site coordination.",
    "faq.items.location.question": "Do you work across Cyprus?",
    "faq.items.location.answer": "Yes. We support events across the island and coordinate the right local partners for each location.",
    "faq.items.budget.question": "Can you work within a defined budget?",
    "faq.items.budget.answer": "Yes. We establish priorities early and recommend the right format, suppliers and production choices for your available budget.",
    "faq.items.venue.question": "Can you help us find a venue?",
    "faq.items.venue.answer": "Yes. We source and compare suitable venues based on location, capacity, style, logistics and budget.",
    "faq.items.gifts.question": "Do you create custom corporate gifts?",
    "faq.items.gifts.answer": "Yes. We develop employee and partner gifting concepts, including sourcing, personalisation, packaging and delivery coordination.",
    "faq.items.private.question": "Do you organise corporate festive events?",
    "faq.items.private.answer": "Yes. We plan seasonal celebrations for companies, including festive dinners and year-end parties.",
    "faq.items.day.question": "Who is present on the event day?",
    "faq.items.day.answer": "A dedicated MIA coordinator oversees the agreed timeline, suppliers and key moments throughout the event.",
    "faq.items.start.question": "What do you need from us to get started?",
    "faq.items.start.answer": "An approximate date, guest count, location preference, budget range and the outcome or feeling you want to create are enough for an initial conversation.",
    "contact.eyebrow": "Start the conversation",
    "contact.titleStart": "Tell us what you are",
    "contact.titleHighlight": "planning next.",
    "contact.text": "Share the date, guest count and the feeling you want to create. Maria will help you shape the next step.",
    "contact.emailLabel": "Email",
    "contact.consultationLabel": "Consultation",
    "contact.consultationValue": "Send an event brief",
    "footer.tagline": "People-first corporate events across Cyprus.",
    "footer.socialLabel": "MIA EVENTS social media",
    "studio17.prefix": "Developed by",
    "studio17.ariaLabel": "Website developed by Studio 17",
    "booking.eyebrow": "Your event brief",
    "booking.title": "Book a consultation",
    "booking.intro": "Fill in your event details. We’ll open a draft in WhatsApp for you to review and send yourself.",
    "booking.name": "Name",
    "booking.service": "Type of Event",
    "booking.services.general": "Select an event type",
    "booking.date": "Preferred Date",
    "booking.guests": "Approximate Number of Guests",
    "booking.details": "Additional Information",
    "booking.submit": "Continue on WhatsApp",
    "booking.emailAlternative": "Or send us an email instead",
    "booking.message": "Hello Maria, I would like to discuss an event with MIA EVENTS.",
  },
  el: {
    "gallery.captions.festive": "Εταιρικές εορταστικές εκδηλώσεις",
    "proof.point5": "Ομαλή επιτόπια διαχείριση",
    "proof.point4": "Προσοχή σε κάθε λεπτομέρεια",
    "proof.point3": "Αξιόπιστος συντονισμός προμηθευτών",
    "proof.point2": "Δημιουργικές λύσεις στα μέτρα σας",
    "proof.point1": "Ολοκληρωμένος σχεδιασμός εκδηλώσεων",
    "booking.budget": "Εκτιμώμενος προϋπολογισμός",
    "booking.location": "Τοποθεσία εκδήλωσης",
    "booking.phone": "Τηλέφωνο",
    "booking.email": "Email",
    "booking.company": "Επωνυμία εταιρείας",
    "booking.optional": "(προαιρετικό)",
    "booking.other": "Άλλο / Δεν έχω αποφασίσει ακόμη",
    "meta.title": "MIA EVENTS | Εταιρικές Εκδηλώσεις στην Κύπρο",
    "meta.description": "Η MIA EVENTS ζωντανεύει εταιρικές εκδηλώσεις σε όλη την Κύπρο με προσεκτικό σχεδιασμό, δημιουργικές ιδέες και προσωπική φροντίδα σε κάθε στάδιο.",
    "a11y.skip": "Μετάβαση στο κύριο περιεχόμενο",
    "a11y.primaryNav": "Κύρια πλοήγηση",
    "a11y.footerNav": "Πλοήγηση υποσέλιδου",
    "a11y.galleryControls": "Χειριστήρια συλλογής",
    "a11y.previous": "Προηγούμενη κατηγορία",
    "a11y.next": "Επόμενη κατηγορία",
    "a11y.closeMenu": "Κλείσιμο μενού",
    "a11y.closeDialog": "Κλείσιμο φόρμας συμβουλευτικής",
    "a11y.scrollApproach": "Μετάβαση στη φιλοσοφία μας",
    "a11y.brandIntro": "Εισαγωγή της MIA EVENTS",
    "nav.home": "Αρχική",
    "nav.approach": "Η φιλοσοφία μας",
    "nav.about": "Σχετικά με τη MIA EVENTS",
    "nav.services": "Υπηρεσίες",
    "nav.faq": "Συχνές ερωτήσεις",
    "nav.contact": "Επικοινωνία",
    "nav.menu": "Μενού",
    "nav.navigation": "Πλοήγηση",
    "actions.call": "Καλέστε τη MIA EVENTS",
    "actions.consultation": "Κλείστε συμβουλευτική",
    "actions.whatsapp": "Μιλήστε μας στο WhatsApp",
    "whatsapp.consultationMessage": "Γεια σας MIA EVENTS, θα ήθελα να κλείσω μια συμβουλευτική για μια επερχόμενη εκδήλωση.",
    "actions.bookService": "Ρωτήστε για αυτή την υπηρεσία",
    "actions.discussGifts": "Συζητήστε τα δώρα σας",
    "actions.skipIntro": "Παράλειψη εισαγωγής",
    "hero.experience": "χρόνια εμπειρίας",
    "hero.title": "Εταιρικές Εκδηλώσεις",
    "hero.titleSecond": "Εμπειρίες",
    "hero.statement": "Σχεδιασμένες γύρω από",
    "hero.statementStrong": "τους ανθρώπους σας.",
    "hero.summary": "Από την πρώτη ιδέα μέχρι την τελευταία λεπτομέρεια, ζωντανεύουμε εταιρικές εκδηλώσεις σε όλη την Κύπρο — με προσεκτικό σχεδιασμό, δημιουργικές ιδέες και προσωπική φροντίδα σε κάθε στάδιο.",
    "approach.eyebrow": "Γιατί MIA",
    "approach.titleStart": "Οι εκδηλώσεις αφορούν τους",
    "approach.titleHighlight": "ανθρώπους.",
    "approach.titleEnd": "Όλα τα υπόλοιπα πρέπει να λειτουργούν γύρω τους.",
    "about.eyebrow": "Σχετικά με τη MIA EVENTS",
    "about.titleStart": "Προσωπικός Σχεδιασμός.",
    "about.titleHighlight": "Προσεγμένη Υλοποίηση.",
    "about.textOne": "Η MIA EVENTS σχεδιάζει και διαχειρίζεται εταιρικές εκδηλώσεις σε όλη την Κύπρο. Η Μαρία φέρνει σε κάθε έργο πάνω από δέκα χρόνια εμπειρίας και προσωπική συμμετοχή.",
    "about.textTwo": "Με επίκεντρο τους ανθρώπους, τις λεπτομέρειες και τις εμπειρίες με ουσία, η Μαρία συνεργάζεται στενά με κάθε πελάτη για να μετατρέπει τις ιδέες σε εκδηλώσεις που μοιάζουν αβίαστες, προσωπικές και όμορφα μελετημένες.",
    "about.portraitLabel": "Μαρία · MIA EVENTS",
    "gallery.eyebrow": "Για στιγμές με σημασία",
    "gallery.titleStart": "Η δουλειά μας",
    "gallery.description": "Δείτε τα είδη εκδηλώσεων που οργανώνουμε σε όλη την Κύπρο. Εδώ θα προστεθούν φωτογραφίες εκδηλώσεων.",
    "gallery.captions.conference": "Συνέδρια & επαγγελματικές συναντήσεις",
    "gallery.captions.gala": "Εταιρικές εκδηλώσεις & γκαλά",
    "gallery.captions.social": "Ομαδικές εκδηλώσεις & εμπειρίες εργαζομένων",
    "services.eyebrow": "Η εξειδίκευσή μας",
    "services.titlePrefix": "Ένα",
    "services.titleHighlight": "πλήρες",
    "services.titleSuffix": "σύνολο υπηρεσιών,",
    "services.titleEnd": "διαμορφωμένο γύρω από τους στόχους σας.",
    "services.groups.events": "Εκδηλώσεις & Εμπειρίες",
    "services.groups.planning": "Σχεδιασμός & Παραγωγή",
    "services.groups.gifting": "Εταιρικά Δώρα",
    "services.items.events.title": "Εταιρικές Εκδηλώσεις & Πάρτι",
    "services.items.events.text": "Εταιρικά πάρτι, επίσημες εκδηλώσεις και εορτασμοί σημαντικών οροσήμων.",
    "services.items.conferences.title": "Συνέδρια & Επαγγελματικές Συναντήσεις",
    "services.items.conferences.text": "Σχεδιασμός και συντονισμός συνεδρίων, συζητήσεων και επαγγελματικών συναντήσεων.",
    "services.items.socials.title": "Ενδυνάμωση Εργαζομένων & Ομαδικές Εκδηλώσεις",
    "services.items.socials.text": "Συναντήσεις και δραστηριότητες που φέρνουν τους συναδέλφους κοντά.",
    "services.items.venue.title": "Διαχείριση Χώρων & Προμηθευτών",
    "services.items.venue.text": "Εύρεση χώρων και συντονισμός συνεργατών εστίασης, ψυχαγωγίας και άλλων προμηθευτών.",
    "services.items.design.title": "Σχεδιασμός & Παραγωγή Εκδηλώσεων",
    "services.items.design.text": "Δημιουργική κατεύθυνση, διακόσμηση, σκηνικά και τεχνική παραγωγή.",
    "services.items.onsite.title": "Επιτόπια Διαχείριση Εκδηλώσεων",
    "services.items.onsite.text": "Επίβλεψη του προγράμματος, των προμηθευτών και της οργάνωσης την ημέρα της εκδήλωσης.",
    "services.items.employeeGifts.title": "Δώρα για Εργαζομένους",
    "services.items.employeeGifts.text": "Δώρα καλωσορίσματος, επιβράβευσης και εορτών για την ομάδα σας.",
    "services.items.partnerGifts.title": "Δώρα για Πελάτες & Συνεργάτες",
    "services.items.partnerGifts.text": "Δώρα για πελάτες και συνεργάτες, προσαρμοσμένα στην ταυτότητα της εταιρείας σας.",
    "services.items.festive.title": "Εταιρικές Εορταστικές Εκδηλώσεις",
    "services.items.festive.text": "Εποχικές εταιρικές γιορτές, από εορταστικά δείπνα έως πάρτι στο τέλος του έτους.",
    "services.ctaEyebrow": "Έχετε κάτι διαφορετικό στο μυαλό σας;",
    "services.ctaTitle": "Ας σχεδιάσουμε την εκδήλωσή σας",
    "faq.titlePrefix": "Ερωτήσεις πριν",
    "faq.titleHighlight": "ξεκινήσουμε;",
    "faq.items.types.question": "Τι είδους εταιρικές εκδηλώσεις διοργανώνει η MIA;",
    "faq.items.types.answer": "Σχεδιάζουμε εταιρικές γιορτές, συνέδρια, συναντήσεις στελεχών, τακτικές εκδηλώσεις ομάδων και εξατομικευμένες επαγγελματικές εμπειρίες σε όλη την Κύπρο.",
    "faq.items.notice.question": "Πόσο νωρίς πρέπει να επικοινωνήσουμε;",
    "faq.items.notice.answer": "Όσο νωρίτερα, τόσο καλύτερα για την επιλογή χώρου και τη διαθεσιμότητα προμηθευτών. Μπορούμε όμως να αξιολογήσουμε και έργα με σύντομο χρονικό περιθώριο.",
    "faq.items.scope.question": "Μπορεί η MIA να αναλάβει μόνο ένα μέρος της εκδήλωσης;",
    "faq.items.scope.answer": "Ναι. Μπορούμε να διαχειριστούμε ολόκληρη την εμπειρία ή έναν συγκεκριμένο τομέα, όπως τον χώρο, την παραγωγή, τα δώρα ή τον επιτόπιο συντονισμό.",
    "faq.items.location.question": "Εργάζεστε σε όλη την Κύπρο;",
    "faq.items.location.answer": "Ναι. Υποστηρίζουμε εκδηλώσεις σε ολόκληρο το νησί και συντονίζουμε τους κατάλληλους τοπικούς συνεργάτες για κάθε τοποθεσία.",
    "faq.items.budget.question": "Μπορείτε να εργαστείτε εντός συγκεκριμένου προϋπολογισμού;",
    "faq.items.budget.answer": "Ναι. Καθορίζουμε από νωρίς τις προτεραιότητες και προτείνουμε την κατάλληλη μορφή, προμηθευτές και επιλογές παραγωγής για τον διαθέσιμο προϋπολογισμό.",
    "faq.items.venue.question": "Μπορείτε να μας βοηθήσετε να βρούμε χώρο;",
    "faq.items.venue.answer": "Ναι. Αναζητούμε και συγκρίνουμε κατάλληλους χώρους με βάση την τοποθεσία, τη χωρητικότητα, το ύφος, τα logistics και τον προϋπολογισμό.",
    "faq.items.gifts.question": "Δημιουργείτε εξατομικευμένα εταιρικά δώρα;",
    "faq.items.gifts.answer": "Ναι. Αναπτύσσουμε προτάσεις δώρων για εργαζομένους και συνεργάτες, συμπεριλαμβανομένης της προμήθειας, προσωποποίησης, συσκευασίας και παράδοσης.",
    "faq.items.private.question": "Διοργανώνετε εταιρικές εορταστικές εκδηλώσεις;",
    "faq.items.private.answer": "Ναι. Οργανώνουμε εποχικές εταιρικές γιορτές, όπως εορταστικά δείπνα και πάρτι στο τέλος του έτους.",
    "faq.items.day.question": "Ποιος βρίσκεται στον χώρο την ημέρα της εκδήλωσης;",
    "faq.items.day.answer": "Ένας αφοσιωμένος συντονιστής της MIA επιβλέπει το συμφωνημένο πρόγραμμα, τους προμηθευτές και τις σημαντικές στιγμές της εκδήλωσης.",
    "faq.items.start.question": "Τι χρειάζεστε από εμάς για να ξεκινήσουμε;",
    "faq.items.start.answer": "Μια κατά προσέγγιση ημερομηνία, ο αριθμός καλεσμένων, η προτίμηση τοποθεσίας, το εύρος προϋπολογισμού και το συναίσθημα που θέλετε να δημιουργήσετε αρκούν για την πρώτη συζήτηση.",
    "contact.eyebrow": "Ας ξεκινήσουμε τη συζήτηση",
    "contact.titleStart": "Πείτε μας τι",
    "contact.titleHighlight": "σχεδιάζετε στη συνέχεια.",
    "contact.text": "Μοιραστείτε την ημερομηνία, τον αριθμό καλεσμένων και την αίσθηση που θέλετε να δημιουργήσετε. Η Μαρία θα σας βοηθήσει να διαμορφώσετε το επόμενο βήμα.",
    "contact.emailLabel": "Email",
    "contact.consultationLabel": "Συμβουλευτική",
    "contact.consultationValue": "Στείλτε ένα σύντομο brief",
    "footer.tagline": "Ανθρωποκεντρικές εταιρικές εκδηλώσεις σε όλη την Κύπρο.",
    "footer.socialLabel": "Κοινωνικά δίκτυα της MIA EVENTS",
    "studio17.prefix": "Ανάπτυξη από",
    "studio17.ariaLabel": "Ανάπτυξη ιστοσελίδας από το Studio 17",
    "booking.eyebrow": "Το brief της εκδήλωσής σας",
    "booking.title": "Κλείστε συμβουλευτική",
    "booking.intro": "Συμπληρώστε τα στοιχεία της εκδήλωσης. Θα ανοίξει ένα προσχέδιο στο WhatsApp για να το ελέγξετε και να το στείλετε εσείς.",
    "booking.name": "Ονοματεπώνυμο",
    "booking.service": "Είδος εκδήλωσης",
    "booking.services.general": "Επιλέξτε είδος εκδήλωσης",
    "booking.date": "Επιθυμητή ημερομηνία",
    "booking.guests": "Εκτιμώμενος αριθμός καλεσμένων",
    "booking.details": "Πρόσθετες πληροφορίες",
    "booking.submit": "Συνέχεια στο WhatsApp",
    "booking.emailAlternative": "Ή στείλτε μας email",
    "booking.message": "Γεια σου Μαρία, θα ήθελα να συζητήσω μια εκδήλωση με τη MIA EVENTS.",
  }
};

function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    language: currentLanguage,
    ...parameters
  });
}

const introOverlay = document.querySelector("[data-intro]");
const introLetters = [...document.querySelectorAll(".intro-letter")];
const introSubline = document.querySelector(".intro-subline");
const introImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=82"
];
let introTimer;
let introImageTimer;

function completeIntro() {
  if (!introOverlay || introOverlay.classList.contains("is-complete")) return;
  clearTimeout(introTimer);
  clearInterval(introImageTimer);

  const content = introOverlay.querySelector(".intro-content");
  content?.animate(
    [
      { opacity: 1, transform: "translateY(0) scale(1)" },
      { opacity: 0, transform: "translateY(-1rem) scale(.985)" }
    ],
    { duration: 520, easing: "cubic-bezier(.4, 0, .2, 1)", fill: "forwards" }
  );

  const fade = introOverlay.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 620,
    delay: 180,
    easing: "ease-in-out",
    fill: "forwards"
  });
  fade.onfinish = () => {
    introOverlay.classList.add("is-complete");
    document.body.classList.remove("is-locked");
  };
}

function runCinematicIntro() {
  if (!introOverlay) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let alreadyViewed = false;
  try { alreadyViewed = sessionStorage.getItem("mia-intro-viewed") === "true"; } catch { /* Continue without session storage. */ }

  if (prefersReducedMotion || alreadyViewed) {
    introOverlay.classList.add("is-complete");
    return;
  }

  document.body.classList.add("is-locked");
  try { sessionStorage.setItem("mia-intro-viewed", "true"); } catch { /* Animation still works without storage. */ }

  introLetters.forEach((letter, index) => {
    letter.style.backgroundImage = `url("${introImages[index % introImages.length]}")`;
    letter.animate(
      [
        { opacity: 0, transform: "translateY(1.25rem) scale(.97)", letterSpacing: ".12em" },
        { opacity: 1, transform: "translateY(0) scale(1)", letterSpacing: ".02em" }
      ],
      {
        duration: 720,
        delay: 120 + index * 70,
        easing: "cubic-bezier(.22, 1, .36, 1)",
        fill: "forwards"
      }
    );
  });

  introImageTimer = window.setInterval(() => {
    introLetters.forEach((letter, index) => {
      const current = Math.floor(performance.now() / 330) + index;
      letter.style.backgroundImage = `url("${introImages[current % introImages.length]}")`;
    });
  }, 330);

  introSubline?.animate(
    [
      { opacity: 0, transform: "translateY(.75rem)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 520, delay: 1450, easing: "cubic-bezier(.22, 1, .36, 1)", fill: "forwards" }
  );

  introTimer = window.setTimeout(completeIntro, 2550);
}

document.querySelector("[data-intro-skip]")?.addEventListener("click", completeIntro);

const getStoredLanguage = () => {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
};

const getInitialLanguage = () => {
  const stored = getStoredLanguage();
  if (stored === "en" || stored === "el") return stored;
  return navigator.languages?.some((language) => language.toLowerCase().startsWith("el")) ? "el" : "en";
};

let currentLanguage = getInitialLanguage();

function translatePage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-language-label]").forEach((element) => {
    element.textContent = language === "el" ? "EN" : "ΕΛ";
  });
  document.querySelectorAll("[data-language-full]").forEach((element) => {
    element.textContent = language === "el" ? "English" : "Ελληνικά";
  });
  document.querySelectorAll("[data-whatsapp-consultation]").forEach((link) => {
    link.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(dictionary["whatsapp.consultationMessage"])}`;
  });

  document.title = dictionary["meta.title"];
}

function setLanguage(language, remember = true) {
  translatePage(language);
  if (remember) {
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Browsing can continue without storage. */ }
  }
}

document.querySelectorAll("[data-language-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(currentLanguage === "el" ? "en" : "el"));
});

const header = document.querySelector("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const menu = document.querySelector("[data-menu]");
const menuOpenButton = document.querySelector("[data-menu-open]");
const menuPanel = menu?.querySelector(".drawer-panel");
let menuPreviousFocus = null;

function openMenu() {
  if (!menu) return;
  menuPreviousFocus = document.activeElement;
  menu.hidden = false;
  document.body.classList.add("is-locked");
  menuOpenButton?.setAttribute("aria-expanded", "true");
  menuPanel?.querySelector("button")?.focus();
}

function closeMenu() {
  if (!menu || menu.hidden) return;
  menu.hidden = true;
  document.body.classList.remove("is-locked");
  menuOpenButton?.setAttribute("aria-expanded", "false");
  menuPreviousFocus?.focus();
}

menuOpenButton?.addEventListener("click", openMenu);
menu?.querySelectorAll("[data-menu-close], nav a").forEach((element) => element.addEventListener("click", closeMenu));

const galleryTrack = document.querySelector("[data-gallery-track]");
const scrollGallery = (direction) => {
  const card = galleryTrack?.querySelector(".gallery-card");
  if (!galleryTrack || !card) return;
  galleryTrack.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "smooth" });
};
document.querySelector("[data-gallery-previous]")?.addEventListener("click", () => scrollGallery(-1));
document.querySelector("[data-gallery-next]")?.addEventListener("click", () => scrollGallery(1));

const faqButtons = [...document.querySelectorAll(".accordion-item button")];

function closeFaq(button) {
  const panel = button.parentElement?.nextElementSibling;
  button.closest(".accordion-item")?.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  if (panel) panel.style.maxHeight = "0px";
}

function openFaq(button) {
  const panel = button.parentElement?.nextElementSibling;
  button.closest(".accordion-item")?.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    button.closest(".faq-column")?.querySelectorAll(".accordion-item button").forEach(closeFaq);
    if (willOpen) openFaq(button);
  });
});

window.addEventListener("resize", () => {
  faqButtons.forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") openFaq(button);
  });
});

const bookingDialog = document.querySelector("[data-booking-dialog]");
const bookingForm = document.querySelector("[data-booking-form]");
const serviceField = bookingForm?.elements.service;

function openBooking(service = "") {
  if (!bookingDialog) return;
  if (serviceField) serviceField.value = service;
  bookingDialog.showModal();
  document.body.classList.add("is-locked");
}

function closeBooking() {
  bookingDialog?.close();
  document.body.classList.remove("is-locked");
}

document.querySelectorAll("[data-booking-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service || "";
    const source = button.dataset.conversionSource || (button.closest(".service-card") ? "service-card" : "general-cta");
    trackEvent(button.closest(".service-card") ? "service_enquiry_open" : "consultation_open", { service: service || "General Event Consultation", source });
    openBooking(service);
  });
});
document.querySelectorAll("[data-booking-close]").forEach((button) => button.addEventListener("click", closeBooking));
bookingDialog?.addEventListener("cancel", () => document.body.classList.remove("is-locked"));

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const data = new FormData(bookingForm);
  const t = translations[currentLanguage];
  const selectedOption = serviceField?.selectedOptions?.[0];
  const service = selectedOption?.textContent?.trim() || data.get("service");
  trackEvent("consultation_whatsapp_continue", { service });
  const lines = [t["booking.message"], ""];
  const briefFields = ["name","company","email","phone","service","date","guests","location","budget","details"];
  for (const field of briefFields) {
    const value = field === "service" ? service : data.get(field)?.trim();
    if (value) lines.push(`${t[`booking.${field}`]}: ${value}`);
  }

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("whatsapp_click", { source: link.className || "link" }));
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("email_click", { source: link.className || "link" }));
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("phone_click", { source: link.className || "link" }));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenu();
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

runCinematicIntro();
translatePage(currentLanguage);
