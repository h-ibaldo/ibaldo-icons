import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePhoto2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePhoto2: ForwardRefExoticComponent<ImagePhoto2Props & RefAttributes<SVGSVGElement>>;

export default ImagePhoto2;
export { ImagePhoto2 };
