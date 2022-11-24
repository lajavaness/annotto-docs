import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import Layout from '@theme/Layout'
import Features from '@site/src/components/features/Features'
import styles from './index.module.css'
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          alt="Annotto"
          sources={{
            light: useBaseUrl('/img/logo.svg'),
            dark: useBaseUrl('/img/logo_white.svg'),
          }}
          height={120}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>Our key to a successfull, simplified, fast and up to scale annotation</Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--outline button--primary button--lg" to="/docs/setup">
            <Translate>Install Annotto</Translate>
          </Link>
          <Link className="button button--primary button--lg" to="/docs/user-manual/create-account">
            <Translate>Start with Annotto</Translate>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.content}>
        <Features />
      </main>
    </Layout>
  )
}
