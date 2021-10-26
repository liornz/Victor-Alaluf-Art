import styles from './preview-artwork.module.scss';
import Image from 'next/image';

interface Props {
  imagePath: string;
  imageTitle: string;
  close: () => void;
}

const PreviewArtwork: React.FC<Props> = (props) => {
  const { imagePath, imageTitle, close } = props;
  return (
    <>
      <div className={styles.backdrop} onClick={close}>
        <div className={styles.image_container} onClick={(event) => {event.stopPropagation()}}>
          <Image
            src={imagePath}
            alt={imageTitle}
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
        <span className={styles.close} onClick={close}>
          X
        </span>
      </div>
    </>
  );
};

export default PreviewArtwork;
