import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import styles from './artwork.module.scss';
import { artwork } from '../../../lib/types';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import PreviewArtwork from './preview-artwork';

interface Props {
  artwork: artwork;
  category: string;
  fileName: string;
  images: {
    imageProps: {
      blurDataURL: string;
      src: string;
      height: number;
      width: number;
      type?: string | undefined;
    };
  }[];
}

const Artwork: React.FC<Props> = (props) => {
  const [imageCounter, setImageCounter] = useState(0);
  const [imagePreview, setImagePreview] = useState(false);
  const { artwork, category, fileName, images } = props;
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

  const openPreviewHandler = () => {
    setImagePreview(true);
  };
  const closePreviewHandler = () => {
    setImagePreview(false);
  };

  let xDown: number | null = null;
  let yDown: number | null = null;

  function handleTouchStart(evt: React.TouchEvent<HTMLDivElement>) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: React.TouchEvent<HTMLDivElement>) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        rotateImageForward();
      } else {
        rotateImageBackward();
      }
    } else {
      // if (yDiff > 0) {
      //   console.log('swipe down');
      //   /* down swipe */
      // } else {
      //   console.log('swipe up');
      //   /* up swipe */
      // }
    }
    xDown = null;
    yDown = null;
  }

  const artworkData = (
    <div className={styles.data}>
      {imageNamesArray[imageCounter] ? (
        <h1>{imageNamesArray[imageCounter]}</h1>
      ) : null}
      <h3>{artwork.materials}</h3>
      <p>{artwork.measurements}</p>
      <p>{artwork.year}</p>
      <p
        className={styles.image_count}
        style={imagesArray.length < 2 ? { display: 'none' } : {}}
      >
        {`Image ${imageCounter + 1} out of ${imagesArray.length}`}
      </p>
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
            style={imagesArray.length < 2 ? { display: 'none' } : {}}
          >
            <AiOutlineLeft size="2rem" />
          </span>
          <div
            className={styles.image_container}
            onClick={openPreviewHandler}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <Image
              className={styles.image}
              {...images[imageCounter].imageProps}
              placeholder="blur"
              alt={artwork.title}
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
              priority
            />
          </div>
          <span
            role="button"
            className={styles.button_plus}
            onClick={rotateImageForward}
            style={imagesArray.length < 2 ? { display: 'none' } : {}}
          >
            <AiOutlineRight size="2rem" />
          </span>
        </div>
      </div>
      <ReactMarkdown className={styles.details}>
        {artwork.content}
      </ReactMarkdown>
      {imagePreview ? (
        <PreviewArtwork
          imagePath={imagePath}
          imageTitle={artwork.title}
          close={closePreviewHandler}
        />
      ) : null}
    </>
  );
};

export default Artwork;
