import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageMountainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageMountain: ForwardRefExoticComponent<ImageMountainProps & RefAttributes<SVGSVGElement>>;

export default ImageMountain;
export { ImageMountain };
