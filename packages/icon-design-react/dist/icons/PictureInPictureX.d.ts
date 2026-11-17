import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PictureInPictureXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PictureInPictureX: ForwardRefExoticComponent<PictureInPictureXProps & RefAttributes<SVGSVGElement>>;

export default PictureInPictureX;
export { PictureInPictureX };
