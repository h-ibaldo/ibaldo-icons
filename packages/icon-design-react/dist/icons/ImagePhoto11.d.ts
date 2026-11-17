import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePhoto11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePhoto11: ForwardRefExoticComponent<ImagePhoto11Props & RefAttributes<SVGSVGElement>>;

export default ImagePhoto11;
export { ImagePhoto11 };
