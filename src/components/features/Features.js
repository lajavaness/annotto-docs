import React from 'react'

import Card from '../card/Card'

import styles from './styles.module.css'

import Translate, { translate } from '@docusaurus/Translate'

export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <Card title={translate({ message: 'Productivity +300%' })} image="productivity.png">
        <Translate>optimised UX & smart pre-annotation</Translate>
      </Card>
      <Card title={translate({ message: 'Controlled quality' })} image="quality.png">
        <Translate>Integrated collaborative management</Translate>
      </Card>
      <Card title={translate({ message: 'Extended features' })} image="exhaustivity.png">
        <Translate>Classification, NER, Transcription & images Segmentation</Translate>
      </Card>
      <Card title={translate({ message: 'Data protection' })} image="security.png">
        <Translate>Secure data & GDPR compliant</Translate>
      </Card>
      <Card title={translate({ message: 'Eco-friendly' })} image="ecofriendly.png">
        <Translate>Optimized processing to reduce energy consumption</Translate>
      </Card>
    </div>
  )
}
