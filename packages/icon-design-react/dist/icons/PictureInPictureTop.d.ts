import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PictureInPictureTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PictureInPictureTop: ForwardRefExoticComponent<PictureInPictureTopProps & RefAttributes<SVGSVGElement>>;

export default PictureInPictureTop;
export { PictureInPictureTop };
