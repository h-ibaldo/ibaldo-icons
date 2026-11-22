import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImagePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImagePlus: ForwardRefExoticComponent<ImagePlusProps & RefAttributes<SVGSVGElement>>;

export default ImagePlus;
export { ImagePlus };
