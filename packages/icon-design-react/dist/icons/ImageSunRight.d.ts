import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageSunRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageSunRight: ForwardRefExoticComponent<ImageSunRightProps & RefAttributes<SVGSVGElement>>;

export default ImageSunRight;
export { ImageSunRight };
