import React, { useState } from 'react'
import styles from './GalleryCard.module.css'

const GalleryCard = ({
  pictures = [],
  userName,
  userAvatar,
  qualityStars = 0,
  userComment,
  taskSituation = [],
  projectLevel
}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + pictures.length) % pictures.length)
  }

  const getProjectLevelClass = (level) => {
    switch (level) {
      case 'რთული':
        return styles.hard
      case 'საშუალო':
        return styles.medium
      case 'მარტივი':
        return styles.easy
      default:
        return ''
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {pictures.length > 0 && (
          <>
            <img
              src={pictures[currentImage]}
              alt={`Gallery ${currentImage + 1}`}
              className={styles.image}
              loading="lazy"
              onClick={() => setIsOpen(true)}
            />

            {pictures.length > 1 && (
              <div className={styles.navigation}>
                <button onClick={prevImage}>‹</button>
                <span>{currentImage + 1}/{pictures.length}</span>
                <button onClick={nextImage}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.content}>
        
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            {userAvatar && (
              <img
                src={userAvatar}
                alt={userName}
                className={styles.avatar}
                loading="lazy"
              />
            )}

            <span className={styles.name}>{userName}</span>

            <span className={styles.rating}>
              {'⭐'.repeat(qualityStars)}
            </span>
          </div>

          <p className={styles.comment}>{userComment}</p>
        </div>

        <div className={styles.secondePart}>
          {taskSituation.length > 0 && (
            <ul className={styles.taskList}>
              {taskSituation.map((task) => (
                <li key={task}>✅ {task}</li>
              ))}
            </ul>
          )}

          {projectLevel && (
            <p className={styles.project}>
              პროექტის სირთულე:{' '}
              <span
                className={`${styles.projectHighlight} ${getProjectLevelClass(projectLevel)}`}
              >
                {projectLevel}
              </span>
            </p>
          )}
        </div>
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={pictures[currentImage]}
              className={styles.modalImage}
              alt="Full view"
            />

            {pictures.length > 1 && (
              <div className={styles.modalNavigation}>
                <button onClick={prevImage}>‹</button>
                <span>{currentImage + 1}/{pictures.length}</span>
                <button onClick={nextImage}>›</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryCard