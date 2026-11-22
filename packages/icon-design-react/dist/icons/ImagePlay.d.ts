import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePlayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePlay: ForwardRefExoticComponent<ImagePlayProps & RefAttributes<SVGSVGElement>>;

export default ImagePlay;
export { ImagePlay };
