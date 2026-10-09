import { useState } from 'react'
import { Check, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '../../components/brand/Logo'
import { authenticate, isApiConfigured } from '../../services/api'
import { saveDemoUser } from '../../services/localStorage'
import { AuthForm } from '../../features/auth/components/AuthForm'

/** Auth page owns orchestration; this surface is styled entirely with Tailwind utilities. */
export function AuthPage({ signup = false }: { signup?: boolean }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!email.includes('@') || password.length < 8) {
      setError('Enter a valid email and a password of at least 8 characters.')
      return
    }
    try {
      if (isApiConfigured) await authenticate(signup ? '/api/auth/register' : '/api/auth/login', email, password)
      else saveDemoUser(email)
      navigate(new URLSearchParams(location.search).get('next') || '/dashboard')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to connect to Baymax. Please try again.')
    }
  }

  return <div className="grid min-h-screen bg-[#f7f8fb] min-[901px]:grid-cols-[minmax(420px,1.05fr)_minmax(430px,.95fr)]">
    <div className="relative flex min-h-[405px] flex-col overflow-hidden bg-baymax-blue px-6 pt-[25px] min-[901px]:min-h-0 min-[901px]:px-[clamp(32px,6vw,92px)] min-[901px]:pt-9">
      <div className="relative z-[2] flex items-center justify-between"><Logo /><span className="flex items-center gap-2 text-[11px] text-[#647895] min-[901px]:text-xs"><span className="h-[7px] w-[7px] rounded-full bg-[#8bc8a4] shadow-[0_0_0_4px_#d9f3e6]" /> Private by design</span></div>
      <div className="relative z-[2] mx-auto mt-[62px] max-w-[530px] text-center min-[901px]:m-auto min-[901px]:mb-5 min-[901px]:ml-0 min-[901px]:max-w-[610px] min-[901px]:text-left">
        <p className="mb-[13px] flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#77859a] min-[901px]:justify-start"><Sparkles size={14} /> A softer place to land</p>
        <h1 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-.04em] text-baymax-ink min-[521px]:text-[42px] min-[901px]:text-[clamp(42px,4.4vw,66px)]">Small moments can make a meaningful difference.</h1>
        <p className="mx-auto my-4 max-w-[445px] leading-[1.75] text-[#647895] min-[901px]:mx-0 min-[901px]:my-[23px]">Check in with yourself, understand your patterns, and take the next gentle step — at your own pace.</p>
        <div className="mt-[27px] flex flex-wrap justify-center gap-2 min-[901px]:justify-start"><span className="inline-flex items-center gap-2 rounded-full border border-[#d3e0ef] bg-[#f8fbff] px-2.5 py-2 text-[11px] text-[#58708e] min-[901px]:text-xs"><Check className="text-[#6eb48d]" size={15} /> Private reflections</span><span className="inline-flex items-center gap-2 rounded-full border border-[#d3e0ef] bg-[#f8fbff] px-2.5 py-2 text-[11px] text-[#58708e] min-[901px]:text-xs"><Check className="text-[#6eb48d]" size={15} /> Gentle daily tools</span><span className="inline-flex items-center gap-2 rounded-full border border-[#d3e0ef] bg-[#f8fbff] px-2.5 py-2 text-[11px] text-[#58708e] min-[901px]:text-xs"><Check className="text-[#6eb48d]" size={15} /> No judgement, ever</span></div>
      </div>
      <div className="relative mx-auto mt-1 h-[170px] w-full max-w-[500px] min-[901px]:mt-0">
        <div className="absolute left-1/2 top-[-28px] h-[230px] w-[230px] -translate-x-1/2 rounded-full border border-[#c5d9ef] bg-[#e5f0fc]" />
        <div className="absolute left-1/2 top-[-10px] z-[1] h-[145px] w-[118px] -translate-x-1/2 rotate-[-2deg] min-[901px]:top-4 min-[901px]:h-[185px] min-[901px]:w-[150px]">
          <span className="absolute inset-0 rounded-[48%_48%_42%_42%] border-[3px] border-[#29384f] bg-baymax-ink shadow-[inset_0_-12px_0_rgba(20,31,52,.16)]" />
          <span className="absolute inset-[18px_16px_14px] rounded-[48%] bg-[#fffdf8] min-[901px]:inset-[23px_20px_19px]" />
          <span className="absolute left-[35px] top-[42px] h-[6px] w-[6px] rounded-full bg-[#263650] min-[901px]:left-10 min-[901px]:top-[49px] min-[901px]:h-[7px] min-[901px]:w-[7px]" /><span className="absolute right-[35px] top-[42px] h-[6px] w-[6px] rounded-full bg-[#263650] min-[901px]:right-10 min-[901px]:top-[49px] min-[901px]:h-[7px] min-[901px]:w-[7px]" />
          <span className="absolute left-1/2 top-[54px] h-[9px] w-[15px] -translate-x-1/2 bg-[#f5c85b] [clip-path:polygon(0_0,100%_50%,0_100%)] min-[901px]:top-16" /><span className="absolute bottom-[21px] left-5 right-5 h-[9px] rotate-[-3deg] rounded-full bg-baymax-mint min-[901px]:bottom-[27px] min-[901px]:left-6 min-[901px]:right-6" />
        </div>
        <div className="absolute left-[5%] top-[42px] hidden items-center gap-2 rounded-[10px] border border-[#d9e2ee] bg-[#fffefa] px-3 py-2 font-serif text-[13px] text-[#718097] shadow-[0_7px_18px_#59738f12] min-[901px]:flex"><Heart size={15} /> One breath at a time</div>
        <div className="absolute bottom-4 right-[4%] hidden items-center gap-2 rounded-[10px] border border-[#d9e2ee] bg-[#fffefa] px-3 py-2 font-serif text-[13px] text-[#718097] shadow-[0_7px_18px_#59738f12] min-[901px]:flex"><ShieldCheck size={15} /> A space that is yours</div>
      </div>
    </div>
    <div className="flex items-center justify-center bg-[#fffdfa] px-[18px] py-[34px] min-[521px]:px-6 min-[901px]:px-[38px] min-[901px]:py-9">
      <div className="w-full max-w-[460px]">
        <div className="mb-[35px] flex justify-center min-[901px]:hidden"><Logo /></div>
        <div className="mb-[30px] mt-0 min-[901px]:mt-[42px]"><p className="mb-[13px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#77859a]">{signup ? 'A space that is yours' : 'Welcome back'}</p><h2 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-.04em] text-baymax-ink min-[521px]:text-[42px]">{signup ? 'Start where you are.' : 'Good to see you again.'}</h2><p className="mt-[13px] leading-[1.7] text-baymax-muted">{signup ? 'Create an account or use the local demo mode.' : 'Your reflections are waiting for you, right here.'}</p></div>
        <AuthForm signup={signup} email={email} password={password} error={error} connected={isApiConfigured} onEmailChange={setEmail} onPasswordChange={setPassword} onSubmit={submit} />
      </div>
    </div>
  </div>
}
