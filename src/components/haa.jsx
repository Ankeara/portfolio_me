import { useState } from 'react';
import './App.css'; // Make sure to include some CSS for transitions and styling

const Haa = () => {
  const [mainImage, setMainImage] = useState('https://via.placeholder.com/600'); // Default image for the big box

  const images = [
    'https://via.placeholder.com/600', // Default big box image
    'https://via.placeholder.com/601',
    'https://via.placeholder.com/602',
    'https://via.placeholder.com/603',
  ];

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="container">
      {/* Big box */}
      <div className="big-box">
        <img src={mainImage} alt="Main Preview" className="main-image" />
      </div>

      {/* Small boxes */}
      <div className="small-boxes">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="small-box" 
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Haa;

/* CSS (App.css):
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.big-box {
  width: 600px;
  height: 400px;
  margin-bottom: 20px;
  overflow: hidden;
  border: 2px solid #ccc;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.small-boxes {
  display: flex;
  gap: 10px;
}

.small-box {
  width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.small-box:hover {
  transform: scale(1.1);
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
*/
