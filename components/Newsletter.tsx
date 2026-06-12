'use client'

import { useState } from 'react'
import Link from 'next/link'

const AGE_GROUPS = [
  { value: '3-5', label: '3 – 5 ans' },
  { value: '6-8', label: '6 – 8 ans' },
  { value: '9-11', label: '9 – 11 ans' },
  { value: '12+', label: '12 ans et +' },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !ageGroup) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, age_groupe: ageGroup }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Erreur lors de l\'inscription')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Une erreur est survenue')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brun rounded-3xl p-10 sm:p-14 text-center">
        <h3 className="font-serif text-2xl font-semibold text-beige mb-2">
          {"C'est parti !"}
        </h3>
        <p className="text-brun-lighter">
          Tu recevras les prochains articles directement dans ta boîte mail.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-brun rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
      {/* Pitch */}
      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-beige mb-3 leading-snug">
          Une activité par mois, dans ta boîte mail
        </h3>
        <p className="text-brun-lighter leading-relaxed">
          Une activité testée, une vraie réaction d&apos;enfant, aucun jargon.
          Adaptée à l&apos;âge de ton enfant.
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="bg-beige-50/5 border border-beige-50/15 rounded-2xl p-6 space-y-4">
        {/* Sélection tranche d'âge */}
        <div>
          <p className="text-sm font-semibold text-brun-lighter mb-2.5">
            Mon enfant a…
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {AGE_GROUPS.map((group) => (
              <label
                key={group.value}
                className={`
                  flex items-center justify-center p-2.5 rounded-xl border-2 cursor-pointer
                  transition-all duration-150 text-center text-xs font-semibold leading-tight
                  ${ageGroup === group.value
                    ? 'border-terracotta bg-terracotta text-white'
                    : 'border-beige-50/25 text-beige hover:border-terracotta/70'
                  }
                `}
              >
                <input
                  type="radio"
                  name="age_groupe"
                  value={group.value}
                  checked={ageGroup === group.value}
                  onChange={() => setAgeGroup(group.value)}
                  className="sr-only"
                />
                {group.label}
              </label>
            ))}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ton@email.fr"
            required
            className="
              w-full px-4 py-3 rounded-xl border-2 border-beige-50/20
              bg-beige-50/10 text-beige placeholder-brun-lighter
              focus:outline-none focus:border-terracotta
              transition-colors duration-150
            "
          />
        </div>

        {/* Erreur */}
        {status === 'error' && (
          <p className="text-red-300 text-sm">{errorMsg}</p>
        )}

        {/* Bouton */}
        <button
          type="submit"
          disabled={!email || !ageGroup || status === 'loading'}
          className="
            w-full py-3 px-6 rounded-full font-semibold text-white
            bg-terracotta hover:bg-terracotta-500
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-150
          "
        >
          {status === 'loading' ? 'Inscription en cours…' : 'Je m\'inscris →'}
        </button>

        <p className="text-xs text-brun-lighter text-center leading-relaxed">
          J&apos;utilise votre email pour vous envoyer la newsletter Grandir avec l&apos;IA.
          La tranche d&apos;âge de votre enfant m&apos;aide à partager des idées plus adaptées.
          Les envois passent par Brevo, et vous pouvez vous désinscrire à tout moment en un clic.{' '}
          <Link href="/politique-de-confidentialite" className="underline hover:text-beige">
            Politique de confidentialité
          </Link>
          .
        </p>
      </form>
    </div>
  )
}
