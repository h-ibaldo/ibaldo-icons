import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageCorners: ForwardRefExoticComponent<ImageCornersProps & RefAttributes<SVGSVGElement>>;

export default ImageCorners;
export { ImageCorners };
