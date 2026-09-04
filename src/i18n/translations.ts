import { Language } from '../types';

export interface Translations {
  // Navigation & Header
  nav_brand_subtitle: string;
  nav_home: string;
  nav_about: string;
  nav_materials: string;
  nav_how_it_works: string;
  nav_prices: string;
  nav_why_us: string;
  nav_impact: string;
  nav_gallery: string;
  nav_contact: string;
  nav_request_pickup: string;
  nav_pickup_short: string;
  nav_whatsapp: string;
  nav_call: string;
  nav_menu_close: string;
  nav_menu_open: string;
  lang_switcher_title: string;

  // Hero Section
  hero_location_badge: string;
  hero_badge: string;
  hero_headline: string;
  hero_subheadline: string;
  hero_cta_pickup: string;
  hero_cta_materials: string;
  hero_pillar_direct: string;
  hero_pillar_fair: string;
  hero_pillar_prompt: string;
  hero_card_tagline: string;
  hero_card_aluminium: string;
  hero_card_copper: string;
  hero_card_metal: string;

  // Quick Benefits
  benefit_1_title: string;
  benefit_1_desc: string;
  benefit_2_title: string;
  benefit_2_desc: string;
  benefit_3_title: string;
  benefit_3_desc: string;
  benefit_4_title: string;
  benefit_4_desc: string;

  // About Us
  about_badge: string;
  about_heading_prefix: string;
  about_community_badge: string;
  about_image_tagline: string;
  about_mission_title: string;
  about_vision_title: string;
  about_commitment: string;

  // What We Collect
  collect_badge: string;
  collect_heading: string;
  collect_subheading: string;
  collect_filter_label: string;
  collect_all_materials: string;
  collect_materials_count: string;
  collect_view_pricing: string;
  collect_common_items: string;
  collect_btn_sell: string;
  collect_btn_price: string;
  collect_btn_details: string;

  // Material Modal
  modal_category_label: string;
  modal_overview_title: string;
  modal_accepted_title: string;
  modal_not_accepted_title: string;
  modal_tips_title: string;
  modal_btn_sell: string;
  modal_btn_price: string;
  modal_btn_close: string;

  // How It Works
  how_badge: string;
  how_heading: string;
  how_subheading: string;
  how_step_label: string;
  how_phase_label: string;
  how_journey_badge: string;
  how_journey_heading: string;
  how_journey_1_title: string;
  how_journey_1_desc: string;
  how_journey_2_title: string;
  how_journey_2_desc: string;
  how_journey_3_title: string;
  how_journey_3_desc: string;
  how_journey_4_title: string;
  how_journey_4_desc: string;
  how_cta_btn: string;

  // Scrap Prices Section
  price_badge: string;
  price_heading: string;
  price_subheading: string;
  price_th_material: string;
  price_th_quality: string;
  price_th_price_per_kg: string;
  price_th_action: string;
  price_btn_check: string;
  price_btn_inquire: string;
  price_footer_prompt: string;
  price_footer_subprompt: string;
  price_footer_btn: string;

  // Why Choose Us
  why_badge: string;
  why_heading: string;
  why_heading_prefix: string;
  why_subheading: string;
  why_verified_badge: string;
  why_verified_principle: string;

  // Environmental Impact
  impact_badge: string;
  impact_heading: string;
  impact_subheading: string;
  impact_card_tag: string;
  impact_banner_heading: string;
  impact_banner_subheading: string;
  impact_banner_btn: string;

  // Gallery
  gallery_badge: string;
  gallery_heading: string;
  gallery_subheading: string;
  gallery_lightbox_btn: string;

  // Call to Action Banner
  cta_badge: string;
  cta_heading: string;
  cta_subheading: string;
  cta_pickup_btn: string;
  cta_call_btn: string;

  // Contact Section
  contact_badge: string;
  contact_heading: string;
  contact_subheading: string;
  contact_call_title: string;
  contact_call_subtitle: string;
  contact_whatsapp_title: string;
  contact_whatsapp_subtitle: string;
  contact_email_title: string;
  contact_email_subtitle: string;
  contact_facebook_title: string;
  contact_facebook_subtitle: string;
  contact_operating_hours_label: string;
  contact_service_overview_title: string;
  contact_service_overview_desc: string;
  contact_area_title: string;
  contact_hours_title: string;
  contact_open_dialog_btn: string;

