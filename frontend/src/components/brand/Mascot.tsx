/** Reusable original SVG penguin illustration used consistently across the product. */
export function Mascot({ small = false }: { small?: boolean }) {
  return <svg className={`mascot ${small ? 'mascot-small' : ''}`} viewBox="0 0 180 220" aria-label="Baymax penguin illustration" role="img">
    <defs>
      <linearGradient id="penguin-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#50627f" />
        <stop offset="1" stopColor="#34445e" />
      </linearGradient>
      <linearGradient id="penguin-belly" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fffefa" />
        <stop offset="1" stopColor="#eef3f7" />
      </linearGradient>
    </defs>
    <path className="penguin-tuft" d="M90 18c-1-10 5-15 13-17-1 6-1 10 4 13-6-2-10 0-17 4Z" />
    <path className="penguin-shadow" d="M25 197c20 15 109 18 137-1-17 28-116 31-137 1Z" />
    <path className="penguin-body" d="M91 18C48 17 22 50 24 105c2 59 18 94 66 97 48-3 64-38 66-97 2-55-24-87-65-87Z" fill="url(#penguin-body)" />
    <path className="penguin-face" d="M91 42c-27 0-47 22-47 54 0 32 19 52 47 52s47-20 47-52c0-32-20-54-47-54Z" fill="#fffefa" />
    <path className="penguin-belly" d="M91 105c-27 0-43 20-43 52 0 28 17 43 43 45 26-2 43-17 43-45 0-32-16-52-43-52Z" fill="url(#penguin-belly)" />
    <path className="penguin-flipper penguin-flipper-left" d="M49 100c-21 6-31 26-25 48 4 15 14 20 25 11 9-8 13-25 12-42-1-11-4-17-12-17Z" />
    <path className="penguin-flipper penguin-flipper-right" d="M133 100c21 6 31 26 25 48-4 15-14 20-25 11-9-8-13-25-12-42 1-11 4-17 12-17Z" />
    <ellipse className="penguin-eye" cx="72" cy="86" rx="5" ry="7" />
    <ellipse className="penguin-eye" cx="110" cy="86" rx="5" ry="7" />
    <path className="penguin-beak" d="m78 98 13 10 13-10-13-6-13 6Z" />
    <ellipse className="penguin-cheek" cx="59" cy="101" rx="10" ry="5" />
    <ellipse className="penguin-cheek" cx="123" cy="101" rx="10" ry="5" />
    <path className="penguin-foot penguin-foot-left" d="M62 198c-11 2-17 8-14 13 4 5 23 4 31 0 2-5-7-12-17-13Z" />
    <path className="penguin-foot penguin-foot-right" d="M119 198c11 2 17 8 14 13-4 5-23 4-31 0-2-5 7-12 17-13Z" />
    <path className="penguin-scarf" d="M48 126c23 12 63 12 86 0l-3 11c-22 13-59 13-80 0l-3-11Z" />
  </svg>
}
