import { StaticImageData } from "next/image";

export type HeaderBackgroundType = {
  imgSrc: string | StaticImageData;
  altText?: string;
  topic?: string;
};
