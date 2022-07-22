import React from 'react'
import styles from '@site/src/components/card/styles.module.css'

const Card = ({ title, image, children }) => {
  return (
    <div className={styles.card}>
      {image && <img src={require(`@site/static/img/${image}`).default} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{children}</div>
      </div>
    </div>
  )
}

export default Card
