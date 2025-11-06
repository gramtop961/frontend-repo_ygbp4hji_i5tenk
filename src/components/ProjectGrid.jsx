import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Tag } from 'lucide-react'

const sampleProjects = [
  {
    title: 'Realtime Dashboard',
    description: 'Web sockets, charts, and blazing fast UI.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive scene with react-three-fiber.',
    tags: ['Three.js', 'R3F', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Marketing Site',
    description: 'Clean, fast, and accessible landing pages.',
    tags: ['SEO', 'Accessibility', 'Performance'],
    image: 'https://images.unsplash.com/photo-1719241842875-f39ad265e09c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJrZXRpbmclMjBTaXRlfGVufDB8MHx8fDE3NjI0MTA1ODF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function ProjectGrid() {
  const [projects, setProjects] = useState(sampleProjects)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    if (filter === 'All') setProjects(sampleProjects)
    else setProjects(sampleProjects.filter((p) => p.tags.includes(filter)))
  }, [filter])

  const tags = ['All', ...Array.from(new Set(sampleProjects.flatMap((p) => p.tags)))]

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition ${
                filter === t
                  ? 'border-cyan-600 bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              aria-pressed={filter === t}
            >
              <Tag className="h-4 w-4" /> {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt="Project preview" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
