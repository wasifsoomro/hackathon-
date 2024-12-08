import React from "react";
import s from "./SpinnerbLoader.module.css";
import clsx from "clsx";

interface SpinnerbLoaderProps {
  className?: string;
}

const SpinnerbLoader: React.FC<SpinnerbLoaderProps> = ({ className }) => {
  return <span className={clsx(s.Loader, className)}></span>;
};

export default SpinnerbLoader;
