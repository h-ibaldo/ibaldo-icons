import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageFrameBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageFrameBroken: ForwardRefExoticComponent<ImageFrameBrokenProps & RefAttributes<SVGSVGElement>>;

export default ImageFrameBroken;
export { ImageFrameBroken };
