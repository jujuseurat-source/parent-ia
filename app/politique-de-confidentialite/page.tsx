import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment Parent IA collecte et utilise vos données dans le cadre de la newsletter.',
  alternates: {
    canonical: 'https://www.parent-ia.fr/politique-de-confidentialite',
  },
  openGraph: {
    title: 'Politique de confidentialité | Parent IA',
    description: 'Comment Parent IA collecte et utilise vos données dans le cadre de la newsletter.',
    url: 'https://www.parent-ia.fr/politique-de-confidentialite',
    type: 'website',
  },
  robots: {
    index: false,
  },
}

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brun mb-2">Politique de confidentialité</h1>
      <p className="text-brun-lighter text-sm mb-10">Dernière mise à jour : 7 mai 2026</p>

      <div className="space-y-8 text-brun-light leading-relaxed">

        <p>
          Bienvenue sur Parent IA.
        </p>
        <p>
          Ici, je partage des expériences simples pour aider les parents à parler d&apos;intelligence
          artificielle avec leurs enfants, sans écran et sans jargon.
        </p>
        <p>
          Cette page explique quelles données sont collectées lorsque vous vous inscrivez à la
          newsletter, pourquoi elles sont utilisées, et comment vous pouvez exercer vos droits.
        </p>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Qui collecte les données ?</h2>
          <p>Les données sont collectées par :</p>
          <div className="bg-beige-100 rounded-xl p-4 mt-3 text-brun">
            <p className="font-medium">Julien Seurat</p>
            <p>Responsable du site Parent IA</p>
            <p>France</p>
            <p>
              Email de contact :{' '}
              <a
                href="mailto:contact@parent-ia.fr"
                className="text-terracotta hover:underline"
              >
                contact@parent-ia.fr
              </a>
            </p>
          </div>
          <p className="mt-3">
            Je suis responsable du traitement des données collectées via le formulaire
            d&apos;inscription à la newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Quelles données sont collectées ?</h2>
          <p>Lorsque vous vous inscrivez à la newsletter, je collecte uniquement :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>votre adresse email ;</li>
            <li>la tranche d&apos;âge de votre enfant : 3-5 ans, 6-8 ans, 9-11 ans ou 12 ans et plus.</li>
          </ul>
          <p className="mt-3">
            Je ne vous demande pas le prénom de votre enfant, son nom, sa date de naissance,
            ni d&apos;information sensible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Pourquoi ces données sont-elles collectées ?</h2>
          <p>
            Votre adresse email sert uniquement à vous envoyer la newsletter Parent IA.
          </p>
          <p className="mt-3">
            La tranche d&apos;âge de votre enfant permet de mieux adapter les idées, exemples
            et activités proposées. Un parent d&apos;un enfant de 3 ans n&apos;a pas toujours
            besoin des mêmes idées qu&apos;un parent d&apos;un enfant de 10 ans.
          </p>
          <p className="mt-3">
            Ces données ne sont pas vendues, louées ou transmises à des partenaires commerciaux.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Sur quelle base légale ?</h2>
          <p>
            L&apos;inscription à la newsletter repose sur votre consentement.
          </p>
          <p className="mt-3">
            Vous vous inscrivez volontairement via le formulaire prévu à cet effet. Vous pouvez
            retirer ce consentement à tout moment en cliquant sur le lien de désinscription
            présent dans chaque email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Qui traite les données ?</h2>
          <p>
            Les emails sont envoyés avec{' '}
            <a
              href="https://www.brevo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              Brevo
            </a>
            , anciennement Sendinblue.
          </p>
          <p className="mt-3">
            Brevo agit comme sous-traitant technique pour gérer l&apos;envoi de la newsletter,
            la liste d&apos;abonnés et les désinscriptions. Selon sa documentation, Brevo indique
            mettre en place des mesures de conformité RGPD en tant que sous-traitant et précise
            que ses serveurs de traitement et de stockage de bases de données sont situés dans
            l&apos;Union européenne.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Combien de temps les données sont-elles conservées ?</h2>
          <p>
            Votre adresse email et la tranche d&apos;âge indiquée sont conservées tant que vous
            êtes inscrit à la newsletter.
          </p>
          <p className="mt-3">
            Si vous vous désinscrivez, vous ne recevrez plus la newsletter. Les données peuvent
            être supprimées ou conservées temporairement dans une liste de désinscription afin
            d&apos;éviter de vous réinscrire par erreur.
          </p>
          <p className="mt-3">
            Vous pouvez demander la suppression complète de vos données à tout moment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Quels sont vos droits ?</h2>
          <p>Vous pouvez demander à tout moment :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>l&apos;accès aux données vous concernant ;</li>
            <li>la correction d&apos;une information ;</li>
            <li>la suppression de vos données ;</li>
            <li>l&apos;opposition à leur utilisation ;</li>
            <li>le retrait de votre consentement à recevoir la newsletter.</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, il suffit d&apos;écrire à{' '}
            <a
              href="mailto:contact@parent-ia.fr"
              className="text-terracotta hover:underline"
            >
              contact@parent-ia.fr
            </a>
            . Je ferai de mon mieux pour répondre rapidement. En application du RGPD, une réponse
            doit en principe être apportée dans un délai d&apos;un mois.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Désinscription</h2>
          <p>
            Chaque email envoyé contient un lien de désinscription. Un clic suffit pour ne plus
            recevoir la newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Cookies et statistiques</h2>
          <p>
            À ce stade, le site n&apos;utilise pas de cookies publicitaires ni de cookies
            analytiques tiers.
          </p>
          <p className="mt-3">
            Le site peut utiliser Vercel Analytics pour comprendre les visites de manière globale.
            Vercel présente cet outil comme une solution de mesure d&apos;audience respectueuse
            de la vie privée, sans cookies. Ces statistiques servent uniquement à comprendre si
            les contenus sont lus et à améliorer le site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brun mb-3">Modifications</h2>
          <p>
            Cette politique de confidentialité pourra être mise à jour si le fonctionnement du
            site change, par exemple si de nouveaux outils sont ajoutés. La date de mise à jour
            indiquée en haut de cette page permettra de savoir quand le texte a été modifié
            pour la dernière fois.
          </p>
        </section>

      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-block bg-beige-200 hover:bg-sauge-100 text-brun font-semibold px-6 py-3 rounded-xl transition-colors text-center"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
