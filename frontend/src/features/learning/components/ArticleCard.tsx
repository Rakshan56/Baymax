import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../types'

/** Reusable learning article card. */
export function ArticleCard({ article }: { article: Article }) {
  const Icon = article.icon
  return <Link to={`/learn/${article.slug}`} className="article-card"><span className="article-icon"><Icon size={21} /></span><p className="eyebrow">{article.category}</p><h2>{article.title}</h2><p>{article.summary}</p><span className="card-link">Read gently <ArrowRight size={15} /></span></Link>
}
