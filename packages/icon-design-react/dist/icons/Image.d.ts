import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image: ForwardRefExoticComponent<ImageProps & RefAttributes<SVGSVGElement>>;

export default Image;
export { Image };
