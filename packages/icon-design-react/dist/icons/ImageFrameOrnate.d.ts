import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageFrameOrnateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageFrameOrnate: ForwardRefExoticComponent<ImageFrameOrnateProps & RefAttributes<SVGSVGElement>>;

export default ImageFrameOrnate;
export { ImageFrameOrnate };
