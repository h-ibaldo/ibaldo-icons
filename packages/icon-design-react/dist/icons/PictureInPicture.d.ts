import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PictureInPictureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PictureInPicture: ForwardRefExoticComponent<PictureInPictureProps & RefAttributes<SVGSVGElement>>;

export default PictureInPicture;
export { PictureInPicture };
