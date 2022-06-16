import { useState } from "react"

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <>
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-box">
            <div className="icons">
              <i className="character play bi bi-caret-right-fill"></i>
              <i className="character bi bi-plus-lg"></i>
              <i className="character bi bi-hand-thumbs-up"></i>
            </div>
            <p>{movie.title}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Card