  // Footer
  footer_brand_subtitle: string;
  footer_tagline: string;
  footer_description: string;
  footer_pickup_btn: string;
  footer_quick_links: string;
  footer_direct_contact: string;
  footer_direct_desc: string;
  footer_whatsapp_chat: string;
  footer_facebook_page: string;
  footer_rights: string;
  footer_back_to_top: string;

  // Floating & Fixed Bottom Action Bar
  floating_btn_text: string;
  bar_sell: string;
  bar_pickup: string;
  bar_chat_whatsapp: string;

  // Smart Request / Sell Modal & Bottom-Sheet
  smart_step_header: string;
  smart_step_of: string;
  smart_step_back: string;
  smart_step_1_sub: string;
  smart_step_2_sub: string;
  smart_step_3_sub: string;
  smart_step_1_title: string;
  smart_step_2_title: string;
  smart_step_3_title: string;
  smart_step_1_prompt: string;
  smart_step_1_continue: string;
  smart_service_selected_label: string;
  smart_service_change: string;
  smart_materials_label: string;
  smart_materials_selected_count: string;
  smart_materials_prompt: string;
  smart_materials_required: string;
  smart_quantity_label: string;
  smart_optional_tag: string;
  smart_quantity_hint: string;
  smart_quantity_placeholder: string;
  smart_photo_label: string;
  smart_photo_ready: string;
  smart_photo_attached_hint: string;
  smart_photo_remove: string;
  smart_photo_add_btn: string;
  smart_photo_privacy_note: string;
  smart_step_2_continue: string;
  smart_summary_edit: string;
  smart_preview_label: string;
  smart_copy_btn: string;
  smart_copied_btn: string;
  smart_send_clarification: string;
  smart_btn_whatsapp: string;
  smart_btn_email: string;
  smart_direct_channels_label: string;
  smart_privacy_badge: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    // Navigation & Header
    nav_brand_subtitle: 'Malaysia Scrap & Recycling',
    nav_home: 'Home',
    nav_about: 'About',
    nav_materials: 'Materials',
    nav_how_it_works: 'How It Works',
    nav_prices: 'Scrap Prices',
    nav_why_us: 'Why Us',
    nav_impact: 'Impact',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_request_pickup: 'Request Pickup',
    nav_pickup_short: 'Pickup',
    nav_whatsapp: 'WhatsApp',
    nav_call: 'Call',
    nav_menu_close: 'Close menu',
    nav_menu_open: 'Open menu',
    lang_switcher_title: 'Switch language / Tukar bahasa',

    // Hero Section
    hero_location_badge: 'Malaysia Wide Collection',
    hero_badge: 'Professional & Eco-Friendly Collection',
    hero_headline: 'Sell Your Scrap Materials Easily & Promptly',
    hero_subheadline: 'We collect aluminium, copper, brass, iron, steel, electric motors, cables, and e-waste directly from your doorstep, factory, warehouse, or site. Transparent rates and hassle-free scheduling.',
    hero_cta_pickup: '🚚 Request Scrap Pickup',
    hero_cta_materials: 'View Accepted Materials',
    hero_pillar_direct: 'Direct Doorstep Pickup',
    hero_pillar_fair: 'Fair Weighing & Pricing',
    hero_pillar_prompt: 'Prompt Scheduling',
    hero_card_tagline: 'Reliable Scrap Recycling & Doorstep Collection',
    hero_card_aluminium: 'Aluminium Scrap',
    hero_card_copper: 'Copper & Brass',
    hero_card_metal: 'Iron & Motors',

    // Quick Benefits
    benefit_1_title: 'Transparent Weighing',
    benefit_1_desc: 'Fair and honest evaluation using certified weighing methods on-site.',
    benefit_2_title: 'Prompt Collection',
    benefit_2_desc: 'Fast scheduling to collect materials from your home, store, or warehouse.',
    benefit_3_title: 'Eco-Friendly Recycling',
    benefit_3_desc: 'All collected scrap is diverted from landfills to certified recycling plants.',
    benefit_4_title: 'Zero Complicated Hassles',
    benefit_4_desc: 'No account setup required. Send a message to get started in seconds.',

