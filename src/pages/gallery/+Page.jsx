import GalleryCard from '../../components/GalleryCard/GalleryCard'
import GalleryData from '../../data/galleryData'
import styles from './gallery.module.css'

export default function GalleryPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <h1>გალერეა</h1>

          <div className={styles.galleryGrid}>
            {GalleryData.map((gallery, index) => (
              <GalleryCard
                key={index}
                pictures={gallery.pictures}
                userName={gallery.userName}
                userAvatar={gallery.userAvatar}
                qualityStars={gallery.qualityStars}
                userComment={gallery.userComment}
                taskSituation={gallery.taskSituation}
                projectLevel={gallery.projectLevel}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
