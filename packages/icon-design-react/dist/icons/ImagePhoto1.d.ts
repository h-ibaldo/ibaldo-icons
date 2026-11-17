import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePhoto1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePhoto1: ForwardRefExoticComponent<ImagePhoto1Props & RefAttributes<SVGSVGElement>>;

export default ImagePhoto1;
export { ImagePhoto1 };