    // About Us
    about_badge: 'About Our Service',
    about_heading_prefix: 'Dedicated to Sustainable Scrap Management',
    about_community_badge: 'Serving residential, commercial, and industrial sites responsibly.',
    about_image_tagline: 'Responsible scrap metal collection protecting our natural environment.',
    about_mission_title: 'Our Mission',
    about_vision_title: 'Our Vision',
    about_commitment: 'We believe that proper metal scrap segregation and transparent collection are essential for a sustainable circular economy. Our team ensures that every kilogram of scrap is processed responsibly.',

    // What We Collect
    collect_badge: 'Material Catalog',
    collect_heading: 'What We Collect',
    collect_subheading: 'We accept a wide range of segregated scrap materials. Click any category for accepted items and preparation tips.',
    collect_filter_label: 'Filter by Category:',
    collect_all_materials: 'All Materials',
    collect_materials_count: 'materials',
    collect_view_pricing: 'View Price Guidance',
    collect_common_items: 'Common Accepted Items',
    collect_btn_sell: 'Sell This',
    collect_btn_price: 'Check Price',
    collect_btn_details: 'Full Details & Tips',

    // Material Modal
    modal_category_label: 'Category',
    modal_overview_title: 'Material Overview',
    modal_accepted_title: 'Accepted Items',
    modal_not_accepted_title: 'Not Accepted / Avoid',
    modal_tips_title: 'Preparation & Sorting Tips',
    modal_btn_sell: 'Request Pickup for this Material',
    modal_btn_price: 'Check Current Price',
    modal_btn_close: 'Close',

    // How It Works
    how_badge: 'Simple 4-Step Workflow',
    how_heading: 'How Scrap Collection Works',
    how_subheading: 'From gathering your scrap to on-site collection, our process is fast, transparent, and completely hassle-free.',
    how_step_label: 'Step',
    how_phase_label: 'Phase',
    how_journey_badge: 'Seamless Experience',
    how_journey_heading: 'Ready to clear your scrap space today?',
    how_journey_1_title: '1. Gather & Separate',
    how_journey_1_desc: 'Collect and group your scrap metals, copper, aluminium, motors, or electrical items.',
    how_journey_2_title: '2. Contact Us',
    how_journey_2_desc: 'Message us via WhatsApp or submit a quick request with your location.',
    how_journey_3_title: '3. Schedule Pickup',
    how_journey_3_desc: 'We confirm the time slot and dispatch our vehicle directly to you.',
    how_journey_4_title: '4. Weigh & Collect',
    how_journey_4_desc: 'Materials are weighed on-site and transported to certified recyclers.',
    how_cta_btn: '🚚 Schedule a Pickup Now',

    // Scrap Prices Section
    price_badge: 'Market Guidance',
    price_heading: 'Scrap Price Information',
    price_subheading: 'Indicative rates per kilogram for clean, sorted recyclables. Actual payout is based on current market rates, purity, and volume.',
    price_th_material: 'Material Type',
    price_th_quality: 'Notes & Category',
    price_th_price_per_kg: 'Price (price per Kilogramme)',
    price_th_action: 'Action',
    price_btn_check: 'Inquire',
    price_btn_inquire: 'Inquire',
    price_footer_prompt: 'Have a large volume or unlisted scrap material?',
    price_footer_subprompt: 'Contact 100(RAM ) directly for customized commercial rate quotes and bulk logistics support.',
    price_footer_btn: '💬 Inquire with 100(RAM )',

    // Why Choose Us
    why_badge: 'Our Commitment',
    why_heading: 'Why Choose Scrap Collector',
    why_heading_prefix: 'Why Choose',
    why_subheading: 'We pride ourselves on honesty, punctual service, and building lasting relationships with home owners and businesses.',
    why_verified_badge: 'Trusted Scrap Partner',
    why_verified_principle: 'Prompt & Reliable Collection Guaranteed',

