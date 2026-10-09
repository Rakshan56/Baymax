import { LogOut } from 'lucide-react'

/** Destructive session action kept reusable for future account controls. */
export function LogoutButton({ onLogout }: { onLogout: () => void }) {
  return <button className="button button-ghost logout" onClick={onLogout}><LogOut size={16} /> Log out</button>
}
