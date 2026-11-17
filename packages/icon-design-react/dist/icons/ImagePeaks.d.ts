import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePeaksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePeaks: ForwardRefExoticComponent<ImagePeaksProps & RefAttributes<SVGSVGElement>>;

export default ImagePeaks;
export { ImagePeaks };
