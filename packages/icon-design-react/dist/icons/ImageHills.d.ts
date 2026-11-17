import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageHillsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageHills: ForwardRefExoticComponent<ImageHillsProps & RefAttributes<SVGSVGElement>>;

export default ImageHills;
export { ImageHills };
