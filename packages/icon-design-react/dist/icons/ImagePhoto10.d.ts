import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePhoto10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePhoto10: ForwardRefExoticComponent<ImagePhoto10Props & RefAttributes<SVGSVGElement>>;

export default ImagePhoto10;
export { ImagePhoto10 };
