import Image from 'next/image';
import { useState } from 'react';
import styles from './artwork.module.scss';
import { artwork } from '../../../lib/types';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

interface Props {
  artwork: artwork;
  category: string;
  fileName: string;
}

const Artwork: React.FC<Props> = (props) => {
  const [imageCounter, setImageCounter] = useState(0);
  const { artwork, category, fileName } = props;
  const imagesArray = artwork.images.split('/');
  const imageNamesArray = artwork.imageNames.split('/');
  const imagePath = `/images/works/${category}/${fileName}/${imagesArray[imageCounter]}`;

  const rotateImageForward = () => {
    if (imageCounter === imagesArray.length - 1) {
      setImageCounter(0);
    } else {
      setImageCounter((state) => state + 1);
    }
  };

  const rotateImageBackward = () => {
    if (imageCounter === 0) {
      setImageCounter(imagesArray.length - 1);
    } else {
      setImageCounter((state) => state - 1);
    }
  };

  const artworkData = (
    <div className={styles.data}>
      {imageNamesArray[imageCounter] ? (
        <h1>{imageNamesArray[imageCounter]}</h1>
      ) : null}
      <p>{artwork.materials}</p>
      <p>{artwork.measurements}</p>
      <p>{artwork.year}</p>
    </div>
  );

  return (
    <>
      <h1 className={styles.title}>{artwork.title}</h1>
      <div className={styles.main}>
        {artworkData}
        <div className={styles.image_carousel}>
          <span
            role="button"
            className={styles.button_minus}
            onClick={rotateImageBackward}
          >
            <AiOutlineLeft size="2rem" />
          </span>
          <div className={styles.image_container}>
            <Image
              className={styles.image}
              src={imagePath}
              alt={artwork.title}
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
          <span
            role="button"
            className={styles.button_plus}
            onClick={rotateImageForward}
          >
            <AiOutlineRight size="2rem" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Artwork;