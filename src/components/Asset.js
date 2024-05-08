import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/*Asset component displays a spinner, image, and message based on the props it receives*/
const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;