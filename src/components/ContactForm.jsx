import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      message: String(form.get('message') || ''),
    }

    if (!payload.name || !/.+@.+\..+/.test(payload.email) || payload.message.length < 10) {
      setStatus('idle')
      setError('Please provide a valid name, email, and a message of at least 10 characters.')
      return
    }

    try {
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Let’s build something great</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Share a bit about your project and we’ll get back within 1–2 business days.
          </p>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md border-gray-300 focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-offset-gray-900"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && <p className="text-sm text-green-600">Message sent! We’ll be in touch.</p>}
            {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
          </div>
          {status !== 'error' && error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </motion.form>
      </div>
    </section>
  )
}
