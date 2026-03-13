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

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {pictures.length > 0 && (
          <>
            <img
              src={pictures[currentImage]}
              alt={`Gallery ${currentImage + 1}`}
              className={styles.image}
              onClick={() => setIsOpen(true)}
            />

            {isOpen && (
              <div className={styles.modal} onClick={() => setIsOpen(false)}>

                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                  <img
                    src={pictures[currentImage]}
                    className={styles.modalImage}
                  />

                  {pictures.length > 1 && (
                    <div className={styles.modalNavigation}>
                      <button onClick={prevImage}>{'<'}</button>
                      <span>{currentImage + 1}/{pictures.length}</span>
                      <button onClick={nextImage}>{'>'}</button>
                    </div>
                  )}

                </div>

              </div>
            )}
            {pictures.length > 1 && (
              <div className={styles.navigation}>
                <button onClick={prevImage} className={styles.navButton}>{'<'}</button>
                <span>{`${currentImage + 1}/${pictures.length}`}</span>
                <button onClick={nextImage} className={styles.navButton}>{'>'}</button>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            {userAvatar && <img src={userAvatar} alt={userName} className={styles.avatar} />}
            <span className={styles.name}>{userName}</span>
            <span className={styles.rating}>{'⭐'.repeat(qualityStars)}</span>
          </div>

          <p className={styles.comment}>{userComment}</p>
        </div>

        <div className={styles.secondePart}>
          {taskSituation.length > 0 && (
            <ul className={styles.taskList}>
              {taskSituation.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          )}

          {projectLevel && (
            <p className={styles.project}>
              პროექტის სირთულე: <span className={styles.projectHighlight}>{projectLevel}</span>
            </p>
          )}</div>
      </div>
    </div>
  )
}

export default GalleryCard