import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageMinus: ForwardRefExoticComponent<ImageMinusProps & RefAttributes<SVGSVGElement>>;

export default ImageMinus;
export { ImageMinus };