    // Environmental Impact
    impact_badge: 'Environmental Impact',
    impact_heading: 'Recycling Makes a Real Difference',
    impact_subheading: 'Every bundle of aluminium, copper cable, and metal scrap collected prevents waste and conserves vital natural resources.',
    impact_card_tag: 'Eco Fact',
    impact_banner_heading: 'Join Our Community Recycling Effort',
    impact_banner_subheading: 'Turn your household or workplace scrap into positive environmental value.',
    impact_banner_btn: '🚚 Start Recycling Today',

    // Gallery
    gallery_badge: 'Operations & Materials',
    gallery_heading: 'Our Scrap Gallery',
    gallery_subheading: 'Take a look at the types of scrap materials we collect and our daily collection operations.',
    gallery_lightbox_btn: 'Request Collection for This',

    // Call to Action Banner
    cta_badge: '♻️ Clean Up & Earn Value',
    cta_heading: 'Have Scrap You Don\'t Need?',
    cta_subheading: 'Don\'t throw it away. Contact',
    cta_pickup_btn: '🚚 Request Pickup',
    cta_call_btn: '📞 Call Now',

    // Contact Section
    contact_badge: 'Contact Channels',
    contact_heading: 'Request Scrap Collection',
    contact_subheading: 'How would you like to contact us for pickup and scrap price inquiries?',
    contact_call_title: 'Call Us',
    contact_call_subtitle: 'Direct phone contact',
    contact_whatsapp_title: 'WhatsApp',
    contact_whatsapp_subtitle: 'Fast chat support',
    contact_email_title: 'Email Us',
    contact_email_subtitle: 'Official inquiries',
    contact_facebook_title: 'Facebook',
    contact_facebook_subtitle: 'Message our page',
    contact_operating_hours_label: 'Availability',
    contact_service_overview_title: 'About Collection Service',
    contact_service_overview_desc: 'We schedule prompt on-site scrap collection for residences, construction sites, offices, and industrial yards. Contact us with your approximate volume and location.',
    contact_area_title: 'Collection & Dispatch Area',
    contact_hours_title: 'Hours of Operation',
    contact_open_dialog_btn: '🚚 Open Pickup Request Dialog',

    // Footer
    footer_brand_subtitle: 'Recycling & Collection Service',
    footer_tagline: 'Turning unwanted materials into new possibilities.',
    footer_description: 'We collect recyclable scrap aluminium, copper, brass, iron, steel, motors, and e-waste directly from households and businesses.',
    footer_pickup_btn: '🚚 Request Scrap Pickup',
    footer_quick_links: 'Quick Navigation',
    footer_direct_contact: 'Direct Contact',
    footer_direct_desc: 'Get in touch directly to coordinate collection or ask about current prices:',
    footer_whatsapp_chat: 'WhatsApp Chat',
    footer_facebook_page: 'Facebook Page',
    footer_rights: 'All rights reserved.',
    footer_back_to_top: 'Back to Top',

    // Floating & Fixed Bottom Action Bar
    floating_btn_text: '🚚 Request Scrap Pickup',
    bar_sell: 'Sell',
    bar_pickup: 'Pickup',
    bar_chat_whatsapp: 'Chat WhatsApp',

