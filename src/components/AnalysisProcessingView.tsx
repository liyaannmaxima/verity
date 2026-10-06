import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  Cpu, 
  Activity, 
  UserCheck, 
  Mic, 
  MessageSquareWarning, 
  CreditCard, 
  Zap, 
  Radio, 
  Layers,
  ArrowDown,
  Plus,
  Equal
} from 'lucide-react';
import { ModalityType } from '../types';

interface AnalysisProcessingViewProps {
  modality?: ModalityType;
  targetSubject?: string;
  targetSender?: string;
  targetAction?: string;
  onCompleteAnalysis: () => void;
  onCancel: () => void;
}

export const AnalysisProcessingView: React.FC<AnalysisProcessingViewProps> = ({
  modality = 'voice',
  targetSubject = 'Inbound Voice Call Stream',
  targetSender = '+1 (555) 932-8411 (VoIP Gateway)',
  targetAction = 'Execute emergency $48,500 wire transfer & disclose MFA token',
  onCompleteAnalysis,
  onCancel
}) => {
  const [activePipelineIndex, setActivePipelineIndex] = useState<number>(6); // On Risk Engine step
  const [calculationProgress, setCalculationProgress] = useState<number>(78);

  // Progressive calculation counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCalculationProgress((prev) => {
        if (prev >= 98) {
          return 98;
        }
        return prev + 2;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const pipelineStages = [
    { id: 'input', label: 'INPUT', desc: 'Raw Stream Ingest', status: 'completed' },
    { id: 'identity', label: 'IDENTITY ANALYSIS', desc: 'STIR/SHAKEN & Routing', status: 'completed' },
    { id: 'communication', label: 'COMMUNICATION ANALYSIS', desc: 'Linguistic NLP & Urgency', status: 'completed' },
    { id: 'ai-media', label: 'AI / MEDIA INDICATORS', desc: 'Spectral Vocoder Scan', status: 'completed' },
    { id: 'scam-pattern', label: 'SCAM PATTERN ANALYSIS', desc: 'Coercion & Authority Exploitation', status: 'completed' },
    { id: 'requested-action', label: 'REQUESTED ACTION', desc: 'High-Exposure Intercept', status: 'completed' },
    { id: 'risk-engine', label: 'RISK ENGINE', desc: 'Multi-Vector Weighting', status: 'processing' },
    { id: 'verity-result', label: 'VERITY RESULT', desc: 'Forensic Score & Prevention', status: 'pending' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-fadeIn py-2">
      
      {/* ============================================================ */}
      {/* 1. HEADER SECTION                                            */}
      {/* ============================================================ */}
      <div className="relative border-b border-slate-800/80 pb-6">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-96 h-28 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            
            {/* Live Telemetry Pill */}
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                MULTI-VECTOR CORRELATION IN PROGRESS
              </span>
              <span className="text-slate-500 font-mono">·</span>
              <span className="font-mono text-slate-400 text-xs">Session #{Date.now().toString().slice(-6)}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Analyzing Interaction
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              VERITY is correlating multiple signals to determine whether this interaction can be trusted.
            </p>
          </div>

          {/* Interaction Target Card */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1 shrink-0 backdrop-blur-sm">
            <span className="text-slate-400 text-[11px] block uppercase font-mono">Target Payload</span>
            <div className="font-semibold text-slate-100 truncate max-w-xs">{targetSubject}</div>
            <div className="font-mono text-cyan-400 text-[11px] truncate max-w-xs">{targetSender}</div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. CENTRAL ANALYSIS PIPELINE                                 */}
      {/* Connected 8-stage pipeline visualization                     */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Central Analysis Pipeline
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              8 Processing Nodes
            </span>
          </div>
          <span className="text-xs font-mono text-cyan-400">
            {calculationProgress}% Pipeline Execution
          </span>
        </div>

        {/* Desktop Connected Pipeline (Horizontal / Wrap Grid with directional connector nodes) */}
        <div className="relative p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-md overflow-hidden">
          
          {/* Background grid line */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-stretch">
            {pipelineStages.map((stage, idx) => {
              const isCompleted = stage.status === 'completed';
              const isProcessing = stage.status === 'processing';
              const isPending = stage.status === 'pending';

              return (
                <div key={stage.id} className="relative flex flex-col justify-between">
                  
                  {/* Stage Card */}
                  <div className={`h-full p-3.5 rounded-xl border flex flex-col justify-between space-y-2 transition-all duration-300 ${
                    isCompleted
                      ? 'bg-slate-950/80 border-cyan-500/30 text-slate-200 shadow-sm'
                      : isProcessing
                      ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/50'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-500 opacity-60'
                  }`}>
                    
                    {/* Top status indicator & node number */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        0{idx + 1}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center text-emerald-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      )}
                      {isProcessing && (
                        <span className="flex items-center text-cyan-400 text-xs">
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </span>
                      )}
                      {isPending && (
                        <span className="w-2 h-2 rounded-full bg-slate-700" />
                      )}
                    </div>

                    {/* Node Label */}
                    <div>
                      <h3 className={`text-xs font-bold tracking-tight uppercase leading-snug font-mono ${
                        isProcessing ? 'text-cyan-300' : isCompleted ? 'text-slate-100' : 'text-slate-500'
                      }`}>
                        {stage.label}
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="pt-2 border-t border-slate-800/60">
                      <span className={`text-[9px] font-mono uppercase tracking-wider block ${
                        isCompleted ? 'text-emerald-400 font-bold' : isProcessing ? 'text-cyan-300 font-bold animate-pulse' : 'text-slate-600'
                      }`}>
                        {isCompleted ? 'Evaluated ✓' : isProcessing ? 'Processing ⟳' : 'Queued'}
                      </span>
                    </div>

                  </div>

                  {/* Flow arrow on mobile / connectors */}
                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-500/40 pointer-events-none">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Pipeline progress bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Pipeline Stage 7 of 8 Active</span>
            </div>
            <div className="w-48 sm:w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                style={{ width: `${calculationProgress}%` }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. LIVE STATUS LOG + SIGNAL SUMMARY (2-COLUMN GRID)           */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 6 cols: Live Status checklist */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Live Status Log
            </h2>
            <span className="text-[11px] font-mono text-slate-500">Real-Time Telemetry</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 shadow-md backdrop-blur-sm space-y-3 font-mono text-xs">
            
            {/* Status Item 1 */}
            <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-slate-200 font-medium">Interaction received</span>
                <span className="text-[10px] text-slate-500">0ms</span>
              </div>
            </div>

            {/* Status Item 2 */}
            <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-slate-200 font-medium">Caller information extracted</span>
                <span className="text-[10px] text-slate-500">12ms · STIR/SHAKEN Level C</span>
              </div>
            </div>

            {/* Status Item 3 */}
            <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-slate-200 font-medium">Communication analyzed</span>
                <span className="text-[10px] text-slate-500">48ms · Spectral pitch jitter</span>
              </div>
            </div>

            {/* Status Item 4 */}
            <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-slate-200 font-medium">Fraud indicators identified</span>
                <span className="text-[10px] text-slate-500">18ms · Urgency coercion</span>
              </div>
            </div>

            {/* Status Item 5 */}
            <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-slate-200 font-medium">Requested action detected</span>
                <span className="text-[10px] text-slate-500">4ms · Financial Transfer & OTP</span>
              </div>
            </div>

            {/* Active Processing Step */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/40 shadow-inner">
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin shrink-0 mt-0.5" />
              <div className="flex-1 flex items-baseline justify-between">
                <span className="text-cyan-300 font-bold animate-pulse">
                  Calculating weighted risk score...
                </span>
                <span className="text-[10px] text-cyan-400 font-mono">Aggregating...</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols: Signal Summary Cards */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Signal Summary
            </h2>
            <span className="text-[11px] font-mono text-slate-500">Extracted Telemetry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Card 1: Identity Signal */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 shadow-md backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400 uppercase font-mono">Identity Signal</span>
                <UserCheck className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-lg font-bold text-orange-400 tracking-tight">
                Suspicious
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                VoIP carrier relay origin without STIR/SHAKEN Level A attestation.
              </p>
            </div>

            {/* Card 2: Communication */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 shadow-md backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400 uppercase font-mono">Communication</span>
                <MessageSquareWarning className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-lg font-bold text-red-400 tracking-tight">
                High Pressure
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Extreme deadline framing with authority impersonation claims.
              </p>
            </div>

            {/* Card 3: Requested Action */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 shadow-md backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400 uppercase font-mono">Requested Action</span>
                <CreditCard className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-base font-bold text-red-300 tracking-tight leading-snug">
                OTP / Financial Information
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Demands immediate outbound wire transfer & MFA passcode disclosure.
              </p>
            </div>

            {/* Card 4: AI Voice Indicator */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 shadow-md backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400 uppercase font-mono">AI Voice Indicator</span>
                <Mic className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-purple-400 tracking-tight">
                Possible Clone
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Neural vocoder pitch discontinuities detected in upper formants.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. RISK ENGINE SYNTHESIS VISUALIZATION                       */}
      {/* Shows multiple signals being combined into final score       */}
      {/* ============================================================ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Risk Engine Multi-Factor Matrix
          </h2>
          <span className="text-[11px] font-mono text-cyan-400 animate-pulse">
            Neural Weight Aggregation
          </span>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 shadow-xl backdrop-blur-md space-y-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Factor 1 */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Weight: 25%</span>
              <div className="text-xs font-bold text-slate-200">Identity Signals</div>
              <div className="text-[11px] font-mono text-orange-400">Suspicious Carrier Origin</div>
            </div>

            {/* Factor 2 */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Weight: 25%</span>
              <div className="text-xs font-bold text-slate-200">Communication Signals</div>
              <div className="text-[11px] font-mono text-red-400">Extreme Pressure Framing</div>
            </div>

            {/* Factor 3 */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Weight: 25%</span>
              <div className="text-xs font-bold text-slate-200">AI / Media Indicators</div>
              <div className="text-[11px] font-mono text-purple-400">Synthetic Voice Probability 92%</div>
            </div>

            {/* Factor 4 */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Weight: 25%</span>
              <div className="text-xs font-bold text-slate-200">Requested Action</div>
              <div className="text-[11px] font-mono text-red-400">Critical Financial Risk ($48.5k)</div>
            </div>

          </div>

          {/* Mathematical combination bar */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span>[Identity]</span>
              <span className="text-cyan-400">+</span>
              <span>[Communication]</span>
              <span className="text-cyan-400">+</span>
              <span>[AI Indicators]</span>
              <span className="text-cyan-400">+</span>
              <span>[Requested Action]</span>
              <span className="text-cyan-400">=</span>
              <span className="text-white font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40">
                VERITY Risk Score
              </span>
            </div>

            {/* Action transition button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
              >
                Abort Scan
              </button>

              <button
                type="button"
                onClick={onCompleteAnalysis}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 cursor-pointer animate-pulse"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>View Forensic Verdict</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
