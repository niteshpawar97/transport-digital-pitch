// TransportPitch.jsx
import { motion } from "framer-motion";
import {
  Truck,
  FileText,
  Clock4,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";

const sections = [
{
  title: "Transport Business को बनाएं डिजिटल और स्मार्ट",
  subtitle: "Rahul Verma | Om Sai Transport, Nagpur",
  cta: "प्रस्तुति – Niket Group की ओर से",
description: `
👉 यह software पूरी तरह से *आपके लिए custom-developed* किया जाएगा — आपकी जरूरतों और business flow को ध्यान में रखकर **शुरुआत से (from scratch)**।

💻 Technology Stack we will use:
- ✅ Frontend: React.js + Tailwind CSS (Fast & Desktop-friendly)
- ✅ Backend: Node.js + Express + TypeScript (Secure & Reliable)
- ✅ Database: MySQL / MariaDB (Fast, Stable & Easy Reporting)

🧩 पूरा सिस्टम future upgrades और automation के लिए तैयार रहेगा।

✅ Desktop पर smooth चलेगा  
✅ Fully Customizable | Secure | Easy to use
`,

  bg: "bg-gradient-to-br from-blue-50 to-blue-100",
}
,
 {
  title: "फिलहाल की प्रमुख समस्याएं",
  list: [
    "📂 सारा काम WhatsApp, कॉल और कागज़ों पर आधारित – कोई centralized system नहीं",
    "📉 वाहन दस्तावेज़ (RC, Fitness, Insurance) समय पर नहीं मिलते, जल्दी expire हो जाते हैं",
    "❌ माल की Delivery कहाँ तक पहुँचा – पता नहीं चलता, Customer को अपडेट नहीं मिल पाता",
    "🧾 Manual इनवॉइसिंग – Excel या Word, जिससे Tax और GST में गलती की संभावना रहती है",
    "🔕 किसी भी Document expiry का कोई Notification या Reminder सिस्टम नहीं है",
  ],
}
,
{
  title: "हमारा समाधान",
  features: [
    {
      icon: <Truck />,
      title: "वाहन डॉक्युमेंट मैनेजमेंट",
      desc: "RC, Fitness, Permit, Insurance सभी दस्तावेज एक जगह डिजिटल फॉर्म में सेव रहेंगे। हर गाड़ी का अलग रिकॉर्ड रहेगा।",
    },
    {
      icon: <FileText />,
      title: "ई-इनवॉइस और रिपोर्ट",
      desc: "सिस्टम से ही इनवॉइस PDF जनरेट होगा – कंप्यूटर पर शेयर करें या प्रिंट करें।",
    },
    {
      icon: <Clock4 />,
      title: "Notification & Email Alerts",
      desc: "Fitness, Insurance जैसे दस्तावेजों के Expiry से पहले Email और Panel Notification भेजे जाएंगे।",
    },
    {
      icon: <BadgeCheck />,
      title: "Delivery Status ट्रैकिंग",
      desc: "हर माल की डिलीवरी कब और कहाँ पहुँची, उसका स्टेटस Admin Panel पर Live देखा जा सकता है।",
    },
    {
      icon: <FileText />,
      title: "वाहन खर्चों का हिसाब (Vehicle Expenses)",
      desc: "Fuel, Service, EMI, Insurance Premium, Repair – हर खर्च का record vehicle-wise maintain होगा और आप महीने के हिसाब से report निकाल सकेंगे।",
    },
  ],
  bg: "bg-blue-50",
}
,
{
  title: "Timeline & Payment Plan",
  list: [
    "📅 5-7 कार्य दिवस: Requirement Discussion + UI Demo",
    "🛠️ 20-25 कार्य दिवस: Development Phase - 1 (Core Modules)",
    "🧪 10 कार्य दिवस: Testing, Feedback & Modifications",
    "🧰 10-12 कार्य दिवस: Final Integration + Admin Panel",
    "🎓 5 कार्य दिवस: Training + Final Go Live Setup",
  ],
  note: "💳 Payment Plan: 30% Start पर | 30% Mid-Development पर | 30% Final Testing के बाद | 10% Live Deployment के बाद",
}
,
  {
    title: "Client Benefits",
    list: [
      "✅ 100+ गाड़ियों के डॉक्युमेंट मैनेजमेंट",
      "✅ मोबाइल से डिलीवरी एंट्री",
      "✅ Admin + Driver लॉगिन",
    "✅ Panel Notification और Email अलर्ट सिस्टम",
      "✅ PDF Reports & Invoice",
    ],
    bg: "bg-blue-50",
  },
  {
    title: "Pricing & Value",
      list: [
    "💰 कस्टम सॉल्यूशन – ₹_______",
    "📱 Lifetime Access + Yearly Support Charges लागू",
    "💾 Offline सिस्टम: सर्वर क्लाइंट की मशीन पर रहेगा",
    "☁️ Online सिस्टम: Hosting का खर्च क्लाइंट ",
    "🎓 स्टाफ को ट्रेनिंग दी जाएगी",
  ],
  },
  {
    title: "धन्यवाद!",
    list: [
      "📞 Nitesh Kadve – 8821861409",
      "📧 nitesh@niketgroup.in",
      "🌐 www.niketgroup.in",
      "🤝 With Laxman Pawar",
    ],
    bg: "bg-blue-700 text-white",
  },
];

export default function TransportPitch() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {sections.map((sec, i) => (
        <section
          key={i}
          className={`snap-start min-h-screen flex flex-col justify-center items-center px-6 py-12 ${sec.bg || "bg-white"}`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            {sec.title}
          </motion.h2>
          {sec.subtitle && <p className="text-xl text-center text-gray-600 mb-4">{sec.subtitle}</p>}
          {sec.cta && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-700 text-white rounded-full text-lg shadow-md"
            >
              {sec.cta}
            </motion.button>
          )}
          {sec.list && (
            // <ul className="text-lg text-gray-700 max-w-xl space-y-3 mt-6 text-center">
                <ul className="text-2xl leading-relaxed text-gray-800 max-w-3xl space-y-4 mt-8 text-center">

              {sec.list.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          )}
          {sec.features && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
              {sec.features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4"
                >
                  <div className="text-blue-700">{f.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{f.title}</h3>
                    <p className="text-gray-600">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {sec.note && <p className="mt-4 text-gray-600">{sec.note}</p>}

          {sec.description && (
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="max-w-2xl text-center mt-4 text-lg text-gray-700 whitespace-pre-line"
  >
    {sec.description}
  </motion.p>
)}

        </section>
      ))}
    </div>
  );
}
