/* Balance Therapy – scripts with i18n (EN/AR/HE) */
document.addEventListener('DOMContentLoaded', function(){

  // ---------------- i18n ----------------
  var i18n = {
    en: {
      skip: 'Skip to main content',
      'brand.tagline': 'Gorget Rahiel • Naturopath & Reflexologist',
      'brand.ariaHome': 'Home • Balance Therapy',
      'nav.toggle': 'Open/Close menu',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.blog': 'Blog',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Contact',
      'nav.book': 'Book Now',

      'hero.badge': 'Mind–body balance • Gentle, evidence‑based approach',
      'hero.title': 'Natural care that brings you calm, energy, and better sleep',
      'hero.lead': 'Reflexology and naturopathy tailored to ease back/neck pain, stress, fatigue, sleep, and digestion.',
      'cta.book': 'Book Now',
      'cta.explore': 'Explore services',
      'trust.reflexology': 'Therapeutic Reflexology',
      'trust.naturopathy': 'Personalized Naturopathy',
      'trust.support': 'Support alongside ongoing treatments',
      'trust.pain': 'Chronic pain care',
      'trust.women': 'Women only',
      'hero.videoLabel': 'Intro video of the clinic',

      'services.title': 'Services',
      'services.reflexology.title': 'Therapeutic Reflexology',
      'services.reflexology.desc': '50 minutes of balance and calm: relieve back/neck pain, improve sleep quality, and lower stress.',
      'services.reflexology.level': 'Gentle',
      'services.reflexology.duration': '50 min',
      'services.combo.title': 'Combined Touch Therapy',
      'services.combo.desc': 'Head‑shoulders‑back massage + reflexology for deep relaxation and release. Great for mental and physical load.',
      'services.combo.level': 'Popular',
      'services.combo.duration': '50–75 min',
      'services.naturopath.title': 'Naturopathic Consultation',
      'services.naturopath.desc': 'Personalized nutrition, supplements, and daily tools – a tailored plan for stable, balanced health.',
      'services.naturopath.level': 'Personal',
      'services.naturopath.duration': 'In‑clinic/online',

      'offer.title': 'Offer of the month',
      'offer.copy': '<strong>Pampering combined treatment (50 min)</strong> — Head‑shoulders‑back massage + reflexology for deep relaxation.',
      'offer.li1': 'Let go of tension and mental overload',
      'offer.li2': 'Improve blood flow and deeper breathing',
      'offer.li3': 'Reconnect with your body and inner calm',
      'offer.price': 'Intro price: <strong>₪XXX</strong>',
      'offer.cta': 'Get it now',

      'about.title': 'About me',
      'about.p1': '<strong>Gorget Rahiel</strong> — naturopath and reflexologist. My approach is gentle, attentive, and evidence‑based, integrating touch, nutrition, and daily tools to reduce stress.',
      'about.p2': 'Together we build a personal plan that promotes better sleep, energetic balance, and pain relief — at your pace.',
      'about.li1': 'Personalized to your goals',
      'about.li2': 'Calming touch and safe therapeutic space',
      'about.li3': 'Nutritional guidance and everyday tools',

      'gallery.label': 'Clinic photo gallery',
      'gallery.img1': 'A bright, cozy clinic for calming treatment',
      'gallery.img2': 'Another view of the treatment room and quiet ambience',
      'gallery.img3': 'Neat and clean reflexology tools',
      'gallery.img4': 'Relaxing waiting corner with natural light',

      'testimonials.title': 'Patient testimonials',
      'testimonials.q1': 'The treatment was gentle and precise. After a few sessions my back improved and sleep is calmer.',
      'testimonials.q2': 'Highly recommended! Sensitive, caring approach that eased my stress during a busy time.',
      'testimonials.q3': 'Reflexology that balances the whole system. Quiet, supportive atmosphere — a soothing experience.',

      'contact.title': 'Contact',
      'contact.phoneLabel': 'Phone/WhatsApp:',
      'contact.emailLabel': 'Email:',

      'form.name': 'Full name',
      'form.phone': 'Phone',
      'form.message': 'Message',
      'form.submit': 'Send',
      'form.note': "We'll get back to you shortly. WhatsApp works too.",
      'form.error': 'Please enter your name and message.',
      'form.sent': "Thank you! Your message was sent. We'll get back to you shortly.",

      'location.title': 'Location & Opening Hours',
      'location.address': 'Address: שיבת ציון 26 חיפה • Accessible parking • Wheelchair access by arrangement',
      'location.hours': "<strong>Hours</strong><br> From 5 to 10",
      'map.title': 'Map',

      'book.title': 'Book an appointment',
      'book.p': 'Quick and easy — tap to send a WhatsApp message and schedule:',
      'book.openWhatsApp': 'Open WhatsApp',
      'book.contact': 'Contact us',
      'book.note': 'In the future, an online booking and payment system can be added.',

      'footer.tagline': 'Gentle, attentive, evidence‑based care to balance body and mind.',
      'footer.rights': 'All rights reserved',

      'sticky.cta': 'Book now',
      'social.instagram': 'Open Balance Therapy on Instagram',
      'social.whatsapp': 'Open WhatsApp chat with us'
    },
    he: {
      skip: 'דלג לתוכן הראשי',
      'brand.tagline': 'גורגית רחייל • נטורופתית ורפלקסולוגית',
      'brand.ariaHome': 'דף הבית • Balance Therapy',
      'nav.toggle': 'פתח/סגור תפריט',
      'nav.home': 'דף הבית',
      'nav.about': 'אודות',
      'nav.services': 'שירותים',
      'nav.blog': 'בלוג',
      'nav.testimonials': 'המלצות',
      'nav.contact': 'יצירת קשר',
      'nav.book': 'קביעת תור',

      'hero.badge': 'איזון גוף ונפש • גישה עדינה ומבוססת‑עדויות',
      'hero.title': 'טיפול טבעי שמחזיר לכם שקט, אנרגיה ושינה טובה',
      'hero.lead': 'רפלקסולוגיה ונטורופתיה בהתאמה אישית להקלה בכאבי גב/צוואר, סטרס, עייפות, שינה ועיכול.',
      'cta.book': 'קביעת תור',
      'cta.explore': 'עיינו בשירותים',
      'trust.reflexology': 'רפלקסולוגיה טיפולית',
      'trust.naturopathy': 'נטורופתיה מותאמת',
      'trust.support': 'תמיכה בטיפולים מתמשכים',
      'trust.pain': 'טיפול בכאבים כרוניים',
      'trust.women': 'נשים בלבד',
      'hero.videoLabel': 'סרטון היכרות עם הקליניקה',

      'services.title': 'שירותים',
      'services.reflexology.title': 'רפלקסולוגיה טיפולית',
      'services.reflexology.desc': '50 דק’ של איזון והרגעה: הקלה בכאבי גב/צוואר, שיפור איכות השינה והפחתת סטרס.',
      'services.reflexology.level': 'קל',
      'services.reflexology.duration': '50 דק’',
      'services.combo.title': 'טיפול משולב מגע',
      'services.combo.desc': 'ראש‑כתפיים‑גב + רפלקסולוגיה להרפיה עמוקה ושחרור עומסים. מתאים לעומס נפשי ופיזי.',
      'services.combo.level': 'פופולרי',
      'services.combo.duration': '50–75 דק’',
      'services.naturopath.title': 'ייעוץ נטורופתי',
      'services.naturopath.desc': 'תזונה מותאמת, תוספים וכלים יומיומיים – תכנית אישית לבריאות מאוזנת ויציבה.',
      'services.naturopath.level': 'אישי',
      'services.naturopath.duration': 'מפגש/און‑ליין',

      'offer.title': 'מבצע החודש',
      'offer.copy': '<strong>טיפול משולב מפנק (50 דק’)</strong> — עיסוי ראש, כתפיים וגב + רפלקסולוגיה לאיזון והרגעה עמוקה.',
      'offer.li1': 'שחרור מתחים ועמוסי מחשבה',
      'offer.li2': 'שיפור זרימת דם ועומק נשימה',
      'offer.li3': 'חיבור לגוף ולשקט פנימי',
      'offer.price': 'מחיר היכרות: <strong>₪XXX</strong>',
      'offer.cta': 'להזמנה מיידית',

      'about.title': 'עליי',
      'about.p1': '<strong>גורגית רחייל</strong> – נטורופטית ורפלקסולוגית. אני מאמינה בטיפול עדין, קשוב ומבוסס‑עדויות שמשלב מגע, תזונה וכלים יומיומיים להורדת סטרס.',
      'about.p2': 'ביחד נבנה תכנית אישית שמקדמת שינה טובה, איזון אנרגטי והקלה בכאב – בקצב שלכם.',
      'about.li1': 'התאמה אישית למטרות שלכם',
      'about.li2': 'מגע מרגיע ואקלים טיפולי בטוח',
      'about.li3': 'הכוונה תזונתית וכלים לשגרה',

      'gallery.label': 'גלריית תמונות מהקליניקה',
      'gallery.img1': 'קליניקה נעימה ומוארת לטיפול רגוע',
      'gallery.img2': 'מבט נוסף על חדר הטיפול והאווירה השקטה',
      'gallery.img3': 'כלי טיפול ורפלקסולוגיה מסודרים ונקיים',
      'gallery.img4': 'פינת המתנה מרגיעה עם אור טבעי',

      'testimonials.title': 'המלצות מטופלים',
      'testimonials.q1': 'הטיפול היה עדין ומדויק. אחרי כמה מפגשים הגב משתפר והשינה רגועה יותר.',
      'testimonials.q2': 'ממליץ בחום! גישה רגישה ואכפתית, הורדת לי סטרס בתקופה עמוסה.',
      'testimonials.q3': 'רפלקסולוגיה שמאזנת את כל המערכת. אווירה שקטה ותומכת, חוויה מרגיעה.',

      'contact.title': 'יצירת קשר',
      'contact.phoneLabel': 'טלפון/וואטסאפ:',
      'contact.emailLabel': 'אימייל:',

      'form.name': 'שם מלא',
      'form.phone': 'טלפון',
      'form.message': 'הודעה',
      'form.submit': 'שליחה',
      'form.note': 'נחזור אליכם בהקדם. אפשר גם בוואטסאפ.',
      'form.error': 'נא למלא שם והודעה.',
      'form.sent': 'תודה! ההודעה נשלחה. נחזור אליכם בהקדם.',

      'location.title': 'מיקום ושעות',
      'location.address': 'כתובת: שיבת ציון 26 חיפה • חניה נגישה • נגישות לנכים לפי תיאום',
      'location.hours': "<strong>שעות פעילות</strong><br> מ-5 עד 10",
      'map.title': 'מפה',

      'book.title': 'קביעת תור',
      'book.p': 'מהיר ונוח – לחצו לשליחת הודעת וואטסאפ ותיאום תור:',
      'book.openWhatsApp': 'פתחו וואטסאפ',
      'book.contact': 'צרו קשר',
      'book.note': 'בעתיד ניתן לשלב מערכת זימונים עם תשלום מקוון.',

      'footer.tagline': 'טיפול עדין, קשוב ומבוסס‑עדויות לאיזון הגוף והנפש.',
      'footer.rights': 'כל הזכויות שמורות',

      'sticky.cta': 'קבעו תור עכשיו',
      'social.instagram': 'פתח אינסטגרם של Balance Therapy',
      'social.whatsapp': 'פתח צ׳אט וואטסאפ איתנו'
    },
    ar: {
      skip: 'تخطي إلى المحتوى الرئيسي',
      'brand.tagline': 'غورغيت رحيل • معالجة بالطبيعة وأخصائية رفلكسولوجيا',
      'brand.ariaHome': 'الصفحة الرئيسية • Balance Therapy',
      'nav.toggle': 'فتح/إغلاق القائمة',
      'nav.home': 'الرئيسية',
      'nav.about': 'نبذة',
      'nav.services': 'الخدمات',
      'nav.blog': 'المدونة',
      'nav.testimonials': 'التوصيات',
      'nav.contact': 'تواصل',
      'nav.book': 'احجز الآن',

      'hero.badge': 'توازن الجسد والنفس • نهج لطيف قائم على الأدلة',
      'hero.title': 'علاج طبيعي يعيد إليك الهدوء والطاقة ونومًا أفضل',
      'hero.lead': 'رفلكسولوجيا وناتوروباثي مخصصان لتخفيف آلام الظهر/الرقبة والضغط والإرهاق وتحسين النوم والهضم.',
      'cta.book': 'احجز موعدًا',
      'cta.explore': 'تصفح الخدمات',
      'trust.reflexology': 'رفلكسولوجيا علاجية',
      'trust.naturopathy': 'ناتوروباثي مخصص',
      'trust.support': 'دعم إلى جانب العلاجات المستمرة',
      'trust.pain': 'رعاية الآلام المزمنة',
      'trust.women': 'للنساء فقط',
      'hero.videoLabel': 'فيديو تعريفي للعيادة',

      'services.title': 'الخدمات',
      'services.reflexology.title': 'رفلكسولوجيا علاجية',
      'services.reflexology.desc': '50 دقيقة من التوازن والتهدئة: تخفيف آلام الظهر/الرقبة، تحسين جودة النوم وتقليل التوتر.',
      'services.reflexology.level': 'لطيف',
      'services.reflexology.duration': '50 دقيقة',
      'services.combo.title': 'علاج لمسيّ مُدمج',
      'services.combo.desc': 'تدليك رأس‑كتفين‑ظهر + رفلكسولوجيا لاسترخاء عميق وتحرير الضغوط. مناسب للضغط النفسي والبدني.',
      'services.combo.level': 'شائع',
      'services.combo.duration': '50–75 دقيقة',
      'services.naturopath.title': 'استشارة ناتوروباثي',
      'services.naturopath.desc': 'تغذية مخصصة، مكمّلات وأدوات يومية — خطة شخصية لصحة متوازنة ومستقرة.',
      'services.naturopath.level': 'شخصي',
      'services.naturopath.duration': 'حضوري/عن بُعد',

      'offer.title': 'عرض الشهر',
      'offer.copy': '<strong>علاج مُدمج مُدلل (50 دقيقة)</strong> — تدليك الرأس والكتفين والظهر + رفلكسولوجيا لاسترخاء عميق.',
      'offer.li1': 'التخلص من التوتر وفرط التفكير',
      'offer.li2': 'تحسين تدفق الدم وعمق التنفس',
      'offer.li3': 'العودة إلى الجسد وإلى الهدوء الداخلي',
      'offer.price': 'سعر تعريفي: <strong>₪XXX</strong>',
      'offer.cta': 'اطلب الآن',

      'about.title': 'نبذة عنّي',
      'about.p1': '<strong>غورغيت رحيل</strong> — معالجة بالطبيعة وأخصائية رفلكسولوجيا. أؤمن بعلاج لطيف ومُصغٍ قائم على الأدلة يجمع اللمس والتغذية وأدوات يومية لتخفيف التوتر.',
      'about.p2': 'معًا نبني خطة شخصية تعزّز النوم الجيد والتوازن الطاقي وتخفيف الألم — على وتيرتك.',
      'about.li1': 'تلاؤم شخصي مع أهدافك',
      'about.li2': 'لمس مُهدّئ وبيئة علاجية آمنة',
      'about.li3': 'إرشاد غذائي وأدوات للحياة اليومية',

      'gallery.label': 'معرض صور العيادة',
      'gallery.img1': 'عيادة مريحة ومضيئة لعلاج هادئ',
      'gallery.img2': 'منظور إضافي لغرفة العلاج والأجواء الهادئة',
      'gallery.img3': 'أدوات رفلكسولوجيا مرتّبة ونظيفة',
      'gallery.img4': 'زاوية انتظار مريحة بإضاءة طبيعية',

      'testimonials.title': 'توصيات المرضى',
      'testimonials.q1': 'كان العلاج لطيفًا ودقيقًا. بعد عدّة جلسات تحسّن ظهري وأصبح النوم أهدأ.',
      'testimonials.q2': 'أنصح بشدّة! نهج حسّاس ومهتم خفّف توتري في فترة مزدحمة.',
      'testimonials.q3': 'رفلكسولوجيا توازن كل المنظومة. أجواء هادئة وداعمة — تجربة مريحة.',

      'contact.title': 'تواصل',
      'contact.phoneLabel': 'هاتف/واتساب:',
      'contact.emailLabel': 'البريد الإلكتروني:',

      'form.name': 'الاسم الكامل',
      'form.phone': 'الهاتف',
      'form.message': 'الرسالة',
      'form.submit': 'إرسال',
      'form.note': 'سنتواصل معك قريبًا. يمكن عبر واتساب أيضًا.',
      'form.error': 'يرجى إدخال الاسم والرسالة.',
      'form.sent': 'شكرًا! تم إرسال رسالتك. سنعاود الاتصال بك قريبًا.',

      'location.title': 'الموقع وساعات العمل',
      'location.address': 'العنوان: שיבת ציון 26 חיפה • موقف سيارات ميسّر • إمكانية وصول للكراسي المتحركة بالتنسيق',
      'location.hours': '<strong>ساعات العمل</strong><br> من 5 إلى 10',
      'map.title': 'خريطة',

      'book.title': 'حجز موعد',
      'book.p': 'سريع وسهل — اضغط لإرسال رسالة واتساب وتحديد موعد:',
      'book.openWhatsApp': 'افتح واتساب',
      'book.contact': 'تواصل معنا',
      'book.note': 'مستقبلاً يمكن إضافة نظام حجوزات ودفع إلكتروني.',

      'footer.tagline': 'رعاية لطيفة ومُصغية قائمة على الأدلة لتحقيق توازن الجسد والعقل.',
      'footer.rights': 'جميع الحقوق محفوظة',

      'sticky.cta': 'احجز الآن',
      'social.instagram': 'افتح صفحة Balance Therapy على إنستغرام',
      'social.whatsapp': 'افتح محادثة واتساب معنا'
    }
  };

  function normalizeLang(l){
    if (!l) return 'he';
    l = (''+l).toLowerCase();
    if (l.startsWith('ar')) return 'ar';
    if (l.startsWith('he') || l.startsWith('iw')) return 'he';
    return 'en';
  }

  var currentLang = (function(){
    var qp = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('lang');
    return normalizeLang(qp || saved || 'he');
  })();

  function t(key){
    var pack = i18n[currentLang] || i18n.he;
    return (pack && Object.prototype.hasOwnProperty.call(pack, key)) ? pack[key] : (i18n.he[key] || '');
  }

  function setText(selector, key){
    var el = document.querySelector(selector);
    if (el) el.textContent = t(key);
  }
  function setHTML(selector, key){
    var el = document.querySelector(selector);
    if (el) el.innerHTML = t(key);
  }
  function setAttr(selector, attr, key){
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, t(key));
  }

  function updateLangButtons(){
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      var active = btn.getAttribute('data-lang') === currentLang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('active', active);
    });
  }

  function updateYear(){
    var yearEl = document.getElementById('year');
    if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
  }

  function applyTranslations(){
    // Document direction and language
    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar' || currentLang === 'he') ? 'rtl' : 'ltr';

    // A11y labels and brand
    setText('a.skip-link','skip');
    setAttr('a.brand', 'aria-label', 'brand.ariaHome');
    setText('.brand .brand-text small','brand.tagline');
    setAttr('button.nav-toggle','aria-label','nav.toggle');

    // Nav
    setText('#nav-menu li:nth-child(1) a','nav.home');
    setText('#nav-menu li:nth-child(2) a','nav.about');
    setText('#nav-menu li:nth-child(3) a','nav.services');
    setText('#nav-menu li:nth-child(4) a','nav.testimonials');
    setText('#nav-menu li:nth-child(5) a','nav.contact');
    var navBook = document.querySelector('#nav-menu a.btn.btn-primary.sm');
    if (navBook) navBook.textContent = t('nav.book');

    // Hero
    setText('.hero-text .badge','hero.badge');
    setText('.hero-text h1','hero.title');
    setText('.hero-text .lead','hero.lead');
    var heroCtas = document.querySelectorAll('.hero-text .cta-row a');
    if (heroCtas[0]) heroCtas[0].textContent = t('cta.book');
    if (heroCtas[1]) heroCtas[1].textContent = t('cta.explore');
    var chips = document.querySelectorAll('.trust .chip');
    if (chips[0]) chips[0].textContent = '👣 ' + t('trust.reflexology');
    if (chips[1]) chips[1].textContent = '🌿 ' + t('trust.naturopathy');
    if (chips[2]) chips[2].textContent = '🤝 ' + t('trust.support');
    if (chips[3]) chips[3].textContent = '🩺 ' + t('trust.pain');
    if (chips[4]) chips[4].textContent = '👩 ' + t('trust.women');
    setAttr('.video-hero .video','aria-label','hero.videoLabel');

    // Services
    setText('#services-title','services.title');
    setText('section#services .service:nth-child(1) h3','services.reflexology.title');
    setText('section#services .service:nth-child(1) p','services.reflexology.desc');
    setText('section#services .service:nth-child(1) .meta .pill:nth-child(1)','services.reflexology.level');
    setText('section#services .service:nth-child(1) .meta .pill:nth-child(2)','services.reflexology.duration');

    setText('section#services .service:nth-child(2) h3','services.combo.title');
    setText('section#services .service:nth-child(2) p','services.combo.desc');
    setText('section#services .service:nth-child(2) .meta .pill:nth-child(1)','services.combo.level');
    setText('section#services .service:nth-child(2) .meta .pill:nth-child(2)','services.combo.duration');

    setText('section#services .service:nth-child(3) h3','services.naturopath.title');
    setText('section#services .service:nth-child(3) p','services.naturopath.desc');
    setText('section#services .service:nth-child(3) .meta .pill:nth-child(1)','services.naturopath.level');
    setText('section#services .service:nth-child(3) .meta .pill:nth-child(2)','services.naturopath.duration');

    document.querySelectorAll('section#services .service .cta-row a').forEach(function(a){
      a.textContent = t('cta.book');
    });

    // Offer
    setText('section.offer h2','offer.title');
    setHTML('section.offer .card h2 + p','offer.copy');
    var offerLis = document.querySelectorAll('section.offer .card ul.list li');
    if (offerLis[0]) offerLis[0].textContent = t('offer.li1');
    if (offerLis[1]) offerLis[1].textContent = t('offer.li2');
    if (offerLis[2]) offerLis[2].textContent = t('offer.li3');
    setHTML('section.offer .card .price','offer.price');
    setText('section.offer .card .cta-row a.btn-primary','offer.cta');

    // About
    setText('#about-title','about.title');
    var aboutCard = document.querySelector('#about .card');
    if (aboutCard){
      var ps = aboutCard.querySelectorAll('p');
      if (ps[0]) ps[0].innerHTML = t('about.p1');
      if (ps[1]) ps[1].innerHTML = t('about.p2');
      var lis = aboutCard.querySelectorAll('ul.list li');
      if (lis[0]) lis[0].textContent = t('about.li1');
      if (lis[1]) lis[1].textContent = t('about.li2');
      if (lis[2]) lis[2].textContent = t('about.li3');
    }
    setAttr('.about-gallery','aria-label','gallery.label');
    var galleryImgs = document.querySelectorAll('.about-gallery .gallery img');
    if (galleryImgs[0]) galleryImgs[0].setAttribute('alt', t('gallery.img1'));
    if (galleryImgs[1]) galleryImgs[1].setAttribute('alt', t('gallery.img2'));
    if (galleryImgs[2]) galleryImgs[2].setAttribute('alt', t('gallery.img3'));
    if (galleryImgs[3]) galleryImgs[3].setAttribute('alt', t('gallery.img4'));

    // Testimonials
    setText('#testimonials-title','testimonials.title');
    var quotes = document.querySelectorAll('section#testimonials .grid .quote p');
    if (quotes[0]) quotes[0].textContent = t('testimonials.q1');
    if (quotes[1]) quotes[1].textContent = t('testimonials.q2');
    if (quotes[2]) quotes[2].textContent = t('testimonials.q3');

    // Contact section
    setText('#contact-title','contact.title');
    var contactCard = document.getElementById('contact-title') ? document.getElementById('contact-title').closest('.card') : null;
    var contactFirstP = contactCard ? contactCard.querySelector('p') : null;
    if (contactFirstP){
      contactFirstP.innerHTML = t('contact.phoneLabel') + ' ' +
        '<a href="https://wa.me/972506364387"><span class="ltr">+972 50-636-4387</span></a>';
    }
    setText('label[for="name"]','form.name');
    setText('label[for="phone"]','form.phone');
    setText('label[for="message"]','form.message');
    setText('#contact-form button[type="submit"]','form.submit');
    setText('#contact-form .form-note','form.note');

    // Location card
    setText('#location-title','location.title');
    var locCard = document.getElementById('location-title') ? document.getElementById('location-title').closest('.card') : null;
    var locPs = locCard ? locCard.querySelectorAll('p') : [];
    if (locPs[0]) locPs[0].textContent = t('location.address');
    if (locPs[1]) locPs[1].innerHTML = t('location.hours');
    if (locCard){
      var map = locCard.querySelector('iframe');
      if (map){ map.setAttribute('title', t('map.title')); }
    }

    // Book section
    setText('#book .card h2','book.title');
    setText('#book .card p','book.p');
    var bookCtas = document.querySelectorAll('#book .card .cta-row a');
    if (bookCtas[0]) bookCtas[0].textContent = t('book.openWhatsApp');
    if (bookCtas[1]) bookCtas[1].textContent = t('book.contact');
    var bookNote = document.querySelector('#book .card .muted');
    if (bookNote) bookNote.textContent = t('book.note');

    // Footer
    setText('.site-footer .footer-grid > div:first-child p.muted','footer.tagline');
    var footerMeta = document.querySelector('.footer-meta p');
    if (footerMeta){
      footerMeta.innerHTML = '© <span id="year"></span> Balance Therapy • ' + t('footer.rights');
    }

    // Sticky CTA + socials
    setText('.sticky-cta .btn','sticky.cta');
    setAttr('.insta-fab','aria-label','social.instagram');
    setAttr('.wa-fab-circle','aria-label','social.whatsapp');

    // Update language switch UI
    updateLangButtons();
  }

  function setLang(lang){
    currentLang = normalizeLang(lang);
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    updateYear();
  }

  // Provide a global helper for explicit English switch from inline HTML
  window.switchToEnglish = function(){
    setLang('en');
    // Close mobile menu if open
    var header = document.querySelector('.site-header');
    var tgl = document.querySelector('.nav-toggle');
    if (header && header.classList.contains('open')){
      header.classList.remove('open');
      if (tgl) tgl.setAttribute('aria-expanded','false');
    }
  };

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var lang = this.getAttribute('data-lang');
      setLang(lang);
      // Close mobile menu if open
      var header = document.querySelector('.site-header');
      var tgl = document.querySelector('.nav-toggle');
      if (header && header.classList.contains('open')){
        header.classList.remove('open');
        if (tgl) tgl.setAttribute('aria-expanded','false');
      }
    });
  });

  // Initialize language
  setLang(currentLang);

  // ---------------- end i18n ----------------

  // Mute all videos by default (and ensure inline playback)
  document.querySelectorAll('video').forEach(function(v){
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted','');
    v.setAttribute('playsinline','');
  });

  // Hero intro video: muted autoplay; if blocked, start on first user interaction
  var heroVideo = document.querySelector('.hero-section .video');
  if (heroVideo){
    // Ensure correct attributes/properties for inline muted playback
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.volume = 1.0;
    heroVideo.autoplay = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('playsinline', '');

    var tryPlay = function(){
      try {
        heroVideo.muted = true;
        var p = heroVideo.play();
        return (p && typeof p.then === 'function') ? p : Promise.resolve();
      } catch(e){
        return Promise.reject(e);
      }
    };

    tryPlay().catch(function(){
      function removeKickstart(){
        document.removeEventListener('pointerdown', kickstart);
        document.removeEventListener('click', kickstart);
        document.removeEventListener('touchstart', kickstart);
      }
      function kickstart(){
        var p2 = tryPlay();
        if (p2 && typeof p2.then === 'function'){
          p2.then(removeKickstart).catch(removeKickstart);
        } else {
          removeKickstart();
        }
      }
      document.addEventListener('pointerdown', kickstart);
      document.addEventListener('click', kickstart);
      document.addEventListener('touchstart', kickstart);
    });
  }

  // Smooth scroll for internal anchors (respect reduced motion)
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        if (prefersReduced) {
          target.scrollIntoView();
        } else {
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
        // Close mobile menu after selection
        var header = document.querySelector('.site-header');
        var toggle = document.querySelector('.nav-toggle');
        if (header && toggle && header.classList.contains('open')) {
          header.classList.remove('open');
          toggle.setAttribute('aria-expanded','false');
          toggle.focus();
        }
      }
    });
  });

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  if (toggle){
    toggle.addEventListener('click', function(){
      var header = document.querySelector('.site-header');
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('open', !expanded);
      var menu = document.getElementById('nav-menu');
      if (menu){ menu.focus && menu.focus(); }
    });
  }

  // Contact form basic handling (no backend)
  var form = document.getElementById('contact-form');
  if (form){
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('#name');
      var message = form.querySelector('#message');
      if (!name.value.trim() || !message.value.trim()){
        if (status){
          status.textContent = t('form.error');
        }
        return;
      }
      if (status){
        status.textContent = t('form.sent');
      }
      form.reset();
    });
  }

  // About gallery: Instagram Stories-style slider
  (function(){
    var slider = document.querySelector('.about-gallery .gallery');
    if (!slider) return;

    var pics = Array.from(slider.querySelectorAll('img'));
    if (pics.length < 1) return;

    // If only one image, show it and exit
    if (pics.length === 1){
      pics[0].classList.add('is-active');
      pics[0].setAttribute('aria-hidden','false');
      return;
    }

    slider.classList.add('stories-slider');
    slider.setAttribute('role','group');
    slider.setAttribute('aria-roledescription', (currentLang === 'ar' ? 'سلايدر صور' : (currentLang === 'he' ? 'קרוסלת תמונות' : 'Image carousel')));
    slider.setAttribute('aria-label', t('gallery.label'));
    slider.style.setProperty('--stories-count', String(pics.length));

    // Build progress indicators
    var progress = document.createElement('div');
    progress.className = 'stories-progress';
    for (var i=0;i<pics.length;i++){
      var bar = document.createElement('span');
      bar.className = 'bar';
      var fill = document.createElement('span');
      fill.className = 'fill';
      bar.appendChild(fill);
      progress.appendChild(bar);
    }
    slider.insertBefore(progress, slider.firstChild);

    // Prepare images
    pics.forEach(function(img, idx){
      img.setAttribute('draggable','false');
      img.setAttribute('aria-hidden', idx === 0 ? 'false' : 'true');
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var interval = 5000;
    var paused = false;

    function updateProgress(index, resetOnly){
      var fills = progress.querySelectorAll('.fill');
      for (var j=0;j<fills.length;j++){
        (function(f, jIdx){
          if (jIdx < index){
            f.style.transition = 'none';
            f.style.width = '100%';
          } else if (jIdx === index){
            if (resetOnly){
              f.style.transition = 'none';
              f.style.width = '0%';
            }
            requestAnimationFrame(function(){
              requestAnimationFrame(function(){
                f.style.transition = 'width ' + interval + 'ms linear';
                f.style.width = (paused || reduceMotion) ? '0%' : '100%';
              });
            });
          } else {
            f.style.transition = 'none';
            f.style.width = '0%';
          }
        })(fills[j], j);
      }
    }

    function show(index, resetProgress){
      for (var k=0;k<pics.length;k++){
        var isActive = (k === index);
        pics[k].classList.toggle('is-active', isActive);
        pics[k].setAttribute('aria-hidden', isActive ? 'false' : 'true');
      }
      updateProgress(index, resetProgress);
    }

    function next(){
      if (paused || reduceMotion || document.hidden) return;
      current = (current + 1) % pics.length;
      show(current, true);
    }
    function prev(){
      if (paused || reduceMotion || document.hidden) return;
      current = (current - 1 + pics.length) % pics.length;
      show(current, true);
    }

    // Init
    show(0, true);

    var timer = null;
    function startTimer(){
      if (reduceMotion) return;
      if (timer) clearInterval(timer);
      timer = setInterval(next, interval);
    }
    function stopTimer(){
      if (timer){
        clearInterval(timer);
        timer = null;
      }
    }

    // Pause on hover/touch
    slider.addEventListener('mouseenter', function(){ paused = true; stopTimer(); });
    slider.addEventListener('mouseleave', function(){ paused = false; startTimer(); show(current, true); });
    slider.addEventListener('touchstart', function(){ paused = true; stopTimer(); }, {passive:true});
    slider.addEventListener('touchend', function(){ paused = false; startTimer(); show(current, true); });

    // Click/tap navigation: left side = previous, right side = next
    slider.addEventListener('click', function(e){
      if (reduceMotion) return;
      var rect = slider.getBoundingClientRect();
      var x = e.clientX || 0;
      var isLeft = (x - rect.left) < (rect.width / 2);
      if (isLeft){ prev(); } else { next(); }
      stopTimer();
      startTimer();
    });

    // Visibility handling
    document.addEventListener('visibilitychange', function(){
      if (document.hidden){ stopTimer(); }
      else { startTimer(); show(current, true); }
    });

    startTimer();
  })();

  // WhatsApp FAB deep-link with fallback
  var waFab = document.querySelector('.wa-fab-circle');
  if (waFab) {
    waFab.addEventListener('click', function(e){
      var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (!isMobile) return;
      e.preventDefault();
      var deep = 'whatsapp://send?phone=972506364387';
      var web = this.getAttribute('href') || 'https://wa.me/972506364387';
      var fallbackTimer = setTimeout(function(){
        if (!document.hidden) { window.location.href = web; }
      }, 800);
      var clear = function(){
        clearTimeout(fallbackTimer);
        document.removeEventListener('visibilitychange', clear, true);
        window.removeEventListener('pagehide', clear, true);
        window.removeEventListener('blur', clear, true);
      };
      document.addEventListener('visibilitychange', clear, true);
      window.addEventListener('pagehide', clear, true);
      window.addEventListener('blur', clear, true);
      window.location.href = deep;
    });
  }

  // Emoji burst from the logo on load
  (function(){
    var logo = document.getElementById('logo');
    if (!logo) return;

    // Slight delay to ensure layout is stable
    setTimeout(function(){
      var rect = logo.getBoundingClientRect();
      var originX = rect.left + rect.width / 2;
      var originY = rect.top + rect.height / 2;

      var count = 10;
      for (var i = 0; i < count; i++){
        (function(i){
          setTimeout(function(){
            var el = document.createElement('span');
            el.className = 'emoji-burst';
            el.setAttribute('aria-hidden', 'true');
            el.textContent = '💆‍♀️';

            // Random trajectory
            var angle = Math.random() * Math.PI * 2;
            var distance = 350 + Math.random() * 300;
            var dx = Math.cos(angle) * distance;
            var dy = Math.sin(angle) * distance;

            // Start at logo center (viewport coords for fixed positioning)
            el.style.left = originX + 'px';
            el.style.top = originY + 'px';

            // Personalize animation via CSS vars
            el.style.setProperty('--dx', dx.toFixed(2) + 'px');
            el.style.setProperty('--dy', dy.toFixed(2) + 'px');
            el.style.setProperty('--rot', (Math.random() * 540 - 270).toFixed(1) + 'deg');

            // Variation
            el.style.fontSize = (18 + Math.random() * 12).toFixed(0) + 'px';
            el.style.animationDuration = '3s';
            el.style.animationDelay = (Math.random() * 250).toFixed(0) + 'ms';

            document.body.appendChild(el);

            var cleanup = function(){
              if (el && el.parentNode) el.parentNode.removeChild(el);
            };
            el.addEventListener('animationend', cleanup, { once: true });
            setTimeout(cleanup, 3600); // safety cleanup
          }, i * 60); // subtle stagger
        })(i);
      }
    }, 150);
  })();

  // Ensure year is set (in case the footer was re-rendered during i18n)
  updateYear();
});