    // Smart Request / Sell Modal & Bottom-Sheet
    smart_step_header: 'Step',
    smart_step_of: 'of',
    smart_step_back: 'Back',
    smart_step_1_sub: 'Choose Service',
    smart_step_2_sub: 'Materials & Quantity',
    smart_step_3_sub: 'Preview & Contact',
    smart_step_1_title: 'How Can We Help You?',
    smart_step_2_title: 'What do you have?',
    smart_step_3_title: 'Review & Send Request',
    smart_step_1_prompt: 'Select the service you are looking for today:',
    smart_step_1_continue: 'Continue to Materials',
    smart_service_selected_label: 'Service Selected',
    smart_service_change: 'Change',
    smart_materials_label: 'Select Scrap Materials',
    smart_materials_selected_count: 'selected',
    smart_materials_prompt: 'Choose one or more',
    smart_materials_required: 'Please select at least one material.',
    smart_quantity_label: 'Estimated Quantity',
    smart_optional_tag: '(optional)',
    smart_quantity_hint: 'e.g. 20 kg or 3 bags',
    smart_quantity_placeholder: 'Enter approximate quantity (e.g. 20)',
    smart_photo_label: 'Have a photo of your scrap?',
    smart_photo_ready: 'Photo Ready',
    smart_photo_attached_hint: 'Send photo in WhatsApp/Email once opened.',
    smart_photo_remove: 'Remove photo',
    smart_photo_add_btn: '📷 Add Photo (Preview & Send via WhatsApp)',
    smart_photo_privacy_note: '💡 Note: Browsers cannot auto-attach photos to WhatsApp URLs for security; you can send your photo directly in the chat once it opens!',
    smart_step_2_continue: 'Review Message & Contact',
    smart_summary_edit: 'Edit details',
    smart_preview_label: 'Auto-Generated Message Preview',
    smart_copy_btn: 'Copy',
    smart_copied_btn: 'Copied!',
    smart_send_clarification: '🔒 You will review and manually press Send in WhatsApp or Email. No automatic sending.',
    smart_btn_whatsapp: '💬 Continue with WhatsApp',
    smart_btn_email: '📧 Continue with Email',
    smart_direct_channels_label: 'Direct channels:',
    smart_privacy_badge: 'Privacy protected: No data stored on servers.',
  },

  bm: {
    // Navigation & Header
    nav_brand_subtitle: 'Barang Lusuh & Kitar Semula Malaysia',
    nav_home: 'Laman Utama',
    nav_about: 'Tentang Kami',
    nav_materials: 'Bahan Diterima',
    nav_how_it_works: 'Cara Berfungsi',
    nav_prices: 'Harga Barang Lusuh',
    nav_why_us: 'Kelebihan Kami',
    nav_impact: 'Kesan Alam',
    nav_gallery: 'Galeri',
    nav_contact: 'Hubungi Kami',
    nav_request_pickup: 'Tempah Pengambilan',
    nav_pickup_short: 'Pengambilan',
    nav_whatsapp: 'WhatsApp',
    nav_call: 'Telefon',
    nav_menu_close: 'Tutup menu',
    nav_menu_open: 'Buka menu',
    lang_switcher_title: 'Tukar bahasa / Switch language',

    // Hero Section
    hero_location_badge: 'Pengumpulan Seluruh Malaysia',
    hero_badge: 'Pengambilan Profesional & Mesra Alam',
    hero_headline: 'Jual Barang Lusuh & Kitar Semula Logam Dengan Pantas',
    hero_subheadline: 'Kami mengambil profil aluminium, tembaga, gangsa, besi keluli, motor elektrik, kabel dan e-waste terus dari pintu rumah, bengkel, atau kilang anda. Timbangan telus dan perkhidmatan pantas.',
    hero_cta_pickup: '🚚 Tempah Pengambilan Barang',
    hero_cta_materials: 'Lihat Bahan Yang Diterima',
    hero_pillar_direct: 'Pengambilan Terus Ke Lokasi',
    hero_pillar_fair: 'Timbangan & Harga Telus',
    hero_pillar_prompt: 'Jadual Temu Janji Pantas',
    hero_card_tagline: 'Perkhidmatan Kitar Semula & Pengambilan Logam Lusuh Dipercayai',
    hero_card_aluminium: 'Barang Aluminium',
    hero_card_copper: 'Tembaga & Gangsa',
    hero_card_metal: 'Besi & Motor Elektrik',

    // Quick Benefits
    benefit_1_title: 'Timbangan Telus & Jujur',
    benefit_1_desc: 'Penilaian adil dan tepat menggunakan kaedah timbangan disahkan di hadapan anda.',
    benefit_2_title: 'Pengambilan Pantas',
    benefit_2_desc: 'Penetapan masa yang cepat untuk mengambil barang di rumah, kedai, atau gudang anda.',
    benefit_3_title: 'Kitar Semula Mesra Alam',
    benefit_3_desc: 'Semua barang lusuh diproses ke kilang kitar semula bertauliah demi memelihara bumi.',
    benefit_4_title: 'Mudah Tanpa Pendaftaran',
    benefit_4_desc: 'Tiada akaun diperlukan. Hantar mesej terus untuk mula menjual dalam beberapa saat.',

    // About Us
    about_badge: 'Mengenai Perkhidmatan Kami',
    about_heading_prefix: 'Komited Terhadap Pengurusan Barang Lusuh Lestari',
    about_community_badge: 'Berkhidmat kepada komuniti kediaman, komersial dan industri dengan integriti.',
    about_image_tagline: 'Pengumpulan logam lusuh bertanggungjawab demi memelihara alam sekitar.',
    about_mission_title: 'Misi Kami',
    about_vision_title: 'Visi Kami',
    about_commitment: 'Kami yakin bahawa pengasingan logam lusuh dan pengambilan yang telus merupakan asas ekonomi kitaran yang mampan. Pasukan kami memastikan setiap kilogram barang lusuh diproses secara bertanggungjawab.',

    // What We Collect
    collect_badge: 'Katalog Bahan',
    collect_heading: 'Bahan Yang Kami Terima',
    collect_subheading: 'Kami menerima pelbagai jenis bahan logam dan barangan elektrik terpakai. Klik mana-mana kategori untuk melihat senarai terperinci dan panduan penyediaan.',
    collect_filter_label: 'Pilih Kategori Bahan:',
    collect_all_materials: 'Semua Bahan',
    collect_materials_count: 'jenis bahan',
    collect_view_pricing: 'Lihat Panduan Harga',
    collect_common_items: 'Contoh Barang Diterima',
    collect_btn_sell: 'Jual Bahan Ini',
    collect_btn_price: 'Semak Harga',
    collect_btn_details: 'Maklumat & Tips Penuh',

    // Material Modal
    modal_category_label: 'Kategori',
    modal_overview_title: 'Gambaran Keseluruhan Bahan',
    modal_accepted_title: 'Barang Yang Diterima',
    modal_not_accepted_title: 'Tidak Diterima / Elakkan',
    modal_tips_title: 'Panduan Penyediaan & Pengasingan',
    modal_btn_sell: 'Tempah Pengambilan Untuk Bahan Ini',
    modal_btn_price: 'Semak Harga Semasa',
    modal_btn_close: 'Tutup',

    // How It Works
    how_badge: 'Aliran 4 Langkah Mudah',
    how_heading: 'Bagaimana Pengambilan Berfungsi',
    how_subheading: 'Daripada mengumpulkan bahan logam sehingga proses timbangan di lokasi, semuanya pantas, telus, dan memudahkan anda.',
    how_step_label: 'Langkah',
    how_phase_label: 'Fasa',
    how_journey_badge: 'Pengalaman Mudah',
    how_journey_heading: 'Bersedia untuk mengosongkan ruang anda hari ini?',
    how_journey_1_title: '1. Kumpul & Asingkan',
    how_journey_1_desc: 'Kumpulkan dan kelompokkan tembaga, aluminium, besi, kabel, atau motor elektrik anda.',
    how_journey_2_title: '2. Hubungi Kami',
    how_journey_2_desc: 'Hantarkan mesej melalui WhatsApp atau borang ringkas beserta lokasi anda.',
    how_journey_3_title: '3. Tetapkan Temu Janji',
    how_journey_3_desc: 'Kami mengesahkan slot masa dan menghantar lori pengangkut terus kepada anda.',
    how_journey_4_title: '4. Timbang & Selesai',
    how_journey_4_desc: 'Bahan ditimbang di hadapan anda dan dibawa ke pusat pemprosesan kitar semula.',
    how_cta_btn: '🚚 Tetapkan Pengambilan Sekarang',

    // Scrap Prices Section
    price_badge: 'Panduan Pasaran',
    price_heading: 'Maklumat Harga Barang Lusuh',
    price_subheading: 'Kadar anggaran setiap kilogram untuk barang kitar semula yang bersih dan telah diasingkan. Bayaran sebenar bergantung kepada keadaan pasaran, kualiti, dan jumlah kuantiti.',
    price_th_material: 'Jenis Bahan',
    price_th_quality: 'Kategori & Nota',
    price_th_price_per_kg: 'Harga (price per Kilogramme)',
    price_th_action: 'Tindakan',
    price_btn_check: 'Tanya',
    price_btn_inquire: 'Tanya',
    price_footer_prompt: 'Mempunyai kuantiti pukal atau bahan yang tidak tersenarai?',
    price_footer_subprompt: 'Hubungi 100(RAM ) secara terus untuk tawaran harga pukal komersial dan urusan logistik.',
    price_footer_btn: '💬 Tanya dengan 100(RAM )',

    // Why Choose Us
    why_badge: 'Komitmen Kami',
    why_heading: 'Mengapa Memilih Scrap Collector',
    why_heading_prefix: 'Mengapa Memilih',
    why_subheading: 'Kami berpegang teguh kepada prinsip kejujuran, ketepatan masa, dan membina hubungan jangka panjang bersama pelanggan kediaman dan perniagaan.',
    why_verified_badge: 'Rakan Kitar Semula Dipercayai',
    why_verified_principle: 'Jaminan Pengambilan Cepat & Boleh Dipercayai',

    // Environmental Impact
    impact_badge: 'Kesan Terhadap Alam Sekitar',
    impact_heading: 'Kitar Semula Membawa Perubahan Nyata',
    impact_subheading: 'Setiap gulung wayar tembaga, profil aluminium, dan besi buruk yang dikumpul mengurangkan sisa industri serta memelihara sumber alam.',
    impact_card_tag: 'Fakta Alam',
    impact_banner_heading: 'Sertai Usaha Kitar Semula Komuniti Kami',
    impact_banner_subheading: 'Tukarkan barang lusuh di rumah atau tempat kerja anda kepada nilai positif untuk alam sekitar.',
    impact_banner_btn: '🚚 Mula Kitar Semula Hari Ini',

    // Gallery
    gallery_badge: 'Operasi & Bahan',
    gallery_heading: 'Galeri Barang Lusuh',
    gallery_subheading: 'Lihat jenis bahan logam dan sisa elektrik yang kami terima serta operasi pengumpulan harian kami.',
    gallery_lightbox_btn: 'Tempah Pengambilan Untuk Ini',

    // Call to Action Banner
    cta_badge: '♻️ Bersihkan Ruang & Jana Nilai',
    cta_heading: 'Ada Barang Lusuh Yang Tidak Digunakan?',
    cta_subheading: 'Jangan buang begitu sahaja. Hubungi',
    cta_pickup_btn: '🚚 Tempah Pengambilan',
    cta_call_btn: '📞 Hubungi Sekarang',

    // Contact Section
    contact_badge: 'Saluran Perhubungan',
    contact_heading: 'Tempah Pengambilan Barang Lusuh',
    contact_subheading: 'Pilih kaedah perhubungan yang anda inginkan untuk urusan pengambilan dan pertanyaan harga:',
    contact_call_title: 'Panggilan Telefon',
    contact_call_subtitle: 'Hubungan telefon terus',
    contact_whatsapp_title: 'WhatsApp',
    contact_whatsapp_subtitle: 'Khidmat sembang pantas',
    contact_email_title: 'E-mel Kami',
    contact_email_subtitle: 'Pertanyaan rasmi',
    contact_facebook_title: 'Facebook',
    contact_facebook_subtitle: 'Mesej laman kami',
    contact_operating_hours_label: 'Waktu Operasi',
    contact_service_overview_title: 'Mengenai Perkhidmatan Pengambilan',
    contact_service_overview_desc: 'Kami menjadualkan pengambilan barang lusuh di lokasi untuk rumah, tapak binaan, pejabat, dan kilang industri. Hubungi kami dengan anggaran kuantiti dan lokasi anda.',
    contact_area_title: 'Kawasan Pengambilan & Liputan',
    contact_hours_title: 'Waktu Operasi',
    contact_open_dialog_btn: '🚚 Buka Borang Permintaan Pengambilan',

    // Footer
    footer_brand_subtitle: 'Perkhidmatan Kitar Semula & Pengambilan',
    footer_tagline: 'Mengubah bahan terbuang menjadi peluang baharu.',
    footer_description: 'Kami mengumpul aluminium, tembaga, besi keluli, motor elektrik, dan sisa elektronik terus dari rumah dan premis perniagaan anda.',
    footer_pickup_btn: '🚚 Tempah Pengambilan Barang',
    footer_quick_links: 'Pautan Pantas',
    footer_direct_contact: 'Hubungan Terus',
    footer_direct_desc: 'Hubungi kami secara terus untuk menyelaraskan pengambilan atau bertanyakan harga semasa:',
    footer_whatsapp_chat: 'Sembang WhatsApp',
    footer_facebook_page: 'Laman Facebook',
    footer_rights: 'Hak cipta terpelihara.',
    footer_back_to_top: 'Kembali Ke Atas',

    // Floating & Fixed Bottom Action Bar
    floating_btn_text: '🚚 Tempah Pengambilan Barang',
    bar_sell: 'Jual',
    bar_pickup: 'Pickup',
    bar_chat_whatsapp: 'Chat WhatsApp',

    // Smart Request / Sell Modal & Bottom-Sheet
    smart_step_header: 'Langkah',
    smart_step_of: 'daripada',
    smart_step_back: 'Kembali',
    smart_step_1_sub: 'Pilih Perkhidmatan',
    smart_step_2_sub: 'Bahan & Kuantiti',
    smart_step_3_sub: 'Semak & Hubungi',
    smart_step_1_title: 'Bagaimana Kami Boleh Membantu Anda?',
    smart_step_2_title: 'Apakah bahan yang anda miliki?',
    smart_step_3_title: 'Semak & Hantar Permintaan',
    smart_step_1_prompt: 'Sila pilih perkhidmatan yang anda perlukan hari ini:',
    smart_step_1_continue: 'Teruskan ke Pemilihan Bahan',
    smart_service_selected_label: 'Perkhidmatan Dipilih',
    smart_service_change: 'Tukar',
    smart_materials_label: 'Pilih Bahan Barang Lusuh',
    smart_materials_selected_count: 'dipilih',
    smart_materials_prompt: 'Pilih satu atau lebih',
    smart_materials_required: 'Sila pilih sekurang-kurangnya satu jenis bahan.',
    smart_quantity_label: 'Anggaran Kuantiti',
    smart_optional_tag: '(pilihan)',
    smart_quantity_hint: 'cth. 20 kg atau 3 guni',
    smart_quantity_placeholder: 'Masukkan anggaran kuantiti (cth. 20)',
    smart_photo_label: 'Mempunyai gambar barang lusuh anda?',
    smart_photo_ready: 'Gambar Sedia',
    smart_photo_attached_hint: 'Hantarkan gambar melalui WhatsApp/E-mel sebaik sahaja dibuka.',
    smart_photo_remove: 'Buang gambar',
    smart_photo_add_btn: '📷 Tambah Gambar (Pratonton & Hantar via WhatsApp)',
    smart_photo_privacy_note: '💡 Nota: Atas faktor keselamatan pelayar web, gambar boleh dilampirkan terus dalam sembang WhatsApp selepas aplikasi dibuka!',
    smart_step_2_continue: 'Semak Mesej & Hubungi',
    smart_summary_edit: 'Kemaskini',
    smart_preview_label: 'Pratonton Mesej Automatik',
    smart_copy_btn: 'Salin',
    smart_copied_btn: 'Disalin!',
    smart_send_clarification: '🔒 Anda boleh menyemak dan menekan butang Hantar secara manual dalam WhatsApp atau E-mel. Tiada penghantaran automatik tanpa kebenaran anda.',
    smart_btn_whatsapp: '💬 Teruskan dengan WhatsApp',
    smart_btn_email: '📧 Teruskan dengan E-mel',
    smart_direct_channels_label: 'Saluran terus:',
    smart_privacy_badge: 'Privasi terjamin: Tiada data disimpan di pelayan.',
  },
};
