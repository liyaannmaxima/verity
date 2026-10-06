import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  UserX, 
  Mic, 
  MessageSquareWarning, 
  CreditCard, 
  KeyRound, 
  UserCheck, 
  Shield, 
  PhoneOff, 
  Flag, 
  ArrowRight, 
  Download, 
  FileText,
  Lock,
  Radio,
  ChevronLeft,
  Copy,
  Clock,
  Zap,
  Activity,
  ArrowUpRight,
  Layers,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { exportIncidentReportToPdf } from '../utils/pdfExport';
import { AnalysisRecord } from '../types';

interface AnalysisResultViewProps {
  record?: AnalysisRecord;
  onBackToDashboard: () => void;
  onBlockCaller: () => void;
  onReportFraud: () => void;
  onVerifyIndependently: () => void;
}

export const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({
  record,
  onBackToDashboard,
  onBlockCaller,
  onReportFraud,
  onVerifyIndependently
}) => {
  const [isTakeActionMenuOpen, setIsTakeActionMenuOpen] = useState<boolean>(false);

  const currentRecord: AnalysisRecord = record || {
    id: 'VRY-1042',
    time: '10:42 AM',
    timestamp: Date.now(),
    type: 'voice',
    subject: 'Unknown Caller — Bank Verification Pretext',
    risk: 'HIGH',
    score: 87,
    action: 'Verify',
    identityDetails: {
      callerOrSender: '+1 (555) 932-8411 (VoIP Gateway)',
      verifiedIdentity: null,
      identityTrustScore: 14,
      spoofingIndicators: ['Unverified VoIP Carrier', 'Attestation Header Missing', 'Untrusted Routing ASN'],
      isKnownContact: false,
      stirShakenStatus: 'FAILED'
    },
    communicationDetails: {
      medium: 'Voice Audio Stream (.m4a payload)',
      syntheticProbability: 91,
      linguisticUrgency: 'Extreme Pressure',
      coercionTactics: ['Authority Coercion', 'Imminent 15-Minute Deadline Pressure'],
      syntheticMarkers: ['Neural Vocoder Pitch Jitter', 'Inconsistent Acoustic Reverberation']
    },
    requestedActionDetails: {
      actionType: 'Execute urgent $48,500 wire transfer & disclose MFA token',
      sensitivityLevel: 'Critical',
      financialRiskUsd: 48500,
      destinationRisk: 'High-Risk Account'
    },
    veritySummary: 'Synthetic AI voice clone impersonating executive with coercive urgent wire demand and OTP harvesting intent.'
  };

  const handleDownloadPdf = () => {
    exportIncidentReportToPdf(currentRecord, 'VRY-1042');
  };

  const signalBreakdown = [
    { label: 'Identity Risk', score: 78, color: 'bg-orange-500', textColor: 'text-orange-400' },
    { label: 'Communication Risk', score: 84, color: 'bg-red-500', textColor: 'text-red-400' },
    { label: 'AI Voice Indicators', score: 91, color: 'bg-purple-500', textColor: 'text-purple-400' },
    { label: 'Requested Action Risk', score: 95, color: 'bg-red-600', textColor: 'text-red-400' }
  ];

  const detectedEvidenceItems = [
    {
      id: 'ev-1',
      title: 'Identity could not be independently verified',
      icon: UserX,
      color: 'text-orange-400',
      bgColor: 'bg-orange-950/40 border-orange-500/30',
      explanation: 'Inbound carrier relay lacks cryptographic STIR/SHAKEN Level A attestation. Number originated from unassigned commercial VOIP block.',
      confidence: '98%'
    },
    {
      id: 'ev-2',
      title: 'Possible AI-generated / cloned voice indicators',
      icon: Mic,
      color: 'text-purple-400',
      bgColor: 'bg-purple-950/40 border-purple-500/30',
      explanation: 'Voice characteristics contain signals associated with synthetic or manipulated speech (neural vocoder pitch jitter and phase discontinuities).',
      confidence: '91%'
    },
    {
      id: 'ev-3',
      title: 'High-pressure language detected',
      icon: MessageSquareWarning,
      color: 'text-red-400',
      bgColor: 'bg-red-950/40 border-red-500/30',
      explanation: 'NLP classifier flagged coercive time-constraint manipulation ("Transfer in 15 minutes before default") and isolation demands.',
      confidence: '94%'
    },
    {
      id: 'ev-4',
      title: 'Caller requested sensitive information',
      icon: CreditCard,
      color: 'text-red-400',
      bgColor: 'bg-red-950/40 border-red-500/30',
      explanation: 'Demanded urgent outbound wire disbursement ($48,500 USD) routed to a newly generated offshore clearing escrow account.',
      confidence: '99%'
    },
    {
      id: 'ev-5',
      title: 'OTP-related request detected',
      icon: KeyRound,
      color: 'text-amber-400',
      bgColor: 'bg-amber-950/40 border-amber-500/30',
      explanation: 'Active solicitation of 6-digit multi-factor authentication (MFA) passcode over an insecure verbal channel.',
      confidence: '96%'
    },
    {
      id: 'ev-6',
      title: 'Impersonation pattern detected',
      icon: UserCheck,
      color: 'text-orange-400',
      bgColor: 'bg-orange-950/40 border-orange-500/30',
      explanation: 'Linguistic tone and synthetic cadence impersonates corporate executive authority to bypass standard organizational procurement thresholds.',
      confidence: '89%'
    }
  ];

  const timelineEvents = [
    { time: '10:42:01', label: 'Interaction received', detail: 'Inbound SIP trunk handshake from carrier relay (+1 555 932-8411)', icon: Clock },
    { time: '10:42:03', label: 'Identity analyzed', detail: 'STIR/SHAKEN Level A check failed; VoIP origin detected', icon: UserX },
    { time: '10:42:05', label: 'Communication analyzed', detail: 'Real-time NLP stream flagged urgency & account threat phrasing', icon: MessageSquareWarning },
    { time: '10:42:07', label: 'AI voice indicators detected', detail: 'Spectral FFT vocoder jitter exceeded 0.01% anomaly threshold', icon: Mic },
    { time: '10:42:08', label: 'Requested action classified', detail: 'Financial transfer & OTP harvesting intent identified', icon: KeyRound },
    { time: '10:42:09', label: 'Risk score calculated', detail: 'Weighted 4-signal multi-factor model scored 87 / 100', icon: Cpu },
    { time: '10:42:10', label: 'HIGH RISK alert generated', detail: 'Automated block rule primed and SecOps advisory dispatched', icon: ShieldAlert }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-fadeIn py-2">
      
      {/* ============================================================ */}
      {/* 1. HEADER                                                    */}
      {/* ← Back to History | Incident VRY-1042 | Status | Action      */}
      {/* ============================================================ */}
      <div className="relative border-b border-slate-800/80 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-1.5">
            <button
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 border-2 border-cyan-400 hover:bg-cyan-950/80 hover:border-cyan-300 px-3.5 py-1.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.45)] mb-2 cursor-pointer active:scale-95"
              title="Back to queue"
            >
              <ChevronLeft className="w-4 h-4 stroke-[3] text-cyan-400" />
              <span className="tracking-wide">Back to Queue / History</span>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3 font-sans">
                <span>Incident {currentRecord.id}</span>
              </h1>
              <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider shadow-sm ${
                currentRecord.risk === 'CRITICAL' || currentRecord.risk === 'HIGH'
                  ? 'bg-red-500 text-slate-950'
                  : 'bg-emerald-400 text-slate-950'
              }`}>
                {currentRecord.risk} RISK
              </span>
            </div>

            {/* Small Metadata */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono pt-0.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-500">Timestamp:</span>
                <strong className="text-slate-200">{currentRecord.time}</strong>
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-500">Analysis Type:</span>
                <strong className="text-cyan-400 font-semibold uppercase">{currentRecord.type}</strong>
              </span>
              <span className="text-slate-700">·</span>
              <span className="text-slate-400">
                Origin: {currentRecord.identityDetails.callerOrSender}
              </span>
            </div>
          </div>

          {/* Action Header Buttons */}
          <div className="flex items-center gap-2.5">
            
            {/* Primary Action Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTakeActionMenuOpen(!isTakeActionMenuOpen)}
                className="px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)] flex items-center gap-1.5 cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>Take Action</span>
              </button>

              {isTakeActionMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-1.5 z-50 animate-fadeIn text-xs">
                  <button
                    onClick={() => {
                      setIsTakeActionMenuOpen(false);
                      onVerifyIndependently();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Verify Independently</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsTakeActionMenuOpen(false);
                      onBlockCaller();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-red-300 hover:bg-red-950/60 flex items-center gap-2 cursor-pointer"
                  >
                    <PhoneOff className="w-4 h-4 text-red-400" />
                    <span>Block Caller</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsTakeActionMenuOpen(false);
                      onReportFraud();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-amber-950/60 flex items-center gap-2 cursor-pointer"
                  >
                    <Flag className="w-4 h-4 text-amber-400" />
                    <span>Report Fraud</span>
                  </button>
                </div>
              )}
            </div>

            {/* Download PDF Dossier */}
            <button
              onClick={handleDownloadPdf}
              className="px-3.5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Download full forensic PDF dossier"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">PDF Dossier</span>
            </button>

            <button
              onClick={() => navigator.clipboard?.writeText('VERITY Incident VRY-1042: High Risk (87/100) - Unverified Caller requesting Wire Transfer & OTP')}
              className="p-2.5 text-xs font-medium text-slate-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Copy incident summary"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. INCIDENT SUMMARY CARD                                     */}
      {/* HIGH RISK | 87 / 100 | "Multiple correlated fraud indicators"*/}
      {/* Followed by 4 summary pills: Identity, Communication, etc.   */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/70 via-slate-900/95 to-slate-900 border-2 border-red-500/50 p-6 sm:p-8 shadow-[0_0_35px_rgba(239,68,68,0.25)] backdrop-blur-md space-y-6">
        
        {/* Ambient red flare */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Left: Dominant High Risk & Warning */}
          <div className="flex items-start gap-5">
            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-600/20 border-2 border-red-500/60 text-red-400 shrink-0 shadow-lg shadow-red-950">
              <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12" />
              <div className="absolute inset-0 rounded-2xl bg-red-500/20 animate-ping opacity-75" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-red-500 text-slate-950 shadow-sm">
                  HIGH RISK
                </span>
                <span className="text-xs font-mono text-red-400 font-semibold tracking-wider uppercase">
                  Multi-Factor Fraud Alert
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                DO NOT CONTINUE THIS INTERACTION
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl leading-relaxed">
                "Multiple correlated fraud indicators detected."
              </p>
            </div>
          </div>

          {/* Right: Risk Score 87 / 100 */}
          <div className="flex flex-col items-start md:items-end justify-center p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-red-500/40 shrink-0 shadow-inner">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              VERITY Risk Score
            </span>
            <div className="flex items-baseline gap-1 my-0.5">
              <span className="text-4xl sm:text-5xl font-black font-mono text-red-400 tabular-nums tracking-tight">
                87
              </span>
              <span className="text-sm font-mono text-slate-500 font-semibold">
                / 100
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Severe Threat Probability</span>
            </div>
          </div>

        </div>

        {/* 4 Summary Pills Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
          
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Identity:</span>
            <span className="text-xs font-mono font-bold text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/70 px-2.5 py-0.5 rounded-md border border-orange-300 dark:border-orange-600/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Suspicious
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Communication:</span>
            <span className="text-xs font-mono font-bold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/70 px-2.5 py-0.5 rounded-md border border-red-300 dark:border-red-600/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              High Risk
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Voice:</span>
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 px-2.5 py-0.5 rounded-md border border-purple-300 dark:border-purple-600/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Possible AI Clone
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Requested Action:</span>
            <span className="text-xs font-mono font-bold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/70 px-2.5 py-0.5 rounded-md border border-red-300 dark:border-red-600/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              Financial / OTP Request
            </span>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. SIGNAL BREAKDOWN (WEIGHTED CORRELATION)                   */}
      {/* Identity 78% · Communication 84% · AI Voice 91% · Action 95% */}
      {/* Overall 87%                                                  */}
      {/* ============================================================ */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md backdrop-blur-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="space-y-0.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span>Multi-Factor Signal Breakdown</span>
            </h2>
            <p className="text-[11px] text-slate-400">
              VERITY combines multiple signals across independent threat vectors into one weighted risk score.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Overall Risk:</span>
            <span className="text-base font-black text-red-400 tabular-nums">87%</span>
          </div>
        </div>

        {/* Progress Visualizer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {signalBreakdown.map((signal, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-medium">{signal.label}</span>
                <span className={`font-bold ${signal.textColor}`}>{signal.score}%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${signal.color}`}
                  style={{ width: `${signal.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. DETECTED EVIDENCE (6 CARDS WITH CONFIDENCE)               */}
      {/* ============================================================ */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>Detected Evidence</span>
          </h2>
          <span className="text-[11px] font-mono text-slate-500">6 Correlated Telemetry Points</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {detectedEvidenceItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 transition-all ${item.bgColor}`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                    <h4 className="text-xs font-bold text-slate-100 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                    {item.explanation}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Confidence:</span>
                  <span className={`font-bold ${item.color}`}>{item.confidence}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. RECOMMENDED RESPONSE PANEL                                */}
      {/* DO NOT CONTINUE THIS INTERACTION                             */}
      {/* Checklist + Primary & Secondary Action Buttons               */}
      {/* ============================================================ */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-red-950/30 border border-slate-800 shadow-xl backdrop-blur-md space-y-5">
        
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Recommended Response Protocol</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            DO NOT CONTINUE THIS INTERACTION
          </h3>
        </div>

        {/* Recommended Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>End the call immediately</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Do not share OTP or credentials</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verify through an official channel</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Contact the organization independently</span>
          </div>

        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Button 1: Verify Independently */}
            <button
              type="button"
              onClick={onVerifyIndependently}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>Verify Independently</span>
            </button>

            {/* Button 2: Block Caller */}
            <button
              type="button"
              onClick={onBlockCaller}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-red-600 hover:bg-red-500 transition-all shadow-md shadow-red-950 flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneOff className="w-4 h-4" />
              <span>Block Caller</span>
            </button>

            {/* Button 3: Report Fraud */}
            <button
              type="button"
              onClick={onReportFraud}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Flag className="w-4 h-4" />
              <span>Report Fraud</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onBackToDashboard}
            className="text-xs text-slate-400 hover:text-slate-200 underline font-medium cursor-pointer"
          >
            Return to Investigation Queue
          </button>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 7. INCIDENT TIMELINE                                         */}
      {/* 10:42:01 — Interaction received                              */}
      {/* 10:42:03 — Identity analyzed                                 */}
      {/* 10:42:05 — Communication analyzed                            */}
      {/* 10:42:07 — AI voice indicators detected                      */}
      {/* 10:42:08 — Requested action classified                       */}
      {/* 10:42:09 — Risk score calculated                             */}
      {/* 10:42:10 — HIGH RISK alert generated                         */}
      {/* ============================================================ */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md backdrop-blur-sm space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Incident Investigation Timeline
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Sub-second Multi-Threaded Forensic Execution</span>
        </div>

        <div className="relative pl-6 space-y-4 border-l border-slate-800 ml-2 pt-1">
          {timelineEvents.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border border-cyan-400/80 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-cyan-400 font-bold">{evt.time}</span>
                    <span className="text-slate-600">—</span>
                    <span className="text-slate-200 font-semibold">{evt.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {evt.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================ */}
      {/* 8. CORE ARCHITECTURAL MESSAGE                                */}
      {/* ============================================================ */}
      <div className="py-4 text-center border-t border-slate-900">
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          VERITY does not depend on a single signal. It correlates <span className="text-cyan-300 font-semibold">Identity</span> + <span className="text-blue-300 font-semibold">Communication</span> + <span className="text-purple-300 font-semibold">AI Voice Indicators</span> + <span className="text-red-300 font-semibold">Requested Action</span> into a single unified zero-trust risk verdict.
        </p>
      </div>

    </div>
  );
};
