import { useState } from 'react'
import { BookOpen, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/common/PageTitle'
import { articles } from '../../features/learning'
import { ArticleCard } from '../../features/learning/components/ArticleCard'

/** Coordinates article search while cards stay independently editable. */
export function LearnPage() {
  const [query, setQuery] = useState(''); const filtered = articles.filter(article => `${article.title} ${article.category}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page-content"><PageTitle eyebrow="Learning centre" title="Make a little sense of it." description="Friendly, general information — not a personal diagnosis." /><div className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search topics..." aria-label="Search articles" /></div><div className="article-grid">{filtered.map(article => <ArticleCard key={article.slug} article={article} />)}</div><div className="reference-note"><BookOpen size={17} /><p>Our content is educational and not a substitute for professional advice. If something feels urgent, please visit <Link to="/support">Find support</Link>.</p></div></div>
}
