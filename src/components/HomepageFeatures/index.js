import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Productivité + 300%',
        image: require('@site/static/img/productivity.webp').default,
        description: (
            <>
                UX optimisée, collaboration et suivi intégré, pré-annotation intelligente…
            </>
        ),
    },
    {
        title: 'Qualité maîtrisée',
        image: require('@site/static/img/quality.webp').default,
        description: (
            <>
                Fonctionnalités de la gestion de qualité collaborative.
            </>
        ),
    },
    {
        title: 'Couverture fonctionnelle complète',
        image: require('@site/static/img/exhaustivity.webp').default,
        description: (
            <>
                Classification, NER et relations, Gestion de transcription, Segmentation d'image.
            </>
        ),
    },
    {
        title: 'Sécurité & protection de données',
        image: require('@site/static/img/security.webp').default,
        description: (
            <>
                Contrôle d’accès sécurisé à l’outil et aux données, RGPD compliant
            </>
        ),
    },
    {
        title: 'Eco-friendly',
        image: require('@site/static/img/ecofriendly.webp').default,
        description: (
            <>
                L'active learning permet de réduire nombre de données à labeliser réduisant ainsi la consommation
                énergétique.
            </>
        ),
    },
];

function Feature({image, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
