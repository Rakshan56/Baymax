import { Mascot } from '../../../components/brand/Mascot'

/** Dashboard greeting and mascot block. */
export function WelcomeHeader({ name }: { name: string }) {
  return <div className="welcome-row"><div><p className="eyebrow">A quiet place to check in</p><h1>Hi, {name}. <br /><span>How are you arriving today?</span></h1></div><Mascot small /></div>
}
