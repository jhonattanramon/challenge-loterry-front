import React from "react";
import "./style.css";

interface TypeImgButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
}

const ImgButton: React.FC<TypeImgButton> = ({ alt, src, ...restButton }) => {
  return (
    <div style={{ display: "flex" }}>
      <button className="buttonImgButton" {...restButton}>
        <img style={{width: "100%", height: "100%"}} src={src} alt={alt} />
      </button>
    </div>
  );
};

export default ImgButton;
