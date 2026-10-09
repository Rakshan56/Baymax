import { ArrowRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Presentational auth form styled with Tailwind utilities. */
export function AuthForm({ signup, email, password, error, connected, onEmailChange, onPasswordChange, onSubmit }: { signup: boolean; email: string; password: string; error: string; connected: boolean; onEmailChange: (value: string) => void; onPasswordChange: (value: string) => void; onSubmit: (event: React.FormEvent) => void }) {
  return <div>
    <form className="grid gap-[17px]" onSubmit={onSubmit}>
      <label className="grid gap-2 text-[13px] font-semibold text-[#4c607b]">Email address
        <input className="w-full rounded-[11px] border border-[#dfe4eb] bg-[#fbfcfe] px-[14px] py-[13px] text-baymax-ink outline-none transition focus:border-[#8eb5df] focus:shadow-[0_0_0_4px_#e6f0fb]" type="email" value={email} onChange={event => onEmailChange(event.target.value)} placeholder="you@example.com" autoComplete="email" required />
      </label>
      <label className="grid gap-2 text-[13px] font-semibold text-[#4c607b]">Password
        <input className="w-full rounded-[11px] border border-[#dfe4eb] bg-[#fbfcfe] px-[14px] py-[13px] text-baymax-ink outline-none transition focus:border-[#8eb5df] focus:shadow-[0_0_0_4px_#e6f0fb]" type="password" value={password} onChange={event => onPasswordChange(event.target.value)} placeholder="At least 8 characters" autoComplete={signup ? 'new-password' : 'current-password'} required />
      </label>
      {error && <p className="m-0 rounded-[10px] border border-[#f0c6bd] bg-[#fff4f1] px-[13px] py-[11px] text-[13px] text-[#a2574b]" role="alert">{error}</p>}
      <button className="mt-[3px] inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-baymax-ink bg-baymax-ink px-[18px] py-[14px] text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_5px_13px_#34445e20]" type="submit">{signup ? 'Create my space' : 'Log in'} <ArrowRight size={16} /></button>
    </form>
    <p className="my-[22px] text-center text-[13px] text-[#7a8799]">{signup ? 'Already have a space?' : 'New to Baymax?'} <Link className="font-bold text-[#3d628f]" to={signup ? '/login' : '/signup'}>{signup ? 'Log in' : 'Get started'}</Link></p>
    <div className="flex gap-2 rounded-[11px] border border-[#e4e5e2] bg-[#fafbf8] px-[14px] py-[13px] text-[11px] leading-[1.6] text-[#7c8793]"><LockKeyhole className="mt-0.5 shrink-0 text-[#7799bf]" size={15} /><span><strong className="text-[#52657d]">{connected ? 'Connected mode:' : 'Demo storage:'}</strong> {connected ? 'your request will use the configured FastAPI service.' : 'this MVP stores data only in your browser. No live account or backend is connected.'}</span></div>
  </div>
}
