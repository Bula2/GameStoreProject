import React from 'react';
import styles from "./button.module.scss"
import cx from "classnames"

interface IButton{
  className?: string;
  text: string;
  onCLick?: () => void;
}

const Button: React.FC<IButton> = ({className, text, onCLick}) => {
  return (
    <div>
      <button onClick={onCLick} className={cx(className, styles.button)}>
        {text}
      </button>
    </div>
  );
};

export default Button;