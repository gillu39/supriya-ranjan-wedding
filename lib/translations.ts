import type { Language } from "./wedding-data";

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    story: string;
    countdown: string;
    surprise: string;
    events: string;
    venue: string;
    gallery: string;
    rsvp: string;
    blessings: string;
    skipToContent: string;
  };
  envelope: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    couple: string;
    button: string;
    skip: string;
    sealHint: string;
  };
  hero: {
    together: string;
    brideFirst: string;
    ampersand: string;
    groomTitleName: string;
    tagline: string;
    date: string;
    city: string;
    scrollPrompt: string;
  };
  couple: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    brideRole: string;
    brideName: string;
    brideDegree: string;
    brideQuote: string;
    groomRole: string;
    groomName: string;
    groomDegree: string;
    groomQuote: string;
    brideFamilyHeading: string;
    groomFamilyHeading: string;
    grandparentsLabelBride: string;
    grandparentsBride: string;
    parentsLabelBride: string;
    parentsBride: string;
    grandparentsLabelGroom: string;
    grandparentsGroom: string;
    parentsLabelGroom: string;
    parentsGroom: string;
  };
  countdown: {
    label: string;
    title: string;
    subtitle: string;
    timezoneNote: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    celebrationTitle: string;
    celebrationMessage: string;
  };
  scratch: {
    label: string;
    title: string;
    instruction: string;
    hint: string;
    revealButton: string;
    revealedBadge: string;
    messageLine1: string;
    messageLine2: string;
    reset: string;
  };
  events: {
    label: string;
    title: string;
    subtitle: string;
    tapHint: string;
    viewDetails: string;
    addToCalendar: string;
    downloadIcs: string;
    googleCalendar: string;
    closeModal: string;
    venueLabel: string;
    dateTimeLabel: string;
    attireLabel: string;
    cards: {
      "haldi-mehndi": {
        title: string;
        date: string;
        day: string;
        time: string;
        shortVenue: string;
        fullVenue: string;
        addressPlaceholder: string;
        description: string;
        attire: string;
      };
      wedding: {
        title: string;
        date: string;
        day: string;
        time: string;
        shortVenue: string;
        fullVenue: string;
        addressPlaceholder: string;
        description: string;
        attire: string;
      };
      vidai: {
        title: string;
        date: string;
        day: string;
        time: string;
        shortVenue: string;
        fullVenue: string;
        addressPlaceholder: string;
        description: string;
        attire: string;
      };
    };
  };
  venue: {
    label: string;
    title: string;
    name: string;
    address: string;
    ceremonyTag: string;
    getDirections: string;
    openInMaps: string;
    copyLink: string;
    copiedLink: string;
    haldiNoteTitle: string;
    haldiNoteBody: string;
    haldiNoteConfigured: string;
    mapTitle: string;
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    placeholderNotice: string;
    placeholderBadge: string;
    openLightbox: string;
    closeLightbox: string;
    previous: string;
    next: string;
    items: Record<
      string,
      {
        title: string;
        caption: string;
        tag: string;
      }
    >;
  };
  rsvp: {
    label: string;
    title: string;
    subtitle: string;
    contactHeading: string;
    contactPerson: string;
    phoneLabel: string;
    phonePlaceholder: string;
    modeDemo: string;
    modeLive: string;
    nameLabel: string;
    namePlaceholder: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    guestsLabel: string;
    eventsLabel: string;
    eventOptions: {
      "haldi-mehndi": string;
      wedding: string;
      vidai: string;
    };
    attendanceLabel: string;
    acceptButton: string;
    declineButton: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successAccept: string;
    successDecline: string;
    editAnother: string;
    errors: {
      nameRequired: string;
      mobileInvalid: string;
      guestsInvalid: string;
      eventsRequired: string;
      attendanceRequired: string;
      generic: string;
    };
  };
  blessings: {
    label: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    pendingModeration: string;
    approvedBadge: string;
    emptyState: string;
    modeDemo: string;
    modeLive: string;
    errors: {
      nameRequired: string;
      messageRequired: string;
      messageTooShort: string;
      rateLimit: string;
      generic: string;
    };
  };
  thankYou: {
    line1: string;
    line2: string;
    couple: string;
    line3: string;
    replay: string;
    copyright: string;
  };
  music: {
    play: string;
    pause: string;
    mute: string;
    unmute: string;
    volume: string;
    trackTitle: string;
    trackSubtitle: string;
    demoTrackNote: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    meta: {
      title: "Supriya & Dr. Ranjan — Wedding Invitation | 24 November 2026",
      description:
        "You are cordially invited to celebrate the wedding of Supriya Singh & Dr. Ranjan Bhaiji Patariya on Tuesday, 24 November 2026 at New Saubhagya Lawn, Lucknow.",
    },
    nav: {
      story: "Our Story",
      countdown: "Countdown",
      surprise: "Surprise",
      events: "Celebrations",
      venue: "Venue",
      gallery: "Gallery",
      rsvp: "RSVP",
      blessings: "Blessings",
      skipToContent: "Skip to main invitation",
    },
    envelope: {
      line1: "With the blessings of our elders,",
      line2: "Two families, two hearts,\none beautiful celebration.",
      line3: "You are cordially invited to celebrate\nthe wedding of",
      line4: "24 November 2026 • Lucknow",
      couple: "SUPRIYA & RANJAN",
      button: "OPEN INVITATION",
      skip: "Skip animation",
      sealHint: "Tap the seal or button to open",
    },
    hero: {
      together: "Together with our families",
      brideFirst: "SUPRIYA",
      ampersand: "&",
      groomTitleName: "RANJAN",
      tagline: "Two souls, one beautiful journey.",
      date: "24 November 2026",
      city: "New Saubhagya Lawn, Lucknow",
      scrollPrompt: "Scroll to explore our celebration",
    },
    couple: {
      sectionLabel: "Shubh Vivah",
      sectionTitle: "Bride, Groom & Families",
      sectionSubtitle:
        "Bound by tradition, blessed by elders, and united in love.",
      brideRole: "The Bride",
      brideName: "Dr. Supriya Singh",
      brideDegree: "M.Tech, Ph.D. in Computer Science",
      brideQuote:
        "Rooted in grace, wisdom, and her family's endless love, she steps joyfully into a new chapter of togetherness.",
      groomRole: "The Groom",
      groomName: "Dr. Ranjan Bhaiji Patariya",
      groomDegree: "MS - Orthopedic",
      groomQuote:
        "Guided by compassion, dedication, and the blessings of his elders, he welcomes a lifetime of love and harmony.",
      brideFamilyHeading: "Bride's Family",
      groomFamilyHeading: "Groom's Family",
      grandparentsLabelBride: "Granddaughter of",
      grandparentsBride: "Late Jagrani & Late Bandha Lal",
      parentsLabelBride: "Daughter of",
      parentsBride: "Mr. Ram Kumar & Mrs. Bishakha",
      grandparentsLabelGroom: "Grandson of",
      grandparentsGroom: "Late Jamuntra Devi & Late Ram Sevak Ram",
      parentsLabelGroom: "Son of",
      parentsGroom: "Mrs. Indrawati Prasad & Mr. Ram Kumar Prasad",
    },
    countdown: {
      label: "Auspicious Muhurat",
      title: "Counting Down to Forever",
      subtitle: "Until the sacred wedding ceremony begins",
      timezoneNote: "24 November 2026 • 7:00 PM IST (Asia/Kolkata)",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      celebrationTitle: "The Wedding Day Has Arrived!",
      celebrationMessage:
        "Today we celebrate the sacred union of Supriya & Dr. Ranjan. Welcome to New Saubhagya Lawn, Lucknow.",
    },
    scratch: {
      label: "A Token of Joy",
      title: "Scratch to Reveal a Special Note",
      instruction:
        "Use your finger or cursor to gently rub away the golden foil.",
      hint: "Scratch here",
      revealButton: "Reveal without scratching",
      revealedBadge: "Revealed with love",
      messageLine1: "A beautiful celebration awaits you!",
      messageLine2:
        "Your presence will make our special day even more memorable.",
      reset: "Reset scratch card",
    },
    events: {
      label: "Wedding Itinerary",
      title: "Wedding Celebrations",
      subtitle:
        "Join us across three joyful occasions filled with rituals, music, and blessings.",
      tapHint: "Click or tap any ceremony for full details & calendar save",
      viewDetails: "Ceremony Details",
      addToCalendar: "Add to Calendar",
      downloadIcs: "Download .ICS (Apple / Outlook)",
      googleCalendar: "Add to Google Calendar",
      closeModal: "Close details",
      venueLabel: "Venue",
      dateTimeLabel: "Date & Time",
      attireLabel: "Celebration Spirit",
      cards: {
        "haldi-mehndi": {
          title: "Haldi & Mehndi",
          date: "23 November 2026",
          day: "Monday",
          time: "4:00 PM onwards",
          shortVenue: "Lucknow",
          fullVenue: "Bride's residence, Lucknow",
          addressPlaceholder:
            "Address will be shared personally with invited guests.",
          description:
            "An afternoon of auspicious turmeric blessings, intricate henna artistry, folk songs, and marigold warmth with close family and friends.",
          attire: "Sunlit yellows, marigold hues, or festive greens",
        },
        wedding: {
          title: "Wedding Ceremony",
          date: "24 November 2026",
          day: "Tuesday",
          time: "7:00 PM onwards",
          shortVenue: "New Saubhagya Lawn, Lucknow",
          fullVenue: "New Saubhagya Lawn, Lucknow",
          addressPlaceholder:
            "New Saubhagya Lawn, Lucknow, Uttar Pradesh, India",
          description:
            "Welcoming the Baraat followed by Jaimala, sacred Saptapadi pheras beneath the illuminated mandap, and celebratory wedding feast.",
          attire: "Traditional Indian ethnic & festive evening wear",
        },
        vidai: {
          title: "Vidai",
          date: "25 November 2026",
          day: "Wednesday",
          time: "10:00 AM onwards",
          shortVenue: "Lucknow",
          fullVenue: "Lucknow",
          addressPlaceholder:
            "Morning farewell rituals and blessings for the newlyweds' new journey.",
          description:
            "A tender morning farewell filled with heartfelt blessings, prayers, and warm wishes as Supriya & Dr. Ranjan embark on their life together.",
          attire: "Graceful morning traditional attire",
        },
      },
    },
    venue: {
      label: "Sacred Setting",
      title: "Wedding Venue",
      name: "New Saubhagya Lawn",
      address: "Lucknow, Uttar Pradesh, India",
      ceremonyTag: "Wedding Ceremony • 24 November 2026 • 7:00 PM onwards",
      getDirections: "Get Directions",
      openInMaps: "Open in Google Maps",
      copyLink: "Copy Location Link",
      copiedLink: "Location Link Copied!",
      haldiNoteTitle: "Haldi & Mehndi Venue Note",
      haldiNoteBody:
        "Hosted at the Bride's residence in Lucknow (address will be shared personally with invited guests).",
      haldiNoteConfigured: "Bride's residence, Lucknow:",
      mapTitle: "Map preview of New Saubhagya Lawn, Lucknow",
    },
    gallery: {
      label: "Cherished Moments",
      title: "Couple & Family Gallery",
      subtitle:
        "Warm memories of Supriya & Dr. Ranjan together with their families.",
      placeholderNotice: "",
      placeholderBadge: "Photo",
      openLightbox: "Open photo in fullscreen",
      closeLightbox: "Close gallery viewer",
      previous: "Previous photo",
      next: "Next photo",
      items: {
        "couple-portrait": {
          title: "Together Forever",
          caption: "Supriya & Dr. Ranjan — Engagement & blessings celebration",
          tag: "Couple",
        },
        "bride-ceremony": {
          title: "Bridal Grace",
          caption: "Supriya Singh in traditional red chunri during rituals",
          tag: "Bride",
        },
        "groom-sherwani": {
          title: "The Groom",
          caption: "Dr. Ranjan Bhaiji Patariya in ceremonial sherwani",
          tag: "Groom",
        },
        "family-blessings": {
          title: "Elders' Blessings",
          caption:
            "Auspicious tika and blessings from loving elders of the family",
          tag: "Family",
        },
        "bride-portrait": {
          title: "Supriya Singh",
          caption: "A radiant portrait of the bride",
          tag: "Bride",
        },
        "groom-portrait": {
          title: "Dr. Ranjan",
          caption: "Portrait of Dr. Ranjan Bhaiji Patariya",
          tag: "Groom",
        },
      },
    },
    rsvp: {
      label: "Kindly Respond",
      title: "RSVP",
      subtitle:
        "Your gracious presence means the world to both families. Please let us know if you will join us.",
      contactHeading: "For Assistance & Coordination",
      contactPerson: "Contact Person: Mr. Ram Kumar",
      phoneLabel: "Phone:",
      phonePlaceholder: "To be shared soon by Mr. Ram Kumar",
      modeDemo: "Preview Storage (Demo Mode)",
      modeLive: "Saved to Wedding Guestbook",
      nameLabel: "Guest Full Name",
      namePlaceholder: "Enter your full name",
      mobileLabel: "Mobile Number",
      mobilePlaceholder: "+91 98XXX XXXXX",
      guestsLabel: "Number of Guests",
      eventsLabel: "Ceremonies You Will Attend",
      eventOptions: {
        "haldi-mehndi": "Haldi & Mehndi (23 Nov)",
        wedding: "Wedding Ceremony (24 Nov)",
        vidai: "Vidai (25 Nov)",
      },
      attendanceLabel: "Will you be able to grace the occasion?",
      acceptButton: "Joyfully Accept",
      declineButton: "Regretfully Decline",
      messageLabel: "Optional Message or Dietary Note",
      messagePlaceholder:
        "Share your travel plans, arrival time, or a warm note for the families...",
      submitButton: "Confirm RSVP",
      submitting: "Saving your RSVP...",
      successAccept:
        "Thank you! We are overjoyed to welcome you to Supriya & Dr. Ranjan's celebration.",
      successDecline:
        "Thank you for letting us know. You will be warmly remembered in our prayers and celebrations.",
      editAnother: "Submit another RSVP",
      errors: {
        nameRequired: "Please enter your name.",
        mobileInvalid: "Please enter a valid 10–15 digit mobile number.",
        guestsInvalid: "Please select between 1 and 15 guests.",
        eventsRequired:
          "Please select at least one ceremony you plan to attend.",
        attendanceRequired:
          "Please choose Joyfully Accept or Regretfully Decline.",
        generic: "Unable to submit right now. Please try again.",
      },
    },
    blessings: {
      label: "Warm Wishes",
      title: "Blessings & Wishes",
      subtitle:
        "Leave a heartfelt blessing for Supriya & Dr. Ranjan as they begin their life together.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g., Sharma Family, Lucknow",
      messageLabel: "Your Blessing or Message",
      messagePlaceholder:
        "Write a warm blessing, memory, or wish for the couple...",
      submitButton: "Send Blessings",
      submitting: "Sending...",
      successMessage:
        "Your heartfelt blessing has been added to our keepsake wall!",
      pendingModeration:
        "Thank you! Your blessing has been received and queued for family review.",
      approvedBadge: "Blessed & Approved",
      emptyState: "Be the first to share a blessing for the couple.",
      modeDemo: "Demo Mode (Validated Local Keepsake)",
      modeLive: "Saved via Supabase",
      errors: {
        nameRequired: "Please enter your name.",
        messageRequired: "Please write a blessing message.",
        messageTooShort: "Please write at least 6 characters.",
        rateLimit:
          "Please wait a few seconds before sending another blessing.",
        generic: "Could not submit your blessing. Please try again.",
      },
    },
    thankYou: {
      line1: "Your presence is the greatest gift.",
      line2: "With love and gratitude,",
      couple: "Supriya & Ranjan",
      line3: "Thank you for being part of our celebration.",
      replay: "REPLAY OUR INVITATION",
      copyright: "23 – 25 November 2026 • Lucknow, Uttar Pradesh",
    },
    music: {
      play: "Play wedding music",
      pause: "Pause wedding music",
      mute: "Mute music",
      unmute: "Unmute music",
      volume: "Music volume",
      trackTitle: "Wedding Music",
      trackSubtitle: "Indian Wedding Melody",
      demoTrackNote: "Replace with your chosen MP3 song",
    },
  },
  hi: {
    meta: {
      title: "सुप्रिया एवं डॉ. रंजन — विवाह निमंत्रण | 24 नवंबर 2026",
      description:
        "मंगलवार, 24 नवंबर 2026 को न्यू सौभाग्य लॉन, लखनऊ में सुप्रिया सिंह एवं डॉ. रंजन भाईजी पटरिया के शुभ विवाह समारोह में पधारने हेतु सस्नेह आमंत्रण।",
    },
    nav: {
      story: "परिचय",
      countdown: "शुभ घड़ी",
      surprise: "विशेष संदेश",
      events: "कार्यक्रम",
      venue: "विवाह स्थल",
      gallery: "दीर्घा",
      rsvp: "उपस्थिति",
      blessings: "आशीर्वाद",
      skipToContent: "मुख्य आमंत्रण पर जाएं",
    },
    envelope: {
      line1: "बड़ों के आशीर्वाद से,",
      line2: "दो परिवार, दो हृदय,\nएक पावन मिलन उत्सव।",
      line3: "आप सपरिवार सादर आमंत्रित हैं\nशुभ विवाह समारोह में",
      line4: "24 नवंबर 2026 • लखनऊ",
      couple: "सुप्रिया एवं रंजन",
      button: "निमंत्रण खोलें",
      skip: "एनिमेशन छोड़ें",
      sealHint: "खोलने के लिए मुहर या बटन दबाएं",
    },
    hero: {
      together: "समस्त परिवार के साथ सस्नेह",
      brideFirst: "सुप्रिया",
      ampersand: "एवं",
      groomTitleName: "रंजन",
      tagline: "दो आत्माएं, एक सुंदर जीवन यात्रा।",
      date: "24 नवंबर 2026",
      city: "न्यू सौभाग्य लॉन, लखनऊ",
      scrollPrompt: "समारोह देखने के लिए नीचे स्क्रॉल करें",
    },
    couple: {
      sectionLabel: "शुभ विवाह",
      sectionTitle: "वधू, वर एवं परिवारजन",
      sectionSubtitle:
        "परंपराओं से जुड़े, बड़ों के आशीर्वाद से पल्लवित और स्नेह से बंधे।",
      brideRole: "सौभाग्यकांक्षिणी वधू",
      brideName: "डॉ. सुप्रिया सिंह",
      brideDegree: "एम.टेक, पीएच.डी. (कंप्यूटर साइंस)",
      brideQuote:
        "संस्कार, ज्ञान और परिवार के असीम स्नेह के साथ वे संग-साथ के एक सुंदर नए अध्याय की शुरुआत कर रही हैं।",
      groomRole: "आयुष्मान वर",
      groomName: "डॉ. रंजन भाईजी पटरिया",
      groomDegree: "एम.एस. (ऑर्थोपेडिक)",
      groomQuote:
        "करुणा, समर्पण और बड़ों के मंगल आशीर्वाद के साथ वे प्रेम एवं सौहार्द के नए जीवन सफर का स्वागत कर रहे हैं।",
      brideFamilyHeading: "वधू पक्ष",
      groomFamilyHeading: "वर पक्ष",
      grandparentsLabelBride: "पौत्री",
      grandparentsBride: "स्व. जगरानी एवं स्व. बंधा लाल",
      parentsLabelBride: "सुपुत्री",
      parentsBride: "श्री राम कुमार एवं श्रीमती बिशाखा",
      grandparentsLabelGroom: "पौत्र",
      grandparentsGroom: "स्व. जमुनत्रा देवी एवं स्व. राम सेवक राम",
      parentsLabelGroom: "सुपुत्र",
      parentsGroom: "श्रीमती इंद्रावती प्रसाद एवं श्री राम कुमार प्रसाद",
    },
    countdown: {
      label: "शुभ मुहूर्त",
      title: "मंगल परिणय की प्रतीक्षा",
      subtitle: "पावन विवाह समारोह आरंभ होने में शेष समय",
      timezoneNote: "24 नवंबर 2026 • सायं 7:00 बजे (IST / एशिया-कोलकाता)",
      days: "दिन",
      hours: "घंटे",
      minutes: "मिनट",
      seconds: "सेकंड",
      celebrationTitle: "शुभ विवाह का पावन दिन आ गया है!",
      celebrationMessage:
        "आज हम सुप्रिया एवं डॉ. रंजन के पावन परिणय का उत्सव मना रहे हैं। न्यू सौभाग्य लॉन, लखनऊ में आपका हार्दिक स्वागत है।",
    },
    scratch: {
      label: "स्नेह का उपहार",
      title: "विशेष संदेश देखने के लिए स्क्रैच करें",
      instruction:
        "सुनहरी परत को धीरे-धीरे उंगली या माउस से हटाएं और संदेश पढ़ें।",
      hint: "यहाँ स्क्रैच करें",
      revealButton: "बिना स्क्रैच किए देखें",
      revealedBadge: "सस्नेह प्रकट",
      messageLine1: "एक सुंदर उत्सव आपकी प्रतीक्षा कर रहा है!",
      messageLine2:
        "आपकी गरिमामयी उपस्थिति हमारे इस विशेष दिन को और भी अविस्मरणीय बना देगी।",
      reset: "फिर से स्क्रैच करें",
    },
    events: {
      label: "मांगलिक कार्यक्रम",
      title: "विवाह उत्सव",
      subtitle:
        "रीति-रिवाजों, संगीत और मंगल आशीर्वाद से सजे तीन दिवसीय समारोहों में सम्मिलित हों।",
      tapHint:
        "विस्तृत जानकारी और कैलेंडर में जोड़ने के लिए किसी भी कार्ड पर क्लिक करें",
      viewDetails: "समारोह विवरण",
      addToCalendar: "कैलेंडर में जोड़ें",
      downloadIcs: ".ICS फ़ाइल डाउनलोड करें",
      googleCalendar: "गूगल कैलेंडर में जोड़ें",
      closeModal: "बंद करें",
      venueLabel: "स्थान",
      dateTimeLabel: "तिथि एवं समय",
      attireLabel: "परिधान एवं भाव",
      cards: {
        "haldi-mehndi": {
          title: "हल्दी एवं मेहंदी",
          date: "23 नवंबर 2026",
          day: "सोमवार",
          time: "सायं 4:00 बजे से",
          shortVenue: "लखनऊ",
          fullVenue: "वधू निवास, लखनऊ",
          addressPlaceholder:
            "निवास का पता कॉन्फ़िगरेबल प्लेसहोल्डर है — सटीक पता अतिथियों के साथ व्यक्तिगत रूप से साझा किया जाएगा।",
          description:
            "मंगल हल्दी के लेप, रचती मेहंदी, लोकगीतों और गेंदे के फूलों की सुगंध से भरा स्नेहिल सायंकाल।",
          attire: "पीले, गेंदे के सुनहरे अथवा हरे पारंपरिक परिधान",
        },
        wedding: {
          title: "शुभ विवाह समारोह",
          date: "24 नवंबर 2026",
          day: "मंगलवार",
          time: "रात्रि 7:00 बजे से",
          shortVenue: "न्यू सौभाग्य लॉन, लखनऊ",
          fullVenue: "न्यू सौभाग्य लॉन, लखनऊ",
          addressPlaceholder: "न्यू सौभाग्य लॉन, लखनऊ, उत्तर प्रदेश, भारत",
          description:
            "बारात स्वागत, जयमाला, सजे हुए मंडप के नीचे वैदिक मंत्रोच्चार के साथ सप्तपदी एवं प्रीतिभोज।",
          attire: "पारंपरिक भारतीय एवं उत्सवी परिधान",
        },
        vidai: {
          title: "विदाई",
          date: "25 नवंबर 2026",
          day: "बुधवार",
          time: "प्रातः 10:00 बजे से",
          shortVenue: "लखनऊ",
          fullVenue: "लखनऊ",
          addressPlaceholder:
            "नवदंपति के सुखद भविष्य हेतु प्रातःकालीन आशीर्वाद एवं भावपूर्ण विदाई।",
          description:
            "बड़ों के आशीर्वाद, मंगलकामनाओं और स्नेहभरे भावों के साथ नवदंपति की नई जीवन यात्रा का शुभारंभ।",
          attire: "सौम्य प्रातःकालीन पारंपरिक परिधान",
        },
      },
    },
    venue: {
      label: "समारोह स्थल",
      title: "विवाह स्थल",
      name: "न्यू सौभाग्य लॉन",
      address: "लखनऊ, उत्तर प्रदेश, भारत",
      ceremonyTag: "शुभ विवाह समारोह • 24 नवंबर 2026 • रात्रि 7:00 बजे से",
      getDirections: "दिशा-निर्देश प्राप्त करें",
      openInMaps: "गूगल मैप्स में खोलें",
      copyLink: "लोकेशन लिंक कॉपी करें",
      copiedLink: "लोकेशन लिंक कॉपी हो गया!",
      haldiNoteTitle: "हल्दी एवं मेहंदी स्थान सूचना",
      haldiNoteBody:
        "वधू निवास, लखनऊ में आयोजित (कॉन्फ़िगरेबल पता प्लेसहोल्डर — आमंत्रित अतिथियों के साथ व्यक्तिगत रूप से साझा किया जाएगा)।",
      haldiNoteConfigured: "वधू निवास, लखनऊ:",
      mapTitle: "न्यू सौभाग्य लॉन, लखनऊ का मानचित्र",
    },
    gallery: {
      label: "मधुर स्मृतियाँ",
      title: "चित्र दीर्घा",
      subtitle:
        "सुप्रिया एवं डॉ. रंजन तथा परिवार के स्नेहिल पलों की झलक।",
      placeholderNotice: "",
      placeholderBadge: "चित्र",
      openLightbox: "बड़े आकार में देखें",
      closeLightbox: "दीर्घा बंद करें",
      previous: "पिछला चित्र",
      next: "अगला चित्र",
      items: {
        "couple-portrait": {
          title: "सदा साथ",
          caption: "सुप्रिया एवं डॉ. रंजन — सगाई एवं आशीर्वाद समारोह",
          tag: "युगल",
        },
        "bride-ceremony": {
          title: "सौभाग्यवती वधू",
          caption: "मांगलिक रस्मों के दौरान पारंपरिक लाल चुनरी में सुप्रिया सिंह",
          tag: "वधू",
        },
        "groom-sherwani": {
          title: "आयुष्मान वर",
          caption: "उत्सवी शेरवानी में डॉ. रंजन भाईजी पटरिया",
          tag: "वर",
        },
        "family-blessings": {
          title: "बड़ों का आशीर्वाद",
          caption:
            "परिवार के पूज्य बड़ों द्वारा शुभ तिलक एवं मंगल आशीर्वाद",
          tag: "परिवार",
        },
        "bride-portrait": {
          title: "सुप्रिया सिंह",
          caption: "वधू का स्नेहिल चित्र",
          tag: "वधू",
        },
        "groom-portrait": {
          title: "डॉ. रंजन",
          caption: "डॉ. रंजन भाईजी पटरिया का चित्र",
          tag: "वर",
        },
      },
    },
    rsvp: {
      label: "कृपया सूचित करें",
      title: "उपस्थिति पुष्टि (RSVP)",
      subtitle:
        "दोनों परिवारों के लिए आपकी गरिमामयी उपस्थिति अमूल्य है। कृपया अपनी उपस्थिति की सूचना दें।",
      contactHeading: "संपर्क एवं समन्वय",
      contactPerson: "संपर्क सूत्र: श्री राम कुमार",
      phoneLabel: "दूरभाष:",
      phonePlaceholder:
        "कॉन्फ़िगरेबल फ़ोन नंबर प्लेसहोल्डर (शीघ्र अपडेट किया जाएगा)",
      modeDemo: "डेमो स्टोरेज मोड (लोकल फ़ॉलबैक)",
      modeLive: "Supabase डेटाबेस से जुड़ा है",
      nameLabel: "अतिथि का पूरा नाम",
      namePlaceholder: "अपना पूरा नाम लिखें",
      mobileLabel: "मोबाइल नंबर",
      mobilePlaceholder: "+91 98XXX XXXXX",
      guestsLabel: "अतिथियों की संख्या",
      eventsLabel: "आप किन समारोहों में सम्मिलित होंगे?",
      eventOptions: {
        "haldi-mehndi": "हल्दी एवं मेहंदी (23 नवंबर)",
        wedding: "शुभ विवाह (24 नवंबर)",
        vidai: "विदाई (25 नवंबर)",
      },
      attendanceLabel: "क्या आप समारोह में पधार रहे हैं?",
      acceptButton: "सहर्ष स्वीकार",
      declineButton: "विनम्र असमर्थता",
      messageLabel: "विशेष संदेश या सुझाव (वैकल्पिक)",
      messagePlaceholder:
        "यात्रा विवरण, आगमन समय या परिवारों के लिए कोई संदेश लिखें...",
      submitButton: "उपस्थिति दर्ज करें",
      submitting: "सहेजा जा रहा है...",
      successAccept:
        "धन्यवाद! सुप्रिया एवं डॉ. रंजन के शुभ विवाह में आपका स्वागत करने के लिए हम अत्यंत उत्साहित हैं।",
      successDecline:
        "सूचित करने के लिए धन्यवाद। समारोह में आपकी स्नेहिल उपस्थिति की कमी अवश्य महसूस होगी।",
      editAnother: "एक और RSVP दर्ज करें",
      errors: {
        nameRequired: "कृपया अपना नाम दर्ज करें।",
        mobileInvalid: "कृपया 10 से 15 अंकों का वैध मोबाइल नंबर दर्ज करें।",
        guestsInvalid: "कृपया 1 से 15 के बीच अतिथियों की संख्या चुनें।",
        eventsRequired: "कृपया कम से कम एक समारोह चुनें।",
        attendanceRequired:
          "कृपया 'सहर्ष स्वीकार' या 'विनम्र असमर्थता' चुनें।",
        generic: "अभी सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।",
      },
    },
    blessings: {
      label: "मंगल कामनाएं",
      title: "आशीर्वाद एवं शुभकामनाएं",
      subtitle:
        "सुप्रिया एवं डॉ. रंजन के सुखद दांपत्य जीवन के लिए अपने स्नेहिल आशीर्वाद लिखें।",
      nameLabel: "आपका नाम",
      namePlaceholder: "जैसे: शर्मा परिवार, लखनऊ",
      messageLabel: "आपका आशीर्वाद या संदेश",
      messagePlaceholder: "नवदंपति के लिए अपना मंगल आशीर्वाद लिखें...",
      submitButton: "आशीर्वाद भेजें",
      submitting: "भेजा जा रहा है...",
      successMessage: "आपका स्नेहिल आशीर्वाद हमारी स्मृति दीवार पर जुड़ गया है!",
      pendingModeration:
        "धन्यवाद! आपका आशीर्वाद प्राप्त हो गया है और समीक्षा के लिए सुरक्षित है।",
      approvedBadge: "स्नेहिल आशीर्वाद",
      emptyState: "नवदंपति को पहला आशीर्वाद देने वाले बनें।",
      modeDemo: "डेमो मोड (सत्यापित लोकल संग्रह)",
      modeLive: "Supabase में सुरक्षित",
      errors: {
        nameRequired: "कृपया अपना नाम लिखें।",
        messageRequired: "कृपया अपना आशीर्वाद संदेश लिखें।",
        messageTooShort: "कृपया कम से कम 6 अक्षर लिखें।",
        rateLimit:
          "कृपया दूसरा आशीर्वाद भेजने से पहले कुछ सेकंड प्रतीक्षा करें।",
        generic: "संदेश भेजने में समस्या आई। कृपया पुनः प्रयास करें।",
      },
    },
    thankYou: {
      line1: "आपकी उपस्थिति ही सबसे बड़ा उपहार है।",
      line2: "स्नेह एवं कृतज्ञता सहित,",
      couple: "सुप्रिया एवं रंजन",
      line3: "हमारे मंगल उत्सव का हिस्सा बनने के लिए हार्दिक धन्यवाद।",
      replay: "निमंत्रण पुनः देखें",
      copyright: "23 – 25 नवंबर 2026 • लखनऊ, उत्तर प्रदेश",
    },
    music: {
      play: "मंगल संगीत चलाएं",
      pause: "संगीत रोकें",
      mute: "आवाज़ बंद करें",
      unmute: "आवाज़ चालू करें",
      volume: "संगीत की ध्वनि",
      trackTitle: "विवाह मंगल गीत",
      trackSubtitle: "शुभ विवाह धुन",
      demoTrackNote: "अपना पसंदीदा MP3 गीत जोड़ें",
    },
  },
};
