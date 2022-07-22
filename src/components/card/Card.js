import React from 'react'
import styles from '@site/src/components/card/styles.module.css'

const Card = ({ title, image, children }) => {
  return (
    <div className={styles.card}>
      {image && <img src={require(`@site/static/img/${image}`).default} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{children}</p>
      </div>
    </div>
  )
}

export default Card
