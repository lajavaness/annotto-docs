import React from 'react'

import Card from '../card/Card'

import styles from './styles.module.css'

export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <Card title="Productivité +300%" image="productivity.png">
        UX optimisée & pré-annotation intelligente
      </Card>
      <Card title="Qualité maîtrisée" image="quality.png">
        Gestion collaborative intégrée
      </Card>
      <Card title="Couverture fonctionnelle complète" image="exhaustivity.png">
        Classification, NER, transcription & Segmentation d'image
      </Card>
      <Card title="Sécurité & protection des données" image="security.png">
        Données sécurisées & RGPD compliant
      </Card>
      <Card title="Eco-friendly" image="ecofriendly.png">
        Traitements optimisés pour réduire la consommation d'énergie
      </Card>
    </div>
  )
}
