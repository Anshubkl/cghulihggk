import {
    L as t,
    s as l,
    d as i,
    e as s,
    f as o,
    g as r,
    h as u,
    i as n,
    j as g,
    k as m,
    l as p
} from "../common.modules-0a990f43.js";
var v = {
        name: "အမည်",
        tel: "ဖုန်း",
        save: "သိမ်း",
        confirm: "အတည်ပြု",
        cancel: "ပယ်",
        delete: "ဖျက်",
        loading: "ဖွင့်နေသည်...",
        noCoupon: "ကူပွန်မပါ",
        nameEmpty: "နာမည် ဖြည့်ပါ",
        addContact: "အဆက်အသွယ်ထည့်ပါ",
        telInvalid: "ပုံစံမမှန်သော ဖုန်းနံပါတ်",
        vanCalendar: {
            end: "အဆုံး",
            start: "စတင်ပါ။",
            title: "ပြက္ခဒိန်",
            weekdays: ["တနင်္ဂနွေ", "တနင်္လာနေ့", "အင်္ဂါ", "ဗုဒ္ဓဟူးနေ့", "ကြာသပတေးနေ့", "သောကြာ", "စနေနေ့"],
            monthTitle: (a, e) => `${a}/${e}`,
            rangePrompt: a => `${a} ရက်ထက် ပိုမရွေးချယ်ပါ။`
        },
        vanCascader: {
            select: "ရွေးပါ။"
        },
        vanPagination: {
            prev: "အရင်",
            next: "နောက်တစ်ခု"
        },
        vanPullRefresh: {
            pulling: "ပြန်လည်ဆန်းသစ်ရန် ဆွဲပါ...",
            loosing: "ပြန်လည်ဆန်းသစ်ဖို့ လွတ်လွတ်လပ်လပ်..."
        },
        vanSubmitBar: {
            label: "စုစုပေါင်း-"
        },
        vanCoupon: {
            unlimited: "အကန့်အသတ်",
            discount: a => `${a}% လျှော့စျေး`,
            condition: a => `အနည်းဆုံး ${a}`
        },
        vanCouponCell: {
            title: "ကူပွန်",
            count: a => `သင့်တွင် ကူပွန် ${a} ခုရှိသည်။`
        },
        vanCouponList: {
            exchange: "ချိန်းတယ်။",
            close: "ပိတ်လိုက်",
            enable: "ရရှိနိုင်ပါသည်။",
            disabled: "မရနိုင်ပါ။",
            placeholder: "ကူပွန်ကုဒ်"
        },
        vanAddressEdit: {
            area: "ဧရိယာ",
            areaEmpty: "လက်ခံဧရိယာကို ရွေးပါ။",
            addressEmpty: "လိပ်စာ အလွတ်မရနိုင်ပါ။",
            addressDetail: "လိပ်စာ",
            defaultAddress: "မူရင်းလိပ်စာအဖြစ် သတ်မှတ်ပါ။"
        },
        vanAddressList: {
            add: "လိပ်စာအသစ်ထည့်ပါ။"
        }
    },
    c = {
        name: "Nama",
        tel: "Telefon",
        save: "Simpan",
        confirm: "Sahkan",
        cancel: "Batal",
        delete: "Padam",
        loading: "Memuatkan...",
        noCoupon: "Tiada kupon",
        nameEmpty: "Sila isikan nama",
        addContact: "Tambah kenalan",
        telInvalid: "Nombor telefon cacat",
        vanCalendar: {
            end: "tamat",
            start: "Mulakan",
            title: "Kalendar",
            weekdays: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            monthTitle: (a, e) => `${a}/${e}`,
            rangePrompt: a => `Pilih tidak lebih daripada ${a} hari`
        },
        vanCascader: {
            select: "Pilih"
        },
        vanPagination: {
            prev: "Sebelumnya",
            next: "Seterusnya"
        },
        vanPullRefresh: {
            pulling: "Tarik untuk menyegarkan...",
            loosing: "Longgar untuk disegarkan..."
        },
        vanSubmitBar: {
            label: "Jumlah:"
        },
        vanCoupon: {
            unlimited: "Tidak terhad",
            discount: a => `${a}% diskaun`,
            condition: a => `Sekurang-kurangnya ${a}`
        },
        vanCouponCell: {
            title: "kupon",
            count: a => `Anda mempunyai ${a} kupon`
        },
        vanCouponList: {
            exchange: "Pertukaran",
            close: "tutup",
            enable: "Tersedia",
            disabled: "Tidak ada",
            placeholder: "Kod Kupon"
        },
        vanAddressEdit: {
            area: "Kawasan",
            areaEmpty: "Sila pilih kawasan penerimaan",
            addressEmpty: "Alamat tidak boleh kosong",
            addressDetail: "Alamat",
            defaultAddress: "Tetapkan sebagai alamat lalai"
        },
        vanAddressList: {
            add: "Tambah alamat baharu"
        }
    },
    h = {
        name: "Pangalan",
        tel: "Telepono",
        save: "I-save",
        confirm: "Kumpirmahin",
        cancel: "Kanselahin",
        delete: "Burahin",
        loading: "Naglo-load...",
        noCoupon: "Walang mga kupon",
        nameEmpty: "Mangyaring punan ang pangalan",
        addContact: "Magdagdag ng contact",
        telInvalid: "Maling porma ng numero ng telepono",
        vanCalendar: {
            end: "Tapusin",
            start: "Magsimula",
            title: "Kalendaryo",
            weekdays: ["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"],
            monthTitle: (a, e) => `${a}/${e}`,
            rangePrompt: a => `Pumili ng hindi hihigit sa ${a} araw`
        },
        vanCascader: {
            select: "Pumili"
        },
        vanPagination: {
            prev: "Nakaraang",
            next: "Susunod"
        },
        vanPullRefresh: {
            pulling: "Hilahin para i-refresh...",
            loosing: "LMaluwag na i-refresh..."
        },
        vanSubmitBar: {
            label: "Kabuuan:"
        },
        vanCoupon: {
            unlimited: "Walang limitasyon",
            discount: a => `${a}% diskwento`,
            condition: a => `Hindi bababa sa ${a}`
        },
        vanCouponCell: {
            title: "Kupon",
            count: a => `Mayroon kang ${a} kupon`
        },
        vanCouponList: {
            exchange: "Palitan",
            close: "Isara",
            enable: "Available",
            disabled: "Hindi magagamit",
            placeholder: "Code ng kupon"
        },
        vanAddressEdit: {
            area: "Lugar",
            areaEmpty: "Mangyaring pumili ng lugar para sa pagtanggap",
            addressEmpty: "Hindi maaaring walang laman ang address",
            addressDetail: "Address",
            defaultAddress: "Itakda bilang default na address"
        },
        vanAddressList: {
            add: "Magdagdag ng bagong address"
        }
    };
