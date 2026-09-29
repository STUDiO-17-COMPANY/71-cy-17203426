import "../styles/style.css";

const PHONE = "35799516834";
const STORAGE_KEY = "mia-language";

const translations = {
  en: {
    "meta.title": "MIA Events & Experiences | Corporate Events in Cyprus",
    "meta.description": "MIA Events & Experiences creates people-first corporate events, conferences and business experiences across Cyprus.",
    "a11y.skip": "Skip to main content",
    "a11y.primaryNav": "Primary navigation",
    "a11y.footerNav": "Footer navigation",
    "a11y.galleryControls": "Gallery controls",
    "a11y.previous": "Previous image",
    "a11y.next": "Next image",
    "a11y.closeMenu": "Close menu",
    "a11y.closeDialog": "Close consultation form",
    "a11y.scrollApproach": "Scroll to our approach",
    "a11y.brandIntro": "MIA Events brand introduction",
    "nav.home": "Home",
    "nav.approach": "Our approach",
    "nav.services": "Services",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.navigation": "Navigation",
    "actions.call": "Call MIA Events",
    "actions.consultation": "Book a consultation",
    "actions.whatsapp": "WhatsApp us",
    "whatsapp.consultationMessage": "Hello MIA Events, I would like to book a consultation for an upcoming event.",
    "actions.bookService": "Book this service",
    "actions.discussGifts": "Discuss your gifts",
    "actions.skipIntro": "Skip intro",
    "hero.experience": "years of experience",
    "hero.title": "Corporate Events",
    "hero.titleSecond": "Experiences",
    "hero.statement": "Designed around",
    "hero.statementStrong": "your people.",
    "hero.summary": "End-to-end corporate event planning across Cyprus, delivered with personal coordination at every stage.",
    "approach.eyebrow": "Why MIA",
    "approach.titleStart": "Events are about",
    "approach.titleHighlight": "people.",
    "approach.titleEnd": "Everything else should work around them.",
    "proof.experienceTitle": "Years of experience",
    "proof.experienceText": "Creating and coordinating memorable corporate events.",
    "proof.endToEndValue": "End-to-end",
    "proof.endToEndTitle": "One point of contact",
    "proof.endToEndText": "From concept and suppliers to production and supervision.",
    "proof.cyprusValue": "Cyprus-wide",
    "proof.cyprusTitle": "Wherever your team meets",
    "proof.cyprusText": "Events supported across the island.",
    "proof.personalValue": "Personal",
    "proof.personalTitle": "Coordination that stays close",
    "proof.personalText": "Direct communication throughout the project.",
    "gallery.eyebrow": "Made for meaningful moments",
    "gallery.titlePrefix": "Elevating",
    "gallery.titleHighlight": "enterprise",
    "gallery.titleEnd": "and executive gatherings.",
    "gallery.images.conference": "Corporate conference with a keynote stage",
    "gallery.images.gala": "Formal corporate dinner setting",
    "gallery.images.social": "Team enjoying a relaxed social gathering",
    "gallery.images.production": "Large event venue with stage lighting",
    "gallery.images.offsite": "Corporate networking event",
    "gallery.captions.conference": "Conferences & keynotes",
    "gallery.captions.gala": "Corporate galas",
    "gallery.captions.social": "Team socials",
    "gallery.captions.production": "Event production",
    "gallery.captions.offsite": "Leadership offsites",
    "services.eyebrow": "Our expertise",
    "services.titlePrefix": "A",
    "services.titleHighlight": "complete",
    "services.titleSuffix": "service suite,",
    "services.titleEnd": "shaped around your objectives.",
    "services.items.events.title": "Corporate Events & Parties",
    "services.items.events.text": "Galas, team celebrations, milestone events and company parties designed around your culture.",
    "services.items.conferences.title": "Conferences & Business Meetings",
    "services.items.conferences.text": "Focused conferences, annual meetings, panels and executive environments with dependable production.",
    "services.items.socials.title": "Monthly Events & Happy Hours",
    "services.items.socials.text": "Recurring office socials, networking mixers and relaxed experiences with zero hassle for your team.",
    "services.items.venue.title": "Venue & Supplier Management",
    "services.items.venue.text": "Venue sourcing, trusted catering partners, entertainment and coordinated supplier relationships.",
    "services.items.design.title": "Design & Production",
    "services.items.design.text": "Event identity, stage design, décor, lighting, signage and details that make the experience feel cohesive.",
    "services.items.onsite.title": "On-Site Supervision",
    "services.items.onsite.text": "Dedicated event management to keep timelines, logistics and suppliers moving smoothly on the day.",
    "services.items.employeeGifts.title": "Gifts for Employees",
    "services.items.employeeGifts.text": "Thoughtful welcome, milestone and seasonal gifts created to recognise and delight your people.",
    "services.items.partnerGifts.title": "Gifts for Partners",
    "services.items.partnerGifts.text": "Refined, brand-aligned gifts that strengthen relationships with clients and business partners.",
    "services.items.festive.title": "Festive Private Events",
    "services.items.festive.text": "Beautifully coordinated private celebrations for festive seasons, milestones and special occasions.",
    "services.ctaEyebrow": "Have something different in mind?",
    "services.ctaTitle": "Let’s shape the right experience together.",
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
    "faq.items.private.question": "Do you organise private festive events?",
    "faq.items.private.answer": "Yes. We coordinate selected private celebrations and festive experiences with the same care applied to our corporate work.",
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
    "footer.socialLabel": "MIA Events social media",
    "studio17.prefix": "Developed & maintained by",
    "studio17.ariaLabel": "Website developed and maintained by Studio 17",
    "booking.eyebrow": "Your event brief",
    "booking.title": "Book a consultation",
    "booking.intro": "Complete the essentials and continue the conversation directly on WhatsApp.",
    "booking.name": "Name / organisation",
    "booking.namePlaceholder": "Your name or company",
    "booking.service": "Service",
    "booking.services.general": "General event consultation",
    "booking.date": "Estimated date",
    "booking.guests": "Guests",
    "booking.guestsPlaceholder": "e.g. 80",
    "booking.details": "A few details",
    "booking.detailsPlaceholder": "Location, occasion and anything we should know...",
    "booking.submit": "Continue on WhatsApp",
    "booking.emailAlternative": "Or send us an email instead",
    "booking.message": "Hello Maria, I would like to discuss an event with MIA Events & Experiences.",
    "booking.messageName": "Name / organisation",
    "booking.messageService": "Service",
    "booking.messageDate": "Estimated date",
    "booking.messageGuests": "Guests",
    "booking.messageDetails": "Details"
  },
  el: {
    "meta.title": "MIA Events & Experiences | Εταιρικές Εκδηλώσεις στην Κύπρο",
    "meta.description": "Η MIA Events & Experiences δημιουργεί ανθρωποκεντρικές εταιρικές εκδηλώσεις, συνέδρια και επαγγελματικές εμπειρίες σε όλη την Κύπρο.",
    "a11y.skip": "Μετάβαση στο κύριο περιεχόμενο",
    "a11y.primaryNav": "Κύρια πλοήγηση",
    "a11y.footerNav": "Πλοήγηση υποσέλιδου",
    "a11y.galleryControls": "Χειριστήρια συλλογής",
    "a11y.previous": "Προηγούμενη εικόνα",
    "a11y.next": "Επόμενη εικόνα",
    "a11y.closeMenu": "Κλείσιμο μενού",
    "a11y.closeDialog": "Κλείσιμο φόρμας συμβουλευτικής",
    "a11y.scrollApproach": "Μετάβαση στη φιλοσοφία μας",
    "a11y.brandIntro": "Εισαγωγή της MIA Events",
    "nav.home": "Αρχική",
    "nav.approach": "Η φιλοσοφία μας",
    "nav.services": "Υπηρεσίες",
    "nav.faq": "Συχνές ερωτήσεις",
    "nav.contact": "Επικοινωνία",
    "nav.menu": "Μενού",
    "nav.navigation": "Πλοήγηση",
    "actions.call": "Καλέστε τη MIA Events",
    "actions.consultation": "Κλείστε συμβουλευτική",
    "actions.whatsapp": "Μιλήστε μας στο WhatsApp",
    "whatsapp.consultationMessage": "Γεια σας MIA Events, θα ήθελα να κλείσω μια συμβουλευτική για μια επερχόμενη εκδήλωση.",
    "actions.bookService": "Κλείστε την υπηρεσία",
    "actions.discussGifts": "Συζητήστε τα δώρα σας",
    "actions.skipIntro": "Παράλειψη εισαγωγής",
    "hero.experience": "χρόνια εμπειρίας",
    "hero.title": "Εταιρικές Εκδηλώσεις",
    "hero.titleSecond": "Εμπειρίες",
    "hero.statement": "Σχεδιασμένες γύρω από",
    "hero.statementStrong": "τους ανθρώπους σας.",
    "hero.summary": "Ολοκληρωμένος σχεδιασμός εταιρικών εκδηλώσεων σε όλη την Κύπρο, με προσωπικό συντονισμό σε κάθε στάδιο.",
    "approach.eyebrow": "Γιατί MIA",
    "approach.titleStart": "Οι εκδηλώσεις αφορούν τους",
    "approach.titleHighlight": "ανθρώπους.",
    "approach.titleEnd": "Όλα τα υπόλοιπα πρέπει να λειτουργούν γύρω τους.",
    "proof.experienceTitle": "Χρόνια εμπειρίας",
    "proof.experienceText": "Δημιουργούμε και συντονίζουμε αξέχαστες εταιρικές εκδηλώσεις.",
    "proof.endToEndValue": "Από την αρχή ως το τέλος",
    "proof.endToEndTitle": "Ένα σημείο επικοινωνίας",
    "proof.endToEndText": "Από την ιδέα και τους προμηθευτές μέχρι την παραγωγή και την επίβλεψη.",
    "proof.cyprusValue": "Σε όλη την Κύπρο",
    "proof.cyprusTitle": "Όπου κι αν συναντιέται η ομάδα σας",
    "proof.cyprusText": "Υποστήριξη εκδηλώσεων σε ολόκληρο το νησί.",
    "proof.personalValue": "Προσωπικά",
    "proof.personalTitle": "Συντονισμός που παραμένει κοντά σας",
    "proof.personalText": "Άμεση επικοινωνία καθ’ όλη τη διάρκεια του έργου.",
    "gallery.eyebrow": "Για στιγμές με σημασία",
    "gallery.titlePrefix": "Αναβαθμίζουμε τις",
    "gallery.titleHighlight": "εταιρικές",
    "gallery.titleEnd": "και διοικητικές συναντήσεις.",
    "gallery.images.conference": "Εταιρικό συνέδριο με κεντρική σκηνή",
    "gallery.images.gala": "Επίσημο εταιρικό δείπνο",
    "gallery.images.social": "Ομάδα σε χαλαρή κοινωνική συνάντηση",
    "gallery.images.production": "Μεγάλος χώρος εκδήλωσης με σκηνικό φωτισμό",
    "gallery.images.offsite": "Εταιρική εκδήλωση δικτύωσης",
    "gallery.captions.conference": "Συνέδρια & ομιλίες",
    "gallery.captions.gala": "Εταιρικά gala",
    "gallery.captions.social": "Συναντήσεις ομάδων",
    "gallery.captions.production": "Παραγωγή εκδηλώσεων",
    "gallery.captions.offsite": "Συναντήσεις στελεχών",
    "services.eyebrow": "Η εξειδίκευσή μας",
    "services.titlePrefix": "Ένα",
    "services.titleHighlight": "πλήρες",
    "services.titleSuffix": "σύνολο υπηρεσιών,",
    "services.titleEnd": "διαμορφωμένο γύρω από τους στόχους σας.",
    "services.items.events.title": "Εταιρικές Εκδηλώσεις & Πάρτι",
    "services.items.events.text": "Gala, γιορτές ομάδων, σημαντικές επέτειοι και εταιρικά πάρτι σχεδιασμένα γύρω από την κουλτούρα σας.",
    "services.items.conferences.title": "Συνέδρια & Επαγγελματικές Συναντήσεις",
    "services.items.conferences.text": "Συνέδρια, ετήσιες συναντήσεις, πάνελ και χώροι στελεχών με αξιόπιστη παραγωγή.",
    "services.items.socials.title": "Μηνιαίες Εκδηλώσεις & Happy Hours",
    "services.items.socials.text": "Τακτικές κοινωνικές συναντήσεις γραφείου, networking και χαλαρές εμπειρίες χωρίς ταλαιπωρία για την ομάδα σας.",
    "services.items.venue.title": "Διαχείριση Χώρων & Προμηθευτών",
    "services.items.venue.text": "Εύρεση χώρων, αξιόπιστοι συνεργάτες εστίασης, ψυχαγωγία και συντονισμένες σχέσεις με προμηθευτές.",
    "services.items.design.title": "Σχεδιασμός & Παραγωγή",
    "services.items.design.text": "Ταυτότητα εκδήλωσης, σκηνικό, διακόσμηση, φωτισμός, σήμανση και λεπτομέρειες που συνδέουν την εμπειρία.",
    "services.items.onsite.title": "Επιτόπια Επίβλεψη",
    "services.items.onsite.text": "Αφοσιωμένη διαχείριση ώστε τα χρονοδιαγράμματα, τα logistics και οι προμηθευτές να λειτουργούν ομαλά.",
    "services.items.employeeGifts.title": "Δώρα για Εργαζομένους",
    "services.items.employeeGifts.text": "Προσεγμένα δώρα καλωσορίσματος, επιβράβευσης και εορτών που αναγνωρίζουν και χαροποιούν τους ανθρώπους σας.",
    "services.items.partnerGifts.title": "Δώρα για Συνεργάτες",
    "services.items.partnerGifts.text": "Εκλεπτυσμένα δώρα, ευθυγραμμισμένα με το brand σας, που ενισχύουν τις σχέσεις με πελάτες και συνεργάτες.",
    "services.items.festive.title": "Εορταστικές Ιδιωτικές Εκδηλώσεις",
    "services.items.festive.text": "Όμορφα συντονισμένες ιδιωτικές γιορτές για εορταστικές περιόδους, ορόσημα και ξεχωριστές περιστάσεις.",
    "services.ctaEyebrow": "Έχετε κάτι διαφορετικό στο μυαλό σας;",
    "services.ctaTitle": "Ας διαμορφώσουμε μαζί τη σωστή εμπειρία.",
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
    "faq.items.private.question": "Διοργανώνετε ιδιωτικές εορταστικές εκδηλώσεις;",
    "faq.items.private.answer": "Ναι. Συντονίζουμε επιλεγμένες ιδιωτικές γιορτές και εορταστικές εμπειρίες με την ίδια φροντίδα που εφαρμόζουμε στις εταιρικές μας εκδηλώσεις.",
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
    "footer.socialLabel": "Κοινωνικά δίκτυα της MIA Events",
    "studio17.prefix": "Ανάπτυξη & συντήρηση από",
    "studio17.ariaLabel": "Ανάπτυξη και συντήρηση ιστοσελίδας από το Studio 17",
    "booking.eyebrow": "Το brief της εκδήλωσής σας",
    "booking.title": "Κλείστε συμβουλευτική",
    "booking.intro": "Συμπληρώστε τα βασικά και συνεχίστε τη συζήτηση απευθείας στο WhatsApp.",
    "booking.name": "Όνομα / οργανισμός",
    "booking.namePlaceholder": "Το όνομα ή η εταιρεία σας",
    "booking.service": "Υπηρεσία",
    "booking.services.general": "Γενική συμβουλευτική εκδήλωσης",
    "booking.date": "Εκτιμώμενη ημερομηνία",
    "booking.guests": "Καλεσμένοι",
    "booking.guestsPlaceholder": "π.χ. 80",
    "booking.details": "Λίγες λεπτομέρειες",
    "booking.detailsPlaceholder": "Τοποθεσία, περίσταση και ό,τι άλλο πρέπει να γνωρίζουμε...",
    "booking.submit": "Συνέχεια στο WhatsApp",
    "booking.emailAlternative": "Ή στείλτε μας email",
    "booking.message": "Γεια σου Μαρία, θα ήθελα να συζητήσω μια εκδήλωση με τη MIA Events & Experiences.",
    "booking.messageName": "Όνομα / οργανισμός",
    "booking.messageService": "Υπηρεσία",
    "booking.messageDate": "Εκτιμώμενη ημερομηνία",
    "booking.messageGuests": "Καλεσμένοι",
    "booking.messageDetails": "Λεπτομέρειες"
  }
};

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
  if (service && serviceField) serviceField.value = service;
  bookingDialog.showModal();
  document.body.classList.add("is-locked");
}

function closeBooking() {
  bookingDialog?.close();
  document.body.classList.remove("is-locked");
}

document.querySelectorAll("[data-booking-open]").forEach((button) => {
  button.addEventListener("click", () => openBooking(button.dataset.service));
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
  const lines = [
    t["booking.message"],
    "",
    `${t["booking.messageName"]}: ${data.get("name")}`,
    `${t["booking.messageService"]}: ${service}`
  ];
  if (data.get("date")) lines.push(`${t["booking.messageDate"]}: ${data.get("date")}`);
  if (data.get("guests")) lines.push(`${t["booking.messageGuests"]}: ${data.get("guests")}`);
  if (data.get("details")) lines.push(`${t["booking.messageDetails"]}: ${data.get("details")}`);

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
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
