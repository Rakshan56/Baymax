import { ArrowRight, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../../features/learning'

/** Shared article template; replace local body copy with reviewed content records later. */
export function ArticlePage() {
  const { slug } = useParams(); const article = articles.find(item => item.slug === slug) || articles[0]
  return <div className="page-content article-page"><Link to="/learn" className="back-link">← Back to learning centre</Link><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="article-lede">{article.summary}</p><div className="article-body"><p>Feeling this way sometimes does not mean something is wrong with you. Our inner lives respond to change, pressure, relationships, sleep, and many things we cannot always name.</p><h2>Start with noticing</h2><p>Try naming what you notice in your body, your thoughts, and your surroundings. You do not need to solve it immediately. A small, compassionate observation can be a useful first step.</p><div className="article-callout"><Sparkles size={18} /><strong>A gentle reminder</strong><p>General information cannot tell you what is happening personally. If these feelings are persistent, distressing, or affecting daily life, a qualified professional can help you understand them.</p></div><h2>When to reach out</h2><p>Consider speaking with someone you trust or a mental health professional when you want support. You deserve care before things become a crisis.</p></div><Link className="button" to="/support">Find support <ArrowRight size={16} /></Link></div>
}
