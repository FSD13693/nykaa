import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, User, Package, Clock, CheckCircle2, 
  Brain, ShieldCheck, Ticket, BarChart3, RefreshCcw, 
  AlertTriangle, ArrowRight, ChevronRight, Info,
  Search, MapPin, Smile, Zap, FileText, Settings, XCircle
} from 'lucide-react';

// --- THEME COLORS ---
const COLORS = {
  primary: "#FF4081", // Nykaa Pink
  bg: "#FAFAFA",
  card: "#FFFFFF",
  text: "#1A1A1A",
  muted: "#757575"
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const steps = [
    "Sneha Reaches Out",
    "AI Understands Sneha",
    "Auto-Resolution Check",
    "Quality Control",
    "CRM Ticket Creation",
    "The Learning Loop",
    "Human Handoff Path"
  ];

  // Progress percentage
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans text-slate-900 bg-[#FAFAFA]">
      {/* LEFT SIDEBAR NAVIGATION */}
      <aside className="w-80 bg-white border-r border-slate-100 p-8 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-2 mb-12">
             <div className="w-10 h-10 rounded-xl bg-[#FF4081] flex items-center justify-center shadow-lg shadow-pink-200">
                <span className="text-white font-bold text-xl italic">N</span>
             </div>
             <div>
                <h1 className="font-bold text-slate-800 tracking-tight">AI Support</h1>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">How It Works</p>
             </div>
          </div>

          <nav className="space-y-1">
            {steps.map((name, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all text-left group ${
                  step === idx 
                  ? "bg-pink-50 text-[#FF4081] shadow-sm" 
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                  step === idx ? "border-[#FF4081] bg-white" : "border-slate-100 group-hover:border-slate-300"
                }`}>
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold">{name}</span>
                {step > idx && <CheckCircle2 size={16} className="ml-auto text-green-500" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
           <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                 <User size={16} />
              </div>
              <div className="text-xs">
                 <p className="font-bold text-slate-700">Sneha Sharma</p>
                 <p className="text-slate-500">Account: SNK-4421</p>
              </div>
           </div>
           <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
              <span>Sentiment</span>
              <span className="text-orange-500">Frustrated</span>
           </div>
           <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
              <div className="w-1/3 h-full bg-orange-400" />
           </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto relative flex flex-col">
        {/* TOP PROGRESS BAR */}
        <div className="sticky top-0 z-50 w-full h-1.5 bg-slate-100">
          <motion.div 
            className="h-full bg-[#FF4081]" 
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>

        <div className="max-w-5xl mx-auto w-full p-8 lg:p-16 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {renderStep(step)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="p-8 border-t border-slate-100 bg-white/80 backdrop-blur-md sticky bottom-0 flex justify-between items-center">
            <button 
              onClick={() => setStep(s => Math.max(0, s - 1))}
              className={`text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors ${step === 0 ? 'invisible' : ''}`}
            >
              ← Back
            </button>

            {step < steps.length - 1 ? (
              <button 
                onClick={() => setStep(s => s + 1)}
                className="bg-[#FF4081] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-pink-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Next Step: {steps[step + 1]} <ArrowRight size={20} />
              </button>
            ) : (
              <div className="text-center font-bold text-[#FF4081] px-8 py-4 bg-pink-50 rounded-2xl">
                Tutorial Complete 🌸
              </div>
            )}
        </div>
      </main>
    </div>
  );
}

// --- STEP RENDERING LOGIC ---

function renderStep(step: number) {
  switch (step) {
    case 0: return <Step1SnehaReachesOut />;
    case 1: return <Step2AIUnderstands />;
    case 2: return <Step3AutoResolution />;
    case 3: return <Step4QualityCheck />;
    case 4: return <Step5CRMIntegration />;
    case 5: return <Step6LearningLoop />;
    case 6: return <Step7Escalation />;
    default: return null;
  }
}

// --- INDIVIDUAL STEP COMPONENTS ---

const Step1SnehaReachesOut = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="space-y-6">
      <div className="flex items-center gap-2">
         <div className="px-3 py-1 bg-pink-100 text-[#FF4081] rounded-full text-[10px] font-bold uppercase tracking-wider">Interface</div>
         <h2 className="text-2xl font-bold">The Conversation Starts</h2>
      </div>
      
      {/* Mock Phone UI */}
      <div className="max-w-[320px] bg-white border-[8px] border-slate-900 rounded-[3rem] h-[550px] shadow-2xl overflow-hidden relative mx-auto lg:mx-0">
        <div className="bg-[#FF4081] p-6 text-white text-center font-bold text-sm">Nykaa Help Center</div>
        <div className="p-4 space-y-4">
           <div className="bg-slate-100 p-3 rounded-2xl rounded-bl-none text-xs text-slate-600 w-4/5">
              Hello Sneha! How can I help you with your recent order of Lakme 9to5 Foundation?
           </div>
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="bg-[#FF4081] p-3 rounded-2xl rounded-br-none text-xs text-white w-4/5 ml-auto shadow-md"
           >
             Where is my order? It's been showing out for delivery since yesterday
           </motion.div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Background Activity</h3>
      <div className="space-y-3">
        {[
          "Session started via Mobile App",
          "Customer identified: SNK-4421",
          "Order NYK-88721 fetched from OMS",
          "Order Status: OUT_FOR_DELIVERY (18h Delay)",
          "Courier API Check: Scan at Andheri Hub",
          "Contextual Memory loaded: 1 past ticket"
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm text-sm font-medium"
          >
            <CheckCircle2 size={18} className="text-green-500 shrink-0" /> {text}
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-slate-900 rounded-3xl text-pink-400 font-mono text-xs leading-relaxed border-l-4 border-[#FF4081]">
         <p className="text-slate-500 mb-2 uppercase font-bold tracking-tighter">AI Knowledge Context</p>
         <p>CUSTOMER: Sneha Sharma</p>
         <p>PRODUCT: Lakme Foundation</p>
         <p>LATEST_UPDATE: Delay Detected (18h)</p>
         <p>SENTIMENT: Frustrated</p>
      </div>
    </div>
  </div>
);

const Step2AIUnderstands = () => (
  <div className="space-y-12">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">AI Brain: Deconstructing the Query</h2>
      <p className="text-slate-500 leading-relaxed">The AI doesn't just read words; it extracts **Intent** and **Data** to avoid asking the customer repetitive questions.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <AnalysisCard 
         icon={<Zap className="text-amber-500" />} 
         title="Intent Detected" 
         value="Delivery Delay" 
         conf="94% Confidence" 
         sub="Matches SOP: #LOG-01" 
       />
       <AnalysisCard 
         icon={<Search className="text-blue-500" />} 
         title="Entities Found" 
         value="Order #NYK-88721" 
         conf="Automatic Pull" 
         sub="No manual input needed" 
       />
       <AnalysisCard 
         icon={<Smile className="text-red-500" />} 
         title="Sentiment" 
         value="Frustrated" 
         conf="Score: 0.3/1.0" 
         sub="Trigger: High Empathy Mode" 
       />
    </div>

    <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl flex items-start gap-6">
       <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-100">
          <Info size={24} />
       </div>
       <div>
          <h4 className="font-bold text-blue-900 mb-1">Business Impact: Customer Friction</h4>
          <p className="text-blue-700 text-sm leading-relaxed">By auto-extracting order info, we've saved Sneha from finding and typing a 10-digit Order ID while she's already annoyed. This reduces "Time to Understanding" by 40%.</p>
       </div>
    </div>
  </div>
);

const Step3AutoResolution = () => (
  <div className="max-w-4xl mx-auto space-y-10">
    <div className="text-center space-y-4">
       <h2 className="text-3xl font-bold">The Logic Engine</h2>
       <p className="text-slate-500 italic font-medium">"Can we solve this without a human?"</p>
    </div>

    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 overflow-hidden">
       <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">Resolution Checklist</span>
          <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">Eligibility: 100%</span>
       </div>
       <div className="p-8 space-y-6">
          <CheckRow label="Is delay beyond 12-hour SLA?" val="YES (18h)" pass={true} />
          <CheckRow label="Is item available in Mumbai Hub?" val="YES (847 units)" pass={true} />
          <CheckRow label="Is order value within auto-limit?" val="YES (₹899 < ₹1500)" pass={true} />
          <CheckRow label="Is account history clean?" val="YES (0 Fraud Flags)" pass={true} />
       </div>
       <div className="p-8 bg-green-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <CheckCircle2 />
             </div>
             <p className="font-bold">Auto-Resolution Approved: Rerouting Order</p>
          </div>
          <p className="text-xs font-medium opacity-80 italic">Updating OMS System...</p>
       </div>
    </div>
  </div>
);

const Step4QualityCheck = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">The AI's Response</h2>
        <p className="text-slate-500 text-sm">Every draft is scanned by a safety layer before the user sees it.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative">
        <div className="absolute -top-3 -right-3 px-4 py-1 bg-[#FF4081] text-white text-[10px] font-bold rounded-full">DRAFT</div>
        <p className="text-slate-700 leading-relaxed italic">
          "I'm really sorry for the delay, Sneha! I've checked and your Lakme Foundation is in Mumbai. I've marked it as 'High Priority' and it will arrive by 7PM today. If not, we'll automatically reship it. 🌸"
        </p>
      </div>

      <div className="space-y-4">
         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verification Layer</h4>
         {[
           { l: "Factual: Is 7PM delivery confirmed?", p: true },
           { l: "Tone: Is it empathetic?", p: true },
           { l: "Privacy: No phone numbers/emails?", p: true },
           { l: "Nykaa Brand: Include emoji/pink theme?", p: true }
         ].map((v, i) => (
           <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs font-medium">
              <span>{v.l}</span>
              <CheckCircle2 size={16} className="text-green-500" />
           </div>
         ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm text-center">
       <div className="w-40 h-40 relative mb-8">
          <svg className="w-full h-full transform -rotate-90">
             <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
             <motion.circle 
               cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" 
               strokeDasharray={440}
               initial={{ strokeDashoffset: 440 }}
               animate={{ strokeDashoffset: 440 - (440 * 0.87) }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="text-[#FF4081]" 
             />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-4xl font-black">87</span>
             <span className="text-[10px] font-bold text-slate-400 uppercase">Score</span>
          </div>
       </div>
       <h3 className="text-xl font-bold mb-2">Quality Approved</h3>
       <p className="text-sm text-slate-500">This response is safe, accurate, and brand-aligned.</p>
    </div>
  </div>
);

const Step5CRMIntegration = () => (
  <div className="space-y-12">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">The Ticket is Born</h2>
        <p className="text-slate-500">Even though no human was involved, a structured record is created for your data teams to analyze patterns.</p>
        
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
           <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-pink-400 font-bold text-[10px] uppercase tracking-widest mb-1">CRM Ticket</p>
                <h4 className="text-xl font-bold">#TKT-99021</h4>
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-[10px] font-bold">RESOLVED</div>
           </div>
           
           <div className="grid grid-cols-2 gap-y-6 text-sm">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Category</p>
                <p>Logistics / Delay</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Location</p>
                <p>Mumbai - Andheri</p>
              </div>
              <div className="col-span-2 p-4 bg-white/5 rounded-2xl border border-white/10">
                 <p className="text-slate-500 text-[10px] font-bold uppercase mb-2">AI Summary</p>
                 <p className="text-xs leading-relaxed text-slate-300 italic">"Customer order NYK-88721 delayed 18h. System auto-triggered priority delivery promise for 7PM today. CSAT 4/5."</p>
              </div>
           </div>
        </div>
      </div>

      <div className="w-full md:w-80 space-y-4">
         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Macro Trends</h4>
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <p className="text-xs font-bold text-slate-600">Mumbai Delivery Delays (Weekly)</p>
            <div className="flex items-end gap-2 h-24">
               <div className="flex-1 bg-slate-100 rounded-t-lg h-1/2" />
               <div className="flex-1 bg-slate-100 rounded-t-lg h-2/3" />
               <div className="flex-1 bg-[#FF4081] rounded-t-lg h-[90%]" />
               <div className="flex-1 bg-slate-100 rounded-t-lg h-1/3" />
            </div>
            <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-tighter italic">"Andheri hub issues detected"</p>
         </div>
      </div>
    </div>
  </div>
);

const Step6LearningLoop = () => (
  <div className="space-y-12">
    <div className="text-center max-w-2xl mx-auto space-y-4">
       <h2 className="text-3xl font-bold">The Continuous Learning Loop</h2>
       <p className="text-slate-500">Every interaction teaches the AI how to improve the next one.</p>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
       <LearningBadge icon={<MessageSquare />} label="Conversation Data" color="bg-blue-500" />
       <ChevronRight className="text-slate-200 self-center" />
       <LearningBadge icon={<Search />} label="Pattern Recognition" color="bg-purple-500" />
       <ChevronRight className="text-slate-200 self-center" />
       <LearningBadge icon={<Brain />} label="Process Update" color="bg-pink-500" />
       <ChevronRight className="text-slate-200 self-center" />
       <LearningBadge icon={<RefreshCcw />} label="System Deployed" color="bg-green-500" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
       <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] opacity-50 relative">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Old Response Model</p>
          <p className="text-sm font-medium italic">"I can see your order has been delayed. I've updated the delivery status."</p>
       </div>
       <div className="p-8 bg-white border-2 border-[#FF4081] shadow-2xl shadow-pink-100 rounded-[2.5rem] relative">
          <div className="absolute -top-3 right-8 px-4 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full">OPTIMIZED</div>
          <p className="text-[10px] font-black text-[#FF4081] uppercase mb-4 tracking-widest">New Learning Applied</p>
          <p className="text-sm font-bold text-slate-800 italic leading-relaxed">"I'm really sorry about this delay, Sneha. Let me fix this for you right now..."</p>
          <p className="mt-4 text-[10px] font-bold text-green-600">+12% CSAT increase with empathy opener</p>
       </div>
    </div>
  </div>
);

const Step7Escalation = () => (
  <div className="space-y-12">
    <div className="max-w-3xl space-y-4">
       <h2 className="text-3xl font-bold">When the AI says "I Need Help"</h2>
       <p className="text-slate-500">Not everything can be automated. We use a **Trust Score** to trigger a seamless handoff to a human agent.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div className="bg-red-50 p-8 rounded-[3rem] border border-red-100 space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-red-500 text-white rounded-2xl flex items-center justify-center">
                <AlertTriangle size={20} />
             </div>
             <p className="font-bold text-red-900 uppercase text-xs tracking-widest">Human Escalation Triggered</p>
          </div>
          
          <div className="space-y-4">
             <div className="p-4 bg-white rounded-2xl shadow-sm text-xs italic">
                "I want a return AND I was charged twice for this!"
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                   <span>AI Trust Score</span>
                   <span className="text-red-500">0.41 (Too Complex)</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                   <motion.div initial={{ width: "100%" }} animate={{ width: "41%" }} className="h-full bg-red-500" />
                </div>
             </div>
          </div>
       </div>

       <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                <FileText size={20} />
             </div>
             <p className="font-bold text-slate-800 uppercase text-xs tracking-widest">Agent Handoff Brief</p>
          </div>
          <div className="space-y-3">
             {[
               "Context: Delivery delay already resolved",
               "Issue: Finance/Duplicate Charge (Manual Only)",
               "Mood: High Frustration",
               "Suggested Action: Initiate manual refund"
             ].map((t, i) => (
               <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <ChevronRight size={14} className="text-[#FF4081]" /> {t}
               </div>
             ))}
          </div>
          <p className="text-[10px] text-slate-400 font-bold italic leading-relaxed">"Sneha never repeats herself. The agent knows everything the AI already did."</p>
       </div>
    </div>
  </div>
);

// --- HELPER UI ATOMS ---

const AnalysisCard = ({ icon, title, value, conf, sub }: any) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 space-y-4">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
       {icon}
    </div>
    <div>
       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
       <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
    <div className="pt-4 border-t border-slate-50">
       <div className="flex items-center justify-between text-[10px] font-bold mb-1">
          <span className="text-green-500">{conf}</span>
       </div>
       <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{sub}</p>
    </div>
  </motion.div>
);

const CheckRow = ({ label, val, pass }: any) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-4">
       <div className={`w-6 h-6 rounded-full flex items-center justify-center ${pass ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {pass ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
       </div>
       <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-800">{val}</span>
  </div>
);

const LearningBadge = ({ icon, label, color }: any) => (
  <div className="flex flex-col items-center gap-3">
    <div className={`w-16 h-16 ${color} text-white rounded-3xl flex items-center justify-center shadow-lg shadow-pink-100`}>
       {React.cloneElement(icon, { size: 28 })}
    </div>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{label}</span>
  </div>
);