const $ = {
    name: "پورا نام",
    tel: "فون نمبر",
    save: "محفوظ کریں",
    confirm: "تصدیق کریں۔",
    cancel: "منسوخ کریں۔",
    delete: "حذف کریں۔",
    loading: "...لوڈ ہو رہا ہے",
    noCoupon: "کوئی کوپن نہیں۔",
    nameEmpty: "برائے مہربانی اپنا مکمل نام درج کریں",
    addContact: "رابطے شامل کریں۔",
    telInvalid: "فون نمبر کا فارمیٹ غلط ہے۔",
    vanCalendar: {
        end: "ختم",
        start: "شروع کریں",
        title: "کیلنڈر",
        weekdays: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
        monthTitle: (a, e) => `${a}/${e}`,
        rangePrompt: a => ` چند سے زیادہ کا انتخاب نہ کریں۔${a}دن `
    },
    vanCascader: {
        select: "منتخب کریں۔"
    },
    vanPagination: {
        prev: "پچھلا",
        next: "اگلا"
    },
    vanPullRefresh: {
        pulling: "تازہ دم کرنے کے لیے کھینچیں۔",
        loosing: "ریفریش کریں۔"
    },
    vanSubmitBar: {
        label: "تمام"
    },
    vanCoupon: {
        unlimited: "لا محدود",
        discount: a => `${a}رعایت %`,
        condition: a => ` کم از کم${a}`
    },
    vanCouponCell: {
        title: "کوپن",
        count: a => ` کوپن ہے۔${a} آپ کے پاس `
    },
    vanCouponList: {
        exchange: "چھڑانا",
        close: "بند کریں",
        enable: "دستیاب",
        disabled: "دستیاب نہیں ہے",
        placeholder: "کوپن کوڈ"
    },
    vanAddressEdit: {
        area: "رقبہ",
        areaEmpty: "براہ کرم ترسیل کا علاقہ منتخب کریں۔",
        addressEmpty: "پتہ خالی نہیں ہو سکتا",
        addressDetail: "پتہ",
        defaultAddress: "ڈیفالٹ ایڈریس کے طور پر سیٹ کریں۔"
    },
    vanAddressList: {
        add: "نیا پتہ شامل کریں۔"
    }
};
var C = {
        name: "பெயர்",
        tel: "தொலைபேச",
        save: "சேமிக்கவும்",
        confirm: "உறுதி",
        cancel: "ரத்து செய்",
        delete: "நீக்கவும்",
        loading: "ஏற்றுகிறது...",
        noCoupon: "கூப்பன்கள் இல்லை",
        nameEmpty: "தயவுசெய்து பெயரை உள்ளிடவும்",
        addContact: "தொடர்பைச் சேர்க்கவும்",
        telInvalid: "குறைபாடுள்ள தொலைபேசி எண்",
        vanCalendar: {
            end: "முடிக்கவும்",
            start: "தொடங்க",
            title: "காலண்டர்",
            weekdays: ["ஒன்று", "இரண்டு", "மூன்று", "நான்கு", "ஐந்து", "ஆறு", "ஞாயிறு"],
            monthTitle: (a, e) => `${a}/${e}`,
            rangePrompt: a => `நாட்களுக்கு மேல் தேர்வு ${a} செய்யவும்`
        },
        vanCascader: {
            select: "தேர்ந்தெடு"
        },
        vanPagination: {
            prev: "முன்பு",
            next: "அடுத்தது"
        },
        vanPullRefresh: {
            pulling: "புதுப்பிக்க இழுக்கவும்...",
            loosing: "புதுப்பிக்க தளர்வானது..."
        },
        vanSubmitBar: {
            label: "தொகை:"
        },
        vanCoupon: {
            unlimited: "வரம்பற்ற",
            discount: a => `${a}% தள்ளுபடி`,
            condition: a => `குறைந்தபட்சம் ${a}`
        },
        vanCouponCell: {
            title: "கூப்பன்கள்",
            count: a => `உங்களிடம் கூப்பன் ${a} உள்ளது`
        },
        vanCouponList: {
            exchange: "பரிமாற்றம்",
            close: "நெருக்கமான",
            enable: "கிடைக்கும்",
            disabled: "எதுவும் இல்லை",
            placeholder: "கூப்பன் குறியீடு"
        },
        vanAddressEdit: {
            area: "பகுதி",
            areaEmpty: "வரவேற்புப் பகுதியைத் தேர்ந்தெடுக்கவும்",
            addressEmpty: "முகவரி காலியாக இருக்கக்கூடாது",
            addressDetail: "முகவரி",
            defaultAddress: "இயல்புநிலை முகவரியாக அமைக்கவும்"
        },
        vanAddressList: {
            add: "புதிய முகவரியைச் சேர்க்கவும்"
        }
    },
    b = {
        name: "పేరు",
        tel: "ఫోన్",
        save: "ఫోన్ కాల్",
        confirm: "నిర్ధారించండి",
        cancel: "రద్దు చేయండి",
        delete: "తొలగించండి",
        loading: "లోడింగ్...",
        noCoupon: "కూపన్లు లేవు",
        nameEmpty: "దయచేసి పేరు నమోదు చేయండి",
        addContact: "కాంటాక్ట్ జోడించండి",
        telInvalid: "చెల్లని ఫోన్ నంబర్",
        vanCalendar: {
            end: "ముగించు",
            start: "ప్రారంభించు",
            title: "క్యాలెండర్",
            weekdays: ["ఒకటి", "రెండు", "మూడు", "నాలుగు", "ఐదు", "ఆరు", "ఆదివారం"],
            monthTitle: (a, e) => `${a}/${e}`,
            rangePrompt: a => `గరిష్టంగా ${a} రోజులు మాత్రమే ఎంచుకోండి`
        },
        vanCascader: {
            select: "ఎంచుకోండి"
        },
        vanPagination: {
            prev: "మునుపటి",
            next: "తరువాత"
        },
        vanPullRefresh: {
            pulling: "రిఫ్రెష్ చేయడానికి లాగండి...",
            loosing: "రిఫ్రెష్ చేయడానికి వదలండి..."
        },
        vanSubmitBar: {
            label: "మొత్తం:"
        },
        vanCoupon: {
            unlimited: "అమితమైన",
            discount: a => `${a}% డిస్కౌంట్`,
            condition: a => `కనీసం ${a} కావాలి`
        },
        vanCouponCell: {
            title: "కూపన్లు",
            count: a => `మీ వద్ద ${a} కూపన్‌లు ఉన్నాయి`
        },
        vanCouponList: {
            exchange: "మార్చుకోవడం",
            close: "దగ్గరగా",
            enable: "లభ్యం",
            disabled: "ఏదీ లేదు",
            placeholder: "కూపన్ కోడ్"
        },
        vanAddressEdit: {
            area: "ప్రాంతం",
            areaEmpty: "దయచేసి స్వాగత ప్రాంతాన్ని ఎంచుకోండి",
            addressEmpty: "చిరునామా ఖాళీగా ఉండకూడదు",
            addressDetail: "చిరునామా వివరాలు",
            defaultAddress: "డిఫాల్ట్ చిరునామాగా సెట్ చేయండి"
        },
        vanAddressList: {
            add: "కొత్త చిరునామా జోడించండి"
        }
    };
const d = {
    zh: l,
    en: i,
    rus: s,
    vi: o,
    id: r,
    hd: u,
    tha: n,
    th: n,
    md: v,
    bra: g,
    my: c,
    ph: h,
    pk: $,
    bd: m,
    ar: p,
    ta: C,
    te: b
};
localStorage.language && t.use(localStorage.language, d[localStorage.language]);
const k = a => {
    t.use(a, d[a])
};
export {
    k as s
};
//# sourceMappingURL=index-2e083fd9.js.map